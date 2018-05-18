import React, { Component } from 'react';
import PropsType from "prop-types";
import Spinner from "../images/Spinner.gif";

export const LoaderComponent = (props) => {
        if (props.isLoading) return (<div className="news-loading"><img src={Spinner} /></div>);
        return <div></div>
}

LoaderComponent.PropsType = {
    isLoading: PropsType.boolean
}