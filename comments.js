import React,{Component} from "react";
export default class Likes extends React.Component{
    constructor(props){
        super(props)
        this.state={
            likes:0,
        }
    }
    handleClick=()=>{
        this.setState({
            likes:this.state.likes +1
        })
    }
    render(){
        return(
            <div>
                {this.state.likes}<br/>
                <button onClick={this.handleClick}>likes</button>
            </div>
        )
    }
} 