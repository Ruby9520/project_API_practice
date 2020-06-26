$(document).ready(function($){
    const app = $('#root');
    
    var request=new XMLHttpRequest();
    request.open('GET', 'https://ghibliapi.herokuapp.com/films');
    request.onload=function(){
    //start accessing JSON data
        var data = JSON.parse(this.response);
        if(request.status >=200 && request.status <400){    
            data.forEach(movie => {
                console.log(movie.title);
            })
        }else{
            console.log('somthing goes wrong');
        }
    }
    request.send();
})


/*
$(document).ready(function($){
    var request = $.get('https://ghibliapi.herokuapp.com/films', function(data){
    });
    var data= JSON.parse(this.response);
    data.each(function(movie){
        console.log(movie.title);
    });
}) */