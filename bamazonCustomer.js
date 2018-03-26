var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
//   begin();
});




// function begin() {
var purchases = [];
//connect to the mysql database, data pull
connection.query('SELECT item_id, product_name, price, stock_quantity FROM products', function(err, result){
    if(err) throw(err);
    

	var table = new Table({
		head: ['Item Id#', 'Product Name', 'Price', 'Quantity'],
	});

	//loops through each item in the mysql database and pushes that information into a new row in the table
	for(var i = 0; i < result.length; i++){
		table.push(
			[result[i].item_id, result[i].product_name, result[i].price, result[i].stock_quantity]
		);
	}
	console.log(table.toString());
	
	// purchase();
	// connection.end();
	// newFunction();

});
// }
//the purchase function so the user can purchase one of the items listed above
// var purchase = function(){
	// console.log("purchase");
	// var productInfo =
	 inquirer.prompt([
            {  
				type: 'input',
				name: 'itemIDS',
                message:'What is the ID of the item you would like to purchase?!'
            },
            {
				type: 'input',
				name: 'stockQ',
                message:'How Many units?'
            }
		])
		.then(function(res){
            var customerPurchase = {
                itemID: res.itemIDS,
                Quantity: res.stockQ
		}
		purchases.push(customerPurchase);
		newFunction();
	})
// };

// console.log(purchase)        
//  purchase();   
function newFunction(){    
        //the variable established above is pushed to the productPurchased array 
		// purchases.push(customerPurchase);
console.log(purchases.itemID)
console.log(purchases[0].itemID)
		//connects to mysql and selects the item the user selected above based on the item id number entered
		connection.query('SELECT * FROM products WHERE item_id=?', purchases[0].itemID, function(err, res){
				if(err) throw (err, 'That item ID does not exist');
				

				if(res[0].stockQ < purchases[0].stockQ){
					console.log('item not available');
					connection.end();
				} else if(res[0].stockQ >= purchases[0].stockQ){
					console.log('');
					console.log(purchases[0].stockQ + ' items purchased');
					console.log(res[0].product_name + ' ' + res[0].price);


					var saleTotal = res[0].price * purchases[0].stockQ;
					console.log('Total: ' + saleTotal);
					newQuantity = res[0].stockQ - purchases[0].stockQ;
			
		
					connection.query("UPDATE products SET stock_quantity = " + newQuantity +" WHERE Item_id = " + purchases[0].item_id, function(err, res){
						if(err) throw err;
						console.log('Problem ', err);
						console.log('');
						console.log('Your order has been processed.  Thank you for shopping with us!');
						console.log('');

						connection.end();
					})

				};

		})
	};
// newFunction();

// newFunction();
// console.log(purchase[0].item_id)
// console.log(purchases[0].itemID)

	