import React, { Component } from 'react';
import ReactPaginate from "react-paginate";
import PropsType from "prop-types";
import { PAGIN_PAGE_COUNT, MARGIN_PAGES_DISPLAYED, PAGE_RANGE_DISPLAYED } from "../../app-configs";

export class PaginationComponent extends Component {

    nextPage(page) {
        const actualSelectedPage = page.selected + 1;
        this.props.searchText(this.props.searchString, actualSelectedPage)
    }

    render() {
        if (this.props.list.length === 0 && this.props.searchString === "") return <div></div>;
        return (
            <div className='news-result-pagination'>
            <ReactPaginate previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel="..."
                breakClassName={"break-me"}
                pageCount={PAGIN_PAGE_COUNT}
                marginPagesDisplayed={MARGIN_PAGES_DISPLAYED}
                pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
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
    list: PropsType.array,
    searchString: PropsType.string
}