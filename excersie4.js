console.log("This is Exerscise 4");

class library{
    constructor(bookList ){
        
        this.bookList=bookList;
        this.issuedBooks={};

    }
    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
            
        });

    }
    issueBook(bookName,user){
        if(this.issuedBooks[bookName]==undefined)
        {
        this.issuedBooks[bookName]=user;
        }
        else
        {
            console.log("This book is not available")
        }
       
        
    }
    returnBook(bookName)
    {
        delete this.issuedBooks[bookName]
    }

}

omeelib=new library(['lgend omee','legend bharti','legend omee bharti'])
console.log(omeelib.getBookList())



