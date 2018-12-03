var count = 0;

function order(){
  // alert("눌림!");
  var x = document.getElementById("Mac");
  var menu = x.options[x.selectedIndex].value;

 document.getElementById("order").innerHTML = x;

  var saveApplicant = document.getElementById("Ans1");
	var newApplicant = document.createElement("p");

  var b1 = document.createElement("input");
   b1.setAttribute("type", "text");
   b1.setAttribute("id", "money");

   var countplus = document.createElement("input");
   countplus.type="button";
   countplus.value ="add";
   countplus.onclick="countp()";

   var countminus = document.createElement("input");
   countminus.type="button";
   countminus.value ="minus";
   countminus.onclick="countm()";

//newApplicant를 HTML에 집어넣는데 p tag를 만든 후 그 자리에 넣습니다.
 // newnumberbuttonplus.setAttribute("id", "plus");
 // newnumberbuttonplus.setAttribute("onclick","counter()");

 newApplicant.innerHTML=menu;


 saveApplicant.appendChild(newApplicant);
 saveApplicant.appendChild(countplus);
 saveApplicant.appendChild(b1);
 saveApplicant.appendChild(countminus);

console.log(count);


}

function countp(){
  count++;

  console.log(count);
}

function countm(){
  count--;

  console.log(count);
}
