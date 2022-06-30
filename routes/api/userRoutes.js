const router = require('express').Router();
const {
  getUsers,
	getSingleUser,
	createUser,
	updateUser,
	deleteUser,
	addFriend,
	deleteFriend
} = require('../../controllers/userController');

//get all users and create new user
// /api/users
router.route('/').get(getUsers).post(createUser);

//get single user/update or delete single usuer
// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

//add friend or delete friend routes
// /api/users/:userId/friends/:friendId (userId)
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);


module.exports = router;
