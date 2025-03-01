let userName = prompt("nhập vào", '');

if (userName == 'ADMIN'){
    let pass = String(prompt('Password', ''));
    if (pass == 'TheMaster'){
        alert( 'Welcome')
    } else if (pass == null){
        alert( 'Canceled');
    } else {
        alert( "Wrong password");
    }
} else if (userName == null){
    alert( "Canceled");
} else {
    alert(  "I don't know you");
}