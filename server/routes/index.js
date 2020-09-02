var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const ingredients = require('./ingredients');
const effects = require('./effects');

router.use('/ingredients', ingredients);
router.use('/effects', effects);


module.exports = router;
