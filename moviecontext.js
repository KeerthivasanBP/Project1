import React, { createContext,useState } from "react";
export const MovieContext =createContext();
export const MovieProvider=(props)=>{
    const [movies,setmovies]=useState([
        {
            name:"Thuniv",
            price:"250",
            id:"1",
        },
        {
            name:"Varisu",
            price:"250",
            id:"2",
        }

    ]);
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};