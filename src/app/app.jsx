import React, { Component } from 'react';
import { HeaderComponent, InputContainer, MessageContainer, ItemsContainer } from "./news";
import "./style/default-theme.scss";

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }

    async request() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const json = await response.json();
        //console.log(json);
        return json;
    }

    componentWillMount() {

        const a = { ...this.state, visibilityFilter: "" }
        this.request().then(data => {
            this.setState({
                data: data
            });
        });
    }

    render() {
        return (<div className="news">
            <HeaderComponent header={this.props.header} />
            <InputContainer/>
            <MessageContainer />
            <ItemsContainer />
        </div>);
    }

}

export default App;