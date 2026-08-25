//Store books in an object.
//Add functionality to check availability and restock books.

function createBook(title, author, availableQuantity) {
  return {
    bookTitle: title,
    bookAuthor: author,
    bookQuantity: availableQuantity,
    checkAvailability: function () {
      if (this.bookQuantity === 0) {
        console.log(`${this.bookTitle} is not available`);
      } else {
        console.log(
          `${this.bookQuantity} books are availble for ${this.bookTitle}`,
        );
      }
    },
    updateQuantity: function (restock) {
      restock > 0
        ? (this.bookQuantity = this.bookQuantity + restock)
        : console.log("restock quantity cannot be less than 1");
    },
  };
}

const book1 = createBook("sophie's world", "Jostein Gaarder", 23);
const book2 = createBook("The Republic", "Plato", 12);
const book3 = createBook("Meditations", "Marcus Aurelius", 0);

console.log(book1);
console.log(book2);
console.log(book3);

// checkbook availability
book1.checkAvailability();
book2.checkAvailability();
book3.checkAvailability();

// updateQuantity
book1.updateQuantity(10);
book1.checkAvailability();

book1.updateQuantity(-5); //error message since restock value is less than 1
book2.updateQuantity(3);
book3.updateQuantity(5);

book1.checkAvailability();
book2.checkAvailability();
book3.checkAvailability();

// console.log(book1);
