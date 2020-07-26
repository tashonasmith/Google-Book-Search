import React from 'react';

const Search = () => {
    return (
        <div className="container">
           <form>
              <label for="search">Book Search</label>
              <input type="search" id="search" name="search"></input>
              <button>Submit</button>
           </form> 
        </div>
    );
};

export default Search;