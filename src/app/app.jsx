import React, { Component } from 'react';
import { HeaderComponent, InputContainer, MessageContainer, ItemsContainer, ModalContainer } from "./news";
import "./style/default-theme.scss";

export class App extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (<div className="news">
            <HeaderComponent header={this.props.header} />
            <InputContainer/>
            <MessageContainer />
            <ItemsContainer />
            <ModalContainer />
        </div>);
    }

}

export default App;