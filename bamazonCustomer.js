//npm installs 
var mysql = require('mysql'); 
var colors = require('colors/safe');
var inquirer = require('inquirer');
var Table = require('easy-table');

//create connection to mysql through a root with a password
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sqlpass',
    database: 'bamazon'
})

//connect to mysql, once connected run the start function 
connection.connect(function(err) {
    if (err) throw err;
    start();
});

//start function 
function start() {
    connection.query("SELECT * FROM products", function (err, result, fields) {
        if (err) throw err;
        var data = result;
        var t = new Table
        
       data.forEach(function(products) {
         t.cell('Item ID Number', products.item_id)
         t.cell('Product Name', products.product_name)
         t.cell('Department Name', products.department_name)
         t.cell('Price, USD', products.price)
         t.cell('Stock Quantity',  products.stock_quantity)
         t.newRow()
       })
        
       console.log(colors.rainbow(t.toString()));
   
inquirer.prompt(
        {
          type: 'input',
          name: 'itemID',
          message: 'What is the ID Number of the item that you would like to buy?',
       
        }).then(function(answer) {
        // console.log(answer.itemID);
          connection.query("SELECT * FROM products WHERE ?", {item_id: answer.itemID}, function(err, res) {
            if (err) throw (err);
            console.log("You chose " + res[0].product_name + " for " + "$" + res[0].price + "!");
            var chosenItem = answer.itemID;
            // console.log(chosenItem);
            
     
      inquirer.prompt(
        {
          type: 'input',
          name: 'quantity',
          message: 'How many would you like?',
        }).then(function(answer){
          console.log("Great! You chose to buy " + answer.quantity + ", " + "let me check my inventory.");
        var timer = setTimeout(checkInventory, 2000)
             function checkInventory() {
               connection.query("SELECT * FROM products WHERE ?", {item_id: chosenItem}, function(err, res){
                if (err) throw (err);
                if (res[0].stock_quantity >= answer.quantity) {
                  console.log("It looks like we have plenty.");
                  console.log(colors.green("Your total is " + "$" + parseInt(answer.quantity)*parseInt(res[0].price) + "!"));
                }
               })
             
            }
    })
  
              })

})
    })
}

