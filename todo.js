let inpu = document.getElementById('inputPassword2');
let text='';

inpu.addEventListener('change',e =>{ 
    
    text = e.target.value;
console.log(text);
});
    
let add = document.querySelector('.btn');  

add.addEventListener('click', function(e){
    e.preventDefault()
    let textHolder = document.createElement('h1')
    textHolder.innerHTML = text
    let deleteBtn = document.createElement('button')

    deleteBtn.innerHTML = 'Delete';
    deleteBtn.className="d-btn";
    
    
    let completeBtn = document.createElement('button')
    completeBtn.innerHTML = 'Complete'
    completeBtn.className="d-btn";
    
    let container = document.createElement('div')
    container.appendChild(textHolder)
    
    container.appendChild(deleteBtn)
    
    container.appendChild(completeBtn)
    
    
    document.querySelector('body').appendChild(container)


    deleteBtn.addEventListener('click', function(){
        deleteBtn.parentElement.remove()
    })

    completeBtn.addEventListener('click' , function()
    {
        if(completeBtn.innerHTML==="Complete")
        {
            completeBtn.innerHTML = "Undo"; 
            textHolder.style.textDecoration = 'line-through';   
        }
        else if(completeBtn.innerHTML==="Undo"){
            completeBtn.innerHTML = "Complete"; 

            textHolder.style.textDecoration = 'none'; 
        }

    })

})

  


























