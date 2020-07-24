import React, { useState, useEffect } from "react"
import axios from 'axios'
import AuthorList from "../components/AuthorList";

export default () =>{
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data)
                setLoaded(true);
            })
    }, []);

    const removeFromDom = authorID =>{
        setAuthors(authors.filter(author=>author._id!==authorID));
    }
    return (
        <div className="row">
            <div className="col-sm-4"/>
            <div className="col-sm-4">
                <h1>Favorite Authors</h1>
                <a href="http://localhost:3000/new">Add an Author</a>
                {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
            </div>
            <div className="col-sm-4"/>
        </div>
    )
}