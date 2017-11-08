
import React from "react";
import AuthorApi from './../../api/authorapi'

class Author extends React.Component {
    getInitialState = ()=>{
        return {
            authors:[]
        }
    }
    componentWillMount = ()=>{
        this.setState({authors: AuthorApi.getAllAuthors()});
    }
    createRow = (author)=>{
        return(
            <tr>
                <td><a href={"/#author/"+author.id}>{author.id}</a></td>
                <td>{author.fristName} {author.lastName}</td>
            </tr>
        );
    }
    render() {
        return (
            <div>
                <h1>Authors</h1>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                    {this.state.authors.map(this.createRow,this)}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Author;