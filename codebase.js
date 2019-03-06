var john = {
  fullname: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  allTips: [],
  finalPaid:[],
  calcTip: function(){
    for (var i = 0; i <= this.bills.length; i++){
      if (this.bills[i] < 50){
        this.allTips[i] = this.bills[i] * 0.2;
        this.finalPaid[i] = this.allTips[i] + this.bills[i];
      }else if (this.bills[i] >= 50 && this.bills[i] <= 200){
        this.allTips[i] = this.bills[i] * 0.15;
        this.finalPaid[i] = this.allTips[i] + this.bills[i];
      }else{
        this.allTips[i] = this.bills[i] * 0.10;
        this.finalPaid[i] = this.allTips[i] + this.bills[i];
      }    
    }
  }
};
john.calcTip();
console.log(john);

var mark = {
  fullName: 'Mark Vendor',
  bills: [77, 375, 110, 35],
  allTips: [],
  finalPaid: [],
  calcTip: function (){
    for (var i = 0; i <= this.bills.length; i++){
      if (this.bills[i] < 100){
        this.allTips[i] = this.bills[i] * 0.2;
        this.finalPaid[i] = this.bills[i] + this.allTips[i];
      }else if (this.bills[i] >= 100 && this.bills[i] <= 300){
        this.allTips[i] = this.bills[i] * 0.1;
        this.finalPaid[i] = this.bills[i] + this.allTips[i];
      }else{  
        this.allTips[i] = this.bills[i] * 0.25;
        this.finalPaid[i] = this.bills[i] + this.allTips[i];
      }
    }
  }
};  
mark.calcTip();
console.log(mark.allTips);

// FINDING AVERAGE OF THE TIP ARRAY USING FOR LOOP 
var markSum = 0;
for (var i = 0; i < mark.allTips.length; i++){
  markSum += mark.allTips[i];
  markAverage = markSum/mark.allTips.length;
};  

var johnSum = 0;
for (var i = 0; i < john.allTips.length; i++){
  johnSum += john.allTips[i];
  johnAverage = johnSum/john.allTips.length;
}
console.log(markSum, johnSum, markAverage, johnAverage);


// FINDING AVERAGE OF THE TIP ARRAY USING REDUCE METHOD
var markSum2 = mark.allTips.reduce(function(total, val){
    return total += val;
    
});

var johnSum2 = john.allTips.reduce(function(total, val){
    return total += val;
});
console.log(markSum2, johnSum2, markSum2/mark.allTips.length, johnSum2/john.allTips.length);
