//Check off Specific Todos by clicking

$('ul').on('click', 'li', function(){
    $(this).toggleClass("strike-list-item");
});

$('ul').on('click', 'span', function(event){
   $(this).parent().slideUp(function(){
       $(this).remove();
   });
   event.stopPropagation();
});

$("input").on('keypress', function(e){
    if(e.which === 13){
        console.log("Hi");
        $('ul').append("<li><span><i class='fas fa-trash'></i></span> " + $(this).val() + "</li>");
        $(this).val("");
    }
});

$(".fa-plus-circle").click(function(){
    $('input').slideToggle();
});