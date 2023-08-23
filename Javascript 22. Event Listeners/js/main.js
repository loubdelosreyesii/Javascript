

//syntax : AddEvenListener(event,function,userCapture);

const doSomething = () =>{
    alert('Doing Something');
}

// h2.addEventListener("click",doSomething,false);

// h2.removeEventListener("click",doSomething,false);

// ///add anoynymous event
// h2.addEventListener("click",function (event){
//     console.log(event.target);
//     event.target.textContent = "Clicked";
// });
//add event readystate event

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        console.log("ReadyState:complete!");
    }
    initApp();
});

const initApp=()=>{
    const view = document.querySelector("#view2");
    // h2.innerText="Hello World!";

    view.addEventListener("click",(event)=>{
        console.log(event.target);
        view.style.backgroundColor="purple";
    },false);

    const nav = document.querySelector("nav");

    nav.addEventListener("mouseover",(event)=>{
        event.target.classList.add("height100");
    });

    nav.addEventListener("mouseout",(event)=>{
        event.target.classList.remove("height100");
    });

    const myForm= document.querySelector("#myForm");

    myForm.addEventListener("submit",(event)=>{
        console.log("submit event");

        event.preventDefault();
        const inputText = document.getElementById("myInput");

        inputText === null? console.log("null po ") : console.log("meron po.");

        console.log(inputText.innerText);
    });

}