
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCKkz8RoygajS_2QoffdwjMocNtPIAzGpI",
    authDomain: "finalprojectrn.firebaseapp.com",
    databaseURL: "https://finalprojectrn.firebaseio.com",
    projectId: "finalprojectrn",
    storageBucket: "finalprojectrn.appspot.com",
    messagingSenderId: "1003696475172",
    appId: "1:1003696475172:web:9011bfc21b2cf5a67c5cb1",
    measurementId: "G-8RLX522SSZ"
};
  firebase.initializeApp(config);

var database1 = firebase.database().ref().child('Stories')//stories
var numS = 0//number of story

database1.on("child_added", snap=>{
  if(typeof jQuery!=='undefined'){
    console.log('jQuery Loaded');
}
else{
    console.log('not loaded yet');
}
  var s =snap.child("story").val();
  var T =snap.child("storyTitle").val();

  var n =snap.child("numberOfSite").val();

  /*database.on('value', (dataSnapshot) => {
    dataSnapshot.forEach((child) => {

      if (child.val().numberOfSite == n ){
        console.log(child.val().Answer1)
      }

    })
  })*/
  console.log(s);

  numS=numS+1
  $("#table_body").append("<tr id=story"+numS+"><td>"+numS+"</td><td><textarea>"+T+
  "</textarea><br><textarea>"+s+"</textarea></td>"+"<td><a href='\Quizes\?"+numS+"'"+"target='blank'><button>לחידות אתר "+numS+"</button></a></td></tr>"
  )
  
});

// function insert(){
//  var ddd=document.getElementById("Answer1").value;
//   alert("this: "+ddd);
// }
// function insert(){
//   firebase.database().ref('Quizes').set({
//    QuizContent="1",
//    Answer1="2",
//    Answer2="2",
//    Answer3="2",
//    Answer4="2",
//    RightAnswerNumber="2",
//    NumberOfSite="2"
   
//   })
 
//  }

// function insert(){
//   firebase.database().ref('Quizes').set({
//    QuizContent=document.forms["AddQuiz"]["QuizContent"].value,
//    Answer1=document.forms["AddQuiz"]["Answer1"].value,
//    Answer2=document.forms["AddQuiz"]["Answer2"].value,
//    Answer3=document.forms["AddQuiz"]["Answer3"].value,
//    Answer4=document.forms["AddQuiz"]["Answer4"].value,
//    RightAnswerNumber=document.forms["AddQuiz"]["RightAnswerNumber"].value,
//    NumberOfSite=document.forms["AddQuiz"]["NumberOfSite"].value
   
//   })
 
//  }

/*window.onload = function(){	
  var queryString = window.location.search;
  var lb= document.createElement('div');
  lb.id="lb";
  NumOfSite=queryString.substring(1);
  lb.innerHTML="חידות לסיפור אתר בדיקהההה"+NumOfSite;
  var table = document.createElement('table');
  var tr = document.createElement('tr');
  var tdb = document.createElement('td');
      tdb.innerHTML =' <input type="radio" name="maslul" value="bike"> אופניים ';
      tr.appendChild(tdb);
          var tds = document.createElement('td');
      tds.innerHTML ='<input type="radio" onclick="javascript:kasta();" name="maslul" value="sug" id="sagy"> סאגווי ';
      tr.appendChild(tds);
          var tdr = document.createElement('td');
      tdr.innerHTML =' <input type="radio" name="maslul" value="walk"> רגלי ';
      tr.appendChild(tdr);
   table.appendChild(tr);
    lb.appendChild(table);
   // var con = document.getElementById("insrti")
 var fo = document.getElementsByTagName("h3");
  //var fo = document.getElementsByClassName("row");
 fo[0].appendChild(lb);
 
 
 database.on('value', (dataSnapshot) => {
  dataSnapshot.forEach((child) => {

    var lbb= document.createElement('div');
    lbb.id="lbb";
    if (child.val().numberOfSite == NumOfSite ){
      console.log(child.val().Answer1)

      lb.innerHTML="חידות לסיפור אתר "+NumOfSite;
      var table = document.createElement('table');
      var tr = document.createElement('tr');
      var tdb = document.createElement('td');
          tdb.innerHTML ="שאלה : <textarea>"+child.val().QuizeContent +"</textarea>"+"<br></br>"
          tr.appendChild(tdb);
              var tds = document.createElement('td');
          tds.innerHTML ='<input type="radio" onclick="javascript:kasta();" name="maslul" value="sug" id="sagy"> סאגווי ';
          tr.appendChild(tds);
              var tdr = document.createElement('td');
          tdr.innerHTML =' <input type="radio" name="maslul" value="walk"> רגלי ';
          tr.appendChild(tdr);
       table.appendChild(tr);
        lb.appendChild(table);
       // var con = document.getElementById("insrti")
     var fo = document.getElementsByTagName("h3");
      //var fo = document.getElementsByClassName("row");
     fo[0].appendChild(lb);
     
    }

  })
})
}

 var database = firebase.database().ref('Quizes')
 database.on('value', (dataSnapshot) => {
   var s = document.getElementById("qui")
   dataSnapshot.forEach((child) => {
   numQ=numQ+1
   console.log(numQ)
   console.log(child.val())
   s.innerHTML =s.innerHTML+"<lable>"+"תשובה "+ numQ +"</lable>"+
   "<br></br>"+"<textarea>"+child.val().QuizeContent +"</textarea>"+"<br></br>"
 
 });
 });
//onclick=updateData(story"+numS+")
/*function updateData(data){
  var data ={
    story=document.getElementById
  }
  for(i=0; i<numS;i++){

  }
  
  ref.push(data)
}

function remove(r){
  r.remove()
}*/


/*database1.on('value', (dataSnapshot1) => {
  var sh1 = document.getElementById("stories")
  var s = document.getElementById("quizes")
dataSnapshot1.forEach((child) => {
  numS=numS+1
  console.log(child.val())
  sh1.innerHTML =sh1.innerHTML+"<lable>"+"סיפור אתר "+ numS +"</lable>"+
  "<br></br>"+"<textarea>"+child.val().storyTitle+"</textarea>"+"<br></br>"
  +"<button>"+"עדכן סיפור"+"</button>"+"<br></br>"

 for(child in database){
    if (child.val().nuberOfSite==numS){
      for(numQ=0;numQ<4;numQ=numQ+1){
      s.innerHTML =s.innerHTML+"<lable>"+"תשובה "+ numQ +"</lable>"+
      "<br></br>"+"<textarea>"+child.val().Answer+numQ; +"</textarea>"+"<br></br>"
    }

  }}



});
});*/

/*var database = firebase.database().ref('Quizes')
database.on('value', (dataSnapshot) => {
  var s = document.getElementById("quizes")
  dataSnapshot.forEach((child) => {
  numQ=numQ+1
  console.log(numQ)
  console.log(child.val())
  s.innerHTML =s.innerHTML+"<lable>"+"תשובה "+ numQ +"</lable>"+
  "<br></br>"+"<textarea>"+child.val().Answer1; +"</textarea>"+"<br></br>"

});
});*/



  
  // var rootRef = database.ref('/');
  
  // rootRef.once('value', function(snapshot){
  //   console.log(snapshot.val());
  // });
  
  // function pushData(){
  //   var data = document.getElementById("dataValue").value;
  //   var dataRef = database.ref('/pushData').push();
  //   dataRef.set({
  //     value: data
  //   });
  // }
  
  // function setData(){
  //   var data = document.getElementById("dataValue").value;
  //   var dataRef = database.ref('/setData');
  //   console.log(data)
  //   dataRef.set({
  //     value: data
  //   });
  // }
  
  // setDataRef = database.ref("/setData");
  // setDataRef.on('child_changed', function(snapshot) {
  //   console.log("Below is the data from child_changed");
  //   console.log(snapshot.val());
  // });
  
  // pushDataRef = database.ref("/pushData");
  // pushDataRef.on("child_added", function(snapshot){
  //   console.log("Below is the data from child_added");
  //   console.log(snapshot.val());
  // });
  
  // database.ref('/pushData').once('value', function(snapshot){
  //   snapshot.forEach(function(data){
  //     console.log("Below are the child keys of the values in 'pushData'")
  //     console.log(data.key);
  //   });
  //   console.log(Object.keys(snapshot.val()));
  // });