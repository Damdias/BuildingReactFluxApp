import React from "react";
import Input from "./../../common/textinput";

class AuthorForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.save}>
                <h1>Manage Author</h1>
                <Input name="firstName"
                    label="First Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName} />

                <Input name="lastName"
                    label="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName} />
                <br />
                <input type="submit" value="Save" className="btn btn-default" />
            </form>
        );
    }
}
export default AuthorForm;
