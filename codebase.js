var john = {
  fullname: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  allTips: [],
  finalPaid:[],
  calcTip: function(){
    for (var i = 0; i <= this.bills.length; i++){
      if (this.bills[i] < 50){
