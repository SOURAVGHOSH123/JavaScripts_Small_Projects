const form = document.querySelector('form');
// this useCase will give you empty
// const height = dparseInt(document.querySelector('height')
form.addEventListener('submit', function(e) {
   // console.log(e)
   e.preventDefault();

   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const result = document.querySelector('#result');

   if(height === ' ' || isNaN(height) || height < 0){
      result.innerHTML = `Please give Integer value,not ${height}`;
   }else if(weight === ' ' || weight < 0 || isNaN(weight)){
      result.innerHTML = `Please give Integer value, not ${weight}`
   }else{
      // const bmi = 
      result.innerHTML = (weight / ((height*height)/10000)).toFixed(2);
   }
});