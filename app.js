//REST API'
/*
  HTTP verb/method, URL, request and response payloads

  GET, /api/songs,
  GET, /api/songs/:id

  POST, /api/songs

  DELETE, /api/songs/:id

  PUT or PATCH, /api/songs/:id     <--used for updating
*/
require('dotenv').config();
var express = require('express');
var app = express();
var Book = require('./models/Book');
var Review = require('./models/Review');
var Author = require('./models/Author');
var Publisher = require('./models/Publisher');
var bodyParser = require('body-parser');
var cors = require('cors');

//middleware
app.use(bodyParser.json()); //parse requst with application/json
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/api/v1/reviews', function(request, response){
  Review.fetchAll().then(function(reviews){
    response.json(reviews);
  });
});

app.get('/api/v1/books/:id', function(request, response){
  Book
    .where('id', request.params.id)
    .fetch({
      require: true,
      withRelated: ['author', 'publisher']
    })
    .then(function(book){
      response.json(book);
    }, function(){
      response.status(404).json({
        error: 'Book cannot be found!'
      })
    });
});

app.post('/api/v1/reviews', function(request, response){
  var review = new Review({
      book_id: request.body.book_id,
      headline: request.body.headline,
      body: request.body.body,
      rating: request.body.rating
  });

  review.save().then(function(){
    response.json(review);
  });
});

app.listen(8000);
