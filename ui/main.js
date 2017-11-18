//Counter Code
var button = document.getElementById('counter');
button.onclick = function() {
  //create a request object
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable
  request.onreadystatechange = function() {
    if(request.readystate == XMLHttpRequest.DONE) {
        //Take some action
        if(request.status == 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    //Not Done Yet
  };
  //Make a request to the counter endpoint
  request.open('GET','http://satyampiyush790.imad.hasura-app.io/counter',true);
  request.send(null);
};