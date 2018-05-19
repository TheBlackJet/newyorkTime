import React, { Component } from 'react';
import PropsType from "prop-types";
import { ItemComponent } from "./ItemComponent";

export class ModalComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show : {
                display: 'block'
            },
            hide : {
                display: 'none'
            }
        }
    }

    render() {
        return (<div className="modal" style={this.props.isModalBoxVisible ? this.state.show : this.state.hide }>
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={() => this.props.closeModalBox()}>&times;</span>
                        <h2>Details</h2>
                    </div>
                    <div className="modal-body">
                        <ItemComponent data={this.props.selected} modal={true} />
                    </div>
                </div>
            </div>
        );
    }
}

ModalComponent.PropsType = {
    closeModalBox: PropsType.func,
    isModalBoxVisible: PropsType.bool
}