// ini JS external
console.log('console');
//form tidak boleh
function ValidationForm() {
    let NameInput = document.getElementById('name-input');
    let email = document.getElementById('email-input');
    let OrderType = document.getElementById('OrderType');

    if (NameInput.value == "") {
        alert("Nama Tidak Boleh Kosong");
    } else if (email.value == "") {
        alert("Email Tidak Boleh Kosong");
    } else if (OrderType.value == "") {
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
    
    //array loop display = hide
    for (let i=0; i < banner.length;i++) 
        {banner[i].style.display='none';

        }
    //Showe-d banner
        banner[IndexBanner].style.display ='block';
}
 //function 
 setInterval(NextBanner, 3000);
 