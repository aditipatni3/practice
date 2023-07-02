document.getElementById('healthReportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Perform any client-side validation if required

    // Submit the form via AJAX
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', this.action, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert('Form submitted successfully!');
        // Optionally perform any additional actions after form submission
      }
    };
    xhr.send(formData);
  });