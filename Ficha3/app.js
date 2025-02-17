

function started(){
    console.log("Started Download");
}

function update(value){
    console.log("Downlaoded" + value + "%")
}


function completed(){
    console.log("Completed Download");
}

function performDownload(a, b, c){
    a();
    for (let i = 0; i <= 100; i++) {
        b(i);
        
    }
    c();
}

//performDownload(started, update, completed)

var arrayUtils = require('./ArrayUtils');

var array = [];

var empty = arrayUtils.isEmpty(array); 
