function deleteField() {
  if (confirm("Do you really want to reset?")) {
      document.querySelector("#name").value=""
      document.querySelector("#surname").value=""
      document.querySelector("#city").value=""
  }
}
