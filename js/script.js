// ini JS external
//form tidak boleh,  buat sendiri
// function ValidationForm() {
//     let NameInput = document.getElementById('name-input');
//     let email = document.getElementById('email-input');
//     let OrderType = document.getElementById('OrderType');

//     if (NameInput.value == "") {
//         alert("Nama Tidak Boleh Kosong");
//     } else if (email.value == "") {
//         alert("Email Tidak Boleh Kosong");
//     } else if (OrderType.value == "") {
//         alert("Tipe Pesanan Tidak Boleh Kosong");
//     } else {
//         alert("Halo " + NameInput.value);
//     }
//generated by gpt fx dibawah
function ValidationForm() {
    let NameInput = document.getElementById('name-input');
    let email = document.getElementById('email-input');
    let OrderType = document.getElementById('OrderType');
    
    let emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; //mungkin maksud email patern rumus pertama text, kedua at ke tiga dot

    if (NameInput.value.trim() === "") {
        alert("Nama Tidak Boleh Kosong");
    } else if (email.value.trim() === "") {
        alert("Email Tidak Boleh Kosong");
    } else if (!emailPattern.test(email.value)) {
        alert("Format Email Tidak Valid! Gunakan format: contoh@domain.com");
    } else if (OrderType.value.trim() === "") {
        alert("Tipe Pesanan Tidak Boleh Kosong");
    } else {
        alert("Halo " + NameInput.value);
    }
}

// global declarasi
    let IndexBanner = 0;
    ShowBanner();
//penambahan incrementasi index banner 
function NextBanner () {
    IndexBanner += 1;
    ShowBanner();
}


function ShowBanner () {
    let banner = document.getElementsByClassName('main-banner');
    // if conditional supaya bisa memory barunya terupdate index banner 
    if (IndexBanner > banner.length- 1) {
        IndexBanner = 0;
    }
    
    //array loop display = hide sendiri
    for (let i=0; i < banner.length;i++) 
        {banner[i].style.display='none';

        }
    //Showe-d banner
        banner[IndexBanner].style.display ='block';
}
 //function vid kak yama
 setInterval(NextBanner, 3000);
 
//  ourpackage generated by gpt
document.querySelectorAll('.package button').forEach(button => {
    button.addEventListener('click', () => {
        alert('You selected: ' + button.parentElement.querySelector('h3').innerText);
    });
});
// chat gpt generated fungsi klik tombol call now
function callNow() {
    window.location.href = "tel:+123456789";
}