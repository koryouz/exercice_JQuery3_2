$(document).ready(function(){
  var n=0;
  $('#clickadd').click(function(){
    n=n+1;
    $('#nbclick').text('Nombres de click : '+ n);
  });
  $('#clickminus').click(function(){
    n=n-1;
    $('#nbclick').text('Nombres de click : '+ n);
  });
});
