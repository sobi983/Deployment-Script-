
const hre = require("hardhat");

async function main() {

  const Lock = await hre.ethers.getContractFactory("Exhibition");
  const lock = await Lock.deploy();

  await lock.deployed();

  console.log(
    `Deployed Address :  ${lock.address}`
  );
}

// npx hardhat run scripts/deploy.js --network <network-name>
// npx hardhat verify --network rinkeby <address> <parameters>


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
