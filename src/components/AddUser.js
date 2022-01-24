import React, { Component } from "react";

class AddUser extends Component {
    state = {
        name: "",
        email: "",
    }

    onNameChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onEmailChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAddSubmit(e) {
        const { addUser } = this.props;
        const { name, email } = this.state;
        const newUser = {
            id: Math.random(),
            name: name,
            email: email,
        };
        addUser(newUser);
        e.preventDefault();
    }

    render() {
        const { name, email } = this.state;
        return (
            <div className="card">
                <h4 className="card-header">
                    Add New User
                </h4>
                <div className="card-body">
                    <form onSubmit={this.onAddSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter name" className="form-control" value={name} onChange={this.onNameChange.bind(this)}></input>
                        </div>
                    </form>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" id="name" placeholder="Enter email" className="form-control" value={email} onChange={this.onEmailChange.bind(this)}></input>
                        </div>
                    </form>
                    <button type="submit" className="btn btn-danger btn-block">Add new user</button>
                </div>
            </div>
        );
    }
}

export default AddUser;