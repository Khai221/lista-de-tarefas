$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        const nomeDaTarefa = $('#tarefaInput').val()
        const novaTarefa = $(`<li>${nomeDaTarefa}</li>`)

        $(novaTarefa).appendTo('ul')
        $('input').val('')

        $('ul').on('click', 'li', function(e){
            e.preventDefault()
            $(this).toggleClass('riscarTarefa')
        })
    })


  })