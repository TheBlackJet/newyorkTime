import React, { Component } from 'react';
import PropsType from "prop-types";

export const HeaderComponent = (props) => {
    return (
        <div className="news-header">{props.header}</div>
    );
}

HeaderComponent.PropsType = {
    header: PropsType.string
}