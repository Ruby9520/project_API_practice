/*$(document).ready(function($){
    const root = $('#root');
    const root_inner=$('#root_inner');
    const container = $('.container');
    var request=new XMLHttpRequest();
    request.open('GET', 'https://ghibliapi.herokuapp.com/films');
    request.onload=function(){
    //start accessing JSON data
        var data = JSON.parse(this.response);
        console.log(typeof data);
        if(request.status >=200 && request.status <400){
            data.forEach(movie => {
                // card ���H
                const card= document.createElement('div');
                card.setAttribute('class', 'card col-md-6');
                
                const card_child=document.createElement('div');
                card_child.setAttribute('class', 'card_child');
                //title
                const h1 = document.createElement('h1');
                h1.textContent=movie.title;
                //content
                const p = document.createElement('p');
                movie.description= movie.description.substring(0, 300);
                p.textContent = `${movie.description}...`;
                const hr= document.createElement('hr')
                card_child.append(h1, hr, p);
                card.append(card_child);
                root_inner.append(card);
                //container.append(root);
            })
        }else{
            console.log('somthing goes wrong');
        }
    }
    request.send();
})*/



$(document).ready(function($){
    const root = $('#root');
    const root_inner=$('#root_inner');
    const container = $('.container');
    
    $.get('https://ghibliapi.herokuapp.com/films', function(data){
        console.log(data);
        var response= data;
        //var response = Object.assign({}, data);//array��object
        //var response = JSON.stringify(data); //array ��json
        //var response = JSON.stringify(Object.assign({}, data));
        console.log(typeof response);
        response.forEach(movie => {
            console.log(movie.title);
            const card= document.createElement('div');
            card.attr('class', 'card col-md-6');
            
            const card_child=document.createElement('div');
            card_child.attr('class', 'card_child');
            //title
            const h1 = document.createElement('h1');
            h1.text(movie.title);
            //content
            const p = document.createElement('p');
            movie.description= movie.description.substring(0, 300);
            p.textContent = `${movie.description}...`;
            const hr= document.createElement('hr')
            card_child.append(h1, hr, p);
            card.append(card_child);
            root_inner.append(card);
            //container.append(root);
        });
    });
})