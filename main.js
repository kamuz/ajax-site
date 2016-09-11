$('a').on('click', function(e){
  var href = $(this).attr('href');
  e.preventDefault();
  $('.container').load(href + ' .container');
})