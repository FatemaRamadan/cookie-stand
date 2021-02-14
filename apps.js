'use strict';

let workingHour = [`6am`, `7am`, `8am`, `9am`, `10am`, `11am`, `12am`, `1pm`, `2pm`, `3pm`, `4pm`, `5pm`, `6pm`, `7pm`];

let seattle = {
    min: 23,
    max: 56,
    avgCookiPerCustomer: 6.3,
    avgCookiSale: [],
    cusomersPerHour: [],
    getCustomersPerHour: function () {
        for (let i = 0; i < workingHour.length; i++) {
            this.cusomersPerHour[i] = randomCust(this.min, this.max);
        }
    },
    getAvgCookSale: function () {
        for (let i = 0; i < this.cusomersPerHour.length; i++) {
            this.avgCookiSale[i] = this.cusomersPerHour[i] * this.avgCookiPerCustomer;
            //console.log(seattle.avgCookiSale);
        }
    },
    }


seattle.getCustomersPerHour();
seattle.getAvgCookSale();
console.log(seattle.cusomersPerHour);
console.log(seattle.avgCookiSale);
console.log(seattle.getSum);

function randomCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

let Tokyo = {
    min: 3,
    max: 24,
    avgCookiPerCustomer: 1.2,
    avgCookiSale: [],
    cusomersPerHour: [],
    getCustomersPerHour: function () {
        for (let i = 0; i < workingHour.length; i++) {
            this.cusomersPerHour[i] = randomCust(this.min, this.max);
        }
    },
    getAvgCookSale: function () {
        for (let i = 0; i < this.cusomersPerHour.length; i++) {
            this.avgCookiSale[i] = this.cusomersPerHour[i] * this.avgCookiPerCustomer;

        }
    }

}
Tokyo.getCustomersPerHour();
Tokyo.getAvgCookSale();
console.log(Tokyo.cusomersPerHour);
console.log(Tokyo.avgCookiSale);
/*seattle.getCustomersPerHour();
seattle.getAvgCookSale();
console.log(seattle.cusomersPerHour);
console.log(seattle.avgCookiSale);*/

let Dubai = {
    min: 11,
    max:38,
    avgCookiPerCustomer: 3.7,
    avgCookiSale: [],
    cusomersPerHour: [],
    getCustomersPerHour: function () {
        for (let i = 0; i < workingHour.length; i++) {
            this.cusomersPerHour[i] = randomCust(this.min, this.max);
        }
    },
    getAvgCookSale: function () {
        for (let i = 0; i < this.cusomersPerHour.length; i++) {
            this.avgCookiSale[i] = this.cusomersPerHour[i] * this.avgCookiPerCustomer;

        }
    }

}
Dubai.getCustomersPerHour();
Dubai.getAvgCookSale();

let Paris = {
    min: 20,
    max: 38,
    avgCookiPerCustomer: 2.3,
    avgCookiSale: [],
    cusomersPerHour: [],
    getCustomersPerHour: function () {
        for (let i = 0; i < workingHour.length; i++) {
            this.cusomersPerHour[i] = randomCust(this.min, this.max);
        }
    },
    getAvgCookSale: function () {
        for (let i = 0; i < this.cusomersPerHour.length; i++) {
            this.avgCookiSale[i] = this.cusomersPerHour[i] * this.avgCookiPerCustomer;

        }
    }

}
Paris.getCustomersPerHour();
Paris.getAvgCookSale();

let Lima = {
    min: 2,
    max: 16,
    avgCookiPerCustomer: 4.6,
    avgCookiSale: [],
    cusomersPerHour: [],
    getCustomersPerHour: function () {
        for (let i = 0; i < workingHour.length; i++) {
            this.cusomersPerHour[i] = randomCust(this.min, this.max);
        }
    },
    getAvgCookSale: function () {
        for (let i = 0; i < this.cusomersPerHour.length; i++) {
            this.avgCookiSale[i] = this.cusomersPerHour[i] * this.avgCookiPerCustomer;
            
        }
    }

}
Lima.getCustomersPerHour();
Lima.getAvgCookSale();

let parent = document.getElementById('parent');
console.log(parent);


    let title=document.createElement('h2');
    parent.appendChild(title);
    title.textContent='seattle';
   console.log(title);

let unorderedList=document.createElement('ul');
parent.appendChild(unorderedList);
console.log(unorderedList);
for (let i =0 ;i<workingHour.length;i++) {
    let listItem=document.createElement('li');
    unorderedList.appendChild(listItem);
    listItem.textContent=workingHour[i] + ':' + seattle.avgCookiSale[i]+ 'Cookies';
    
    console.log(listItem);

}
let title2=document.createElement('h2');
    parent.appendChild(title2);
    title2.textContent='Tokyo';
   console.log(title2);

let unorderedList1=document.createElement('ul');
parent.appendChild(unorderedList1);
console.log(unorderedList1);
for (let i =0 ;i<workingHour.length;i++) {
    let listItem2=document.createElement('li');
    unorderedList1.appendChild(listItem2);
    listItem2.textContent=workingHour[i] + ':' + Tokyo.avgCookiSale[i]+ 'Cookies';
    
    console.log(listItem2);

}
let title3=document.createElement('h2');
    parent.appendChild(title3);
    title3.textContent='Dubai';
   console.log(title);

let unorderedList2=document.createElement('ul');
parent.appendChild(unorderedList2);
console.log(unorderedList2);
for (let i =0 ;i<workingHour.length;i++) {
    let listItem3=document.createElement('li');
    unorderedList2.appendChild(listItem3);
    listItem3.textContent=workingHour[i] + ':' + Dubai.avgCookiSale[i]+ 'Cookies';
    
    console.log(listItem3);

}
let title4=document.createElement('h2');
    parent.appendChild(title4);
    title4.textContent='Paris';
   console.log(title4);

let unorderedList3=document.createElement('ul');
parent.appendChild(unorderedList3);
console.log(unorderedList3);
for (let i =0 ;i<workingHour.length;i++) {
    let listItem4=document.createElement('li');
    unorderedList3.appendChild(listItem4);
    listItem4.textContent=workingHour[i] + ':' + Paris.avgCookiSale[i]+ 'Cookies';
    
    console.log(listItem4);

}
let title5=document.createElement('h2');
    parent.appendChild(title5);
    title5.textContent='Lima';
   console.log(title5);

let unorderedList4=document.createElement('ul');
parent.appendChild(unorderedList4);
console.log(unorderedList4);
for (let i =0 ;i<workingHour.length;i++) {
    let listItem5=document.createElement('li');
    unorderedList4.appendChild(listItem5);
    listItem5.textContent=workingHour[i] + ':' + Lima.avgCookiSale[i]+ 'Cookies';
    
    console.log(listItem5);

}
