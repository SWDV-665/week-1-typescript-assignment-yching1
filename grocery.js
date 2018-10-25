var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price, color) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.color = color;
        console.log("buy item " + name, " with quantity " + quantity, " for price $" + price, "with color " + color);
    }
    return Grocery;
}());
function grocery(product) {
    return "Buy item " + product.name + " with quantity " + product.quantity + " for price $" + product.price + product.color + ".";
}
//let veggie = new Vegetable("Cabbage", 3, 5);
var veggies = [
    new Grocery("Cabbage", 3, 5, "green and white"),
    new Grocery("Lettuce", 5, 3, "green"),
    new Grocery("Carrot", 10, 1, "orange"),
    new Grocery("Bell Pepper", 2, 2, "yellow"),
    new Grocery("Egg", 12, 3, "white"),
    new Grocery("Bread", 12, 2, "brown"),
    new Grocery("Milk", 1, 2, "blue")
];
var textcontent;
textcontent = "";
// for loop to create body text based on function grocery and list of veggies
for (var i = 0; veggies.length > i; i++) {
    textcontent += "<br>" + grocery(veggies[i]) + "<br>";
}
// You can only see the last document.body.innerHTML
//document.body.innerHTML = grocery(veggies[i]);
//document.body.innerHTML = grocery(veggie);
document.body.innerHTML = textcontent;
