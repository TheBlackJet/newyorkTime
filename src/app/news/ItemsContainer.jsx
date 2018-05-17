import { connect } from 'react-redux';
import { ItemsComponent } from "./ItemsComponent";

const mapStateToProps = (state) => {
    return {
        list : state.news.list
    }
}
  
export const ItemsContainer = connect(mapStateToProps, {})(ItemsComponent);