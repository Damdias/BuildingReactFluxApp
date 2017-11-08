import React from 'react';

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
                   <li className={this.getAcitveMenu('home')}><a  onClick={()=>this.selectMenu('home')} href="/">Home</a></li>
                   <li className={this.getAcitveMenu('about')} ><a onClick={()=> this.selectMenu('about')} href="#about">About</a></li>           
                   <li className={this.getAcitveMenu('author')} ><a onClick={()=> this.selectMenu('author')} href="#author">Authors</a></li>           
                 </ul>
               </div>
            </nav>
    );
  }
}
export default NaviBar;

