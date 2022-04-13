var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var journalRouter = require('./routes/journals')

const setupRoutes = (app) => {
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/journals', journalRouter);
}

module.exports = {
  setupRoutes
};