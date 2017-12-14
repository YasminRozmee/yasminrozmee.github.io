document.getElementById('changeme').style.background = '#fff';

var bgcolors = ['#f5977d', '#fcc58e', '#fff69f', '#c5de9e', '#7dccc8', '#7fa8d7', '#8494c8', '#bc8ebe', '#f39bc1', '#f4999e', '#fff'];

var i = 0;

function change(){  
    document.getElementById("changeme").style.backgroundColor = bgcolors[i];
}

var bgcolhex = ['pointless', 'so', 'something', 'button', 'this', 'clicking', 'to keep', 'you', 'I dare', 'cute', 'youre'];

function changeText(){
    document.getElementById("colorvalue").innerHTML = bgcolhex[i++];
    if(i == bgcolhex.length) i = 0;
}
