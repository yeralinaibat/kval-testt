const Router = require('express');
const testController = require('./controllers/testController');

const router = new Router();

router.get('/get-tests-by-category', testController.getTestByCategory);

module.exports = router;

