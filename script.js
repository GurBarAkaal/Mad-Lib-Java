// PIZZERIA JS SCRIPT

// EVENT LISTENER
document.getElementById("btn").addEventListener("click", orderPizza);

// Event Function
function orderPizza() {
  //INPUT
  let familyMember = document.getElementById("fm").value;
  let pluralNoun = document.getElementById("pn").value;
  let action = document.getElementById("a").value;
  // PROCESS
  let greeting = `My ${familyMember} loves to eat ${pluralNoun} and then ${action}.`;

  console.log(greeting);

  // OUTPUT
  document.getElementById("sentance").innerHTML = greeting;
}
