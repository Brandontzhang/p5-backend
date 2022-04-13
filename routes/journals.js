var express = require('express');
var router = express.Router();

const { createJournal, getJournals, updateJournal, deleteJournal } = require('../services/journal.service');
const { createGratitude, getGratitudes, updateGratitude, deleteGratitude } = require('../services/gratitude.service')


/**
 * Journal routes
 */
router.post('/', async (req, res, next) => {
  const newJournal = await createJournal(req.body.title, req.body.data, req.body.text);
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
  const [updatedJournal] = await updateJournal(id, req.body);

  res.json(updatedJournal).status(200).end();
})

router.delete('/:id', async(req, res, next) => {
  const id = req.params.id;
  const [deletedJournal] = await deleteJournal(id);

  res.json(deletedJournal).status(200).end();
})

/**
 * Gratitude Routes
 */
let path = "/gratitude/" 
router.post('/:id' + path, (req, res, next) => {
  createGratitude();
  res.json().end();
});

router.get(':journalId' + path, (req, res, next) => {
  res.json().end();
});

router.put(':journalId' + path + ':id', (req, res, next) => {
  res.json().end();
});

router.delete(':journalId' + path + ':id', (req, res, next) => {
  res.json().end();
});
module.exports = router;