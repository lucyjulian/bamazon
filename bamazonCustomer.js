var mysql = require("mysql");

var inquirer = require("inquirer");

//INITIALIZE CONNECTION TO DATABSE
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "secret14",
  database: "bamazon"
});

// INITIAL CONNECTION TO THE DATABASE, CALLS NEXT FUNCTION
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayProducts();
});

function displayProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // console.log(res);
      for (var i = 0; i < res.length; i++){
          console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | $" + res[i].price);
      };
      makePurchase();
    });
};

function makePurchase(){
    // Create a "Prompt" with a series of questions.
    inquirer.prompt([
        // Here we create a basic text prompt.
        {
        type: "input",
        message: "What is the item_id of the product you'd like to purchase?",
        name: "id"
        },
        {
        type: "input",
        message: "How many units would you like to purchase?",
        name: "quantity"
        },
        {
        type: "confirm",
        message: "Are you sure?",
        name: "confirm",
        default: true
        }
    ])
    .then(function(inquirerResponse){
        if (inquirerResponse.confirm) {
            buyProduct(inquirerResponse.id, inquirerResponse.quantity);
        }
        else {
            console.log("\nThat's okay, come again when you are more sure.\n");
            connection.end();
        }
    });
};

function buyProduct(id, quantity){
    connection.query("SELECT * FROM products WHERE item_id = " + id, function(err, res) {
        if (err) throw err;
        // console.log(res);
        for (var i = 0; i < res.length; i++){
            var good = res[i];
            var alreadyInStock = good.stock_quantity;
            var newQuantity = alreadyInStock - quantity;
            if (alreadyInStock > quantity){
                console.log("There are " + good.stock_quantity + " " + good.product_name + " in stock.");
                console.log("You are purchasing " + quantity + " " + good.product_name + " for $" + good.price + " per unit: your total purchase will be $" + good.price*quantity + ".");
                updateDatabase(id, newQuantity);
            }
            else {
                console.log("Sorry, there are only " + alreadyInStock + " " + good.product_name + " in stock!");
                connection.end();
            }
        };
        
    });
};

function updateDatabase(id, newQuantity){
    connection.query("UPDATE products SET ? WHERE ?",
    [
        {
            stock_quantity: newQuantity
        },
        {
            item_id: id
        }
    ],
    function(err, res){
        if (err) throw err;
        console.log(res.affectedRows + " products updated!");
        connection.end();
    });
};