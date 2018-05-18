import { connect } from 'react-redux';
import { MessageComponent } from "./MessageComponent";

const mapStateToProps = (state) => {
    return {
        message : state.news.message
    }
}
  
export const MessageContainer = connect(mapStateToProps, {})(MessageComponent);