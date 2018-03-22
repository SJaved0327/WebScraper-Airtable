var model = require("./models");
const inquirer = require("inquirer");
const cheerio = require("cheerio");
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const request = require("request");


//user accesses app in CLI 
function runCLI() {
	console.log("* * * * * * * * * * * * * * * * * * *");
	console.log("Find information related to your book's ISBN to plug into AirTable");
	inquirer
		.prompt([
		{
			name: "ISBN",
			type: "input",
			message: "Enter the item ISBN: ",
			validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
		}
		]).then(function(answer){

			const barcode = answer.ISBN; 

			nightmare
			  .goto("https://www.barcodelookup.com/")
			  .type(".search-input", barcode)
			  .click(".btn-search")
			  .wait(".product-details")
			  .evaluate(function(){
			    return document.body.innerHTML;
			  })
			  .then(function(html){
			  	//load html into cheerio
			  	
			  	let $ = cheerio.load(html);
			  	console.log(html);

		  	})
			  .catch(function(error) {
			    console.error("Search failed:", error);
			  });
			 })
			
			// //create empty array to hold result objects in
			// let results = [];
			// 	//grab every header tag with entry-header class
			// 	// $("div.col-md-6.product-details").each(function(i, element){
			// 	// 	//empty result object will be populated with key data pieces
			// 	// 	const result = {};
			// 	// 	//save the title of each article
			// 	// 	result.title = $(element)
			// 	// 		.find("h4")
			// 	// 		.text();
			// 	// 	//save the link of each article
			// 	// 	result.link = $(element)
			// 	// 		.find("h1")
			// 	// 		.children("a")
			// 	// 		.attr("href");
			// 	// 	//save summary of each article
			// 	// 	result.summary = $(element)
			// 	// 		.children("div.entry-summary")
			// 	// 	// 	.text();
			// 	// 	// //push result to results array
			// 	// 	results.push(result);
			// 	// 	console.log(`### Result ${i} ###`);
			// 	// 	console.log(result);

			// 	// })

			// 	console.log("* * * * * * * * * * * * * * * * * * *")

			// });

		// })
};

runCLI();
//kicks off inquirer where ISBN number is asked
//answer (ISBN number) is captured and fired off to cheerio

/* PT 1 */

//cheerio visits 2 webpages and scrapes:
// title
// picture URL
// barcode = ISBN
// author
// ebay
// chegg
// sellback
// textbooks
// rush 
// booksrun

// user receives console.log of final object

/* PT 2 */

// object is sent to airtable API as a post to create new entry where barcode matches
