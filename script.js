'use strict';


const formEl = document.querySelector('.form');
formEl.addEventListener('submit',event=>{
    event.preventDefault();

    const formData = new FormData(formEl);
    const data = new URLSearchParams(formData);

    fetch('https://reqres.in/api/users', {
        method :'POST',
        body: data
    }).then(res=>res.json())
      .then(data=> console.log(data))
      .then(data=> alert("Object created successfully"))
      .catch(error=> alert("Object not created"))

});

