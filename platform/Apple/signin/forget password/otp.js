function sendOTP() {
    var email = document.getElementById('email').value;
    
    // Send a POST request to the PHP script
    fetch('../../../xampp/htdocs/send_otp.php', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'email=' + encodeURIComponent(email),
    })
    .then(response => response.text())
    .then(data => {
        alert("OTP sent to your email: " + data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
