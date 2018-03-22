var model = require("./models");



// ajax call to airtable
$.ajax({
    method: "GET",
    url: "/scrape"
  })
  	.done((data) => {

  		if (data){
  			alert(`You've got ${data.length} epic lists to read!`);
  		}else{
  			alert(`No epic lists today!`);
  		}
  		
  		data.forEach((item) => {

  			const article = $("<div class='card'>");

  			article.append(`<div class='card-header'><h5><a target='_blank' href='${item.link}'>${item.title}</a><button id='save-button' class='badge badge-info'>Save</button></h5></div>`);

  			article.append(`<div class='card-body'><p class='card-text'>${item.summary} . . . </p></div>`);

  			$("#article-div").append(article);

  		});