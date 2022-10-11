var index = 1;
changeImages = function(){
    var imgs = ["/imgs/combo-2.jpg","/imgs/combo-7.jpg","/imgs/combo-17.jpg","/imgs/combo-18.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if (index == 4) {
        index = 0;
    }
}
setInterval(changeImages ,3000)

var a = 1;
changeFeedbacks = function(){
    var fb = ["/imgs/gt-1.jpg","/imgs/rvd1.jpg","/imgs/rvd2.jpg","/imgs/in.jpg","/imgs/mcl-3.jpg"];
    document.getElementById('fbs').src = fb[a];
    a++;
    if (a == 5) {
        a = 0;
    }
}
setInterval(changeFeedbacks, 3000)