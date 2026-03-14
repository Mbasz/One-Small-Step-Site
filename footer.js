(function () {
    var path = location.pathname;
    var isHome = path.endsWith("/") || path.endsWith("index.html");
    var isPrivacy = path.endsWith("privacy.html");
    var isTerms = path.endsWith("terms.html");

    var links = [];
    if (!isHome) links.push('<a href="index.html">Home</a>');
    if (!isPrivacy) links.push('<a href="privacy.html">Privacy Policy</a>');
    if (!isTerms) links.push('<a href="terms.html">Terms of Service</a>');
    links.push('<a href="mailto:mbasz.software@gmail.com">Contact</a>');

    var footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML =
        '<div class="footer-links">' + links.join("") + "</div>" +
        "<p>Nami Apps is operated by Marta Basznianin Software, Poland.</p>" +
        "<p>&copy; 2026 Nami Apps. All rights reserved.</p>";

    document.body.appendChild(footer);
})();
