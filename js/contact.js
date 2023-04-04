function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let msg = document.getElementById("message").value;

    let desc = " Name: " + name
        + "<br> Email: " + email
        + "<br> Phone no: " + phone
        + "<br> Message: " + msg;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "spycaptain10@gmail.com",
        Password: "82235BCF18195C010447D379B2060EF497DB",
        To: 'spycaptain7@gmail.com',
        From: "spycaptain10@gmail.com",
        Subject: "This is the subject",
        Body: desc
    })
    .then(message => alert(message))
    .catch(err => console.log(err));
}