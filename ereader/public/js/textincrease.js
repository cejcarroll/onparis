$(#textsize).ready(function () {
    $("textsize").hover(
  function () {
     $("fontbox").slideDown('medium');
  }, 
  function () {
     $("fontbox").slideUp('medium');
  }
);

});