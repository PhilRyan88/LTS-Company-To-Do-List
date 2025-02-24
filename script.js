var input = document.querySelector(".input-bar");
var add = document.querySelector(".add-btn");
var div = document.querySelector(".task-list");

add.addEventListener("click", () => {
  if (input.value === "") {
    alert("Enter something");
  } else {
    var ul =
      document.createElement("ul") || document.querySelector(".task-list ul");
    var li = document.createElement("li");
    var cdiv = document.createElement("div");
    var span = document.createElement("span");
    var text = document.createTextNode(input.value);
    input.value = "";

    var removebtn = document.createElement("button");
    removebtn.innerHTML = "Remove";
    cdiv.className = "c-div";
    cdiv.appendChild(text);
    span.appendChild(removebtn);
    cdiv.appendChild(span);
    li.appendChild(cdiv);
    ul.appendChild(li);
    div.appendChild(ul);

    li.addEventListener("click", () => {
      console.log("clicked");
      li.style.textDecoration = "line-through";
    });
    removebtn.addEventListener("click", () => {
      ul.removeChild(li);
    });
  }
});
