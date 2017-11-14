
import React from "react";
import AuthorApi from './../../api/authorapi'
import AuthorList from "./authorList";
import { Link } from 'react-router-dom';

class Author extends React.Component {
    state = {
        authors: []
    };
    componentDidMount = () => {
        this.setState({ authors: AuthorApi.getAllAuthors() });
    }

    render() {
        return (
            <div>
                <Link className="btn btn-primary" to="/manageAuthor">Add Author</Link>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}
export default Author;