/ app.ts

// Select form and output elements
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const outputName = document.getElementById("outputName") as HTMLElement;
const outputEmail = document.getElementById("outputEmail") as HTMLElement;
const outputPhone = document.getElementById("outputPhone") as HTMLElement;
const outputEducation = document.getElementById("outputEducation") as HTMLElement;
const outputExperience = document.getElementById("outputExperience") as HTMLElement;
const outputSkills = document.getElementById("outputSkills") as HTMLElement;

// Add event listener for form submission
resumeForm.addEventListener("submit", function (event: Event) {
    event.preventDefault();

    // Get values from form inputs
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Store data in localStorage
    const resumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills
    };
    localStorage.setItem("resumeData", JSON.stringify(resumeData));

    // Display the resume in output section
    displayResume(resumeData);
});

// Function to display resume from stored data
function displayResume(resumeData: any) {
    outputName.textContent = `Name: ${resumeData.name}`;
    outputEmail.textContent = `Email: ${resumeData.email}`;
    outputPhone.textContent = `Phone: ${resumeData.phone}`;
    outputEducation.textContent = `Education: ${resumeData.education}`;
    outputExperience.textContent = `Experience: ${resumeData.experience}`;
    outputSkills.textContent = `Skills: ${resumeData.skills}`;
}

// Check if resume data exists in localStorage on page load
window.onload = function () {
    const storedResume = localStorage.getItem("resumeData");
    if (storedResume) {
        const resumeData = JSON.parse(storedResume);
        displayResume(resumeData);
    }
};