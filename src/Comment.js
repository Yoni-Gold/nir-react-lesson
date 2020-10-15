import React from 'react';

export default function Comment(props)
{
    return(<div className='comment'>
        <fieldset>
        <legend>by <span className='bold'>{props.info.name}</span> at <span className='bold'>{props.info.date}</span></legend>
        <span className='text'>{props.info.content}</span>
        </fieldset>

    </div>);
}