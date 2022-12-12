import React,{ useState,useContext } from "react";
import { MovieContext } from "./moviecontext";
const AddMovie=()=>{
    const [movies,setmovies]=useContext(MovieContext);
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const updateName=(e)=>{
        setName(e.target.value);
    };
    const updatePrice=(e)=>{
        setPrice(e.target.value);
    };
    const AddMovie=(e)=>{
        e.preventDefault();
        setmovies((prevMovies) => [...prevMovies,{name: name},{price:price}])
    };
    return(
        <form onSubmit={AddMovie}>
            <input type="text" name="name" onChange={updateName}/>
            <input type="text" price="price"onChange={updatePrice}/>
        </form>

    )
}
export default AddMovie;