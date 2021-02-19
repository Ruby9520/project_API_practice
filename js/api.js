$(document).ready(function($){
    const root = $('#root');
    const root_inner=$('#root_inner');
    const container = $('.container');
    $.get('https://ghibliapi.herokuapp.com/films', function(data){
        var response= data;
        //var response = Object.assign({}, data);//arrayÂàobject
        //var response = JSON.stringify(data); //array Âàjson
        response.forEach(movie => {
            //console.log(movie.title);
            const card= document.createElement('div');
            //attr is not a function, cause jQuery object are plain DOM elements, you can wrap it up by $()
            $(card).attr('class', 'card col-md-6');
            
            const card_child=document.createElement('div');
            $(card_child).attr('class', 'card_child');
            //title
            const h1 = document.createElement('h1');
            $(h1).text(movie.title);
            //content
            const p = document.createElement('p');
            movie.description= movie.description.substring(0, 300);
            p.textContent = `${movie.description}...`;
            const hr= document.createElement('hr')
            card_child.append(h1, hr, p);
            card.append(card_child);
            root_inner.append(card);
        });
    });
})
