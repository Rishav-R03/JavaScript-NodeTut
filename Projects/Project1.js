const button = document.querySelectorAll(".button");
const container = document.querySelector('.container');

button.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.id==='Red'){
            container.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='Yellow'){
            container.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='Green'){
            container.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='Pink'){
            container.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='Blue'){
            container.style.backgroundColor = e.target.id;
        }
    });
});