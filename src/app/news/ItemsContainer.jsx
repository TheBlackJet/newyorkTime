import { connect } from 'react-redux';
import { ItemsComponent } from "./ItemsComponent";
import { actions } from "./duck/index";

const mapStateToProps = (state) => {
    return {
        list : state.news.list
    }
}

const mapDispatchToProps = {
    showModalBox : (item) => actions.toggleModalBox(item)
}
  
export const ItemsContainer = connect(mapStateToProps, mapDispatchToProps)(ItemsComponent);