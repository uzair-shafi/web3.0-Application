
require('@nomiclabs/hardhat-waffle')

module.exports={
  solidity: '0.8.0',
  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/BtqJeklYIo-UeiNd3Kp96p3uqm-pxmee',
      accounts:['56773bf0d0d82c4c303e3a966867bfc1fde1e75ec89e77b97b6e0837e6cba2f5']
    }
  }
}