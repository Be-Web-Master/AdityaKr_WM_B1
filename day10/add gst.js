const arr = [100 ,105  ];
const gst= 20;
const calcgstprice = (itemarr , gstvalue) =>{
    return itemarr.map((item)=>{
        return item+(item*gstvalue)/100
    })
}
const finalprice = calcgstprice(arr , gst)
const caclfinalAmount = (priceArr) => {
    let sum = 0;
    priceArr.map((price)=>{
        sum+=price;
    })
    return sum
}
const  totalFinalPrice = caclfinalAmount(finalprice)



console.log({totalFinalPrice})



const addtip = (amount) => {
    let tip = 0;

    if (amount > 200 && amount < 300) {
        
        tip= 50
    }else if (amount > 300 && amount <500) {
        tip = 30;
        
    } else if (amount > 500) {
        tip = 10
    }
      return {
          totalAmount: amount,
          tipAmount: tip,
    }
}


addtip(totalFinalPrice)