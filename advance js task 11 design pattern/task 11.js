// house 
// house
'use strict';
this.table='Main table';
const cleanTable=function (soap){
    console.log(`cleaning is going on ${this.table} with some ${soap}`);
}

this.garage={
    table: "garage table",
    cleanTable(){
        console.log(`cleaning is going on ${this.table}`);
    }
};

// this inside object 

let myroom={
    table:"Luv's Table",
    cleanTable(){
        console.log(`cleaning is goig on ${this.table}`);
    }

};
// myroom.cleanTable();
cleanTable.call(this,'soap');
cleanTable.call(this.garage,'soap');
cleanTable.call(myroom,'soap');
// create student class  function to check egilibile

class Students{
 constructor(name,age,phone_no,marks){
    this.name=name;
    this.age=age;
    this.phone_no=phone_no;
    this.marks=marks;

 }
  check(){
    if(this.marks>40){
        console.log("egligible")
    }
    else{
        console.log("not egligible")
    }

 }
};
let luv =new Students('luv',18,71,11);
luv.check();


// create 5 differnt student



// make students class
class Students{

    static cnt=0;

 constructor(name,age,phone_no,marks){
    this.name=name;
    this.age=age;
    this.phone_no=phone_no;
    this.marks=marks;
    Students.count();
   

 }
 static count(){
    return (Students.cnt++);
    
 }
 
 
  check(){
    if(this.marks>40){
        console.log("egligible")
    }
    else{
        console.log("not egligible")
    }

 }
}
let luv =new Students('luv',18,71,11);
const Riya=new Students('Riya',18,1234,34);

const Hiya=new Students('Hiya',15,2345,35);

const Diya=new Students('Diya',16,4567,60);

const Siya=new Students('Siya',17,7891,70);

const Roh=new Students('Rooh',19,3456,80);
luv.check();
console.log(Students.count());

