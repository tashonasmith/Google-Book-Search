import React from 'react';

const Results = props => {
    return (props.books.length === 0) ? (
        <div className="card">
           <h2>Search Results</h2> 
        </div>
    ) :
    (
      <div className="card">
          <h2>Search Results</h2>
          {props.book.map(book => {
              return (
                  <li className="result-list list-group-item">
                     <div id={book.title + "Card"} key={book._id}>
                         <h1 className="bookTitle">{book.title}</h1>
                         <h3 className="bookAuthors">{book.authors}</h3>
                         <img src={book.image} alt={book.title} />
                         <p className="bookDescription">{book.description}</p>
                     </div> 
                     <div className="buttonDiv">
                         <button className="saveButton btn btn-primary" id={book.id} onClick={props.handleSaveButton}>Save Book</button>
                         <a href={book.link} target="_blank">
                             <button className="viewBook btn btn btn-primary">ViewBook</button>
                         </a>
                     </div>
                  </li>
              )
          })}
      </div>  
    )
};

export default Results;