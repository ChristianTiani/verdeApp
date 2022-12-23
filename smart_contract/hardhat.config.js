// https://eth-goerli.g.alchemy.com/v2/OhzMN2ZAKtfM5kKrLbwo1BSn_rSUpVx1


require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/OhzMN2ZAKtfM5kKrLbwo1BSn_rSUpVx1',
      accounts: ['15c6a945c4f8a78c17e94e7d803e9149904a907df0277d069b1b3e9202afde8b'],      
    },
  },
};
