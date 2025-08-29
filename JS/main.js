// Heart Counter
const hearts = document.getElementsByClassName("fa-heart");
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    const heart_count = document.getElementById("heart-counter");
    const heart_counter = parseInt(heart_count.innerText);
    heart_count.innerText = heart_counter + 1;
  });
}

// Coins value

// Call Function
function call(call_id, name_id, number_id) {
  document.getElementById(call_id).addEventListener("click", function () {
    const coints = document.getElementById("coins");
    let coins_counter = parseInt(coints.innerText);
    const service_name = document.getElementById(name_id).innerText;
    const service_number = parseInt(
      document.getElementById(number_id).innerText
    );
    if (coins_counter >= 20) {
      alert("Calling " + service_name + " " + service_number);
      coints.innerText = coins_counter - 20;
    } else {
      alert("Insufficient coinst. You need 20 coins to make the call");
    }
  });
}

call("card-1-call", "card1-name", "card1-number");
call("card2-call", "card2-name", "card2-number");
call("card3-call", "card3-name", "card3-number");
call("card4-call", "card4-name", "card4-number");
call("card5-call", "card5-name", "card5-number");
call("card6-call", "card6-name", "card6-number");
call("card7-call", "card7-name", "card7-number");
call("card8-call", "card8-name", "card8-number");
call("card9-call", "card9-name", "card9-number");
