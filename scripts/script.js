const form = document.querySelector("#form");
const newItem = document.querySelector("#newItem");
const list = document.querySelector("#list");
const alertMessage = document.querySelector("#alert");

//Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newItemValue = newItem.value.trim();
  addItem(newItemValue);
  newItem.value = "";
});

/** Function to add a new item to the list */
function addItem(newItem) {
  // Validate input
  if (newItem === "") {
    alert("Por favor, insira um valor válido.");
    return;
  }
  // Create list item element and adding classes
  const listItem = document.createElement("li");
  listItem.classList.add("listItem");
  listItem.classList.add("flex");

  // Create checkbox input
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");

  // Create span for item text
  const itemText = document.createElement("span");
  itemText.textContent = newItem;

  // Create delete button and append delete icon to it
  const deleteImg = document.createElement("img");
  deleteImg.setAttribute("src", "./assets/icons/delete.svg");
  deleteImg.setAttribute("alt", "Ícone de deletar item");
  deleteImg.classList.add("delete");

  // Append checkbox, item text, and delete button to list item
  listItem.appendChild(checkbox);
  listItem.appendChild(itemText);
  listItem.appendChild(deleteImg);

  // Append list item to the list
  list.appendChild(listItem);
  return;
}

// Add event listeners to delete buttons
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const listItem = event.target.closest(".listItem");

    //Call the deleteItem function to remove the item from the list
    deleteItem(listItem);
  }
});

/** Function to delete an item from the list */
function deleteItem(item) {
  list.removeChild(item);

  // Show alert message
  alertMessage.classList.remove("alert-toggle");

  // Hide alert message after 7 seconds
  setTimeout(() => {
    alertMessage.classList.add("alert-toggle");
  }, 7000);
}

// Add event listener to close button in alert message
alertMessage.addEventListener("click", (event) => {
  if (event.target.classList.contains("closeBtn")) {
    alertMessage.classList.add("alert-toggle");
  }
});
