function showBreed(breed) {
  document.getElementById("breed-name").innerText = "這是：" + breed;
  document.getElementById("breed-info").classList.remove("hidden");
}

function closeInfo() {
  document.getElementById("breed-info").classList.add("hidden");
}
