import React, { Component, Fragment } from 'react';
import ToDoItem from './ToDoItem';

class Input extends Component {

    constructor() {
        super();
        this.state = {
            todo: '',
            tasks: []
        }
    }

    removeTask = (index) => {
        const tasksCopy = [...this.state.tasks];
        const filteredTasks = tasksCopy.filter((task, x) => {
            return x !== index
        });
        this.setState({
            tasks: filteredTasks
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = this.state.todo.slice()
        const copiedTaskList = [...this.state.tasks];
        copiedTaskList.push(newItem);
        this.setState({
            todo: '',
            tasks: copiedTaskList
        })
    }

    handleChange = (key, value) => {
        this.setState({ [key]: value })
    }

    render() {

        return (
            <Fragment>

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="formCenter">
                        <label className="visuallyHidden">
                            Task:
                        </label>
                        <input
                            type="text"
                            name="task"
                            value={this.state.todo}
                            onChange={(e) => this.handleChange("todo", e.target.value)}
                        />
                        <input
                            type="submit"
                            value="Submit"
                        />
                    </div>
                </form>

                <ul className="toDoList">
                    {this.state.tasks.map((task, index) => {
                        return (
                            <ToDoItem
                                task={task}
                                removeTask={() => this.removeTask(index)}
                            />
                        )
                    })}
                </ul>

            </Fragment>
        );
    }
}

export default Input;