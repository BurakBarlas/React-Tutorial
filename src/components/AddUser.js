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
        visible : true,
        name : "",
        department : "",
        income : ""    

    }
    changeVisibilty = (e) => {
        this.setState ({
            visible : !this.state.visible 
        })
    }
    changeInput = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }
    // changeName = (e) => {
    //     this.setState ({
    //         name : e.target.value
    //     })
    // }
    // changeDepartment = (e) => {
    //     this.setState ({
    //         department : e.target.value
    //     })
    // }
    // changeIncome = (e) => {
    //     this.setState ({
    //         income : e.target.value
    //     })
    // }
    render() {
        const {visible ,name, department, income} = this.state;
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
                            value = {name}
                            onChange = {this.changeInput}
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
                            value = {department}
                            onChange = {this.changeInput}
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
                            value = {income}
                            onChange = {this.changeInput}
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