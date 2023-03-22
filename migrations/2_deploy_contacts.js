var Contest = artifacts.require("./voting.sol");

module.exports = function(deployer) {
  deployer.deploy(Contest)
};
