import React, { Component } from 'react'
import { BookList } from './component/bookList';
import { BookView } from './component/bookView';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Books : [
                { title : 'Javascript', pages : 101},
                { title : 'Java', pages: 200},
                { title : 'React', pages : 201},
                { title : 'Redux', pages : 10}
            ]
        }
    }
    onBookSelection = (selectedBook)=> {
        this.setState({selectedBook : selectedBook});
    }

    render() {
        return (
        <div className = "container">
            <div>
                <h2>Books </h2>
            </div>
            <div className="row">
                <div className = "col-sm-3">
                    <BookList books={this.state.Books} onSelection={this.onBookSelection}/>
                </div>
                <div className="col-sm-1">

                </div>
                <div className = "col-sm-8">
                    <BookView selectedBook ={this.state.selectedBook} />
                </div>
            </div>
        </div>
        );
    }
}