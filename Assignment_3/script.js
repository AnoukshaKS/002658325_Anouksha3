//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

function addNewStudent(){
  var table = document.getElementById("myTable");
  var row = table.insertRow(5);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
  cell3.innerHTML = "NEW CELL2";
  cell4.innerHTML = "NEW CELL2";
  cell5.innerHTML = "NEW CELL2";
  cell6.innerHTML = "NEW CELL2";
  cell7.innerHTML = "NEW CELL2";
  cell8.innerHTML = "NEW CELL2";

}
function myFunction()
{
  alert("error");
}
var count = 3;

function addStudent(){

  let table = document.getElementById("myTable");
  let tableBody = document.getElementById("tableBody");
  let row = document.createElement("TR");
  row.className = "glow";

  
    
    let col = document.createElement('TD');

    let box = document.createElement('INPUT');
    box.setAttribute("type", "checkbox");
    box.className = "ent";
    box.onclick = check(0);
    col.appendChild(box);

    let arrow = document.createElement("IMG");
    arrow.setAttribute("src", "down.png");
    arrow.setAttribute("width", "25px");
    col.appendChild(arrow);

    let space1 = document.createElement("BR");
    col.insertBefore(space1,arrow);
    let space2 = document.createElement("BR");
    col.insertBefore(space2,space1);

    row.appendChild(col);

    count = count + 1;
    

    col = document.createElement('TD');
    col.innerHTML = "Student " + count;
    row.appendChild(col);

    col = document.createElement('TD');
    col.innerHTML = "Teacher "+ count;
    row.appendChild(col);

    col = document.createElement('TD');
    col.innerHTML = "Approved";
    row.appendChild(col);

    col = document.createElement('TD');
    col.innerHTML = "Fall";
    row.appendChild(col);

    col = document.createElement('TD');
    col.innerHTML = "TA";
    row.appendChild(col);

    min=1111;
    max=9999;
    const a = Math.floor(Math.random() * (max - min + 1)) + min;

    col = document.createElement('TD');
    col.innerHTML = a;
    row.appendChild(col);

    amin=0;
    amax=100;

    const aa = Math.floor(Math.random() * (amax - amin + 1)) + amin;
    col = document.createElement('TD');
    col.innerHTML = aa + "%";
    row.appendChild(col);

    col = document.createElement('TD');
    // let btn = document.createElement("BUTTON");
    // btn.innerHTML = "Delete";
    // btn.className = "del";
    // col.appendChild(btn);
    // row.appendChild(col);
  //   $("#add").click(function() {
  //     alert("The Form has been Submitted.");
  //  });

  tableBody.appendChild(row);
  table.appendChild(tableBody);
 alert("Record Added Successfully");

	
}