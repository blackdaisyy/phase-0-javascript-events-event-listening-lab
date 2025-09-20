function addingEventListener() {
}

function addingEventListener() {
  const input = document.getElementById("button");

  function clickAlert() {
    alert("I was clicked!");
  }

  input.addEventListener("click", clickAlert);
}

// Make sure to call the function so it runs
addingEventListener();

input.addEventListener('click', clickAlert);   
input.addEventListener('click', clickAlert()); 


