import React, { Component } from 'react';
import PropsType from "prop-types";

export const MessageComponent = (props) => {
        if (props.message) return (<div className="news-error">{props.message}</div>);
        return <div></div>
}

MessageComponent.PropsType = {
    message: PropsType.string
}