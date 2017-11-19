
import React from "react";
import AuthorApi from './../../api/authorapi'
import AuthorList from "./authorList";
import { Link } from 'react-router-dom';
import AuthorStore from "./../../stores/authorStore";

class Author extends React.Component {
    state = {
        authors: AuthorStore.getAllAuthors()
    };
componentWillMount(){
    AuthorStore.addChangeListener(this._onChange);
}
componentWillUnmount(){
    AuthorStore.removeChangeListerner(this._onChange);
}
_onChange= ()=>{
   this.setState({author:AuthorStore.getAllAuthors()});
}
    render() {
        return (
            <div>
                <Link className="btn btn-primary" to="/addauthor">Add Author</Link>
                <h1>Authors</h1>
                <AuthorList onDeleted={this._onChange} authors={this.state.authors} />
            </div>
        );
    }
}
export default Author;