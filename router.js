var indexRouter = require('./routes/index');
var journalRouter = require('./routes/journals');

const setupRoutes = (app) => {
  app.use('/', indexRouter);
  app.use('/journals', journalRouter);
}

module.exports = {
  setupRoutes
};