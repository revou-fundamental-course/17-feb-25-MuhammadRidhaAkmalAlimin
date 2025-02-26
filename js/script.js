// ini JS external 
document.getElementById("ContactForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const orderType = document.getElementById("OrderType").value;

    if (name === "" || email === "" || orderType === "") {
        event.preventDefault(); // Mencegah form dikirim jika ada input kosong
        document.getElementById("error-message").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "none";
    }
});