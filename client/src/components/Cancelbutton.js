import React from 'react'
import {navigate} from '@reach/router'

export default props =>{
    const {linkvalue} = props;
    const cancelAction = e => {
        navigate('/')
    }
    return(
        <button className="btn-light btn-inline-block" onClick={cancelAction}>
            {linkvalue}
        </button>
    )
}