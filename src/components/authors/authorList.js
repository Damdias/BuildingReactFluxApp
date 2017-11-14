
import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

class AuthorList extends React.Component {
    
  
    createRow = (author)=>{
        return(
            <tr key={author.id}>
                <td><Link to={"/manageAuthor/"+author.id}>{author.id}</Link></td>
                <td>{author.fristName} {author.lastName}</td>
            </tr>
        );
    }
    render() {
             return (    
            
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
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