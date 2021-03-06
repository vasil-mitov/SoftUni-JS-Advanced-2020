function solve() {

   const coursesPrice = {
      'js-fundamentals': 170,
      'js-advanced': 180,
      'js-applications': 190,
      'js-web': 490,
      'HTML and CSS': 0
   }

   const coursesNames = {
      'js-fundamentals': 'JS-Fundamentals',
      'js-advanced': 'JS-Advanced',
      'js-applications': 'JS-Applications',
      'js-web': 'JS-Web',
      'HTML and CSS': 'HTML and CSS'
   }

   let courses = [];

   let courseBody = document.querySelectorAll('.courseBody ul li input');

   let educationForm = document.querySelectorAll('#educationForm input')[1];

   let button = document.querySelector('.courseFoot button[value="signMeUp"]');

   let myCourses = document.querySelector('#myCourses .courseBody ul');

   button.addEventListener('click', eventHandler);

   let totalPrice = 0;
   let cost = document.querySelector('#myCourses .courseFoot p');

   function eventHandler() {

      if (educationForm.checked) {
         Object.keys(coursesPrice).forEach(c => coursesPrice[c] *= 0.94);
      }

      Array.from(courseBody).forEach(e => {
         if (e.checked) {
            courses.push(e.name);

         }
      })
      if (courses.includes('js-fundamentals') && courses.includes('js-advanced')) {
         coursesPrice['js-advanced'] *=  0.9;
      }
      if (courses.length === 4) {
         courses.push('HTML and CSS');
      }

      setFinalValues();
   }

   function setFinalValues() {
      Array.from(courses).forEach(e => {

         totalPrice += coursesPrice[e];
         let li = document.createElement('li');

         li.textContent = coursesNames[e];
         myCourses.appendChild(li);

      });

      if (courses.includes('js-fundamentals') && courses.includes('js-advanced') && courses.includes('js-applications')) {
         totalPrice *= 0.94;
      }

      totalPrice = Math.floor(totalPrice);

      cost.innerHTML = `Cost: ${totalPrice.toFixed(2)} BGN`;
   }
}
