"use strict";


/* <h1>Hello, change me to blue please!</h1>

<div class="red-div">Please turn me red!</div>

<ul><li>Turn this li to green!</li><li>Turn this li to pink!</li>
</ul>
  
<div id="brown-div">Turn me brown!</div> */

$("h1").css("color", "blue");
$("div.red-div").css("background-color", "red");
$("ul > li:first-child").css("color", "green");
$("ul > li:last-child").css("color", "pink");
$("div#brown-div").css("color", "brown");

$("#b1").addClass("box");
$("#b2").addClass("box");

$("#my-input").val("Terabyte");

console.log("The item with barcode " + $("#product").data().barcode + " will expire on " + $("#product").data().expirationdate); 

$("#hover-blue").on("mouseenter", () => $("#hover-blue").css("background-color", "blue"));
$("#hover-blue").on("mouseleave", () => $("#hover-blue").css("background-color", "white"));

$("#btn-showmyinput").on("click", () => alert($("#my-newinput").val()));

$("#b1").hover(function () {
    console.log(this, typeof this)
    console.log($(this))
})

$(".box").hover(function() {
    // $(this).css("background-color", "blue");
    $(this).remove()
    });

$(".feedme").on("click", function(){
    let divCopy = $(this.outerHTML)//use template literals and $(this)
    
    $("body").append(divCopy)
  })
  
  const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
  ]
  
  names.forEach((item) => $("body").append($(`<div>${item.first} - ${item.last}</div>`)))

$("#post-blog").on("click", function() {
    $("#blogs").append($(`<div class="blog">Wow</div>`))
    $(".blog").on("click", function() {
        $(this).text("blargh");
    });
});

$('#btn').click(() => alert('hi'))


