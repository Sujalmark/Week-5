function Square() {
  let input = document.getElementById("numberInput").value;
  let result = input * input;
  document.getElementById(
    "Output"
  ).innerHTML = `The square of ${input} is <span style="font-size:1.2em; font-weight:bold;">${result}</span>`;
}
