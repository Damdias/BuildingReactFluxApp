
import React from "react";
import PropTypes from "prop-types";

class AuthorList extends React.Component {
    
  
    createRow = (author)=>{
        return(
            <tr key={author.id}>
                <td><a href={"/#author/"+author.id}>{author.id}</a></td>
                <td>{author.fristName} {author.lastName}</td>
            </tr>
        );
    }
    render() {
        return (                
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
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