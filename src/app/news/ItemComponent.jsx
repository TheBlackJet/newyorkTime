import React, { Component } from 'react';
import PropsType from "prop-types";

export const ItemComponent = (props) => {
        if (props.data) return (
            <div className="news-result-item">
                <div className="news-result-item-media">
                    <img src={props.data.media} width="100%" />
                </div>
                <div className="news-result-item-content">
                    <div className="content-snippet margin-bot">
                    {props.data.snippet}
                </div>
                    <div className="content-pubdate  margin-bot">
                    Publish Date : {props.data.pubDate}
                </div>
                    <div className="content-source  margin-bot">
                    Source: {props.data.source}
                </div>
                </div>
            </div>
        );
        return <div></div>
}

ItemComponent.PropsType = {
    data: PropsType.Object
}