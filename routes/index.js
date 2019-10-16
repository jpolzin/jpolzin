var express = require('express');
var fs = require('fs');
var router = express.Router();

var data = JSON.parse(fs.readFileSync('./public/data/data.json'));

/* GET about page. */
function index(req, res, next)
{
  res.render('index', {
    title: 'joshua polzin | home',
    page: 'home',
    imgPortrait: '/images/josh.jpg',
    introText: data.about.introText,
    projects: data.projects.slice(0, 4),
    education_summary: data.filler,
    coursework: data.education.coursework,
    skills: data.skills,
    experience: data.experience
  });
  console.log("homepage rendered")

}

router.get('/', index);


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





module.exports = router;
