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
const callHistory = [];
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
      const data = {
        name: service_name,
        number: service_number,
        date: new Date().toLocaleTimeString(),
      };
      callHistory.push(data);
      const Transaction_parent = document.getElementById(
        "transaction-history-parent"
      );
      Transaction_parent.innerText = "";
      for (const data of callHistory) {
        const div = document.createElement("div");
        div.innerHTML = `
              <div class="mt-[16px] w-[352px] h-[83px] flex gap-[16px] justify-between items-center p-4 bg-gray-100 rounded-xl">
                <div>
                  <h1 class="text-[18px] font-semibold">${data.name}</h1>
                  <p>${data.number}</p>
                </div>
                <div>
                  <p>${data.date}</p>
                </div>
              </div>`;
        Transaction_parent.appendChild(div);
      }
    } else {
      alert("Insufficient coins. You need 20 coins to make the call");
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

// Clear Function
const clear_button = document.getElementById("Clear-button");
clear_button.addEventListener("click", function () {
  const history = document.getElementById("transaction-history-parent");
  history.innerText = "";
});

// Copy Function
const copy = document.getElementsByClassName("copy-button");
for (let i = 0; i < copy.length; i++) {
  copy[i].addEventListener("click", function () {
    const copy_count = document.getElementById("copy-counter");
    const copy_counter = parseInt(copy_count.innerText);
    copy_count.innerText = copy_counter + 1;
  });
}
