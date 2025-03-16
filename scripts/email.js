document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("GPJH6EwhNN2tuj5Zt");

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        // Send email using EmailJS
        emailjs.send("service_uykrvbm", "template_8ipn3ji", formData)
            .then(function (response) {
                document.getElementById("status-message").innerHTML = `<span style="color: green;">Message sent successfully!</span>`;
                document.getElementById("contact-form").reset();
            }, function (error) {
                console.log("Failed to send message. Error: ", error);
                document.getElementById("status-message").innerHTML = `<span style="color: red;">Failed to send message. Try again later.</span>`;
            });
    });
});
