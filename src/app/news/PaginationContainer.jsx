import { connect } from 'react-redux';
import { PaginationComponent } from "./PaginationComponent";
import { actions } from "./duck/index";

const mapDispatchToProps = {
    searchText : (evt, page) => actions.searchText(evt, page)
}

const mapStateToProps = (state) => {
    return {
        searchString: state.news.searchString,
        list: state.news.list
    }
}
  
export const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(PaginationComponent);