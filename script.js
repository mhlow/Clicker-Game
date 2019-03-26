var centerBlock = document.querySelector("#center-block");
var hb = document.querySelector("h1");

var numVillagersHTML = document.querySelector("#num-villagers");
var balanceHTML = document.querySelector("#balance");
//
var pickaxeUpgradeOuter = document.querySelector("#pickaxe-upgrade");
var currentPickaxe = document.querySelector("#current-pickaxe");
var nextPickaxe = document.querySelector("#next-pickaxe");
var pickaxeCost = document.querySelector("#pickaxe-cost");
var nextPickaxeImg = document.querySelector("#next-pickaxe-img");
var pickaxeMultiplier = document.querySelector("#pickaxe-multiplier");
var currentBlock = document.querySelector("#current-block");
var nextBlock = document.querySelector("#next-block");
var nextBlockImg = document.querySelector("#next-block-img");
var blockUpgradeOuter = document.querySelector("#block-upgrade");
var blockCostHTML = document.querySelector("#block-cost");
//
var numClicksHTML = document.querySelector("#num-clicks");
var add10ClicksOuter = document.querySelector("#add-10-clicks");
var doubleClicksOuter = document.querySelector("#double-clicks");
var X1000ClicksOuter = document.querySelector("#X1000-clicks");
//
var villagersOuter = document.querySelector("#villagers");
var villagerCostHTML = document.querySelector("#villager-cost");
//
var error = "Not Enough Emeralds";
var upgradePickaxeCost = 100;
var balance = 0;
var pickaxe = 50;
var pickaxeLevel = 1;
var upgradeBlockCost = 500;
var block = 1;
var blockLevel = 1;
var numClicks = 0;
var randomMultiplier = 1;
var numVillagers = 0;
var villagerCost = 500;

function clickableClicked() {
  balance = balance + pickaxe * block;
  balanceHTML.innerHTML = delimitNumbers(balance);
  numClicks = numClicks + randomMultiplier * 1;
  numClicksHTML.innerHTML = delimitNumbers(numClicks);
}

centerBlock.onclick = clickableClicked;

function upgradePickaxe() {
  if (balance < upgradePickaxeCost) {
    balanceHTML.innerHTML = error;
  } else if (pickaxeLevel === 1) {
    balance = balance - upgradePickaxeCost;
    balanceHTML.innerHTML = delimitNumbers(balance);
    pickaxe = pickaxe * 2;
    upgradePickaxeCost = upgradePickaxeCost * 2.5;
    pickaxeCost.innerHTML = upgradePickaxeCost;
    pickaxeLevel = pickaxeLevel + 1;
    currentPickaxe.src =
      "https://minecraftprintables.com/wp-content/uploads/2017/02/minecraft-stone-pickaxe-template.png";
    nextPickaxeImg.src =
      "https://minecraftprintables.com/wp-content/uploads/2017/02/minecraft-iron-pickaxe-template.png";
    nextPickaxe.innerHTML = "Iron";
  } else if (pickaxeLevel === 2) {
    balance = balance - upgradePickaxeCost;
    balanceHTML.innerHTML = delimitNumbers(balance);
    pickaxe = pickaxe * 5;
    upgradePickaxeCost = upgradePickaxeCost * 6;
    pickaxeCost.innerHTML = upgradePickaxeCost;
    pickaxeLevel = pickaxeLevel + 1;
    currentPickaxe.src = "https://minecraftprintables.com/wp-content/uploads/2017/02/minecraft-iron-pickaxe-template.png";
    nextPickaxeImg.src = "https://minecraftprintables.com/wp-content/uploads/2017/02/minecraft-gold-pickaxe-template.png";
    nextPickaxe.innerHTML = "Gold";
  }
}

pickaxeUpgradeOuter.onclick = upgradePickaxe;

function upgradeBlock() {
  if (balance < upgradeBlockCost) {
    balanceHTML.innerHTML = error;
  } else if (blockLevel === 1) {
    balance = balance - upgradeBlockCost;
    balanceHTML.innerHTML = delimitNumbers(balance);
    nextBlockImg.src =
      "http://1.bp.blogspot.com/-LcYCcZ6U57Q/T6AuQSFOAqI/AAAAAAAABO8/86ZNnx6PbvY/s1600/minecraft_stone.jpg";
    nextBlock.innerHTML = 'Stone';
    upgradeBlockCost = upgradeBlockCost * 5;
    blockCostHTML.innerHTML = upgradeBlockCost;
    block = block * 4;
    blockLevel = blockLevel + 1;
    currentBlock.src = 'http://3.bp.blogspot.com/-Qs0ZbaSy4KM/T6AuMiorc6I/AAAAAAAABOc/RpA3dZGicC8/s1600/minecraft_dirt.jpg';
    centerBlock.src = 'http://3.bp.blogspot.com/-Qs0ZbaSy4KM/T6AuMiorc6I/AAAAAAAABOc/RpA3dZGicC8/s1600/minecraft_dirt.jpg';
  }
}

blockUpgradeOuter.onclick = upgradeBlock;

function add10Clicks() {
  if (balance < 2) {
    balanceHTML.innerHTML = error;
  } else {
    numClicks = numClicks + 10;
    numClicksHTML.innerHTML = delimitNumbers(numClicks);
    balance = balance - 2;
    balanceHTML.innerHTML = delimitNumbers(balance);
  }
}

add10ClicksOuter.onclick = add10Clicks;

function doubleClicks() {
  if (balance < 10) {
    balanceHTML.innerHTML = error;
  } else {
    numClicks = numClicks * 2;
    numClicksHTML.innerHTML = delimitNumbers(numClicks);
    balance = balance - 10;
    balanceHTML.innerHTML = delimitNumbers(balance);
  }
}

doubleClicksOuter.onclick = doubleClicks;

function X1000Clicks() {
  if (balance < 20) {
    balanceHTML.innerHTML = error;
  } else {
    randomMultiplier = randomMultiplier * 1000;
    balance = balance - 20;
    balanceHTML.innerHTML = delimitNumbers(balance);
  }
}

X1000ClicksOuter.onclick = X1000Clicks;

function delimitNumbers(str) {
  return (str + "").replace(/\b(\d+)((\.\d+)*)\b/g, function(a, b, c) {
    return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
  });
}


function buyVillager() {
  if (balance < villagerCost) {
    balanceHTML.innerHTML = error;
  } else {
    balance = balance - villagerCost;
    balanceHTML.innerHTML = delimitNumbers(balance);
    numVillagers = numVillagers + 1;
    numVillagersHTML.innerHTML = numVillagers;
    villagerCost = villagerCost * 2;
    villagerCostHTML.innerHTML = villagerCost;
    setInterval(function() {
      balance = balance + 5;
      balanceHTML.innerHTML = delimitNumbers(balance);
    }, 1000);
  }
}

villagersOuter.onclick = buyVillager;
