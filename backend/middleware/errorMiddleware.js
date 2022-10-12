//the functions below overwrite the default Express error handler
//next calls other middlewares
const errorHandler = (err, req, res, next) => {
  //if res.statusCode exists then set statusCode to res.statusCode else set to 500
  const statusCode = res.statusCode ? res.statusCode : 500;
  //500 is a server error

  res.status(statusCode); //set response status to status code

  //respond with json
  //dont show stack when in proudction mode
  //stack will give us the line numbers where the error is occuring
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV == "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
