let input = document.querySelector("input");
let progress = document.querySelector(".prog");
let counter = document.querySelector(".count");
let maxlength = input.getAttribute("maxlength");

counter.innerHTML = input.getAttribute("maxlength");

input.oninput = function () {
    counter.innerHTML = maxlength - input.value.length;

    counter.innerHTML == "0" ? counter.classList.add("zero") : counter.classList.remove("zero");

    progress.style.width = `${(input.value.length * 100) / maxlength}%`;
}