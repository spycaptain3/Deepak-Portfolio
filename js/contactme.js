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
        Password: "29FC7840704FD5A3AC6ED4B7A29B812CE105",
        To: 'spycaptain7@gmail.com',
        From: "spycaptain10@gmail.com",
        Subject: "This is the subject",
        Body: desc
    })
    .then(message => alert(message))
    .catch(err => console.log(err));
}