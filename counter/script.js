const output = document.querySelector(".output");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const reset = document.getElementById("reset");

console.log(output);
let count = 0;

add.addEventListener("click", function(){
    count = count + 1;
    output.textContent = count;
})

sub.addEventListener("click", function(){
    count = count - 1;
    output.textContent = count;
})

reset.addEventListener("click", function(){
    count = 0;
    output.textContent = count;
})

