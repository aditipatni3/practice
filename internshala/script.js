// Get references to the left panel and content section
const leftPanel= document.getElementById("left-panel");
const content= document.getElementById("content");
// Add event listeners to each component in the left panel
document.getElementById('home').addEventListener('click', showHome);
document.getElementById('contact').addEventListener('click', showContact);
document.getElementById('information').addEventListener('click', showInformation);
document.getElementById('guide').addEventListener('click', showGuide);
// Functions to show the corresponding content
function showHome() {
  content.innerHTML = `<h1>Welcome to the Home Page!</h1>
    <p>Paragraph on home page</p>`;
}
function showContact() {
  content.innerHTML = `<h1>Contact</h1>
    <p>Contact information goes here.</p> `;
}
function showInformation() {
  content.innerHTML = `<h1>Information</h1>
    <p>Some information goes here.</p>`;
}
function showGuide() {
  content.innerHTML = `<h1>Guide</h1>
    <p>Guide information goes here.</p>`;
}