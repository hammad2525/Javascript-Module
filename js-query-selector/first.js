function show()
 {
     let inputelement1= document.querySelector('#first');
     console.log(inputelement1);

     let inputelement2= document.querySelector('#last');
     console.log(inputelement2);

     let attr=document.querySelector('#first').placeholder;

     console.log(attr);

     let inputvalue= inputelement1.value;

     console.log(inputvalue);

     let inputvalue2= inputelement2.value;

     console.log(inputvalue2);

     let head= document.querySelector('h1 ');
     console.log(head);

     let headcontent= document.querySelector('h1 > span').innerHTML=inputvalue+ ' ' +inputvalue2 ;
     console.log(headcontent);
    
    }