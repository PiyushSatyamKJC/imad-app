//Counter Code
var button = document.getElementById('counter');
button.onclick = function() {
  //Create a Request Object
  var request = new XMLHttpRequest();
  
  //Capture the Response and store it in a Variable
  request.onreadystatechange = function() {
    if(request.readyState == XMLHttpRequest.DONE) {
        //Take Some Action
        if(request.status == 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
             span.innerHTML = counter.toString();
        }
    } 
    //Not Done Yet
  };
  //Make the Request
  request.open('GET','http://satyampiyush790.imad.hasura-app.io/counter',true);
  request.send(null);
  
};
