const express = require('express');
const bodyParser = require('body-parser');
const books = require('./api/routes/bookRoutes');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

// Routes
app.use('/api/books', books);

// Handle 404 and errors
app.use((req, res, next) => {
  const err = new Error('not found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  const error = app.get('env') === 'development' ? err : {};
  const status = err.status ? err.status : 500;
  res.status(status).json({
    error: {
      message: error.message
    }
  });
});
// Listening to port 3000
app.listen(3000, function() {
	console.log('Server is running at port', 3000);
});
