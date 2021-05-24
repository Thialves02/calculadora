function insert(num){
    var number = document.getElementById('text').innerHTML;
    document.getElementById('text').innerHTML = number + num;
}

function erase(){
    var result = document.getElementById('text').innerHTML;
    document.getElementById('text').innerHTML = result.substring(0, result.length -1);
}

function clean(){
    document.getElementById('text').innerHTML = "";
}

function calc(){
    var result = document.getElementById('text').innerHTML;
    if(result ==''){
        document.getElementById('text').innerHTML= 'Put a value';
    }else{
    document.getElementById('text').innerHTML = eval(result);
    }
}

