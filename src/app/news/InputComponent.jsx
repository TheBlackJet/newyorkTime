import React, { Component } from 'react';
import PropsType from "prop-types";

class InputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    searchText(evt) {
        evt.preventDefault();
        this.props.searchText(this.state.text);
    }

    inputChange(evt) {
        this.setState({
            text: evt.target.value
        });
    }

    render() {
        return (
            <div className="news-search-box">
                <form onSubmit={(evt) => this.searchText(evt)}>
                    <input type="text" value={this.state.text} className="news-search-box-input" placeholder="Please search for something !. Then press enter" onChange={(evt) => this.inputChange(evt)} />
                </form>
            </div>
        );
    }
}

InputComponent.PropsType = {
    searchText: PropsType.func
}

export default InputComponent;