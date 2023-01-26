// Get all links that have the attribute "tracking=utm-source"
var links = document.querySelectorAll('a[tracking="utm-source"]');

// Get the current URL
var currentUrl = window.location.href;

// Check if the URL contains the utm_source parameter
if (currentUrl.indexOf("utm_source=") !== -1) {
  // Extract the value of the utm_source parameter
  var urlParams = new URLSearchParams(currentUrl.split("?")[1]);
  var utmSource = urlParams.get("utm_source")
  // Iterate over all links
  links.forEach(function(link) {
    // Replace the text "Google" with the value of the utm_source parameter
    link.href = link.href.replace("Google", utmSource);
  });
}