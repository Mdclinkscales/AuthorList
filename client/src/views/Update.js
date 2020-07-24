import React, {useEffect, useState} from 'react'
import axios from 'axios';
import AuthorAdd from '../components/AuthorAdd'
import {navigate} from '@reach/router'
export default props => {
    const {id} = props
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors/'+id)
            .then(res=>{
                setAuthor(res.data);
                setLoaded(true)
            })
    }, []);

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors', author)
            .then(res=>{
                console.log(res)
                navigate('/')
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }
    return(
        <div className="jumbotron">
            {errors.map((err, index)=> <p key={index}>{err}</p>)}
            {loaded && (
                <AuthorAdd 
                initialName={author.name} 
                onSubmitProp={updateAuthor}
                editstring="Edit this author:"
                />
            )}
        </div>
    )
}