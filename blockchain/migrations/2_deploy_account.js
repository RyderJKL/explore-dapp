const Contracts = artifacts.require("Account.sol");

module.exports = function(deployer) {
    deployer.deploy(Contracts);
}

// const Migrations = artifacts.require("Migrations");
// module.exports = function (deployer) {
//   deployer.deploy(Migrations);
// };
