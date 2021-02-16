'use strict';

let workingHour = [`6am`, `7am`, `8am`, `9am`, `10am`, `11am`, `12am`, `1pm`, `2pm`, `3pm`, `4pm`, `5pm`, `6pm`, `7pm`];

/*let seattle = {
    min: 23,
    max: 56,
    avgCookiPerCustomer: 6.3,
    avgCookiSale: [],
    cusomersPerHour: [],
    sum:0,
    getCustomersPerHour: function () {
        for (let i = 0; i < workingHour.length; i++) {
            this.cusomersPerHour[i] = randomCust(this.min, this.max);
        }
    },
    getAvgCookSale: function () {
        for (let i = 0; i < this.cusomersPerHour.length; i++) {
            this.avgCookiSale[i] = Math.floor(this.cusomersPerHour[i]) * Math.floor(this.avgCookiPerCustomer);
            //console.log(seattle.avgCookiSale);
            this.sum+= this.avgCookiSale[i];
        }
    },
    }


seattle.getCustomersPerHour();
seattle.getAvgCookSale();
console.log(seattle.cusomersPerHour);
console.log(seattle.avgCookiSale);
console.log(seattle.sum);

function randomCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

let Tokyo = {
    min: 3,
    max: 24,
    avgCookiPerCustomer: 1.2,
    avgCookiSale: [],
    cusomersPerHour: [],
    sum:0,
    getCustomersPerHour: function () {
        for (let i = 0; i < workingHour.length; i++) {
            this.cusomersPerHour[i] = randomCust(this.min, this.max);
        }
    },
    getAvgCookSale: function () {
        for (let i = 0; i < this.cusomersPerHour.length; i++) {
            this.avgCookiSale[i] = Math.floor(this.cusomersPerHour[i]) * Math.floor(this.avgCookiPerCustomer);
            //console.log(seattle.avgCookiSale);
            this.sum+= this.avgCookiSale[i];
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
console.log(seattle.avgCookiSale);

let Dubai = {
    min: 11,
    max:38,
    avgCookiPerCustomer: 3.7,
    avgCookiSale: [],
    cusomersPerHour: [],
    sum:0,
    getCustomersPerHour: function () {
        for (let i = 0; i < workingHour.length; i++) {
            this.cusomersPerHour[i] = randomCust(this.min, this.max);
        }
    },
    getAvgCookSale: function () {
        for (let i = 0; i < this.cusomersPerHour.length; i++) {
            this.avgCookiSale[i] = Math.floor(this.cusomersPerHour[i]) * Math.floor(this.avgCookiPerCustomer);
            //console.log(seattle.avgCookiSale);
            this.sum+= this.avgCookiSale[i];
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
    sum:0,
    getCustomersPerHour: function () {
        for (let i = 0; i < workingHour.length; i++) {
            this.cusomersPerHour[i] = randomCust(this.min, this.max);
        }
    },
    getAvgCookSale: function () {
        for (let i = 0; i < this.cusomersPerHour.length; i++) {
            this.avgCookiSale[i] = Math.floor(this.cusomersPerHour[i]) * Math.floor(this.avgCookiPerCustomer);
            //console.log(seattle.avgCookiSale);
            this.sum+= this.avgCookiSale[i];

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
    sum:0,
    getCustomersPerHour: function () {
        for (let i = 0; i < workingHour.length; i++) {
            this.cusomersPerHour[i] = randomCust(this.min, this.max);
        }
    },
    getAvgCookSale: function () {
        for (let i = 0; i < this.cusomersPerHour.length; i++) {
            this.avgCookiSale[i] = Math.floor(this.cusomersPerHour[i]) * Math.floor(this.avgCookiPerCustomer);
            //console.log(seattle.avgCookiSale);
            this.sum+= this.avgCookiSale[i];
            
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
let totalcookies=document.createElement('li');
unorderedList.appendChild(totalcookies);
totalcookies.textContent='total' + ':' + seattle.sum;

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
let totalcookies2=document.createElement('li');
unorderedList1.appendChild(totalcookies2);
totalcookies2.textContent='total' + ':' + Tokyo.sum;

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
let totalcookies3=document.createElement('li');
unorderedList2.appendChild(totalcookies3);
totalcookies3.textContent='total' + ':' + Dubai.sum;

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
let totalcookies4=document.createElement('li');
unorderedList3.appendChild(totalcookies4);
totalcookies4.textContent='total' + ':' + Paris.sum;

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
let totalcookies5=document.createElement('li');
unorderedList4.appendChild(totalcookies5);
totalcookies5.textContent='total' + ':' + Lima.sum; */

function randomCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
//constuctore objects:
function Shops(locationName, max, min, avgCookiPerCustomer) {
    this.locationName = locationName;
    this.maxCust = max;
    this.minCust = min;
    this.avgCookiPerCustomer = avgCookiPerCustomer;
    this.customersEachHour = [];
    this.avgCookiSale = [];
    this.totalcookies = 0;
}

Shops.prototype.customersEachHour1 = function () {
    for (let i = 0; i < workingHour.length; i++) {
        this.customersEachHour[i] = randomCust(this.minCust, this.maxCust);
    }
}

Shops.prototype.avgCookiSale1 = function () {
    for (let i = 0; i < workingHour.length; i++) {
        this.avgCookiSale[i] = Math.floor(this.customersEachHour[i]) * Math.floor(this.avgCookiPerCustomer);
        //console.log(seattle.avgCookiSale);
        this.totalcookies += this.avgCookiSale[i];
    }
}

let seattle = new Shops('seattle', 23, 65, 6.3);
seattle.customersEachHour1();
seattle.avgCookiSale1();

console.log(seattle);
let Tokyo = new Shops('Tokyo', 3, 24, 1.2, 0);
Tokyo.customersEachHour1();
Tokyo.avgCookiSale1();
console.log(Tokyo);
let Dubai = new Shops('Dubai', 11, 38, 3.7, 0);
Dubai.customersEachHour1();
Dubai.avgCookiSale1();
console.log(Dubai);
let Paris = new Shops('Paris', 20, 38, 2.3, 0);
Paris.customersEachHour1();
Paris.avgCookiSale1();
console.log(Paris);
let Lima = new Shops('Lima', 2, 16, 4.6, 0);
Lima.customersEachHour1();
Lima.avgCookiSale1();
console.log(Lima);


let parent = document.createElement('parent');

    let table = document.createElement('table');
    parent.appendChild(table);
    console.log(parent);
Shops.prototype.render = function () {
    
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    
    for (let i = 0; i < workingHour.length; i++) {
        const th1 = document.createElement('th1');
        th1.textContent = workingHour[i];
        headerRow.appendChild(th1);
    }
    let secondRaw = document.createElement('tr');
    table.appendChild(secondRaw);
       let td1 = document.createElement('td');
        secondRaw.appendChild(td1);
        td1.textContent =this.locationName;
    console.log(td1);

        
}
seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();