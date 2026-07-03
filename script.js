// Contact Form Validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message").value.trim();

    let output = document.getElementById("formMessage");

    if(name==="" || email==="" || message===""){

        output.style.color="red";
        output.textContent="Please fill all the fields.";

        return;
    }

    let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){

        output.style.color="red";
        output.textContent="Enter a valid email.";

        return;
    }

    output.style.color="green";
    output.textContent="Form Submitted Successfully!";

    form.reset();

});


// To Do List

const addBtn=document.getElementById("addTask");

const taskInput=document.getElementById("taskInput");

const taskList=document.getElementById("taskList");

addBtn.addEventListener("click",function(){

    if(taskInput.value.trim()===""){

        alert("Enter a task.");

        return;
    }

    const li=document.createElement("li");

    li.innerHTML=`
    ${taskInput.value}
    <button class="delete">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value="";

    li.querySelector(".delete").addEventListener("click",function(){

        li.remove();

    });

});