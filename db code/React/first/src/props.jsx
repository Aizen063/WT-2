import React from "react";
import { Component } from 'react';
function Props(props){
    return (
        <div>
        {props.name}
        </div>
    )
}
function Demo(){
    return (
        <div>
            <Props name="Aizen sosuke"/>
        </div>
    )
}
export default Demo;