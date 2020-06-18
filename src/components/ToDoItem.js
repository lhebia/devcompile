import React, { Component } from 'react';

const ToDoItem = (props) => {

    return (
        <li>
            <p>Task: {this.props.task}</p><button onClick={this.props.removeTask}> X </button>
        </li>
    );

}

export default ToDoItem;