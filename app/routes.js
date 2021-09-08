const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'Disability-answer'
router.post('/Disability-answer', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var disability = req.session.data['disability']

  // Check whether the variable matches a condition
  if (disability == "yes"){
    // Send user to next page
    res.redirect('/Disability-Conditions')
  } else {
    // Send user to ineligible page
    res.redirect('/Ethnicity')
  }

})
// Run this code when a form is submitted to 'Ethnicity-answer'
router.post('/Ethnicity-answer', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var ethnicity = req.session.data['ethnicity']

  // Check whether the variable matches a condition
  if (ethnicity == "asian"){
    // Send user to next page
    res.redirect('/asia')
  } else if (ethnicity == "black") {
    // Send user to next page
    res.redirect('/africa')
 }  else if (ethnicity == "multiple") {
// Send user to next page
res.redirect('/mixed')
} else if (ethnicity == "white") {
  // Send user to next page
  res.redirect('/whit')
} else if (ethnicity == "other") {
  // Send user to next page
  res.redirect('/another')

} else if (ethnicity == "skip") {
  // Send user to ineligible page
  res.redirect('/Sex')

}

})
// Run this code when a form is submitted to 'caring-answer'
router.post('/caring-answer', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var disability = req.session.data['disability']

  // Check whether the variable matches a condition
  if (disability == "yes"){
    // Send user to next page
    res.redirect('/hour')
  } else {
    // Send user to ineligible page
    res.redirect('/education')
  }

})

module.exports = router
