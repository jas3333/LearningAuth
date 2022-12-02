import express from 'express';
const router = express.Router();

import { registerUser, loginUser, deleteUser, sendUserList } from '../controllers/userAuth.js';

router.route('/registerUser').post(registerUser);
router.route('/deleteUser').post(deleteUser);
router.route('/loginUser').post(loginUser);
router.route('/sendUser').get(sendUserList);

export default router;
