import React from 'react';
import './Button.scss';

export default function Button(props) {
    return (
        <div className={'button ' + props.className} onClick={props.onClick} id={props.id}>
            {props.value}
        </div>
    )
}
