import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron/index"
import Nav from "../components/Nav/index"
import API from "../utils/API"
import "./style.css"
import Results from "../components/Results/index"


class Search extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    description: "",
    image: "",
    link: ""
  }

  componentDidMount() {
      this.LoadBook
  }

  render() {
    return (
      <div>
         <Nav />
         <Jumbotron />    
         <Search /> 
         <Results />  
      </div>
        );
    }
}

export default Search;