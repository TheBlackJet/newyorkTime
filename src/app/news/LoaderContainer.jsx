import { connect } from 'react-redux';
import { LoaderComponent } from "./LoaderComponent";
import { actions } from "./duck/index";

const mapStateToProps = (state) => {
    return {
        isLoading : state.news.isLoading
    }
}

  
export const LoaderContainer = connect(mapStateToProps, {})(LoaderComponent);