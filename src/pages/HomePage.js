import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import CardComponent from '../components/Card/CardComponent'
import HeaderComponent from '../components/Header/HeaderComponent'
import SideBarComponent from '../components/SideBar/SideBarComponent'

export default function HomePage() {

    const [ messageData, setMessageData ] = useState([]);
    const [ pageToken, setPageToken ] = useState('');

    // const [ hasOnGoingAPICall, setHasOnGoingAPICall ] = useState(false);

    const scrollContainer = useRef();
    let hasOnGoingAPICall = false;

    useEffect( () => {
        !hasOnGoingAPICall && feachData();
    }, [] )

    useEffect( () => {

        if( hasOnGoingAPICall ) return;

        /*** Make message call till page got scrollable ***/
        let scrollelem = scrollContainer.current;
        ( scrollelem.scrollHeight <= scrollelem.clientHeight ) && feachData();

    }, [ pageToken ] )


    const feachData = () => {
        hasOnGoingAPICall = true;
        
        axios( 'https://message-list.appspot.com/messages' + ( pageToken ? '?pageToken=' + pageToken : '' ) ).then( ( { data } ) => {
            
            hasOnGoingAPICall = false;
           
            setMessageData( () => {
                return [...messageData, ...data.messages ]
            } );
            setPageToken( () => {
                return data.pageToken
            } );
        })
    }

    function handlePageScroll( { target } ) {
        
        if( hasOnGoingAPICall ) { return; }
        if ((target.clientHeight + target.scrollTop) > target.scrollHeight - 50 ) 
        {
            feachData();
        }
    }

    function handleDelete( index ) {
        messageData.splice(index, 1);
        setMessageData( messageData );
    }

    return (
        <section className="page_main">
            <HeaderComponent />
            <SideBarComponent />
            <section className="page_list page_anim" ref={ scrollContainer } onScroll={ ( ev ) => handlePageScroll( ev ) }>
                { !messageData.length ? <h1>Loading...</h1> : messageData.map( ( cardData, index ) => { 
                    return <CardComponent key={ cardData.id } index={ index } handleDelete={ handleDelete } {...cardData} />;
                })}
            </section>
        </section>
    )
}
