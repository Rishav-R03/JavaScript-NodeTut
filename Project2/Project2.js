const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');

    if(height=== ''|| height<0||isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    // results.innerHTML= `${height}`;
    else if(weight=== ''|| weight<0||isNaN(weight)||weight===0){
        results.innerHTML = `Please give a valid height ${weight}`;
    }
    // results.innerHTML= `${weight}`;
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
    
});