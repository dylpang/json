let outputElement = document.getElementById("agents");
let contentGridElement = document.getElementById("grid");

let jsonDatabase = [
  {
    "name" : "Reyna",
    "pic" : "reyna.png",
    "role" : "Duelist",
    "abilities" : ["Devour", "Dismiss", "Leer", "Empress"]
  },
  {
    "name" : "Omen",
    "pic" : "omen.png",
    "role" : "Controller",
    "abilities" : ["Paranoia", "Dark Cover", "Shrouded Step", "From the Shadows"]
  },
  {
    "name" : "Killjoy",
    "pic" : "killjoy.png",
    "role" : "Sentinel",
    "abilities" : ["Alarmbot", "Turret", "Nanoswarm", "Lockdown"]
  }
]


for (var i  = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}


function createElement(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = '#242926';
  newContentElement.classList.add("contentItem");

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add("contentTitle");
  newContentHeading.innerText = incomingJSON['name'];
  newContentElement.appendChild(newContentHeading);

  let newImage = document.createElement("IMG");
  newImage.classList.add("agentIcon");
  newImage.src = incomingJSON["pic"];
  newContentElement.appendChild(newImage);

  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "Role: " + incomingJSON['role'];
  newContentElement.appendChild(newContentSubhead);

  let newContentList = document.createElement("H5");
  newContentList.innerText = "Abilities";
  newContentElement.appendChild(newContentList);


  let newContentBody = document.createElement("UL");
  newContentElement.appendChild(newContentBody);
  for (var i = 0; i< incomingJSON['abilities'].length; i++){
    var currentString = incomingJSON['abilities'][i];
    var newItem = document.createElement("LI");
    newItem.innerText = currentString;
    newItem.style.color = "#dedede";
    newContentBody.appendChild(newItem);
  }

  contentGridElement.appendChild(newContentElement);

}
