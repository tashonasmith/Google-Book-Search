import React, { Component } from 'react';
import SearchForm from "../components/SearchForm/index"
import API from "../utils/API"
import "./style.css"
import Results from "../components/Results/index"


class Search extends Component {
  state = {
    searchBar: "",  
    books: []
  }

  handleInputChange = event => {
      this.setState({ searchBar: event.target.value })
  }

// Set up API util and finish coding  
  handleFormSubmit = event => {
      event.preventDefault()
      API.getGoogleBooks(this.state.searchBar)
      .then(res => {
           console.log(res)
           let results = res.data.items
           results = results.map(
               result = {
                  key: result.id,
                  id: result.id,
                  title: result.volumeInfo.title,
                  authors: result.volumeInfo.authors,
                  link: result.volumeInfo.infoLink,
                  image: results.volumeInfo.imageLinks.thumbnail,
                  description: result.volumeInfo.description
               }
               
           )
           return result
      })
      this.setState({ books: results})
  }

  handleSaveButton = event => {
      event.preventDefault()
      let savedBooks = this.state.books.filter(book => book.id === event.target.id)
      savedBooks = savedBooks[0]
      API.saveBook(savedBooks)
  }

  render() {
    return (
      <div>   
         <SearchForm /> 
         <Results />  
      </div>
        );
    }
}

export default Search;