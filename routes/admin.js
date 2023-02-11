const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/weNode";
const client = new MongoClient(uri, { useNewUrlParser: true });
const app = express();


// const bodyParser = require('body-parser');
// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());

router.use(express.static('public'))


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
      title: 'Dashboard', 
      page: 'page/home',
    });
});

router.get('/makeNewPost', function(req, res, next) {
  res.render('index', { 
      title: 'Add New Post', 
      page: 'page/posts/add',
    });
});


router.post('/makeNewPost', (req,res) =>{
  console.log(req.body);
  res.json(req.body)
})


module.exports = router;
