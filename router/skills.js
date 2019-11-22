const router = require('express').Router();
const skillsDb = require('../model/skills');

router.get('/', (req, res) => {
    filter = req.body
    skillsDb.getMany(filter)
        .then(skills => {
            res.status(200).json(skills);
        })
        .catch(err => res.send(err));
});

router.put('/', (req, res) => {
    skillsDb.update({id: req.body.id}, req.body.payload)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.send(err));
})

module.exports = router;