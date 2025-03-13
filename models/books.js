const { db } = require('./db_base');

const getAllBooks = async () => {
    const stmnt = db.prepare("SELECT * FROM books;");
    return await stmnt.all();
};

const getBookById = async (id) => {
    const stmnt = db.prepare("SELECT * FROM books WHERE id=?;");
    return await stmnt.get(id);
};

const addBook = async ({author, title, isbn}) => {
    const stmnt = db.prepare("INSERT INTO books (author, title, isbn) VALUES (@author, @title, @isbn);");
    return await stmnt.run({author, title, isbn});
};

module.exports = {
    getAllBooks,
    getBookById,
    addBook
}