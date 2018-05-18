import React, { Component } from 'react';
import ReactPaginate from "react-paginate";
import PropsType from "prop-types";

export class PaginationComponent extends Component {

    nextPage(page) {
        const actualSelectedPage = page.selected + 1;
        this.props.searchText(this.props.searchString, actualSelectedPage)
    }

    render() {
        if (this.props.list.length === 0) return <div></div>;
        return (
            <div className='news-result-pagination'>
            <ReactPaginate previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={<a href="">...</a>}
                breakClassName={"break-me"}
                pageCount={10}
                marginPagesDisplayed={10}
                pageRangeDisplayed={10}
                onPageChange={(page) => { this.nextPage(page) }}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </div>);
    }
}

PaginationComponent.PropsType = {
    message: PropsType.string,
    searchText: PropsType.func,
    list: PropsType.Array
}