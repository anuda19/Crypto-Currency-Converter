import React from 'react';
import { useState, useEffect } from 'react';

const ApiFn = () => {
    const [postId, setPostId] = useState(null)

    useEffect(()=>{
        
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: "Anurag"})
        }

        fetch("https://reqres.in/api/posts", requestOptions)
        .then((response)=> response.json())
        .then((data)=> setPostId(data.id))
    }, [])
    return (
        <div>
            <h3>Post Api with classes</h3>
            <p>Returned Post Id: {postId}</p>
        </div>
    );
}



export default ApiFn;