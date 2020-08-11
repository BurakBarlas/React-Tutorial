import React, { Component } from 'react'
import posed from 'react-pose';

const Animation = posed.div({
    visible : {
        opacity: 1,
        applyAtStart : {
            display : "block"
        }
    },
    hidden : {
        opacity: 0,
        applyAtEnd : {
            display : "none"
        }
    }
})

class AddUser extends Component {
    state = {
        visible : true    
    }
    changeVisibilty = (e) => {
        this.setState ({
            visible : !this.state.visible 
        })
    }
    render() {
        const {visible} = this.state;
        return (
            <div className = "col-md-8 mb-8">
                <button onClick = {this.changeVisibilty}className = "btn btn-dark btn-block mb-2"> {visible ? "Hide Form" : "Show Form"}</button>
                <Animation pose = {visible ? "visible" : "hidden"}>
                <div className = "card">
                <h1>Add User Form</h1>
                </div>
                <div className = "card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                            type = "text"
                            name = "name"
                            id = "id"
                            placeholder = "Enter Name"
                            className = "form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Department">Department</label>
                            <input
                            type = "text"
                            name = "department"
                            id = "department"
                            placeholder = "Enter Department"
                            className = "form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="income">Income</label>
                            <input
                            type = "text"
                            name = "income"
                            id = "income"
                            placeholder = "Enter Income"
                            className = "form-control"
                            />
                        </div>
                        <button className = "btn btn-danger btn-block"type="submit">Add User</button>

                    </form>
                </div>
                </Animation>
            </div>
        )
    }
}

export default AddUser;