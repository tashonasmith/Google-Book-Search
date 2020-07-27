import React from 'react';

const BooksSaved = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <h2>Saved Books</h2>
        </div>
    ) :
    (
        <div className="card">
            <h2>Saved Books</h2>
            {props.book.map(savedBook => {
                return (
                    <li className="saved-list list-group-item">
                        <div id={savedBook.title + "Card"} key={savedBook._id}>
                         <h1 className="bookTitle">{savedBook.title}</h1>
                         <h3 className="bookAuthors">{savedBook.authors}</h3>
                         <img src={savedBook.image} alt={savedBook.title} />
                         <p className="bookDescription">{savedBook.description}</p>
                     </div> 
                     <div className="buttonDiv">
                         <a href={savedBook.link} target="_blank">
                             <button className="viewBook btn btn btn-primary">ViewBook</button>
                         </a>
                         <button className="deleteButton btn btn-primary" id={savedBook.id} onClick={props.handleDeleteButton}>Delete Book</button>
                     </div>
                    </li>
                )
            })}

        </div>
    )
        
    
};

export default BooksSaved;