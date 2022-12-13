/**
 * Give your form an id only, and your input a name only:

    <form id="myform">
    <input type="text" name="foo">
    Then the most standards-compliant and least problematic way to access your input element is via:

    document.getElementById("myform").elements["foo"]

 */

const form = document.getElementById('form');
let firstName = form.elements["fname"].value;
let lastName = form.elements["lname"].value;
let email = form.elements["email"].value;
let password = form.elements["pwd"].value;

btn.addEventListener('click', validation);


function validation() {
    if (firstName.trim().length === 0) {

        firstName = prompt('Enter a valid name', 'John');
        console.log("firstName :" + firstName);

    }

    if (lastName.trim().length === 0) {
        lastName = prompt('Enter a valid name', 'Doe');
        console.log("lastName :" + lastName);

    }

    if (!email.includes('@')) {
        lastName = prompt('Enter a valid email', 'xyz@abc.com');
        console.log("email :" + email);

    }


    if (!(password == "admin123")) {
        console.log(password)
        alert("Enter a valid password");
    }
}