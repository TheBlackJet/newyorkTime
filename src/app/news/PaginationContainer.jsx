import { connect } from 'react-redux';
import { PaginationComponent } from "./PaginationComponent";

const mapStateToProps = (state) => {
    return {
        message : ""
    }
}
  
export const PaginationContainer = connect(mapStateToProps, {})(PaginationComponent);