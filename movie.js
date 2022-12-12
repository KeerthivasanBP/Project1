import React from "react";
const Movie=([name,price,id])=>{
    return (
        <div>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <h2>{id}</h2>
        </div>
    );
};
export default Movie;