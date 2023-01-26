// Get all buttons that have the attribute "tracking=utm-source"
var buttons = document.querySelectorAll('a[tracking="utm-source"]');

// Get the current URL
var currentUrl = window.location.href;

// Check if the URL contains the utm_source parameter
if (currentUrl.indexOf("utm_source=") !== -1) {
  // Extract the value of the utm_source parameter
  var utmSource = currentUrl.split("utm_source=")[1];

  // Iterate over all buttons
  buttons.forEach(function(button) {
    // Replace the text "Google" with the value of the utm_source parameter
    button.href = button.href.replace("Google", utmSource);
  });
}