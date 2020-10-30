$(document).ready(function() {
    var drinkContainer = $("ENTERCONTAINER TO APPEND TO HERE")

    getDrink()
    
})

function getDrink(drink) {
    console.log("hello", drink)
    $.post("/api/getdrinks", drink) 
}