import React, { Component } from 'react';
import BooksSaved from "../components/Saved/index"
import API from "../utils/API"

class Saved extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.getBooks()
          .then(res => this.setState({ savedBooks: res.data }))
          .catch(err=> console.log(err))
    }

    handleDeleteButton = id => {
        API.deleteBook(id)
          .then(res => this.componentDidMount())
          .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
               <BooksSaved /> 
            </div>
        );
    }
}

export default Saved;