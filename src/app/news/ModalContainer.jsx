import { connect } from 'react-redux';
import { ModalComponent } from "./ModalComponent";
import { actions } from "./duck/index";

const mapDispatchToProps = {
    closeModalBox : () => actions.toggleModalBox()
}

const mapStateToProps = (state) => {
    return {
        isModalBoxVisible: state.news.isModalBoxVisible,
        selected: state.news.selected
    }
}
  
export const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(ModalComponent);