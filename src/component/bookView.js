import React from 'react';

export const BookView =({selectedBook})=> {
        if(!selectedBook) {           
            return (<h3> You haven't selected any book</h3>);
        }

           
        return (<div className="card">
                <div className= "card-title">
                    <h2>
                        {selectedBook.title}
                    </h2>
                </div>
                <div className="card-body">
                    <p>{selectedBook.pages}</p>
                </div>
            </div>);
}