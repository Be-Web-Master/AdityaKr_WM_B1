let ages = [8,13,19]
function calculateTotalTicketPrice(ages) {
    let total = 0,cost= 0;
    for(let i=0; i<ages.length;i++){

        if(ages[i] <12){
            cost=5
            total += cost
        }
        else if(ages[i] >= 12 && ages[i] <= 17  ){
            cost = 10;
            total += cost
        }
        else if(ages[i] >= 18 && ages[i] <= 59  ){
            cost = 15;
            total += cost
        }
        else{
            cost = 8;
            total += cost
        }
    }
   console.log(total)
}
calculateTotalTicketPrice(ages)
