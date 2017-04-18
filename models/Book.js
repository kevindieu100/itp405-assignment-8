var bookshelf = require('./../bookshelf');
var Author = require('./Author');
var Publisher = require('./Publisher');

var Book = bookshelf.Model.extend({
  tableName: 'books',
  publisher: function(){
    return this.belongsTo(Publisher);
  },
  author: function(){
    return this.belongsTo(Author);
  }
});

module.exports = Book;
