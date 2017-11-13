import React from 'react';
import {Link} from "react-router-dom";

// let NaviBar = () =>{
// let active = 'active';
// let selectMenu = ()=>{
//   alert('click');
// }
//     return (
//         <nav className="navbar navbar-default">
//         <div className="container-fluid">
//           <div className="navbar-header">
//             <a className="navbar-brand" href="/">PluralSight</a>
//           </div>
//           <ul className="nav navbar-nav">
//             <li className="{active}"><a href="/">Home</a></li>
//             <li className="active" ><a onClick={this.selectMenu} href="#about">About</a></li>           
//           </ul>
//         </div>
//       </nav>
//     );
//   }

class NaviBar extends React.Component{
 state = {
   activeMenu:'home'
 }

  selectMenu = (name)=>{
   this.setState((pre)=> ({activeMenu:name}));
  }
  getAcitveMenu = (menu) => this.state.activeMenu===menu ? 'active':'' ;
  render(){
    return(
      <nav className="navbar navbar-default">
               <div className="container-fluid">
                 <div className="navbar-header">
                   <a className="navbar-brand" href="/">
                   <image src='/pluralsight.png' />
                   </a>
                 </div>
                 <ul className="nav navbar-nav">
                   <li className={this.getAcitveMenu('home')}><Link to="/">Home</Link></li>
                   <li className={this.getAcitveMenu('about')} ><Link to="/about/test">About</Link> </li>           
                   <li className={this.getAcitveMenu('author')} ><Link to="/author">Authors</Link></li>           
                 </ul>
               </div>
            </nav>
    );
  }
}
export default NaviBar;

