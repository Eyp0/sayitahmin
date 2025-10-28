
let rastgeleSayi = Math.floor(Math.random() * 100) + 1;

function tahmin(){
    let tahmin = document.getElementById("tahmin").value;
    let sonuc ="";
    if(tahmin < 1 || tahmin > 100){
        document.getElementById("sonucalani").innerHTML = "Lütfen 1 ile 100 arasında bir sayı girin.";
        return;
    }
    if(tahmin < rastgeleSayi){
        sonuc = "Daha yüksek bir sayı girin.";
    }
    else if(tahmin > rastgeleSayi){
        sonuc = "Daha düşük bir sayı girin.";
    }
    else{
        sonuc = "Tebrikler! Doğru tahmin.";
    }

   document.getElementById("sonucalani").innerHTML = sonuc;
}

function tekrarBaslat(){
    rastgeleSayi = Math.floor(Math.random() * 100) + 1;
    document.getElementById("sonucalani").innerHTML = "";
    document.getElementById("tahmin").value = "";
}