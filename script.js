function copyRef() {
  const input = document.querySelector("#refer input");
  input.select();
  input.setSelectionRange(0, 99999); // for mobile
  navigator.clipboard.writeText(input.value);
  document.getElementById("copyMsg").style.display = "block";
}
