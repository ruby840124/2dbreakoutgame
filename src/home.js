import { FaCat } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import {Link} from "react-router-dom";
import React from 'react';
import './App.css';

class home extends React.Component{
  //建構子

  componentDidMount(){
    //this.addComponentToCanvas();
  }

  isMobile = () => {
    try { 
      document.createEvent("TouchEvent"); 
      return true;
    } catch(e) {
       return false;
    }
  
  }

  render() {
    const isMobile = this.isMobile();
    return (
    <div className="App">
      {isMobile && 'not support mobile'}
      {!isMobile && 
      <div className="App">
        <p style={{fontSize:"20px"}}>2D breakout game home</p>
        <div className="home">
          <Link to="/game"><button><FaCat/>play</button></Link>
          <Link to="/setting"><button><IoMdSettings/>settings</button></Link>
          <Link to="/developer"><button><IoIosPerson/>developer</button></Link>
        </div>
      </div>
      }
    </div>
    )
  }
}
export default home;