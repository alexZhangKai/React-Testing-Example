import React, { Component } from "react";
import { FormControl, Button } from "react-bootstrap";

import "./TypeSelector.css";

class TypeSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {  
            newType: ""
        };

        this.handleSubmitNewType = this.handleSubmitNewType.bind(this);
        this.handleClickRemoveType = this.handleClickRemoveType.bind(this);
        this.handleClickAddRecord = this.handleClickAddRecord.bind(this);
    }

    handleSubmitNewType(e) {
        e.preventDefault();
        let newType = this.state.newType;
        this.setState({newType: ""});
        this.props.handleAddNewType(newType);
    }

    handleClickAddRecord(e) {
        let type = e.target.innerText;
        let timestamp = new Date().toLocaleString();
        this.props.handleAddRecord(type + " " + timestamp);
    }

    handleClickRemoveType(e) {
        let type = e.target.previousSibling.innerText;
        this.props.handleRemoveType(type);
    }

    render() { 

        return (  
            <div className="selector-container">
                <form onSubmit={this.handleSubmitNewType}>
                    <FormControl
                        type="text"
                        value={this.state.newType}
                        placeholder="Enter A New Execerse Type Here"
                        onChange={e => {this.setState({newType: e.target.value})}}
                    />
                </form>
                {
                    this.props.typeData && this.props.typeData.map((type, key) => (
                        <Button 
                            bsStyle="warning"
                            key={key}
                        >
                            <span onClick={this.handleClickAddRecord}>{type}</span>
                            <strong onClick={this.handleClickRemoveType}>{" X"}</strong>
                        </Button>
                    ))
                }
            </div>
        );
    }
}
 
export default TypeSelector;
