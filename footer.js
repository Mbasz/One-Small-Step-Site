(function () {
    var path = location.pathname;
    var isHome = path.endsWith("/") || path.endsWith("index.html");
    var isPrivacy = path.endsWith("privacy.html");
    var isTerms = path.endsWith("terms.html");

    var links = [];
    if (!isHome) links.push('<a href="index.html">Home</a>');
    if (!isPrivacy) links.push('<a href="privacy.html">Privacy Policy</a>');
    if (!isTerms) links.push('<a href="terms.html">Terms of Service</a>');

    var footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML =
        '<div class="footer-links">' + links.join("") + "</div>" +
        "<p>&copy; 2026 Marta Basznianin Software. All rights reserved.</p>";

    document.body.appendChild(footer);
})();
