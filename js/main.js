$(function () {
  $(".image-link").click(function () {
    $("body").append('<div id="bg">');
    $("body").append('<div id="photo">');

    $("#bg").hide();
    $("#photo").hide();

    $("#photo").html("<img>");

    $("#photo img").attr("src", $(this).attr("href"));

    $("#photo img").attr("width", 505);
    $("#photo img").attr("height", 770);
    $("#photo img").attr("alt", "Photo");

    $("#bg").fadeIn();
    $("#photo").fadeIn();

    $("#bg").click(function () {
      $(this).fadeOut(function () {
        $(this).remove();
      });

      $("#photo").fadeOut(function () {
        $(this).remove();
      });
    });

    return false;
  });
});
