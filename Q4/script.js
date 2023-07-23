let container = document.querySelector(".container");

function showNotification(top = 0, right = 0, className, html = "Hello") {
  let div = document.createElement("div");
  div.setAttribute(
    "style",
    `background-color:red;
    padding: 15px;
    border-radius: 15%;
    margin-left: 5vh;
    margin-top: ${top}px;
    margin-right: ${right}px;
     `
  );
  div.innerHTML = "<span>x</span>";
  div.className = className ? className : "";
  div.innerText = html;

  container.appendChild(div);
}

showNotification(20, 10);
