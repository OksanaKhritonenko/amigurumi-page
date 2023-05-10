function getPack() {
  let name = prompt("What is your name?").trim();
  name = name[0].toUpperCase() + name.substring(1).toLocaleLowerCase();
  let craftPack = prompt(
    "Please choose a number of the craft pack you wish 💜"
  ).trim();
  if (craftPack === "1") {
    alert(
      `Dear ${name}, thank you for ordering Basic pack! Have fun creative time ☺ `
    );
  } else if (craftPack === "2") {
    alert(
      `Dear ${name}, thank you for ordering Basic plus pack! Have fun creative time ☺ `
    );
  } else if (craftPack === "3") {
    alert(
      `Dear ${name}, thank you for ordering Pro pack! Have fun creative time ☺ `
    );
  } else {
    alert(`🤔 Dear ${name}, we do not have pack with this number yet`);
  }
}
let button = document.querySelector("button");
button.addEventListener("click", getPack);
