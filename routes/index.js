var express = require('express');
var fs = require('fs');
var router = express.Router();

var data = JSON.parse(fs.readFileSync('./public/data/data.json'));

/* GET about page. */
function about(req, res, next)
{
  console.log(data.education.coursework)
  res.render('index', {
    title: 'joshua polzin | home',
    page: 'home',
    img_portrait: '/images/josh.jpg',
    projects: data.projects.slice(0, 4),
    education_summary: data.filler,
    coursework: data.education.coursework
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
    page: 'projects',
    projects: [
      {
        name: 'Euchre',
        category: 'EECS 280',
        date: 'Fall 2017',
        tags: [
          {
            name: 'C++',
            color: 'bg-red'
          },
          {
            name: 'Javascript',
            color: 'bg-blue'
          }
        ],
        description: 'A command-line implementation of the classic midwestern game, Euchre. Complete with a simple AI and PvP capability.'
      },
      {
        name: 'Euchre',
        category: 'EECS 280',
        date: 'Fall 2017',
        tags: [
          {
            name: 'C++',
            color: 'bg-red'
          },
          {
            name: 'Javascript',
            color: 'bg-blue'
          }
        ],
        description: 'A command-line implementation of the classic midwestern game, Euchre. Complete with a simple AI and PvP capability.'
      }
    ]
  })
})


/* GET experience page */
router.get('/experience/', function(req, res, next) {
  res.render('experience', {
    title: 'joshua polzin | experience',
    page: 'experience',
    experiences: [
      {
        name: 'Software Engineering Intern',
        date: 'May 2018 - August 2018',
        category: 'Protolabs, Inc.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus iaculis dignissim. ' +
          'Pellentesque metus erat, cursus a dolor in, lobortis fringilla urna. Suspendisse hendrerit metus congue ex ' +
          'accumsan, id tincidunt tortor lacinia. Duis vulputate blandit eros quis lacinia. Aliquam aliquet diam vel iaculis fermentum.'
      }
    ]
  })
})


router.get('/contact/', function(req, res, next) {
  res.render('contact', {
    title: 'joshua polzin | contact',
    page: 'contact'
  })
})




module.exports = router;
