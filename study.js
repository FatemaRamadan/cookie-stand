'use strict';
function Orgnization (name,topic,field,phone,email,img){
    this.name = name;
    this.topic= topic;
    this.field= field;
    this.phone=phone;
    this.email = email;
    let imges=img;
    Orgnization.allOrgnizations.push(this);
}
Orgnization.allOrgnizations=[];
let helpEducation = new Orgnization('help','education');
console.log(helpEducation);
let children = new Orgnization('Children','Childen-Aid');
let medicne = new Orgnization('medicne','Health-Aid')
 console.log(children,medicne);

Orgnization.prototype.renderProfile = function(){
    let OrgProfle= document.getElementById('OrgnizationAdded');
    let article = document.createElement('article');
    OrgProfle.appendChild(article);
    console.log(article);
 let OrgName = document.createElement('h2');
 article.appendChild(OrgName);
 OrgName.textContent=this.name;
 let spacility = document.createElement('h2');
 article.appendChild(spacility);
 spacility.textContent=this.field;
 let phone = document.createElement('h2');
 article.appendChild(phone);
 phone.textContent=this.phone;
 let email = document.createElement('h2');
 article.appendChild(email);
 email.textContent=this.email;
 let image=document.createElement('img');
 article.appendChild(image);
 image.textContent=this.imges;

}


 let OrgnizationForm = document.getElementById("addingOrgnization");

 OrgnizationForm.addEventListener('submit',submitter);
 function submitter(event){
     event.preventDefault();
     let name = event.target.OrgName.value;
     console.log(name);
     let fieldSelection = event.target.selectField.value;
     console.log(fieldSelection);
     let phoneNumber = event.target.PhoneNumber.value;
     console.log(phoneNumber);
     let email = event.target.Email.value;
     console.log(email);
     let image = event.target.orgnizationImage.value;
     console.log(image);

     let addedOrg = new Orgnization(name,fieldSelection,phoneNumber,email,image);
     console.log(addedOrg);

     let newOrg = document.getElementById('OrgnizationAdded');
     newOrg.textContent="Added Orgnization";
     
     addedOrg.renderProfile();
     }