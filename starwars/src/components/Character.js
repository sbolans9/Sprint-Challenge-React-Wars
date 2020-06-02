// Write your Character component here
import React from 'react';

function Character(props) {
    return (
        <div className='charactors'>
            {props.characters.map((items) => {
                return (
                    <div>
                        Name: {items.name} Height:{items.height} Mass: {items.mass} Eye Color: {items.eye_color} Gender: {items.gender} 
                    </div>

                )
            })};
        </div>
    )
};

export default Character;