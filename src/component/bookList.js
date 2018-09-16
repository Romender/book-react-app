import React from 'react'
import {BookItem} from './bookItem';
import {ListGroup} from 'reactstrap';

export const BookList = ({books,onSelection}) => {
    let booklists = books.map((book) => {
        return (<BookItem key ={book.title} book={book} onSelection={onSelection}/>);
    });
    return (
        <div>
            <ListGroup >
                {booklists}
            </ListGroup>
        </div>
    );
}

