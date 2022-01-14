"use strict"

function renderCoffee(coffee) {
    var html = '<li><a><span class = "col-6 coffee-name">' + coffee.name +'</span>' + "";
    html += '<span class="coffee-roast">' + coffee.roast +'</span></a></li>';
    return html;




// var html= '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
function searchCoffees() {
    var value = coffeeSearch.value;
    var filteredCoffees = [];
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
            // console.log(coffees[i].name);
            filteredCoffees.push(coffees[i]);
        }
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}




function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || coffee.all === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', all:"all"},
    {id: 2, name: 'Half City', roast: 'light', all:"all"},
    {id: 3, name: 'Cinnamon', roast: 'light', all:"all"},
    {id: 4, name: 'City', roast: 'medium', all:"all"},
    {id: 5, name: 'American', roast: 'medium', all:"all"},
    {id: 6, name: 'Breakfast', roast: 'medium', all:"all"},
    {id: 7, name: 'High', roast: 'dark', all:"all"},
    {id: 8, name: 'Continental', roast: 'dark', all:"all"},
    {id: 9, name: 'New Orleans', roast: 'dark', all:"all"},
    {id: 10, name: 'European', roast: 'dark', all:"all"},
    {id: 11, name: 'Espresso', roast: 'dark', all:"all"},
    {id: 12, name: 'Viennese', roast: 'dark', all:"all"},
    {id: 13, name: 'Italian', roast: 'dark', all:"all"},
    {id: 14, name: 'French', roast: 'dark', all:"all"},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffee-search');
var submitEvent = document.querySelector('#roast-selection');
tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);
submitEvent.addEventListener('change', updateCoffees);
