import React, {useEffect, useState} from 'react'
import axios from 'axios';
import AuthorAdd from '../components/AuthorAdd'
import {navigate} from '@reach/router'
export default props => {
    const {id} = props
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState('');
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
                res.data.errors?setErrors(res.data.message):navigate('/')
            })
            .catch(err=>{console.log(err)})
    }
    return(
        <div className="jumbotron">
            <p>{errors}</p>
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