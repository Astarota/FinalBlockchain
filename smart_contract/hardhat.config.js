require('@nomiclabs/hardhat-waffle');

const ALCHEMY_API_KEY = "TIwB9vAalqE31GieShBDWBPcSbr4Q1p7";

const GOERLI_PRIVATE_KEY = "d045ba6b5e65868f5cd9627ac9d2f2f0cd9d2d778ca2f237f1b7ea570dd96a29";

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};