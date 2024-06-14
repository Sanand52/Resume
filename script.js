// script.js
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});



// resume download

function downloadFile() {
    // URL of the file you want to download
    const fileUrl = '/docs/Resume.pdf';
    const fileName = 'Shubham_Anand.pdf';

    // Create a temporary <a> element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    // Append the <a> element to the document body
    document.body.appendChild(link);

    // Programmatically click the <a> element to trigger the download
    link.click();

    // Remove the <a> element from the document
    document.body.removeChild(link);
}