//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

//Branching  0-application-classification 
router.post('/application-type-answer', function(req, res) {
  
  // 1. Look at the exact name you used in your form
  var typeOfApplication = req.session.data['preapplication-or-application']
  
  // 2. Check if they picked "Pre-application"
  if (applicationClassification == 'Pre-application') {
    
    // Send them to the pre-application page (change this to your actual page name!)
    res.redirect('/1-application-type') 
    
  } else {
    
    // Otherwise, send them to the regular application page
    res.redirect('/0-application-stage ') 
    
  }
  
})

//error message 0-application-classification
router.post('/0-application-classification-answer', function (req, res) {
  // Obtenemos la respuesta que el usuario seleccionó
  var applicationType = req.session.data['preapplication-or-application']

  // 1. Si no seleccionó nada, mostramos el error
  if (!applicationType) {
    // IMPORTANTE: Cambia 'your-folder/your-page' por la ruta de tu archivo HTML actual
    res.render('/0-application-classification', { error: true })
  } 
  else if (applicationType === 'Pre-application') {
    res.redirect('/1-application-type')
  } 
  else if (applicationType === 'Application') {
    res.redirect('/0-application-stage')
  } 
  
})



//error message 0-application-stage 
router.post('/1-application-type', function (req, res) {
  // Grab the answer using the "name" attribute from your radios
  var majorCaseType = req.session.data['major-or-nonmajor']

  if (!majorCaseType) {
    // If blank, reload THIS page and turn on the error messages.
    // IMPORTANT: Change 'your-folder/this-page' to the exact path of the page you are currently on.
    res.render('/0-application-stage', { error: true })
  } 
  else {
    // If they picked an option, send them to the actual next page (03Question)
    res.redirect('/1-application-type')
  }
})

//error message 1-application-type
router.post('/1-application-type-answer', function (req, res) {
  // Grab the answer using the "name" attribute from your radios
  var aplicationTypeAnswer = req.session.data['application-type']

  if (!aplicationTypeAnswer) {
    // If blank, reload THIS page and turn on the error messages.
    // IMPORTANT: Change 'your-folder/this-page' to the exact path of the page you are currently on.
    res.render('/1-application-type', { error: true })
    errorAplicationType: "Select the type pf application "
  } 
  else {
    // If they picked an option, send them to the actual next page (03Question)
    res.redirect('/2-planning-authority')
  }
})

//error message 2-planning-authority
router.post('/2-planning-authority-answer', function (req, res) {
  // Grab the answer using the "name" attribute from your radios
  var planningAuthority = req.session.data['planning-authority']

  if (!planningAuthority) {
    // If blank, reload THIS page and turn on the error messages.
    // IMPORTANT: Change 'your-folder/this-page' to the exact path of the page you are currently on.
    res.render('/2-planning-authority', { error: true })
  } 
  else {
    // If they picked an option, send them to the actual next page (03Question)
    res.redirect('/3-check-answers')
  }
})
