const router = require('express').Router(),
    request = require('request')


router.route('/').get((req, res) => {
    
    res.render('index')
})
router.route('/add').get((req, res) => res.render('add'))

module.exports = router