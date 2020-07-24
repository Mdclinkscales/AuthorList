import React, {useEffect, useState} from 'react'
import {Link} from '@reach/router'
import axios from 'axios'
import DeleteButton from '../components/DeleteButton'

export default props => {
    const [authors, setAuthors] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>setAuthors(res.data));
    }, [])
    const removeFromDom = authorID=>{
        setAuthors(authors.filter(author=>author._id!==authorID))
    }
    return (
        <div>
            {props.authors.map((author, index)=>{
                return <div className={index%2===0?"bg-light":"bg-dark text-light"} key={index}>
                    <Link to={"/authors/"+author._id}>
                        {author.name}
                    </Link>
                    |
                    <Link to={"/authors/"+author._id+"/edit"}>
                        <button>Edit</button>
                    </Link>
                    <DeleteButton authorID={author._id} successCallback={ ()=>removeFromDom(author._id)}/>
                </div>
            })}
        </div>
    )
}