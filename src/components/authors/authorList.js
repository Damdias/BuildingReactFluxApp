
import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import AuthorAction from "../../actions/authorActions";

class AuthorList extends React.Component {
    
  
    createRow = (author)=>{
        return(
            <tr key={author.id}>
                <td><a href="#" onClick={this.deleteAuthor.bind(this,author.id)}>Delete</a></td>
                <td><Link to={"/manageAuthor/"+author.id}>{author.id}</Link></td>
                <td>{author.firstName}  {author.lastName}</td>
            </tr>
        );
    }
    deleteAuthor = (id,event)=>{
        event.preventDefault();
        AuthorAction.deleteAction(id);
        this.props.onDeleted();
        alert(id)
    }
    render() {
             return (    
            
                <table className="table">
                    <thead>
                        <tr>
                        <th></th>
                            <th>ID</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.authors.map(this.createRow,this)}
                    </tbody>
                </table>            
        );
    }
}
AuthorList.propTypes = {
    authors: PropTypes.array.isRequired
}
export default AuthorList;