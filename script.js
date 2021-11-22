let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
  ]

function cleanUpIndex(){
    let contactDiv = document.querySelector('div');
    contactDiv.remove()
}

function createSingleIndex(contact){
    let anchorTag = document.createElement("a");
    anchorTag.setAttribute = ("href","page3.html");
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");
    newP.innerHTML = contact['name'];
    newDiv.className = "contact";
    newDiv.appendChild(newP);
    anchorTag.appendChild(newDiv);
    console.log(anchorTag);
}

function renderIndex(contactList){
    for(i=0;i<contactList.length;i++)
    {
        let contactDiv = document.querySelector('div');
        let anchorTag = document.createElement("a");
        anchorTag.setAttribute = ("href","page3.html");
        let newDiv = document.createElement("div");
        let newP = document.createElement("p");
        newP.innerHTML = contactList[i]['name'];
        newDiv.className = "contact";
        newDiv.appendChild(newP);
        anchorTag.appendChild(newDiv);
        contactDiv.appendChild(anchorTag);
    }
}

function cleanUpView(){

}

function renderView(){

}

function cleanUpCreate(){

}

function renderCreate(){

}