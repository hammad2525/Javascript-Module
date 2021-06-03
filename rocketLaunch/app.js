
 function check(){

    let mywight = parseInt ( document.querySelector('input').value);

    if ( mywight < 50){

        alert("my weight is less then 50");
    }

    else if ( mywight > 50 && mywight < 60) {
        alert("weight is between 50 and 60");
    }

    else if ( mywight > 60 ){
        alert(" i am over weight ")

    }
}