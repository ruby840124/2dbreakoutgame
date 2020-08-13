import { IoMdHome } from "react-icons/io";
import {Link} from "react-router-dom";
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';
import React from 'react';
import './App.css';

class setting extends React.Component{
  //建構子
  constructor(props) {
    super(props);
    this.state ={speed: 1};
  }

  componentDidMount(){
    //this.addComponentToCanvas();
  }

  onSliderChange = (value) => {
    this.setState({speed : value});
  }

  render() {
    const {speed} = this.state;
    return (
    <div className="App">
      <p style={{fontSize:"20px"}}>2D breakout game home</p>
      <div className="setting">
      <div className="wrapperStyle">
        <div>adjust the ball speed: {speed} </div>
        <Slider min={1} max={15} defaultValue={1} onChange={this.onSliderChange}  />
      </div>
        <Link to="/"><button><IoMdHome/>back to home</button></Link>
      </div>
    </div>
    )
  }
}
export default setting;