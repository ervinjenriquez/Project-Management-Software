//TODO Prompt username and password and verify.

//Spacer


//Declare Array that will Host Projects
let allProjects = [];

//Create Parent Class that creates objects (Project)
class Project {

    constructor(projTitle, projDescription, projHours, projReserved) {

        //Declare variables
        this._name = projTitle;
        this._description =  projDescription;
        this._hours = projHours;
        this._reserved = projReserved;

        //Send newly constructed object directly to next space in array.
        allProjects.push(this);

        //Reserve function
        this.reserve = function() {
            if (this._reserved === false ) {
                this._reserved = true;
            } else {
                console.log('The project you are trying to reserve has already been taken.');
            }
        }
        };
    }

//Create new object.
const DataEntry = new Project('Data Entry', 'Enter Data into Amazon', '4 Hours', false);
const StockEntry = new Project('Stock Entry', 'Update stock', '2 Hours', true);
const Shipping = new Project('Shipping', 'Work at warehouse', '6 Hours', false);
const CustomerService = new Project('Customer Service', 'Reply to customer inquiries.', '3 Hours', true);

//Display the name variable housed in the object that was pushed into allProjects array.
//console.log(allProjects[0]._name);

const projectFunctions = {

    //Delete projects function.
    delProject(input) {
        for (y = 0; y < allProjects.length; y++) {
            if (allProjects[y]._name === input) {

                //Replace current index with last index.
                tempIndex = allProjects[y];
                allProjects[y] = allProjects[allProjects.length - 1];
                allProjects[allProjects.length - 1] = tempIndex;

            } else {
                console.log('Error searching and/or deleting your project.');
            }
        }
        //Turn deleted project into an empty space.
        allProjects[y - 1] = null;

        //Create new array excluding any index that equals null.
        addProjects = allProjects.filter(projects => projects = null);

        //Success message.
        console.log('Successfully deleted.');
    },

}


function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // creating all cells
    for (var i = 0; i < 2; i++) {
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < 2; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            var cellText = document.createTextNode("cell in row "+i+", column "+j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
}
