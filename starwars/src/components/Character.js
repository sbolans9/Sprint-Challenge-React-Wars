// Write your Character component here
import React from 'react';
import { Button, Card } from 'react-bootstrap';

function arr(name){
    let newName = name.split(' ');
    if (newName.length >= 2){
        return `${newName[0]}_${newName[1]}`
    }
    return newName
}

function Character(props) {
    console.log(props.characters)

    return (

        <div className='charactors'>
            {props.characters.map((items) => {
                return (

                    <Card style={{ width: '60%', display:'inline-block' }}>
                        <Card.Body>
                            <Card.Title>{items.name}</Card.Title>
                            <Card.Text>Height:{items.height} Mass: {items.mass} Eye Color: {items.eye_color} Gender: {items.gender}</Card.Text>
                            <Button variant="primary" href={`https://starwars.fandom.com/wiki/${arr(items.name)}`}>Character Info</Button>
                        </Card.Body>
                    </Card>
                )
            })};
        </div>

    )
};

export default Character;