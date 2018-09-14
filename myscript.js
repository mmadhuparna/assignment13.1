//Given input array of strings
var sports = ['cricket','Hockey','Tennis','Football'];
function promise(){
  //Create a Promise
  var delayWork = new Promise(function (resolve, reject) {
      //Returns the result after n seconds, where n is length of input array
      setTimeout(resolve, sports.length*1000, {
      //Convert the values to uppercase using map function in array    
      uppercase: sports.map(function (x) {
          return x.toUpperCase();
      })
    });
  });
  delayWork.then(function (data) {
    //Resolve callback
      console.log("Input array:")
      console.log(sports);
      console.log("-------------------------------------------------")
      console.log("Output array:")
      console.log(data);
      document.querySelector("#pOutput").innerHTML = JSON.stringify(data);
      
  }).catch(function (err) {
      //Reject callback
      console.log(err);
  });
}