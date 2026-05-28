let transactions = [
  { upi: "a", number: "123", status: "success" },
  { upi: "b", number: "124", status: "success" },
  { upi: "c", number: "125", status: "success" },
  { upi: "d", number: "126", status: "success" },
];

let op = [
  { upi: "b", number: "124", status: "success" },
  { upi: "c", number: "125", status: "success" },
];

console.log(transactions);
console.log(transactions.length);

for (let i = 0; i < transactions.length; i++) {
  let newarr = [];
  console.log("value is", transactions[i].status);
  if (transactions[i].status == "failure") {
    newarr.push(transactions[i]);
  }
}
console.log(newarr);
