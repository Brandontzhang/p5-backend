var express = require('express');
const { createListItem, getListItems, updateListItem, deleteListItem } = require('../services/listItem.service');
var router = express.Router({mergeParams : true});

router.post('/', async(req, res, next) => {
  await createListItem(req.params.listId, req.body);
  res.json("Created listitem").end();
})

router.get('/', async(req, res, next) => {
  const listItems = await getListItems(req.params.listId);
  res.json(listItems).end();
})

router.put('/:id', async(req, res, next) => {
  await updateListItem(req.params.listId, req.params.id, req.body);
  res.json("Updated listItem").end();
})

router.delete('/:id', async(req, res, next) => {
  await deleteListItem(req.params.listId, req.params.id);
  res.json("Deleted listItem").end();
})

module.exports = router;