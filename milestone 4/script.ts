// Declare these variables only once
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

if (!form) {
    console.error("Form element not found.");
}
if (!resumeDisplayElement) {
    console.error("Resume display element not found.");
}

// Handle form submission
form?.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generate resume content dynamically
    const resumeHtml = `
        <h2><b>Editable Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
        <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
        <p><b>Phone:</b><span contenteditable="true"> ${phone}</span></p>

        <h3>Education:</h3>
        <p contenteditable="true">${education}</p>

        <h3>Experience:</h3>
        <p contenteditable="true">${experience}</p>

        <h3>Skills:</h3>
        <p contenteditable="true">${skills}</p>
    `;

    // Display the resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
        console.log("Resume displayed successfully.");
    } else {
        console.error("The resume display element is missing.");
    }
});
