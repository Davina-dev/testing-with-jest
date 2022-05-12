const calculator = {

    isNull: function (){ return null},
    checkValue: (value) => value,

    //sum: (a, b)=> a + b,
    sum: function (num1,num2){
        return num1 + num2;
    },
    //sum: (num1, num2)=> num1 - num2,
    diff: function (num1,num2){
        return num1 - num2;
    },
  
}

module.exports = calculator;