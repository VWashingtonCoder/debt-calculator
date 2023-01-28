import React from "react";
import Display from "./Display";
import Table from "./Table";

class Form extends React.Component() {
    render() {
        return (
            <div className="Form-container">
                <Display />
                <Table /> 
            </div>
        )
    }
}

export default Form;