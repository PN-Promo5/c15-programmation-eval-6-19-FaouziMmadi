let fishList = [
  ["Aulopiformes","Synodontidae","Poisson lézard","Synodus saurus"],
  ["Aulopiformes","Auguilliformes","Anguille","Anguilla anguilla"],
  ["Aulopiformes","Congridae","Congre"," Conger conger"],
  ["Atheriniformes","Atherinidae","Joël","Atherina boyeri"]
];

function createArray(fishList, haveHeader) {
  let table = document.createElement("table");
  let tr;
  let i = 0;
  let j;
  if (haveHeader) {
    tr = document.createElement("tr");
    while (i < array[0].length) {
      tr.innerHTML += "<th>" + fishList[0][i] + "</th>";
      i++;
    }
    table.appendChild(tr);
    i = 1;
  }
  while (i < fishList.length) {
    tr = document.createElement("tr");
    j = 0;
    while (j < fishList[i].length) {
      tr.innerHTML += "<td>" + fishList[i][j] + "</td>";
      j++;
    }
    table.appendChild(tr);
    i++;
  }
  return table;
}

// exercice 3

let div = document.createElement("div");
document.body.appendChild(div);
let p = document.createElement("p");
div.appendChild(p);

let form = document.createElement("form");
div.appendChild(form);

let p1 = document.createElement("p");
form.appendChild(p1);
let label = document.createElement("label");
p1.appendChild(label);
label.textContent = "Saisissez une phrase : "
let champ = document.createElement("input");
p1.appendChild(champ);
champ.type = "texte";

let p2 = document.createElement("p");
form.appendChild(p2);
let label1 = document.createElement("label");
p2.appendChild(label1);
label1.textContent = "mettre cette phrase en majuscules : "
let btn = document.createElement("input");
p2.appendChild(btn);
btn.type = "button";
btn.value = "OK";

let p3 = document.createElement("p");
form.appendChild(p3);
let label2 = document.createElement("label");
p3.appendChild(label2);
label2.textContent = "mettre cette phrase en minuscules : "
let btn1 = document.createElement("input");
p3.appendChild(btn1);
btn1.type = "button";
btn1.value = "OK";


let p4 = document.createElement("p");
form.appendChild(p4);
let label3 = document.createElement("label");
p4.appendChild(label3);
label3.textContent = "Résultat : "
