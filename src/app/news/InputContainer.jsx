import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { actions } from "./duck/index";
import InputComponent from "./InputComponent";

const mapDispatchToProps = {
    searchText : (evt) => actions.searchText(evt)
}
  
export const InputContainer = connect(null, mapDispatchToProps)(InputComponent);