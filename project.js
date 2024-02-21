const allBtn = document.getElementsByClassName("add-btn");
let count = 0;
let purchaseTicket = [];
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count = count + 1;
    const seatName = e.target.innerText;
    if (purchaseTicket.length < 4) {
      if (!purchaseTicket.includes(seatName)) {
        const seatCategory = "Economy";
        const price = 550;
        const selectedSeatName = document.getElementById("seat-selected-name");
        const li = document.createElement("li");

        const p = document.createElement("p");
        p.innerText = seatName;
        const p2 = document.createElement("p");
        p2.innerText = seatCategory;
        const p3 = document.createElement("p");
        p3.innerText = price;
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        selectedSeatName.appendChild(li);
        purchaseTicket.push(seatName);
        totalBdt("total-bdt", parseInt(price));

        grandTotalBdt("grand-bdt", parseInt(price));
        console.log(purchaseTicket);
        btn.classList.add("bg-[#1dd100]", "hover:bg-[#1dd100]");
        //
        document.getElementById("seat-count").innerText = purchaseTicket.length;
        document.getElementById("seat-left").innerText =
          24 - purchaseTicket.length;
      }
    }
    //SUM
    /* const totalBdt = document.getElementById("total-bdt").innerText;
    const convertedTotalCost = parseInt(totalBdt);
    const sum = convertedTotalCost + parseInt(price); */
    /* totalBdt("total-bdt", parseInt(price));
  
    grandTotalBdt("grand-bdt", parseInt(price)); */
    /* const grandBdt = document.getElementById("grand-bdt").innerText;
    const convertedGrandTotalCost = parseInt(grandBdt);
    const sum2 = convertedGrandTotalCost + parseInt(price);
    //setInnerText("total-bdt", sum);*/
    setInnerText("grand-bdt", sum2);

    if (count <= 4) {
      setInnerText("seat-count", count);
      //setInnerText("total-bdt", sum);
      //setInnerText("grand-bdt", sum2);
    } else {
      alert("you select the 4 seat");
    }
  });
}

/* function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#1DD100]");
} */
//setBackgroundColorById(btn);

//
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// button color
/* function addSeat(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#1DD100]");
} */

function totalBdt(id, value) {
  const totalBdt = document.getElementById(id).innerText;
  const convertedTotalCost = parseInt(totalBdt);
  const sum = convertedTotalCost + parseInt(value);
  setInnerText(id, sum);
}

/* const totalBdt = document.getElementById("total-bdt").innerText;
const convertedTotalCost = parseInt(totalBdt);
 */
//const sum = convertedTotalCost + parseInt(value);
//setInnerText("grand-bdt", convertedTotalCost);

function grandTotalBdt() {
  const couponInputElement = document.getElementById("coupon-input").value;
  let totalTicketPrice;
  if (couponInputElement == "NEW15") {
    totalTicketPrice = 550 * purchaseTicket.length * 0.85;
    setInnerText("grand-bdt", totalTicketPrice);
    //totalTicketPrice.toFixed(2));
  } else if (couponInputElement == "Couple 20") {
    totalTicketPrice = 550 * purchaseTicket.length * 0.8;
    setInnerText("grand-bdt", totalTicketPrice);
  } else {
    console.log("you have no discount");
  }
  //console.log(category);
}
const ticketFinalPrice = document.getElementById("grand-bdt");
ticketFinalPrice.innerText = totalTicketPrice;

//
function sent() {
  let headerSection = document.getElementById("header-section");
  let mainSection = document.getElementById("main-section");
  let footerSection = document.getElementById("footer-section");
  let successSection = document.getElementById("success-section");

  headerSection.classList.add("hidden");
  mainSection.classList.add("hidden");
  footerSection.classList.add("hidden");
  successSection.classList.remove("hidden");
}
