const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/country-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var country = req.session.data['where-do-you-live']

    // Check whether the variable matches a condition
    if (country == "England"){
        res.redirect('/somthing')
    } else if (country == "Scotland") {
        res.redirect('/ineligible')
    } else if (country == "Northern Ireland"){
        res.redirect('/somthing-else')
    } else if (country == "Wales"){
        res.redirect('/somthing-else-else')
    }
})
module.exports = router
