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

function loadIndex(){
    cleanUpIndex();
    renderIndex(contactList);
}

document.getElementById('contactshome').addEventListener('click', (event) => {
        cleanUpIndex();
        renderIndex(contactList);
        event.preventDefault();
});

document.getElementById('newcontact').addEventListener('click', (event) => {
    cleanUpIndex();
    renderCreate();
    event.preventDefault();
});

function cleanUpIndex(){
    let contactDiv = document.querySelectorAll('.main > *');
    for(i=0;i<contactDiv.length;i++)
    {
        contactDiv[i].remove();
    }
}

function createSingleIndex(contact){
    let anchorTag = document.createElement("a");
    anchorTag.href="page3.html";
    let newDiv = document.createElement("div");
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = contact['name'];
    newDiv.className = "contact";
    newDiv.appendChild(newParagraph);
    anchorTag.appendChild(newDiv);
    anchorTag.addEventListener('click', (event) => {
        for (j=0; j<contactList.length; j++) {
            if (contactList[j]['name'] === anchorTag.innerText) {
                cleanUpIndex();
                renderView(contactList[j]);
                event.preventDefault();
            }
        }
    });
    return anchorTag;
}

function renderIndex(contactList){
    for(i=0;i<contactList.length;i++)
    {
        let contactDiv = document.querySelector('.main');
        contactDiv.appendChild(createSingleIndex(contactList[i]));
    }
}

function cleanUpView(){
    let contactDiv = document.querySelector(".contactinfo");
    contactDiv.remove();
}

function renderView(contact){
    let contactDiv = document.querySelector(".main");
    let contactinfo = document.createElement("div");
    contactinfo.className = "contactinfo";
    let contactname = document.createElement("div");
    contactname.className = "contactname";
    contactname.innerHTML = contact['name'];
    let img = document.createElement("img");
    img.src = "./profile.jpg";
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
    document.querySelector('.button.button.close').addEventListener('click', (event) => {
        cleanUpView();
        cleanUpIndex();
        renderIndex(contactList);
        event.preventDefault();
    });
}

function cleanUpCreate(){
    let contactform = document.querySelector(".contactedit");
    contactform.remove();
}

function renderCreate(){
    let contactDiv = document.querySelector(".main");
    let contactedit = document.createElement("div");
    contactedit.className = "contactedit";
    profilePicture = "<div class=\"contactimg\">" +
                        "<img src=\"./profile.jpg\" class =\"profilepic\" alt=\"Profile picture\">" +
                     "</div>";
    contactedit.insertAdjacentHTML('afterbegin', profilePicture);               
    let contactform = document.createElement("div");
    contactform.className = "form";  
    let form = document.createElement("form");
    let contactNameForm = document.createElement("div");
    contactNameForm.className = "inputcontainer";
    let nameInput = document.createElement("input");  
    nameInput.setAttribute = ("type","text"); 
    nameInput.setAttribute = ("id","contactname");  
    nameInput.setAttribute = ("name","contactname");  
    nameInput.placeholder = ("Contact Name");  
    contactNameForm.appendChild(nameInput);
    contactNameForm.insertAdjacentHTML('beforeend', "<button class=\"extrafield\" id=\"extranamefield\" name=\"extranamefield\">+</button>");
    form.appendChild(contactNameForm);
    let contactPhoneForm = document.createElement("div");
    contactPhoneForm.className = "inputcontainer";
    let phoneInput = document.createElement("input");  
    phoneInput.setAttribute = ("type","tel"); 
    phoneInput.setAttribute = ("id","contactphone");  
    phoneInput.setAttribute = ("name","contactphone");  
    phoneInput.placeholder = ("Contact Phone");  
    contactPhoneForm.appendChild(phoneInput);
    contactPhoneForm.insertAdjacentHTML('beforeend', "<button class=\"extrafield\" id=\"extraphonefield\" name=\"extraphonefield\">+</button>");
    form.appendChild(contactPhoneForm);
    let contactAddressForm = document.createElement("div");
    contactAddressForm.className = "inputcontainer";
    let addressInput = document.createElement("input");  
    addressInput.setAttribute = ("type","text"); 
    addressInput.setAttribute = ("id","contactaddress");  
    addressInput.setAttribute = ("name","contactaddress");  
    addressInput.placeholder = ("Contact Address");  
    contactAddressForm.appendChild(addressInput);
    contactAddressForm.insertAdjacentHTML('beforeend', "<button class=\"extrafield\" id=\"extraaddressfield\" name=\"extraaddressfield\">+</button>");
    form.appendChild(contactAddressForm);
    let contactEmailForm = document.createElement("div");
    contactEmailForm.className = "inputcontainer";
    let emailInput = document.createElement("input");  
    emailInput.setAttribute = ("type","email"); 
    emailInput.setAttribute = ("id","contactemail");  
    emailInput.setAttribute = ("name","contactemail");  
    emailInput.placeholder = ("Contact Email");  
    contactEmailForm.appendChild(emailInput);
    contactEmailForm.insertAdjacentHTML('beforeend', "<button class=\"extrafield\" id=\"extraemailfield\" name=\"extraemailfield\">+</button>");
    form.appendChild(contactEmailForm);
    submitButtons = "<div class=\"buttons\">" +
                        "<button type=\"submit\" class=\"button save\" id=\"savecontact\" name=\"savecontact\">Save Contact</button>" +
                        "<button type=\"reset\" class=\"button cancel\" id=\"cancel\" name=\"cancel\">Cancel</button>" +
                    "</div>";
    form.insertAdjacentHTML('beforeend', submitButtons);
    contactform.appendChild(form);
    contactedit.appendChild(contactform);
    contactDiv.appendChild(contactedit);
    document.querySelector('.button#savecontact.button.save').addEventListener('click', (event) => {
        let newObject = {
            name: nameInput.value,
            phone: phoneInput.value,
            address: addressInput.value,
            email: emailInput.value,
        }
        contactList.push(newObject);
        cleanUpCreate();
        renderView(contactList[contactList.length-1]);
        event.preventDefault();
    });
    document.querySelector('.button#cancel.button.cancel').addEventListener('click', (event) => {
        cleanUpCreate();
        cleanUpIndex();
        renderIndex(contactList);
        event.preventDefault();
    });
}
