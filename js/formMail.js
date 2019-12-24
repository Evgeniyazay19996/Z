$("#sendMail"). on("click", function(){
  var surname = $("#surname").val().trim();
  var name = $("#name").val().trim();
  var patronimyc = $("#patronimyc").val().trim();
  var email = $("#email").val().trim();
  var message = $("#message").val().trim();

if(email == "") {
  $("#errorMess").text();
  return false;
} else if(surname == "") {
  $("errorMess".text());
  return false;
} else if(name == "") {
  $("errorMess".text());
  return false;
} else if(patronimyc == "") {
  $("errorMess".text());
  return false;
} else if(message == "") {
  $("errorMess".text());
  return false;

}

$.ajax({
  url: 'ajax/mail.php',
  type: 'POST',
  cache: false,
  data: { 'surname': surname ,'name': name, 'patronimyc': patronimyc, 'email': email, 'message': message },
  dataType: 'html',
  beforeSend: function() {
    $("#sendMail").prop("disabled", true);
  },
  succes: function(data) {
    if(!data)
      alert("Сообщение не отправлено!");
    else


    $("#sendMail").prop("disabled", false);

  }
});

});
