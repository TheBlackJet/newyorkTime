import React, { Component } from 'react';
import PropsType from "prop-types";
import { ItemComponent } from "./ItemComponent";



export class ItemsComponent extends Component {
    constructor(props){
        super(props);
    }

    viewItem(item){
        this.props.showModalBox(item);
    }

    render() {
        return (
            <div className="news-result">
                {this.props.list.map((item, index) => {
                    return <ItemComponent data={item} key={index} onClick={this.viewItem.bind(this,item)} />
                })}
            </div>);
    }
}

ItemsComponent.PropsType = {
    splittedText: PropsType.Array,
    showModalBox: PropsType.func
}