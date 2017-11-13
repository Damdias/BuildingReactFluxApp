
import React from "react";
import AuthorApi from './../../api/authorapi'
import AuthorList from "./authorList";

class Author extends React.Component {
    state = {
        authors:[]
    };
    componentDidMount = ()=>{
        this.setState({authors: AuthorApi.getAllAuthors()});
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>
              <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
}
export default Author;