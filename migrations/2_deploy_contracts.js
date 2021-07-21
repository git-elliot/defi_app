const DappToken = artifacts.require('DappToken');
const TokenFarm = artifacts.require('TokenFarm');
const DaiToken = artifacts.require('DaiToken');

module.exports = async function(deployer, networks, accounts) {
  await deployer.deploy(DaiToken)
  daiToken = await DaiToken.deployed()

  await deployer.deploy(DappToken)
  dappToken  = await DappToken.deployed()

  await deployer.deploy(TokenFarm, dappToken.address, daiToken.address)
  tokenFarm = await TokenFarm.deployed()

  await dappToken.transfer(tokenFarm.address, '1000000000000000000000000')
  await daiToken.transfer(accounts[1],'100000000000000000000')
};
