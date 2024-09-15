/ app.ts;
// Select form and output elements
var resumeForm = document.getElementById("resumeForm");
var outputName = document.getElementById("outputName");
var outputEmail = document.getElementById("outputEmail");
var outputPhone = document.getElementById("outputPhone");
var outputEducation = document.getElementById("outputEducation");
var outputExperience = document.getElementById("outputExperience");
var outputSkills = document.getElementById("outputSkills");
// Add event listener for form submission
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get values from form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Store data in localStorage
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    // Display the resume in output section
    displayResume(resumeData);
});
// Function to display resume from stored data
function displayResume(resumeData) {
    outputName.textContent = "Name: ".concat(resumeData.name);
    outputEmail.textContent = "Email: ".concat(resumeData.email);
    outputPhone.textContent = "Phone: ".concat(resumeData.phone);
    outputEducation.textContent = "Education: ".concat(resumeData.education);
    outputExperience.textContent = "Experience: ".concat(resumeData.experience);
    outputSkills.textContent = "Skills: ".concat(resumeData.skills);
}
// Check if resume data exists in localStorage on page load
window.onload = function () {
    var storedResume = localStorage.getItem("resumeData");
    if (storedResume) {
        var resumeData = JSON.parse(storedResume);
        displayResume(resumeData);
    }
};
