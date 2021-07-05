class media{
    constructor(title){
      this._title = title;
      this._ischeckkedout = false;
      this._rating=[];
  
    }
    get title(){
  
  return this._title
    }
   get isChekckedout(){
  
  return this._isCheckedout
    }
    get rating(){
  
  return this._rating
    }
  
    set isCheckedOut(value){
      this._isCheckedout = value;
    }
    toggleCheckedoutStatus(){
      this.isCheckedOut = !this.CheckedOut
    }
    getAverageRating(){
      let ratingSum= this.ratings.reduce((accumlator,rating)=>accumlator+rating);
      return ratingSum/this.ratings.lenght
    }
    addRating(value){
      this.rating.push(value);
    }
  }
  class Book extends Media{
      constructor(author,title,pages){
      super(title);
      this._author=author;
      this._pages = pages;
  
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this.pages
    }
  }
  class Movie extends Media{
      constructor(director,title,runtime){
      super(title);
      this._director=director;
      this._runtime = runtime;
  
    }
    get director(){
      return this._director;
    }
    get runtime(){
      return this.runtime;
    }
  }
  const historryOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything')
  ,544),
  
  historyOfEverything.toggleCheckoutStatus();
  console.log(historyOfEverything.isCheckedout);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(6);
  console.log(historyofEverything.getAveraggeRating());
  const speed = new Movies('Jan de Bont','Speed',116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(6);
  console.log(historyofEverything.getAveraggeRating());