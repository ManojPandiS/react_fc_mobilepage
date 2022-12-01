import React from 'react'

export default function ButtonComponent( props ) {
    function handleDelete( ev ) {
        props.handleDelete( props.index );
        ev.preventDefault();
    }
    return (
        <div className="delete" onClick={ ( ev ) => handleDelete( ev ) }>
            <div className="delete_main">
                <em className="delete_icon"></em>
                <span>Delete</span>
            </div>
        </div>
    )
}
