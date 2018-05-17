import React, { Component } from 'react';
import PropsType from "prop-types";
import { PaginationContainer } from "./PaginationContainer";
import { ItemComponent } from "./ItemComponent";

export const ItemsComponent = (props) => {
    return (
    <div className="news-result">
        {props.list.map((item, index) => {
            return <ItemComponent data={item} key={index} />
        })}
        <PaginationContainer />
    </div>);
}

ItemsComponent.PropsType = {
    splittedText: PropsType.array
}