// Declare these variables only once
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
if (!form) {
    console.error("Form element not found.");
}
if (!resumeDisplayElement) {
    console.error("Resume display element not found.");
}
// Handle form submission
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate resume content dynamically
    var resumeHtml = "\n        <h2><b>Editable Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n        <p><b>Phone:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n\n        <h3>Education:</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n\n        <h3>Experience:</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n\n        <h3>Skills:</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
        console.log("Resume displayed successfully.");
    }
    else {
        console.error("The resume display element is missing.");
    }
});
