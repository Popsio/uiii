navigator.getBattery().then(function(battery) { 
var bat = battery.level; 
bat = Math.round(Number(bat*100))+'%';
function time() {
var d = new Date();
var hr = d.getHours();
var min = d.getMinutes();
if (min<10){
min = "0"+min;
}
if (hr>12){
hr = hr -12 ; 
}
var num = (Math.random()*100).toFixed(2);
document.getElementById("top").innerHTML = "<pre> " + hr + ':' + min + '                  ' + "<font id='txt'>" + num + 'KB/s' + "</font>" + "<i class='fas fa-wifi'></i> 5G<i class='fas fa-signal'></i><div id='bat'>" + bat + "</div></pre>";
}
setInterval(time,1000);
});

function func(){
    document.getElementsByTagName("IFRAME")[0].src = "https://pallaviqueen.github.io/fandroid/"
}

alert("Working Apps(Scroll right to see) :- \n1.Contacts\n2.Mesages\n3.Whatsapp\n4.Setting\n5.Calculator\n6.Chrome\n7.Chess\n8.Play Store\n9.Music(By V@msi)");

alert("Features (Go on Settings) :- \n1.Walpaper(40)\n2.Dark Mode\n3.Light Mode\n4.Brightness")

alert("There are alots of things in this program ao it may take time to load depending on your internet speed...\n\nFor Customization :- \n1.Go to settings > Wallpapers...\n2.Go to settings > Display...")
