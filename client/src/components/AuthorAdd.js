import React, {useState} from 'react'
import { navigate } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cancelbutton from './Cancelbutton';

export default props =>{
    const { initialName, onSubmitProp, editstring } = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
        navigate('/')
    }
    return (
        <div className="row">
            <div className="col-sm-4"/>
            <div className="col-sm-4">
                <div className="text-center">
                    <h1>Favorite Authors</h1>
                    <Cancelbutton  linkvalue="Home"/>
                </div>
                <div className="form-group">
                    <h4>{editstring}</h4>
                    <form onSubmit={onSubmitHandler}>
                        <label>Name:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={name}
                            onChange={e=>setName(e.target.value)}
                        />
                        <input className="btn-light" type="submit"/>
                        <Cancelbutton 
                            linkvalue="Cancel"
                        />
                    </form>
                </div>
            </div>
            <div className="col-sm-4"/>
        </div>
    )
}