import React, { Component } from 'react';
import PropsType from "prop-types";

export const PaginationComponent = (props) => {
        if (props.message) return (<div className='news-result-pagination'></div>);
        return <div></div>
}

PaginationComponent.PropsType = {
    message: PropsType.string
}