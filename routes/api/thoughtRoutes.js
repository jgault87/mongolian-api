const router = require('express').Router();
const {
  getThoughts,
	getSingleThought,
	createThought,
	updateThought,
	deleteThought,
  addReaction,
	deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// get /api/thoughts/:thoughtId
// put /api/thoughts/:thoughtId/ => reqbody
// delete /api/thoughts/:thoughtId/ 
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;
