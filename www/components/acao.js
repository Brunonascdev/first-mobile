$(document).on("click","#soma", function(){
  var v1 = $("#val1").val();
  var v2 = $("#val2").val(); 
  var result = parseFloat(v1) + parseFloat(v2);

  $("#resultado").val(result);
});