function informing(){
    let name = document.getElementById('stuffid1').value;
    let desc = document.getElementById('stuffid2').value;
    let type = document.getElementById('stuffid3').value;
    document.getElementById('filler').innerHTML = name + desc+ type;
    console.log(document.cookie);
    createCookie("test", "value", 5);
}
function createCookie(name, value, days){
    var expires = '',
        date = new Date();
    if (days) {
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toGMTString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}
window.onload = function(){
    console.log(document.cookie);
}