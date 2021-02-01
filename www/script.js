var HexHeight = $(".hexagon").outerHeight(true);
var ContHeight = $(".container").outerHeight();
var ContWidth = $(".container").outerWidth(true);
var WinWidth = $(".window").outerWidth();


var numBoxes = Math.ceil(ContHeight/HexHeight)*2;
var numBoxes2 = Math.ceil(WinWidth/25);

for(var i = 0;i<numBoxes;i++){
    $($( ".hexagon" ).get(0)).clone().appendTo( ".container" );
}
for(var i = 0;i<numBoxes2;i++){
    $($( ".container" ).get(0)).clone().appendTo( ".window" );
}
 $(document).ready(function() {
    var randomColors = ["ful","reg","emp"];
    $(".hexagon").each(function(index) {
        var len = randomColors.length;
        //var randomNum = Math.floor(Math.random()*len);
        $(this).addClass(randomColors[0]);
    });//var elements = document.querySelectorAll(':hover');
 });  