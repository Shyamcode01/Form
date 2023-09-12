
// input field 

let btn=document.querySelector('.btn');



 
btn.addEventListener('click',(e)=>{
     e.preventDefault();
// check box value 
    // let check1=document.querySelectorAll('.check25')[0].value;
    // let check2=document.querySelectorAll('.check25')[1].value;
    // let check3=document.querySelectorAll('.check25')[2].value;
    let check1=document.getElementsByName('options');
    let checkvalue='';
    for(let i=0;i<check1.length;i++){
        if(check1[i].checked){
            checkvalue +=check1[i].value +",";
        }
    }

    
    // information 
    let name=document.querySelector('.name').value;
    let number=document.querySelector('.phone').value;
    let email=document.querySelector('.email').value;
    let address=document.querySelector('.address').value;
    
     let data = new Array();
     data=JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')):[];
    if(data.some((v)=>{
        return v.email==email
    })){
        alert('Duplicate Data add')
    }else{
        data.push({'car':checkvalue, 'name':name,'number':number,'email':email,'address':address})
        
    }
    localStorage.setItem('user',JSON.stringify(data))
    alert('Data add localStorage & You can see Console All  data');
    // console.table(data)
    
     
 
})

  let store=JSON.parse(localStorage.getItem('user'));
  console.table(store)