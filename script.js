var centerBlock = document.querySelector("#center-block");
var upgradeBarInner = document.querySelector("#upgrade-bar-inner");
var numVillagersHTML = document.querySelector("#num-villagers");
var balanceHTML = document.querySelector("#balance");
//
var pickaxeUpgradeOuter = document.querySelector("#pickaxe-upgrade");
var currentPickaxe = document.querySelector("#current-pickaxe");
var nextPickaxe = document.querySelector("#next-pickaxe");
var pickaxeCost = document.querySelector("#pickaxe-cost");
var nextPickaxeImg = document.querySelector("#next-pickaxe-img");
//
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
var disappearOuter = document.querySelector("#disappear");
var disappearText = document.querySelector("#disappear-text");

//
var villagersOuter = document.querySelector("#villagers");
var villagerCostHTML = document.querySelector("#villager-cost");
//
var villagerPickaxeOuter = document.querySelector("#villager-pickaxe");
var currentVillagerPickaxe = document.querySelector("#current-villager-pickaxe");
var nextVillagerPickaxeImg = document.querySelector("#next-villager-pickaxe-img");
var nextVillagerPickaxe = document.querySelector("#next-villager-pickaxe");
var villagerPickaxeCostHTML = document.querySelector("#villager-pickaxe-cost");
//
var error = "Not Enough Emeralds";
var upgradePickaxeCost = 100;
var balance = 0;
var pickaxe = 1;
var pickaxeLevel = 1;
var upgradeBlockCost = 500;
var block = 1;
var blockLevel = 1;
var numClicks = 0;
var randomMultiplier = 1;
var numVillagers = 0;
var villagerCost = 500;
var villagerPickaxe = 1;
var villagerPickaxeCost = 500;
var villagerPickaxeLevel = 1;
var disappearLevel = 1;

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
    pickaxeCost.innerHTML = delimitNumbers(upgradePickaxeCost) + " Emeralds";
    pickaxeLevel = pickaxeLevel + 1;
    currentPickaxe.src = "https://minecraftprintables.com/wp-content/uploads/2017/02/minecraft-stone-pickaxe-template.png";
    nextPickaxeImg.src = "https://minecraftprintables.com/wp-content/uploads/2017/02/minecraft-iron-pickaxe-template.png";
    nextPickaxe.innerHTML = "Iron";
    upgradeBarInner.style.width = pickaxeLevel * 60 + "px";
  } else if (pickaxeLevel === 2) {
    balance = balance - upgradePickaxeCost;
    balanceHTML.innerHTML = delimitNumbers(balance);
    pickaxe = pickaxe * 5;
    upgradePickaxeCost = upgradePickaxeCost * 6;
    pickaxeCost.innerHTML = delimitNumbers(upgradePickaxeCost) + " Emeralds";
    pickaxeLevel = pickaxeLevel + 1;
    currentPickaxe.src = "https://minecraftprintables.com/wp-content/uploads/2017/02/minecraft-iron-pickaxe-template.png";
    nextPickaxeImg.src = "https://minecraftprintables.com/wp-content/uploads/2017/02/minecraft-gold-pickaxe-template.png";
    nextPickaxe.innerHTML = "Gold";
    upgradeBarInner.style.width = pickaxeLevel * 60 + "px";
  } else if (pickaxeLevel === 3) {
    balance = balance - upgradePickaxeCost;
    balanceHTML.innerHTML = delimitNumbers(balance);
    pickaxe = pickaxe * 8;
    upgradePickaxeCost = upgradePickaxeCost * 9;
    pickaxeCost.innerHTML = delimitNumbers(upgradePickaxeCost) + " Emeralds";
    pickaxeLevel = pickaxeLevel + 1;
    currentPickaxe.src = "https://minecraftprintables.com/wp-content/uploads/2017/02/minecraft-gold-pickaxe-template.png";
    nextPickaxeImg.src = "https://minecraftprintables.com/wp-content/uploads/2017/02/minecraft-diamond-pickaxe-template.png";
    nextPickaxe.innerHTML = "Diamond";
    upgradeBarInner.style.width = pickaxeLevel * 60 + "px";
  } else if (pickaxeLevel === 4) {
    balance = balance - upgradePickaxeCost;
    balanceHTML.innerHTML = delimitNumbers(balance);
    pickaxe = pickaxe * 15;
    pickaxeCost.innerHTML = "Max";
    pickaxeLevel = pickaxeLevel + 1;
    currentPickaxe.src = "https://minecraftprintables.com/wp-content/uploads/2017/02/minecraft-diamond-pickaxe-template.png";
    nextPickaxeImg.style.display = "hidden";
    nextPickaxe.innerHTML = "Max";
    upgradeBarInner.style.width = pickaxeLevel * 60 + "px";
  }
}

pickaxeUpgradeOuter.onclick = upgradePickaxe;

function upgradeBlock() {
  if (balance < upgradeBlockCost) {
    balanceHTML.innerHTML = error;
  } else if (blockLevel === 1) {
    balance = balance - upgradeBlockCost;
    balanceHTML.innerHTML = delimitNumbers(balance);
    nextBlock.innerHTML = 'Stone';
    block = block * 4;
    upgradeBlockCost = upgradeBlockCost * 5;
    blockCostHTML.innerHTML = delimitNumbers(upgradeBlockCost) + " Emeralds";
    blockLevel = blockLevel + 1;
    nextBlockImg.src = "http://1.bp.blogspot.com/-LcYCcZ6U57Q/T6AuQSFOAqI/AAAAAAAABO8/86ZNnx6PbvY/s1600/minecraft_stone.jpg";
    currentBlock.src = "http://3.bp.blogspot.com/-Qs0ZbaSy4KM/T6AuMiorc6I/AAAAAAAABOc/RpA3dZGicC8/s1600/minecraft_dirt.jpg";
    centerBlock.src = "http://3.bp.blogspot.com/-Qs0ZbaSy4KM/T6AuMiorc6I/AAAAAAAABOc/RpA3dZGicC8/s1600/minecraft_dirt.jpg";
  } else if (blockLevel === 2) {
    balance = balance - upgradeBlockCost;
    balanceHTML.innerHTML = delimitNumbers(balance);
    nextBlock.innerHTML = 'Coal';
    block = block * 6;
    upgradeBlockCost = upgradeBlockCost * 8;
    blockCostHTML.innerHTML = delimitNumbers(upgradeBlockCost) + " Emeralds";
    blockLevel = blockLevel + 1;
    nextBlockImg.src = "https://www.fractalcamo.com/uploads/5/9/0/2/5902948/s189772745713394276_p3851_i145_w750.jpeg";
    currentBlock.src = "http://1.bp.blogspot.com/-LcYCcZ6U57Q/T6AuQSFOAqI/AAAAAAAABO8/86ZNnx6PbvY/s1600/minecraft_stone.jpg";
    centerBlock.src = "http://1.bp.blogspot.com/-LcYCcZ6U57Q/T6AuQSFOAqI/AAAAAAAABO8/86ZNnx6PbvY/s1600/minecraft_stone.jpg";
  } else if (blockLevel === 3) {
    balance = balance - upgradeBlockCost;
    balanceHTML.innerHTML = delimitNumbers(balance);
    nextBlock.innerHTML = 'Iron';
    block = block * 8;
    upgradeBlockCost = upgradeBlockCost * 10;
    blockCostHTML.innerHTML = delimitNumbers(upgradeBlockCost) + " Emeralds";
    blockLevel = blockLevel + 1;
    nextBlockImg.src = "https://s1.piq.land/2012/05/01/lpgi3r0ho1AEi9Hztmbi1eTc_400x400.png";
    currentBlock.src = "https://www.fractalcamo.com/uploads/5/9/0/2/5902948/s189772745713394276_p3851_i145_w750.jpeg";
    centerBlock.src = "https://www.fractalcamo.com/uploads/5/9/0/2/5902948/s189772745713394276_p3851_i145_w750.jpeg";
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

function disappearFunction() {
  if (disappearLevel === 1) {
    numClicks = numClicks * 3;
    numClicksHTML.innerHTML = delimitNumbers(numClicks);
    disappearLevel = disappearLevel + 1;
    disappearOuter.style.border = "1px solid white";
    disappearText.innerHTML = "";
  }
}

disappearOuter.onclick = disappearFunction;

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
    villagerCostHTML.innerHTML = delimitNumbers(villagerCost);
    setInterval(function() {
      balance = balance + villagerPickaxe * 5;
      balanceHTML.innerHTML = delimitNumbers(balance);
    }, 1000);
  }
}

villagersOuter.onclick = buyVillager;

function upgradeVillagerPickaxe() {
  if (balance < villagerPickaxeCost) {
    balanceHTML.innerHTML = error;
  } else if (villagerPickaxeLevel === 1) {
    balance = balance - villagerPickaxeCost;
    balanceHTML.innerHTML = delimitNumbers(balance);
    villagerPickaxe = villagerPickaxe * 2;
    villagerPickaxeCost = villagerPickaxeCost * 2.5;
    villagerPickaxeCostHTML.innerHTML = delimitNumbers(villagerPickaxeCost) + " Emeralds";
    villagerPickaxeLevel = villagerPickaxeLevel + 1;
    currentVillagerPickaxe.src = "https://minecraftprintables.com/wp-content/uploads/2017/02/minecraft-stone-pickaxe-template.png";
    nextVillagerPickaxeImg.src = "https://minecraftprintables.com/wp-content/uploads/2017/02/minecraft-iron-pickaxe-template.png";
    nextVillagerPickaxe.innerHTML = "Iron";
  } else if (villagerPickaxeLevel === 2) {
    balance = balance - villagerPickaxeCost;
    balanceHTML.innerHTML = delimitNumbers(balance);
    villagerPickaxe = villagerPickaxe * 5;
    villagerPickaxeCost = villagerPickaxeCost * 6;
    villagerPickaxeCostHTML.innerHTML = delimitNumbers(villagerPickaxeCost) + " Emeralds";
    villagerPickaxeLevel = villagerPickaxeLevel + 1;
    currentVillagerPickaxe.src = "https://minecraftprintables.com/wp-content/uploads/2017/02/minecraft-iron-pickaxe-template.png";
    nextVillagerPickaxeImg.src = "https://minecraftprintables.com/wp-content/uploads/2017/02/minecraft-gold-pickaxe-template.png";
    nextVillagerPickaxe.innerHTML = "Gold";
  }
}

villagerPickaxeOuter.onclick = upgradeVillagerPickaxe;
