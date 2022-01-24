import React, { Component } from "react";

class AddUser extends Component {
    render() {
        return (
            <div className="card">
                <h4 className="card-header">
                    Add New User
                </h4>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter name" className="form-control"></input>
                        </div>
                    </form>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" id="name" placeholder="Enter email" className="form-control"></input>
                        </div>
                    </form>
                    <button type="submit" className="btn btn-danger btn-block">Add new user</button>
                </div>
            </div>
        );
    }
}

export default AddUser;