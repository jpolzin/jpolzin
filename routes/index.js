var express = require('express');
var router = express.Router();

/* GET about page. */
function about(req, res, next)
{
    res.render('index', { 
        title: 'joshua polzin | about', 
        page: 'about'
    });
}
router.get('/', function(req, res, next) {
    res.redirect('/about/')
});
router.get('/about/', about);


/* GET projects page */
router.get('/projects/', function(req, res, next) {
    res.render('projects', {
        title: 'joshua polzin | projects',
        page: 'projects'
    })
})


/* GET experience page */
router.get('/experience/', function(req, res, next) {
    res.render('experience', {
        title: 'joshua polzin | experience',
        page: 'experience'
    })
})


router.get('/contact/', function(req, res, next) {
    res.render('contact', {
        title: 'joshua polzin | contact',
        page: 'contact'
    })
})




module.exports = router;
