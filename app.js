
let data = 0;

document.getElementById("counting").innerText = data;

document.querySelector("#inc").addEventListener('click',increment)

document.querySelector("#dec").addEventListener('click',decrement)


function increment(){

    data = data+1;

    document.getElementById("counting").innerText = data;


}

function decrement(){

    data = data-1;

    document.getElementById("counting").innerText = data;
}