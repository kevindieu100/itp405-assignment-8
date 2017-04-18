var bookshelf = require('./../bookshelf');
var Book = require('./Book');

var Publisher = bookshelf.Model.extend({
  tableName: 'publishers',
  book: function(){
    return this.belongsTo(Book);
  }
});

module.exports = Publisher;
