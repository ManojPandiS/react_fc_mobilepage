import React, { useState } from 'react'
import ButtonComponent from '../Button/ButtonComponent'
import LabelComponent from '../Label/LabelComponent'
import ProfileCard from './ProfileCard'

export default function CardComponent( props ) {
    const [showDelete, setShowDelete] = useState( false );

    return (
        <div className={ `user_box${ showDelete ? ' show_delete' : '' }`} onClick={ () => setShowDelete( !showDelete ) }>
            <ButtonComponent handleDelete={ props.handleDelete } index={ props.index } />
            <ProfileCard userData={props.author}/>
            <LabelComponent titleText={ props.content}/>
        </div>
    )
}

