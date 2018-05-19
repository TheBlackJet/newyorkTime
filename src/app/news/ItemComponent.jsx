import React, { Component } from 'react';
import PropsType from "prop-types";
import noMedia from '../images/no-image-available.jpg';

export class ItemComponent extends Component{
        constructor(props){
            super(props);
            this.state = {
                style: {
                    cursor: 'pointer'
                },
                noMedia: noMedia
            }
        }

        select(data){
            if (!this.props.modal){
                this.props.onClick(data);
            }
        }

        noMediaRender(){
            if (this.props.data.media) return (<img src={this.props.data.media} width="100%" />)
            return (<img src={this.state.noMedia} width="100%" />)
            
        }

        render(){
            if (this.props.data) return (
                <div className="news-result-item" style={this.props.modal ? null : this.state.style} onClick={() => { this.select(this.props.data) }}>
                    <div className="news-result-item-media">
                        {this.noMediaRender()}
                    </div>
                    <div className="news-result-item-content">
                        <div className="content-snippet margin-bot">
                        {this.props.data.snippet}
                    </div>
                        <div className="content-pubdate  margin-bot">
                        Publish Date : {this.props.data.pubDate}
                    </div>
                        <div className="content-source  margin-bot">
                        Source: {this.props.data.source ? this.props.data.source : 'Not Available'}
                    </div>
                    </div>
                </div>
            );
            return <div></div>
        }
}

ItemComponent.PropsType = {
    data: PropsType.object,
    onClick: PropsType.func,
    modal: PropsType.bool
}