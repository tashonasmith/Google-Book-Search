import React, { Component } from 'react';
import Nav from "../components/Nav/index"
import Jumbotron from "../components/Jumbotron/index"
import SavedBooks from "../components/Saved/index"

class Saved extends Component {
    state = {
        books: [],
        title: "",
        authors: "",
        description: "",
        image: "",
        link: ""
    }

    componentDidMount() {
        console.log("component did mount")
        this.loadBooks()
    }

    render() {
        return (
            <div>
               <Nav />
               <Jumbotron />
               <SavedBooks /> 
            </div>
        );
    }
}

export default Saved;