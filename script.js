let form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight =parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('.result');
    if(height=='' || height < 0 || isNaN(height)){
        result.innerHTML = "Enter valid height";
    }
    if(weight=='' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Enter valid weight";
    }else{
       const bmi = (weight/((height*height)/10000)).toFixed(2);
      if (bmi > 24.6) {
        result.innerHTML = `Over weight : ${bmi}`;
      }else if(bmi <=24.6 && bmi >=18.6) {
        result.innerHTML = `Normal weight : ${bmi}`;
      } else if(bmi <18.6){
        result.innerHTML = `Under weight : ${bmi}`;
      }
    }
})