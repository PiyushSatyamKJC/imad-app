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
//Submit Name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit.btn');
submit.onclick = function() {
  //Make a Request to the server and send the name
  //Capture a list of names and render it as a list
  var names = ['name1','name2','name3'];
  var list = '';
  for(var i=0;i<names.length;i++) {
      list = '<li>' + names[i] + '</li>';
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
};