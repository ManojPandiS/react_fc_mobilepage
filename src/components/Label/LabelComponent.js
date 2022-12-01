import React from 'react'

export default function LabelComponent( props ) {
    return (
        <div className="user_abt" title={ props.titleText }>{ props.titleText }</div>
        // <span class="readmore" onclick="MobileLib.readMore(this)">Read more</span>
    )
}
