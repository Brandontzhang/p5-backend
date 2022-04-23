var express = require('express');
var router = express.Router({ mergeParams: true });

const { createJournal, getJournals, updateJournal, deleteJournal } = require('../services/journal.service');


/**
 * Journal routes
 */
router.post('/', async (req, res, next) => {
  const newJournal = await createJournal(req.body.title, req.body.date, req.body.text);
  res.json(newJournal).status(201).end();
})

router.get('/', async (req, res, next) => {
  const [journals] = await getJournals();
  journals.forEach(j => {
    const buffer = Buffer.from(j.text, 'utf-8');
    j.text = buffer.toString();
  })
  res.json(journals).status(200).end();
})

router.put('/:id', async(req, res, next) => {
  const id = req.params.id;
  req.body.text = Buffer.from(req.body.text, 'utf-8');
  const [updatedJournal] = await updateJournal(id, req.body);

  res.json(updatedJournal).status(200).end();
})

router.delete('/:id', async(req, res, next) => {
  const id = req.params.id;
  const [deletedJournal] = await deleteJournal(id);

  res.json(deletedJournal).status(200).end();
})

module.exports = router;