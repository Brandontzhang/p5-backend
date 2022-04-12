var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const setupRoutes = (app) => {
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
}

module.exports = {
  setupRoutes
};