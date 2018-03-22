function Book (title, picture, barcode, author, ebay, chegg, sellback, textbooks, rush, booksrun) {
	this.title = title;
	this.picture = picture;
	this.barcode = barcode; 
	this.author = author;
	this.ebay = ebay;
	this.chegg = chegg;
	this.sellback = sellback;
	this.textbooks = textbooks;
	this.rush = rush;
	this.booksrun = booksrun;
}

module.exports = Book;