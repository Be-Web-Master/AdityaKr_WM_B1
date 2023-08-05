const obj1 = {
    studentname:"aditya",
    math:45,
    phy: 66,
    eng: 87,
   gettotal:function(){
       return this.math +this.phy + this.eng
   }
}
const obj2 ={
    studentname:"adi",
    math:45,
    phy: 66,
    eng: 83,
}
const obj2total = obj1.gettotal.bind(obj2)
console.log({obj1:obj1.gettotal() , obj2:obj2total()})