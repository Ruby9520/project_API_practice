$(document).ready(function($){
    const app = $('#root');
    const container = $('.container');
    var request=new XMLHttpRequest();
    request.open('GET', 'https://ghibliapi.herokuapp.com/films');
    request.onload=function(){
    //start accessing JSON data
        var data = JSON.parse(this.response);
        if(request.status >=200 && request.status <400){    
            data.forEach(movie => {
                console.log(movie.title);
                // card ¥»¤H
                const card= document.createElement('div');
                card.setAttribute('class', 'card col-md-4 col-lg-6');
                //title
                const h1 = document.createElement('h1');
                h1.text(movie.title);
                //h1.textContent=movie.title;
                //content
                const p = document.createElement('p');
                movie.description= movie.description.substring(0, 300);
                //des.text('$(movie.description)'+'...');
                p.textContent = `${movie.description}...`;
                card.append(h1, p);
                container.append(card);
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