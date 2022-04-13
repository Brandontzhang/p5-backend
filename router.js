var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var journalRouter = require('./routes/journals');
var listRouter = require('./routes/lists');
var listItemRouter = require('./routes/listItems');

const setupRoutes = (app) => {
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/journals', journalRouter);
  app.use('/journals/:journalId/lists', listRouter);
  app.use('/journals/:journalId/lists/:listId/listItem', listItemRouter);
}

module.exports = {
  setupRoutes
};