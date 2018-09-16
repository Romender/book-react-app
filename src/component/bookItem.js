import React from 'react'
import{ListGroupItem} from 'reactstrap';

export const BookItem =({book,onSelection}) => {

    return (
        <ListGroupItem className= "list-group-item" onClick={()=>{onSelection(book)}}>
            {book.title}
        </ListGroupItem>
    );
   
}