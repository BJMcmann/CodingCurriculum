
function compare(a, b) {
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];
    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
}

function getNames(){
    var names = document.getElementById("nameList").value; 
    var namesArr = names.split(','); 
    var sorted = namesArr.sort(compare);
    var html ="";
    var html2 = "";
    console.log(sorted);


    for (var i=0; i < sorted.length; i++){
        html += "<li>" +sorted[i] + "</li>";
        console.log(html);
    }
  
    document.getElementById("sortNames").innerHTML=html;
    var myElements = document.getElementById("sortNames").childNodes;


      for (var i = 0; i < myElements.length; i++){
        firstName = myElements[i].innerText.split(" ")[0];
        lastName = myElements[i].innerText.split(" ")[1];
        console.log(firstName);
        console.log(lastName);
          html2 += "<li>" +firstName + " " + "<span class = 'bold'>" + lastName + "</span>" + "</li>";
      }
      document.getElementById("sortNames").innerHTML=html2;





}
      
/* 
Do SOMETHIN LIKE THIS TO MAKE CAPITAL

Array.prototype.myUcase = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
*/

  