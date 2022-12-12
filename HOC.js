import { render } from "@testing-library/react";
import React,{Component} from "react";
const Hoc=(Component,data)=>{
    return class extends React.Component{
        render(){
            return(
                <div>
                    HEllo<Component/>
                </div>
            )
        }
    }
}
export default Hoc;