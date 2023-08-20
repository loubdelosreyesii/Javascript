const viewCont = document.getElementById("viewContainer");
console.log(viewCont);

const viewCont2 = document.querySelector("#viewContainer");

console.log(viewCont2);

const viewsEven = viewCont.querySelectorAll("section:nth-of-type(even)");

console.log(viewsEven);

for(let i =0 ; i<viewsEven.length;i++)
{
    viewsEven[i].style.backgroundColor = "darkblue";
        // viewsEven[i].style.width="400px";
        // viewsEven[i].style.height="400px";
}

//change the text 
const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";