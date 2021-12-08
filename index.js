// Send data to database on form submission
window.addEventListener("load", function() {
    function sendData(event) {
        let request = new XMLHttpRequest();

        // Define behavior on successful request
        request.addEventListener("load", function(event) {
            alert(event.target.responseText);
        });

        // Define behavior on failed request
        request.addEventListener("error", function(event) {
            alert("An error has occurred, unable to process request.");
        });

        // Create form data object and send to db
        const formData = new FormData(form);
        if (formData.get("username") == "" || formData.get("password") == "" || formData.get("email") == "") {
            alert("Please fill out all of the required fields.")
        } else {
            request.open("POST", "http://localhost:5000/app/new/");
            var formVals = new URLSearchParams(formData);   // Sending FormData object directly wasn't working
            request.send(formVals);
        }
    }

    const form = document.getElementById("createAccountForm");

    // Define behavior for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        sendData(event);
    })
})