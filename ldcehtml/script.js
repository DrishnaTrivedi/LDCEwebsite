function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-250px";
  }
}

function remove() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-250px";
  }
}
document.getElementById("mrindia").addEventListener("click", remove);