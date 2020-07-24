import React, {useEffect, useState} from 'react'
import axios from 'axios';
import AuthorAdd from '../components/AuthorAdd'
export default () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        setLoaded(true);
    }, []);
    const newAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res=>{
                console.log(res)
            })
    }
    return(
        <div className="jumbotron">
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