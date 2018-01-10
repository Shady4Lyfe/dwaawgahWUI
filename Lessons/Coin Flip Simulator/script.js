//COINTALKSDJA

// Add evente listenres
$("#flip").click(flipCoin);


// EVEnt funicont
function flipCoin() {

  // Declare Variables
  let numHeads = 0;
  let numTails = 0;
  let $result = $("#result");
  let totalFlips = Number($("#totalFlips").val());
  
  // Flip for ? times
  $result.html("")
  
  for (let numFlips = 0; numFlips < totalFlips; numFlips++) {
    // One Coin Flip
    let coin = Math.floor(Math.random() * 2) + 1;
    if (coin == 1) {
      $result.append("Heads<br>");
      numHeads++;
    } else {
      $result.append("Tails<br>");
      numTails++;
    }
  }

  // Output Totals
  $("#totals").html("Heads: " + numHeads + " Tails:" + numTails)


}
