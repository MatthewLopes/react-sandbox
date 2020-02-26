import React from 'react';

function person(props) {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old! {props.children}</p>
        </div>
    )
};

export default person;