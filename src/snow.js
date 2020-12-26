import React, { Component } from 'react';
import Snowfall from 'react-snowfall';
import Tokyo from './image/Area1.JPG';
import Yokohama from './image/Area2.JPG';
import Tower from './image/Area3.JPG';
import Santa from './image/santa.png';
import Tide from './image/Tide.png';
import "./snow.css"


export default class Snow extends Component  {

    constructor (props) {
        super(props);
        this.state = {
            position:1600,
            City:Tokyo,
            Count:0,
        };
    }

    SantaMove=()=>{
        var {position} = this.state;
        var Pos = position;
        const {Count} = this.state;
        if(Pos <= 10){
            this.setState({position:1600});
            switch(Count){
                case 0:
                    this.setState({City:Yokohama});
                    this.setState({Count:1});
                    break;
                case 1:
                    this.setState({City:Tower});
                    this.setState({Count:2});   
                    break;
                case 2:
                    this.setState({City:Tokyo});
                    this.setState({Count:0});
                    break; 
                default:
                    this.setState({City:Tokyo});
                    this.setState({Count:0});
                    break;                                                                               
            }
        }else{
            this.setState({position:Pos-20});
        }
        console.log(Pos);
    }

    componentDidMount() {

        this.intervalId = setInterval(()=>{
            this.SantaMove();
        }, 200);
    }

    render() {
        const {position} = this.state;
        const {City} = this.state;
        var Pos = position;
        return (
            <div>
                <div className="layout" style={{ height: 850, width: 1850, background: '#282c34' }}>
                    <img src={Santa} alt="Santa" id="santaID" className="santa" style={{left:Pos}}/>
                    <img src={City} alt="City" height="850" width="1850" />
                    <img src={Tide} alt="Tide" className="Tide" />
                    <Snowfall snowflakeCount={300}/>
                </div>,
            </div>
        );
    }
  }