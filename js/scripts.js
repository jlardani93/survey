$(document).ready(function() {

  $("#info").submit(function(event) {

      $(".name").text($("#name").val());
      $(".gender").text($("#gender").val());
      $(".flavor").text($("input:radio[name=flavor]:checked").val());
      $(".dob").text($("#born").val());
      $(".response").show();

      event.preventDefault();
  });
});
