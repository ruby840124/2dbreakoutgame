import { IoMdHome } from "react-icons/io";
import {Link} from "react-router-dom";
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import React from 'react';
import './App.css';

class developer extends React.Component{
  render() {
    return (
    <div className="App">
      <p style={{fontSize:"20px"}}>2D breakout game home</p>
      <div className="setting">
        <img src={require('./image/ruby.png')} style={{width:'100px', height:'100px'}}></img>
        <div style={{fontSize:"22px", color: "white", marginBottom:"5px"}}>Ruby Feng</div>
        <div>!!水瓶系女孩!!</div>
        <div>外表看似+9，但其實是可愛的工程師!</div>
        <Link to="/"><button style={{marginTop:"10px"}}><IoMdHome/>back to home</button></Link>
      </div>
    </div>
    )
  }
}
export default developer;