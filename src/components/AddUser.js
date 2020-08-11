import React, { Component } from 'react'

class AddUser extends Component {
    render() {
        return (
            <div className = "col-md-8 mb-8">
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
                            class = "form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Department">Department</label>
                            <input
                            type = "text"
                            name = "department"
                            id = "department"
                            placeholder = "Enter Department"
                            class = "form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="income">Income</label>
                            <input
                            type = "text"
                            name = "income"
                            id = "income"
                            placeholder = "Enter Income"
                            class = "form-control"
                            />
                        </div>
                        <button class = "btn btn-danger btn-block"type="submit">Add User</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default AddUser;