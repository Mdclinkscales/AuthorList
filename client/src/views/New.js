import React, {useEffect, useState} from 'react'
import axios from 'axios';
import AuthorAdd from '../components/AuthorAdd'
import {navigate} from '@reach/router'
export default () => {
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState('');
    useEffect(()=>{
        setLoaded(true);
    }, []);
    const newAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            
            .then(res=>{
                console.log(res)
                res.data.errors?setErrors(res.data.message):navigate('/')
            })
            .catch(err=>{console.log(err)})
    }
    return(
        <div className="jumbotron">
            <p>{errors}</p>
            {loaded && (
                <AuthorAdd 
                initialName="" 
                onSubmitProp = {newAuthor}
                editstring="Add a new author"
                />
            )}
        </div>
    )
}