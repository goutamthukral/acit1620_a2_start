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
    let contactDiv = document.querySelector(".contactinfo");
    contactDiv.remove()
}

function renderView(contact){
    let contactDiv = document.querySelector(".main");
    let contactinfo = document.createElement("div");
    contactinfo.className = "contactinfo";
    let contactname = document.createElement("div");
    contactname.className = "contactname";
    contactname.innerHTML = contact['name'];
    let img = document.createElement("img");
    img.src = "./img/profile.jpg";
    img.className = "profilepic";
    img.alt = "Profile picture"
    contactname.appendChild(img);
    contactinfo.appendChild(contactname);
    let contactemail = document.createElement("div");
    contactemail.className = "contactemail";
    contactemail.innerHTML = "email: "+contact['email'];
    contactinfo.appendChild(contactemail);
    let contactphone = document.createElement("div");
    contactphone.className = "contactphone";
    contactphone.innerHTML = "cell: "+contact['phone'];
    contactinfo.appendChild(contactphone);
    let contactaddress = document.createElement("div");
    contactaddress.className = "contactaddress";
    contactaddress.innerHTML = "address: "+contact['address'];
    contactinfo.appendChild(contactaddress);
    let buttons = document.createElement("div");
    buttons.className = "buttons";
    buttons.innerHTML =
    "<button class=\"button edit\" value=\"Edit\">Edit</button>" +
    "<button class=\"button close\" value=\"Close\">Close</button>"
    contactinfo.appendChild(buttons);
    contactDiv.appendChild(contactinfo);
}

function cleanUpCreate(){

}

function renderCreate(){

}