import React, { useEffect, useState } from "react";

export default function ApiCall() {

    const [abc, setAbc] = useState([]); 

    useEffect(()=>{
        const data = fetch("https://jsonplaceholder.typicode.com/posts");
        const value = data.then((item)=> item.json());
        value.then((apiData)=> setAbc(apiData));
        
    },[]);

    console.log(abc,"apiData");

    return(
        <>
           {abc.map((item,i)=>{
                return (
                    <div className="card" key={i}>
                        <p> <b> title: </b> {item.title} </p>
                        <p> <b> body: </b> {item.body} </p>
                    </div>
                )
           })}
        </>
    )
};