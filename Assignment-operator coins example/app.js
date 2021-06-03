
const passingMarks = 50;

function check() {

    let engmarks = parseInt(document.querySelector('#input1').value);

    let mathmarks = parseInt(document.querySelector('#input2').value);

    let engpass = engmarks >= passingMarks;
    let mathpass = mathmarks >= passingMarks;

    let exampass = engpass && mathpass;
    alert(exampass);
}