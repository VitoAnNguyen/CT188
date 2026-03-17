var elForm, elSelectPackage, elPackageHint, elTerms; //Declare variables
elForm = document.getElementById('formSignup'); //store elements
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
eltTermsHint = document.getElementById('termsHint');

function packageHint() { //Declare function
    var package = this.options[this.selectedIndex].value; //get selected option
    if (package == 'monthly') { //if monthly package
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!'; //show this msg
    } else { //otherwise
        elPackageHint.innerHTML = 'Wise choice'; //show this message
    }
}

function checkTerms(event) { //declare function
    if (!elTerms.checked) { //if checkbox ticked
        eltTermsHint.innerHTML = 'you must argee to the terms.'; //show message
        event.preventDefault(); //dont't submit form
    }
}
//Create event listeners: submit calls checkterms(), change calls packageHint()

elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);