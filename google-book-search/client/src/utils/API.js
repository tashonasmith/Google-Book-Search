import axios from "axios"

export default {
    getGoogleBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    //Get all books
    getBooks: function() {
        return axios.get("/api/books")
    },

    //Get a specific book by id
    getBook: function(id) {
        return axios.get("/api/books" + id)
    },

    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks)
    },

    deleteBook: function(id) {
        return axios.delete("/api/books" + id)
    }
}