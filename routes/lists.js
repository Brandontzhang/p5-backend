var express = require('express');
var router = express.Router({ mergeParams: true });

const { createList, getLists, updateList, deleteList } = require('../services/list.service')

router.post('/', (req, res, next) => {
  createList(req.params.journalId, req.body);
  res.json("hit the create list route").end();
});

router.get('/', async(req, res, next) => {
  const lists = await getLists(req.params.journalId);
  res.json(lists).end();
});

router.put('/:id', (req, res, next) => {
  updateList(req.params.journalId, req.params.id, req.body);
  res.json().end();
});

router.delete('/:id', (req, res, next) => {
  deleteList(req.params.journalId, req.params.id);
  res.json().end();
});

module.exports = router;