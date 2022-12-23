const main = async () => {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  console.log('Transacfactory was initiated')
  const transactionsContract = await transactionsFactory.deploy();
  // const transactionsContract = await transactionsFactory.deploy(unlockTime, { value: lockedAmount });
  console.log('transactionsContract was initiated')

  await transactionsContract.deployed();

  console.log("Transactions with 1 ETH deployed to: ", transactionsContract.address);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const runMain = async () => {
  try {
    await main();
    process.exit(0);    
  } catch (error) {
    console.error(error);
    process.exit(1);
    
  }
};

runMain();