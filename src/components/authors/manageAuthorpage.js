import React from 'react';
import AuthorForm from './authorForm';
import AuthorAPI from './../../api/authorapi';
import toastr from "toastr";

class ManageAuthor extends React.Component {
    state = {
        author: {
            id: '',
            firstName: ''
            , lastName: ''
        },
        errors: {}
    }
    onChange = (e) => {
        //alert(e.target.value);
        let field = e.target.name;
        let value = e.target.value;
        this.state.author[field] = value;
        this.setState((pre) => ({ author: pre.author }));
    }
    authorFormValid = () => {
        var formisValid = true;
        this.state.errors = {};
        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First Name must be at least 3 characters.';
            formisValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be at least 3 characters.';
            formisValid = false;
        }
        this.setState((pre) => ({
            errors: pre.errors
        }));
        return formisValid;
    }
    save = (e) => {
        e.preventDefault();
        if (!this.authorFormValid()) {
            return;
        }
      
        AuthorAPI.saveAuthor(this.state.author);
        toastr.success("adding author");
    }
    componentDidMount = () => {
        let authorname = this.props.match.params.id;
        if (authorname) {
           let findauthor = AuthorAPI.getAuthorById(authorname);
           this.state.author.firstName = findauthor.firstName;
           this.setState((pre) => ({ author: pre.author }));
         
            //this.setState({author:{firstName:findauthor.firstName}});
            console.log(this.state.author);
        }
    }
    render() {
        
        return (
            <AuthorForm author={this.state.author} onChange={this.onChange} save={this.save} errors={this.state.errors} />
        );
    }
}

export default ManageAuthor;