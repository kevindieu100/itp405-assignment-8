var bookshelf = require('./../bookshelf');
var Book = require('./Book');

var Author = bookshelf.Model.extend({
  tableName: 'authors',
  book: function(){
    return this.belongsTo(Book);
  }
});

module.exports = Author;
