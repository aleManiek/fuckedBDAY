(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
  [1],
  {
    122: function (e) {
      e.exports = JSON.parse(
        '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
      );
    },
    300: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]',
      );
    },
    301: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]',
      );
    },
    303: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"contract IBEP20","name":"_offeringToken","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"uint256","name":"_offeringAmount","type":"uint256"},{"internalType":"uint256","name":"_raisingAmount","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"}],"name":"Harvest","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getOfferingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getRefundingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"hasHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raisingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"}]',
      );
    },
    304: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract PancakeBunnies","name":"_pancakeBunnies","type":"address"},{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"uint256","name":"_tokenPrice","type":"uint256"},{"internalType":"string","name":"_ipfsHash","type":"string"},{"internalType":"uint256","name":"_startBlockNumber","type":"uint256"},{"internalType":"uint256","name":"_endBlockNumber","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"changeOwnershipNFTContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeBunnies","outputs":[{"internalType":"contract PancakeBunnies","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_bunnyId5Json","type":"string"},{"internalType":"string","name":"_bunnyId6Json","type":"string"},{"internalType":"string","name":"_bunnyId7Json","type":"string"},{"internalType":"string","name":"_bunnyId8Json","type":"string"},{"internalType":"string","name":"_bunnyId9Json","type":"string"}],"name":"setBunnyJson","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_bunnyId5","type":"string"},{"internalType":"string","name":"_bunnyId6","type":"string"},{"internalType":"string","name":"_bunnyId7","type":"string"},{"internalType":"string","name":"_bunnyId8","type":"string"},{"internalType":"string","name":"_bunnyId9","type":"string"}],"name":"setBunnyNames","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newEndBlockNumber","type":"uint256"}],"name":"setEndBlockNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newStartBlockNumber","type":"uint256"}],"name":"setStartBlockNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newTokenPrice","type":"uint256"}],"name":"updateTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
      );
    },
    305: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyBurnCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyId","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"getBunnyName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyNameOfTokenId","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"string","name":"_name","type":"string"}],"name":"setBunnyName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
      );
    },
    306: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DevWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"issueIndex","type":"uint256"},{"indexed":false,"internalType":"uint8[4]","name":"winningNumbers","type":"uint8[4]"}],"name":"Drawing","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MultiBuy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MultiClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"issueIndex","type":"uint256"}],"name":"Reset","type":"event"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allocation","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"historyAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"historyNumbers","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"issueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"lastTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"lotteryNFT","outputs":[{"internalType":"contract LotteryNFT","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"maxNumber","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"minPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAddresses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint64","name":"","type":"uint64"}],"name":"userBuyAmountSum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winningNumbers","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"contract IERC20","name":"_cake","type":"address"},{"internalType":"contract LotteryNFT","name":"_lottery","type":"address"},{"internalType":"uint256","name":"_minPrice","type":"uint256"},{"internalType":"uint8","name":"_maxNumber","type":"uint8"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"drawed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"reset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"drawing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint8[4]","name":"_numbers","type":"uint8[4]"}],"name":"buy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint8[4][]","name":"_numbers","type":"uint8[4][]"}],"name":"multiBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tickets","type":"uint256[]"}],"name":"multiClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8[4]","name":"number","type":"uint8[4]"}],"name":"generateNumberIndexKey","outputs":[{"internalType":"uint64[11]","name":"","type":"uint64[11]"}],"stateMutability":"pure","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_issueIndex","type":"uint256"},{"internalType":"uint256","name":"_matchingNumber","type":"uint256"}],"name":"getMatchingRewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_issueIndex","type":"uint256"}],"name":"getTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getRewardView","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"adminWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setMinPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_maxNumber","type":"uint8"}],"name":"setMaxNumber","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
      );
    },
    307: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"claimInfo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"issueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryInfo","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"uint8[4]","name":"_lotteryNumbers","type":"uint8[4]"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_issueIndex","type":"uint256"}],"name":"newLotteryItem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryNumbers","outputs":[{"internalType":"uint8[4]","name":"","type":"uint8[4]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryIssueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"multiClaimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getClaimStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true}]',
      );
    },
    308: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract IBEP20","name":"_lp","type":"address"},{"internalType":"contract IBEP20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"},{"internalType":"address","name":"_wbnb","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"removeBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"setBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setLimitAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"bool","name":"inBlackList","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]',
      );
    },
    368: function (e, t) {},
    390: function (e, t) {},
    392: function (e, t) {},
    46: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract BirthdayToken","name":"_bday","type":"address"},{"internalType":"contract BcakeyupBar","name":"_bcake","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_bdayPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bcake","outputs":[{"internalType":"contract BcakeyupBar","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bday","outputs":[{"internalType":"contract BirthdayToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bdayPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrator","outputs":[{"internalType":"contract IMigratorChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingBday","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accBdayPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMigratorChef","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
      );
    },
    466: function (e, t) {},
    468: function (e, t) {},
    49: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]',
      );
    },
    500: function (e, t) {},
    505: function (e, t) {},
    507: function (e, t) {},
    514: function (e, t) {},
    527: function (e, t) {},
    61: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract IBEP20","name":"_syrup","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
      );
    },
    685: function (e, t, n) {
      "use strict";
      n.r(t);
      var a,
        i,
        r = n(0),
        s = n.n(r),
        u = n(119),
        o = n.n(u),
        c = n(34),
        p = n(25),
        d = n(688),
        l = n(6),
        y = n(7),
        m = n.n(y),
        b = n(24),
        f = n(3),
        j = n.n(f),
        x = n(8),
        h = n(12),
        O = n(1),
        g = s.a.createContext({ slow: 0, fast: 0 }),
        v = function (e) {
          var t = e.children,
            n = Object(r.useState)(0),
            a = Object(h.a)(n, 2),
            i = a[0],
            s = a[1],
            u = Object(r.useState)(0),
            o = Object(h.a)(u, 2),
            c = o[0],
            p = o[1];
          return (
            Object(r.useEffect)(function () {
              var e = setInterval(
                Object(x.a)(
                  j.a.mark(function e() {
                    return j.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            p(function (e) {
                              return e + 1;
                            });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                ),
                1e4,
              );
              return function () {
                return clearInterval(e);
              };
            }, []),
            Object(r.useEffect)(function () {
              var e = setInterval(
                Object(x.a)(
                  j.a.mark(function e() {
                    return j.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            s(function (e) {
                              return e + 1;
                            });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                ),
                6e4,
              );
              return function () {
                return clearInterval(e);
              };
            }, []),
            Object(O.jsx)(g.Provider, { value: { slow: i, fast: c }, children: t })
          );
        },
        w = function () {
          var e = Object(r.useContext)(g);
          return { fastRefresh: e.fast, slowRefresh: e.slow };
        },
        T = n(18),
        k = n(39),
        M = n(84),
        B = {
          cake: { 97: "0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a", 56: "0x645748Fa7e54A818310aFDad898410bcB54FC4E0" },
          syrup: { 97: "0xc4b0775a405a85544fc1e90f8cec4e0c26252fec", 56: "0x69F72502B85238644eF3898a4D7F93AE318F88e6" },
          masterChef: { 97: "0x3642f8ab6ab7113e0fab27f5434577ad4788f899", 56: "0x0c63457F086C5813990A4F397EF4544069076557" },
          sousChef: { 97: "0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a", 56: "0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95" },
          wbnb: { 97: "0xae13d989dac2f0debff460ac112a837c89baa7cd", 56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" },
          lottery: { 97: "0x99c2EcD51d52c036B00130d882Bc65f20Fdecf9f", 56: "0x3C3f2049cc17C136a604bE23cF7E42745edf3b91" },
          lotteryNFT: { 97: "0x8175c10383511b3a1C68f9dB222dc14A19CC950e", 56: "0x5e74094Cd416f55179DBd0E45b1a8ED030e396A1" },
          mulltiCall: { 56: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb", 97: "0x67ADCB4dF3931b0C5Da724058ADC2174a9844412" },
          busd: { 56: "0xe9e7cea3dedca5984780bafc599bd69add087d56", 97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee" },
        };
      !(function (e) {
        (e.BNB = "BNB"), (e.BDAY = "BDAY"), (e.BCAKE = "BCAKE"), (e.BUSD = "BUSD"), (e.TWT = "TWT");
      })(a || (a = {})),
        (function (e) {
          (e.COMMUNITY = "Community"), (e.CORE = "Core"), (e.BINANCE = "Binance");
        })(i || (i = {}));
      var S,
        A = [
          {
            pid: 0,
            lpSymbol: "BDAY",
            lpAddresses: { 97: "0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a", 56: "0x645748Fa7e54A818310aFDad898410bcB54FC4E0" },
            tokenSymbol: "BDAY",
            tokenAddresses: { 97: "0xf369077bf442fc9dbfd0cc80159c3d507e359654", 56: "0x645748Fa7e54A818310aFDad898410bcB54FC4E0" },
            quoteTokenSymbol: a.BDAY,
            quoteTokenAdresses: B.cake,
          },
          {
            pid: 1,
            lpSymbol: "BDAY-BNB LP",
            lpAddresses: { 97: "0xe70b7523f4bffa1f2e88d2ba709afd026030f412", 56: "0xa36f4b470d6be30e90fd60b462faaf38e052723e" },
            tokenSymbol: "BDAY",
            tokenAddresses: { 97: "0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a", 56: "0x645748Fa7e54A818310aFDad898410bcB54FC4E0" },
            risk: 2,
            quoteTokenSymbol: a.BDAY,
            quoteTokenAdresses: B.cake,
            multiplier: "5X",
          },
          {
            pid: 2,
            lpSymbol: "BDAY-BUSD LP",
            lpAddresses: { 97: "0xe70b7523f4bffa1f2e88d2ba709afd026030f412", 56: "0xf540071b9575ed5c27ba97b68992edfcd103ed63" },
            tokenSymbol: "BDAY",
            tokenAddresses: { 97: "0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a", 56: "0x645748Fa7e54A818310aFDad898410bcB54FC4E0" },
            risk: 1,
            quoteTokenSymbol: a.BUSD,
            quoteTokenAdresses: B.busd,
            multiplier: "3X",
          },
          {
            pid: 3,
            lpSymbol: "BDAY-CAKE LP",
            lpAddresses: { 97: "0xe70b7523f4bffa1f2e88d2ba709afd026030f412", 56: "0x4908baa881371dec85e8ec6162582ae2325b54e1" },
            tokenSymbol: "BDAY",
            tokenAddresses: { 97: "0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a", 56: "0x645748Fa7e54A818310aFDad898410bcB54FC4E0" },
            risk: 1,
            quoteTokenSymbol: a.BDAY,
            quoteTokenAdresses: B.cake,
            multiplier: "2X",
          },
          {
            pid: 5,
            lpSymbol: "POKE",
            lpAddresses: { 97: "0x2f7682b64b88149ba3250aee32db712964de5fa9", 56: "0xcdAd3683335a4a96d2c437Dd4513b061E4AEc4ff" },
            tokenSymbol: "BDAY",
            tokenAddresses: { 97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee", 56: "0x645748Fa7e54A818310aFDad898410bcB54FC4E0" },
            quoteTokenSymbol: a.BDAY,
            quoteTokenAdresses: B.cake,
            multiplier: "1X",
            risk: 1,
          },
          {
            pid: 6,
            lpSymbol: "BDAY-BGIFT",
            lpAddresses: { 97: "0x2f7682b64b88149ba3250aee32db712964de5fa9", 56: "0x5188f8EfB4D4c47fA4E0E2909965FB5C2E3bB4F8" },
            tokenSymbol: "BDAY",
            tokenAddresses: { 97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee", 56: "0x645748Fa7e54A818310aFDad898410bcB54FC4E0" },
            quoteTokenSymbol: a.BDAY,
            quoteTokenAdresses: B.cake,
            multiplier: "2X",
            risk: 1,
          },
          {
            pid: 4,
            lpSymbol: "BNB-BUSD LP",
            lpAddresses: { 97: "0x2f7682b64b88149ba3250aee32db712964de5fa9", 56: "0x1b96b92314c44b159149f7e0303511fb2fc4774f" },
            tokenSymbol: "BNB",
            tokenAddresses: { 97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee", 56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" },
            quoteTokenSymbol: a.BNB,
            quoteTokenAdresses: B.wbnb,
            multiplier: "2X",
            risk: 1,
          },
        ],
        I = n(49),
        C = n(46),
        D = n(702),
        N = n(57),
        _ = n.n(N),
        E = n(299),
        P = n.n(E),
        F = ["https://bsc-dataseed1.binance.org/"],
        L = function () {
          var e = P()(0, F.length - 1);
          return F[e];
        },
        z = L(),
        R = new _.a.providers.HttpProvider(z, { timeout: 1e4 }),
        Y = function () {
          return new _.a(R);
        },
        H = function (e, t, n) {
          return new (Y().eth.Contract)(e, t, n);
        },
        Q = n(300),
        U = function () {
          return B.cake[56];
        },
        J = function () {
          return B.masterChef[56];
        },
        q = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t, n) {
              var a, i, r, s, u, o, c;
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = Y()),
                        (i = new a.eth.Contract(Q, B.mulltiCall[56])),
                        (r = new D.a(t)),
                        (s = n.map(function (e) {
                          return [e.address.toLowerCase(), r.encodeFunctionData(e.name, e.params)];
                        })),
                        (e.next = 6),
                        i.methods.aggregate(s).call()
                      );
                    case 6:
                      return (
                        (u = e.sent),
                        (o = u.returnData),
                        (c = o.map(function (e, t) {
                          return r.decodeFunctionResult(n[t].name, e);
                        })),
                        e.abrupt("return", c)
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        W = (function () {
          var e = Object(x.a)(
            j.a.mark(function e() {
              var t;
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Promise.all(
                          A.map(
                            (function () {
                              var e = Object(x.a)(
                                j.a.mark(function e(t) {
                                  var n, a, i, r, s, u, o, c, p, d, l, y, b, f, x, O, g, v, w;
                                  return j.a.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (n = t.lpAddresses[56]),
                                            (a = [
                                              { address: t.tokenAddresses[56], name: "balanceOf", params: [n] },
                                              { address: t.quoteTokenAdresses[56], name: "balanceOf", params: [n] },
                                              { address: n, name: "balanceOf", params: [J()] },
                                              { address: n, name: "totalSupply" },
                                              { address: t.tokenAddresses[56], name: "decimals" },
                                              { address: t.quoteTokenAdresses[56], name: "decimals" },
                                            ]),
                                            (e.next = 4),
                                            q(I, a)
                                          );
                                        case 4:
                                          return (
                                            (i = e.sent),
                                            (r = Object(h.a)(i, 6)),
                                            (s = r[0]),
                                            (u = r[1]),
                                            (o = r[2]),
                                            (c = r[3]),
                                            (p = r[4]),
                                            (d = r[5]),
                                            (l = new m.a(o).div(new m.a(c))),
                                            (y = new m.a(u).div(new m.a(10).pow(18)).times(new m.a(2)).times(l)),
                                            (b = new m.a(s).div(new m.a(10).pow(p)).times(l)),
                                            (f = new m.a(u).div(new m.a(10).pow(d)).times(l)),
                                            (e.next = 18),
                                            q(C, [
                                              { address: J(), name: "poolInfo", params: [t.pid] },
                                              { address: J(), name: "totalAllocPoint" },
                                            ])
                                          );
                                        case 18:
                                          return (
                                            (x = e.sent),
                                            (O = Object(h.a)(x, 2)),
                                            (g = O[0]),
                                            (v = O[1]),
                                            (w = new m.a(g.allocPoint._hex).div(new m.a(v))),
                                            e.abrupt(
                                              "return",
                                              Object(T.a)(
                                                Object(T.a)({}, t),
                                                {},
                                                {
                                                  tokenAmount: b.toJSON(),
                                                  quoteTokenAmount: f.toJSON(),
                                                  lpTotalInQuoteToken: y.toJSON(),
                                                  tokenPriceVsQuote: f.div(b).toJSON(),
                                                  poolWeight: w.toJSON(),
                                                  lpSupply: new m.a(c).toJSON(),
                                                },
                                              ),
                                            )
                                          );
                                        case 24:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                }),
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })(),
                          ),
                        )
                      );
                    case 2:
                      return (t = e.sent), e.abrupt("return", t);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        V = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t, n) {
              var a, i, r, s, u, o, c, p, d, l, y;
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = A.find(function (e) {
                          return e.pid === t;
                        })),
                        (i = J()),
                        (r = a.lpAddresses[56]),
                        (e.next = 5),
                        q(I, [
                          { address: r, name: "allowance", params: [n, i] },
                          { address: r, name: "balanceOf", params: [n] },
                        ])
                      );
                    case 5:
                      return (
                        (s = e.sent),
                        (u = Object(h.a)(s, 2)),
                        (o = u[0]),
                        (c = u[1]),
                        (e.next = 11),
                        q(C, [
                          { address: i, name: "userInfo", params: [t, n] },
                          { address: i, name: "pendingBday", params: [t, n] },
                        ])
                      );
                    case 11:
                      return (
                        (p = e.sent),
                        (d = Object(h.a)(p, 2)),
                        (l = d[0]),
                        (y = d[1]),
                        e.abrupt("return", {
                          allowance: new m.a(o).toJSON(),
                          tokenBalance: new m.a(c).toJSON(),
                          stakedBalance: new m.a(l[0]._hex).toJSON(),
                          earnings: new m.a(y).toJSON(),
                        })
                      );
                    case 16:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        K = { data: Object(k.a)(A) },
        X = Object(M.b)({
          name: "Farms",
          initialState: K,
          reducers: {
            setFarmsPublicData: function (e, t) {
              var n = t.payload;
              e.data = e.data.map(function (e) {
                var t = n.find(function (t) {
                  return t.pid === e.pid;
                });
                return Object(T.a)(Object(T.a)({}, e), t);
              });
            },
            setFarmUserData: function (e, t) {
              var n = t.payload,
                a = n.pid,
                i = n.userData,
                r = e.data.findIndex(function (e) {
                  return e.pid === a;
                });
              e.data[r] = Object(T.a)(Object(T.a)({}, e.data[r]), {}, { userData: i });
            },
          },
        }),
        G = X.actions,
        $ = G.setFarmsPublicData,
        Z = G.setFarmUserData,
        ee = function (e, t) {
          return (function () {
            var n = Object(x.a)(
              j.a.mark(function n(a) {
                var i;
                return j.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), V(e, t);
                      case 2:
                        (i = n.sent), a(Z({ pid: e, userData: i }));
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              }),
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        te = X.reducer,
        ne = n(33),
        ae = [
          {
            sousId: 0,
            tokenName: "BDAY",
            stakingTokenName: a.BDAY,
            stakingTokenAddress: "0x645748Fa7e54A818310aFDad898410bcB54FC4E0",
            contractAddress: { 97: "0x3642f8ab6ab7113e0fab27f5434577ad4788f899", 56: "0x0c63457F086C5813990A4F397EF4544069076557" },
            poolCategory: i.CORE,
            projectLink: "https://birthdaycake.finance/",
            harvest: !0,
            tokenPerBlock: "1",
            sortOrder: 1,
            isFinished: !1,
            tokenDecimals: 18,
          },
        ],
        ie = n(61),
        re = n(122),
        se = n(301),
        ue = (function () {
          var e = Object(x.a)(
            j.a.mark(function e() {
              var t, n, a, i, r;
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = ae.filter(function (e) {
                          return 0 !== e.sousId;
                        })),
                        (n = t.map(function (e) {
                          return { address: e.contractAddress[56], name: "startBlock" };
                        })),
                        (a = t.map(function (e) {
                          return { address: e.contractAddress[56], name: "bonusEndBlock" };
                        })),
                        (e.next = 5),
                        q(ie, n)
                      );
                    case 5:
                      return (i = e.sent), (e.next = 8), q(ie, a);
                    case 8:
                      return (
                        (r = e.sent),
                        e.abrupt(
                          "return",
                          t.map(function (e, t) {
                            var n = i[t],
                              a = r[t];
                            return { sousId: e.sousId, startBlock: new m.a(n).toJSON(), endBlock: new m.a(a).toJSON() };
                          }),
                        )
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        oe = (function () {
          var e = Object(x.a)(
            j.a.mark(function e() {
              var t, n, i, r, s, u;
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = ae.filter(function (e) {
                          return e.stakingTokenName !== a.BNB;
                        })),
                        (n = ae.filter(function (e) {
                          return e.stakingTokenName === a.BNB;
                        })),
                        (i = t.map(function (e) {
                          return { address: e.stakingTokenAddress, name: "balanceOf", params: [e.contractAddress[56]] };
                        })),
                        (r = n.map(function (e) {
                          return { address: B.wbnb[56], name: "balanceOf", params: [e.contractAddress[56]] };
                        })),
                        (e.next = 6),
                        q(re, i)
                      );
                    case 6:
                      return (s = e.sent), (e.next = 9), q(se, r);
                    case 9:
                      return (
                        (u = e.sent),
                        e.abrupt(
                          "return",
                          [].concat(
                            Object(k.a)(
                              t.map(function (e, t) {
                                return { sousId: e.sousId, totalStaked: new m.a(s[t]).toJSON() };
                              }),
                            ),
                            Object(k.a)(
                              n.map(function (e, t) {
                                return { sousId: e.sousId, totalStaked: new m.a(u[t]).toJSON() };
                              }),
                            ),
                          ),
                        )
                      );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        ce = ae.filter(function (e) {
          return e.stakingTokenName !== a.BNB;
        }),
        pe = ae.filter(function (e) {
          return e.stakingTokenName === a.BNB;
        }),
        de = ae.filter(function (e) {
          return 0 !== e.sousId;
        }),
        le = Y(),
        ye = new le.eth.Contract(C, J()),
        me = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t) {
              var n, a;
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = ce.map(function (e) {
                          return { address: e.stakingTokenAddress, name: "allowance", params: [t, e.contractAddress[56]] };
                        })),
                        (e.next = 3),
                        q(I, n)
                      );
                    case 3:
                      return (
                        (a = e.sent),
                        e.abrupt(
                          "return",
                          ce.reduce(function (e, t, n) {
                            return Object(T.a)(Object(T.a)({}, e), {}, Object(ne.a)({}, t.sousId, new m.a(a[n]).toJSON()));
                          }, {}),
                        )
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        be = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t) {
              var n, a, i, r, s;
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = ce.map(function (e) {
                          return { address: e.stakingTokenAddress, name: "balanceOf", params: [t] };
                        })),
                        (e.next = 3),
                        q(I, n)
                      );
                    case 3:
                      return (
                        (a = e.sent),
                        (i = ce.reduce(function (e, t, n) {
                          return Object(T.a)(Object(T.a)({}, e), {}, Object(ne.a)({}, t.sousId, new m.a(a[n]).toJSON()));
                        }, {})),
                        (e.next = 7),
                        le.eth.getBalance(t)
                      );
                    case 7:
                      return (
                        (r = e.sent),
                        (s = pe.reduce(function (e, t) {
                          return Object(T.a)(Object(T.a)({}, e), {}, Object(ne.a)({}, t.sousId, new m.a(r).toJSON()));
                        }, {})),
                        e.abrupt("return", Object(T.a)(Object(T.a)({}, i), s))
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        fe = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t) {
              var n, a, i, r, s;
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = de.map(function (e) {
                          return { address: e.contractAddress[56], name: "userInfo", params: [t] };
                        })),
                        (e.next = 3),
                        q(ie, n)
                      );
                    case 3:
                      return (
                        (a = e.sent),
                        (i = de.reduce(function (e, t, n) {
                          return Object(T.a)(Object(T.a)({}, e), {}, Object(ne.a)({}, t.sousId, new m.a(a[n].amount._hex).toJSON()));
                        }, {})),
                        (e.next = 7),
                        ye.methods.userInfo("0", t).call()
                      );
                    case 7:
                      return (r = e.sent), (s = r.amount), e.abrupt("return", Object(T.a)(Object(T.a)({}, i), {}, { 0: new m.a(s).toJSON() }));
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        je = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t) {
              var n, a, i, r;
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = de.map(function (e) {
                          return { address: e.contractAddress[56], name: "pendingReward", params: [t] };
                        })),
                        (e.next = 3),
                        q(ie, n)
                      );
                    case 3:
                      return (
                        (a = e.sent),
                        (i = de.reduce(function (e, t, n) {
                          return Object(T.a)(Object(T.a)({}, e), {}, Object(ne.a)({}, t.sousId, new m.a(a[n]).toJSON()));
                        }, {})),
                        (e.next = 7),
                        ye.methods.pendingBday("0", t).call()
                      );
                    case 7:
                      return (r = e.sent), e.abrupt("return", Object(T.a)(Object(T.a)({}, i), {}, { 0: new m.a(r).toJSON() }));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        xe = { data: Object(k.a)(ae) },
        he = Object(M.b)({
          name: "Pools",
          initialState: xe,
          reducers: {
            setPoolsPublicData: function (e, t) {
              var n = t.payload;
              e.data = e.data.map(function (e) {
                var t = n.find(function (t) {
                  return t.sousId === e.sousId;
                });
                return Object(T.a)(Object(T.a)({}, e), t);
              });
            },
            setPoolsUserData: function (e, t) {
              var n = t.payload;
              e.data = e.data.map(function (e) {
                var t = n.find(function (t) {
                  return t.sousId === e.sousId;
                });
                return Object(T.a)(Object(T.a)({}, e), {}, { userData: t });
              });
            },
            updatePoolsUserData: function (e, t) {
              var n = t.payload,
                a = n.field,
                i = n.value,
                r = n.sousId,
                s = e.data.findIndex(function (e) {
                  return e.sousId === r;
                });
              e.data[s] = Object(T.a)(
                Object(T.a)({}, e.data[s]),
                {},
                { userData: Object(T.a)(Object(T.a)({}, e.data[s].userData), {}, Object(ne.a)({}, a, i)) },
              );
            },
          },
        }),
        Oe = he.actions,
        ge = Oe.setPoolsPublicData,
        ve = Oe.setPoolsUserData,
        we = Oe.updatePoolsUserData,
        Te = function (e, t) {
          return (function () {
            var n = Object(x.a)(
              j.a.mark(function n(a) {
                var i;
                return j.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), me(t);
                      case 2:
                        (i = n.sent), a(we({ sousId: e, field: "allowance", value: i[e] }));
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              }),
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        ke = function (e, t) {
          return (function () {
            var n = Object(x.a)(
              j.a.mark(function n(a) {
                var i;
                return j.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), be(t);
                      case 2:
                        (i = n.sent), a(we({ sousId: e, field: "stakingTokenBalance", value: i[e] }));
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              }),
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        Me = function (e, t) {
          return (function () {
            var n = Object(x.a)(
              j.a.mark(function n(a) {
                var i;
                return j.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), fe(t);
                      case 2:
                        (i = n.sent), a(we({ sousId: e, field: "stakedBalance", value: i[e] }));
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              }),
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        Be = function (e, t) {
          return (function () {
            var n = Object(x.a)(
              j.a.mark(function n(a) {
                var i;
                return j.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), je(t);
                      case 2:
                        (i = n.sent), a(we({ sousId: e, field: "pendingReward", value: i[e] }));
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              }),
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        Se = he.reducer,
        Ae = new m.a(0),
        Ie = function () {
          var e = Object(b.b)(),
            t = w().slowRefresh;
          Object(r.useEffect)(
            function () {
              e(
                (function () {
                  var e = Object(x.a)(
                    j.a.mark(function e(t) {
                      var n;
                      return j.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), W();
                            case 2:
                              (n = e.sent), t($(n));
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
                e(
                  (function () {
                    var e = Object(x.a)(
                      j.a.mark(function e(t) {
                        var n, a, i;
                        return j.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), ue();
                              case 2:
                                return (n = e.sent), (e.next = 5), oe();
                              case 5:
                                (a = e.sent),
                                  (i = ae.map(function (e) {
                                    var t = n.find(function (t) {
                                        return t.sousId === e.sousId;
                                      }),
                                      i = a.find(function (t) {
                                        return t.sousId === e.sousId;
                                      });
                                    return Object(T.a)(Object(T.a)({}, t), i);
                                  })),
                                  t(ge(i));
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                );
            },
            [e, t],
          );
        },
        Ce = function () {
          return Object(b.c)(function (e) {
            return e.farms.data;
          });
        },
        De = function (e) {
          return Object(b.c)(function (t) {
            return t.farms.data.find(function (t) {
              return t.pid === e;
            });
          });
        },
        Ne = function (e) {
          var t = w().fastRefresh,
            n = Object(b.b)();
          return (
            Object(r.useEffect)(
              function () {
                e &&
                  n(
                    (function (e) {
                      return (function () {
                        var t = Object(x.a)(
                          j.a.mark(function t(n) {
                            var a, i, r, s, u;
                            return j.a.wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (t.next = 2), me(e);
                                  case 2:
                                    return (a = t.sent), (t.next = 5), be(e);
                                  case 5:
                                    return (i = t.sent), (t.next = 8), fe(e);
                                  case 8:
                                    return (r = t.sent), (t.next = 11), je(e);
                                  case 11:
                                    (s = t.sent),
                                      (u = ae.map(function (e) {
                                        return {
                                          sousId: e.sousId,
                                          allowance: a[e.sousId],
                                          stakingTokenBalance: i[e.sousId],
                                          stakedBalance: r[e.sousId],
                                          pendingReward: s[e.sousId],
                                        };
                                      })),
                                      n(ve(u));
                                  case 14:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          }),
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })();
                    })(e),
                  );
              },
              [e, n, t],
            ),
            Object(b.c)(function (e) {
              return e.pools.data;
            })
          );
        },
        _e = function () {
          var e = De(4);
          return e.tokenPriceVsQuote ? new m.a(1).div(e.tokenPriceVsQuote) : Ae;
        },
        Ee = function () {
          var e = De(2);
          return e.tokenPriceVsQuote ? new m.a(e.tokenPriceVsQuote) : Ae;
        },
        Pe = n(4),
        Fe = n(2),
        Le = Object(Fe.c)(
          S ||
            (S = Object(Pe.a)([
              "\n  * {\n    font-family: 'Kanit', sans-serif;\n  }\n  body {\n    background-color: ",
              ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.background;
          },
        ),
        ze = { code: "en", language: "English" },
        Re = [
          ze,
          { code: "ar", language: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" },
          { code: "ca", language: "Catal\xe0" },
          { code: "zh-CN", language: "\u7b80\u4f53\u4e2d\u6587" },
          { code: "zh-TW", language: "\u7e41\u9ad4\u4e2d\u6587" },
          { code: "cs", language: "\u010ce\u0161tina" },
          { code: "da", language: "Dansk" },
          { code: "de", language: "Deutsch" },
          { code: "nl", language: "Nederlands" },
          { code: "fil", language: "Filipino" },
          { code: "fi", language: "Suomalainen" },
          { code: "fr", language: "Fran\xe7ais" },
          { code: "el", language: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac" },
          { code: "hi", language: "\u0939\u093f\u0902\u0926\u0940" },
          { code: "hu", language: "Magyar" },
          { code: "id", language: "Bahasa Indonesia" },
          { code: "it", language: "Italiano" },
          { code: "ja", language: "\u65e5\u672c\u8a9e" },
          { code: "ko", language: "\ud55c\uad6d\uc5b4" },
          { code: "pt-BR", language: "Portugu\xeas" },
          { code: "ro", language: "Rom\xe2n\u0103" },
          { code: "ru", language: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" },
          { code: "sr", language: "\u0421\u0440\u043f\u0441\u043a\u0438" },
          { code: "es-ES", language: "Espa\xf1ol" },
          { code: "sv-SE", language: "Svenska" },
          { code: "ta", language: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd" },
          { code: "tr", language: "T\xfcrk\xe7e" },
          { code: "uk", language: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430" },
          { code: "vi", language: "Ti\u1ebfng Vi\u1ec7t" },
        ],
        Ye = { translations: [], setTranslations: function () {} },
        He = Object(r.createContext)(Ye),
        Qe = n(302),
        Ue = n.n(Qe),
        Je = "pancakeSwapLanguage",
        qe = s.a.createContext({ selectedLanguage: ze, setSelectedLanguage: function () {}, translatedLanguage: ze, setTranslatedLanguage: function () {} }),
        We = function (e) {
          var t = e.children,
            n = Object(r.useState)(ze),
            a = Object(h.a)(n, 2),
            i = a[0],
            s = a[1],
            u = Object(r.useState)(ze),
            o = Object(h.a)(u, 2),
            c = o[0],
            p = o[1],
            d = Object(r.useState)([]),
            l = Object(h.a)(d, 2),
            y = l[0],
            m = l[1];
          Object(r.useEffect)(function () {
            var e = localStorage.getItem(Je);
            if (e) {
              var t = (function (e) {
                return Re.filter(function (t) {
                  return t.code === e;
                })[0];
              })(e);
              s(t);
            } else s(ze);
          }, []),
            Object(r.useEffect)(
              function () {
                i &&
                  Ue.a
                    .get("./lang/".concat(i.code, ".json"))
                    .then(function (e) {
                      e.data.length < 1 ? m(["error"]) : m(e.data);
                    })
                    .then(function () {
                      return p(i);
                    })
                    .catch(function () {
                      m(["error"]);
                    });
              },
              [i, m],
            );
          return Object(O.jsx)(qe.Provider, {
            value: {
              selectedLanguage: i,
              setSelectedLanguage: function (e) {
                s(e), localStorage.setItem(Je, e.code);
              },
              translatedLanguage: c,
              setTranslatedLanguage: p,
            },
            children: Object(O.jsx)(He.Provider, { value: { translations: y, setTranslations: m }, children: t }),
          });
        },
        Ve = "IS_DARK",
        Ke = s.a.createContext({
          isDark: null,
          toggleTheme: function () {
            return null;
          },
        }),
        Xe = function (e) {
          var t = e.children,
            n = Object(r.useState)(function () {
              var e = localStorage.getItem(Ve);
              return !!e && JSON.parse(e);
            }),
            a = Object(h.a)(n, 2),
            i = a[0],
            s = a[1];
          return Object(O.jsx)(Ke.Provider, {
            value: {
              isDark: i,
              toggleTheme: function () {
                s(function (e) {
                  return localStorage.setItem(Ve, JSON.stringify(!e)), !e;
                });
              },
            },
            children: Object(O.jsx)(Fe.b, { theme: i ? l.v : l.w, children: t }),
          });
        },
        Ge = function () {
          var e = Object(r.useContext)(Ke);
          return { isDark: e.isDark, toggleTheme: e.toggleTheme, theme: Object(r.useContext)(Fe.a) };
        },
        $e = [
          { label: "Home", icon: "HomeIcon", href: "/" },
          {
            label: "Trade",
            icon: "TradeIcon",
            items: [
              { label: "Exchange", href: "https://exchange.pancakeswap.finance/#/swap" },
              { label: "Liquidity", href: "https://exchange.pancakeswap.finance/#/pool" },
            ],
          },
          { label: "Farming", icon: "FarmIcon", href: "/farms" },
          { label: "Staking", icon: "PoolIcon", href: "/syrup" },
          {
            label: "Info",
            icon: "InfoIcon",
            items: [
              { label: "Overview", href: "https://pancakeswap.info/" },
              { label: "Tokens", href: "https://pancakeswap.info/#/tokens" },
              { label: "Pairs", href: "https://pancakeswap.info/#/pairs" },
              { label: "Accounts", href: "https://pancakeswap.info/#/accounts" },
            ],
          },
          { label: "More", icon: "MoreIcon", items: [{ label: "Blog", href: "https://medium.com/@BirthdayCake" }] },
        ],
        Ze = function (e) {
          var t = Object(d.j)(),
            n = t.account,
            a = t.connect,
            i = t.reset,
            s = Object(r.useContext)(qe),
            u = s.selectedLanguage,
            o = s.setSelectedLanguage,
            c = Ge(),
            p = c.isDark,
            y = c.toggleTheme,
            m = Ee();
          return (
            sessionStorage.lastprice || (sessionStorage.lastprice = m.toNumber().toString()),
            sessionStorage.lastprice !== m.toNumber().toString() &&
              setTimeout(function () {
                sessionStorage.lastprice = m.toNumber().toString();
              }, 1500),
            Object(O.jsx)(
              l.n,
              Object(T.a)(
                {
                  account: n,
                  login: a,
                  logout: i,
                  isDark: p,
                  toggleTheme: y,
                  currentLang: u && u.code,
                  langs: Re,
                  setLang: o,
                  cakePriceUsd: m.toNumber(),
                  priceUp: Number(sessionStorage.lastprice) < m.toNumber(),
                  links: $e,
                },
                e,
              ),
            )
          );
        },
        et = n(123);
      et.a.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 80 });
      var tt,
        nt,
        at,
        it,
        rt,
        st,
        ut,
        ot,
        ct,
        pt,
        dt,
        lt,
        yt,
        mt,
        bt,
        ft,
        jt,
        xt,
        ht,
        Ot,
        gt,
        vt,
        wt,
        Tt,
        kt,
        Mt,
        Bt,
        St,
        At,
        It,
        Ct,
        Dt,
        Nt,
        _t,
        Et,
        Pt,
        Ft,
        Lt,
        zt,
        Rt,
        Yt,
        Ht,
        Qt,
        Ut,
        Jt,
        qt,
        Wt,
        Vt,
        Kt,
        Xt,
        Gt,
        $t,
        Zt,
        en,
        tn,
        nn,
        an,
        rn,
        sn,
        un,
        on,
        cn,
        pn,
        dn,
        ln,
        yn,
        mn,
        bn,
        fn,
        jn,
        xn,
        hn,
        On,
        gn,
        vn,
        wn,
        Tn = new et.a(1),
        kn = new et.a(10512e3),
        Mn = Fe.d.div(
          tt ||
            (tt = Object(Pe.a)([
              "\n  align-items: start;\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-gap: 16px;\n\n  @media (min-width: 576px) {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n\n  @media (min-width: 852px) {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n\n  @media (min-width: 968px) {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n\n  & > div {\n    grid-column: 2 / 8;\n\n    @media (min-width: 576px) {\n      grid-column: span 4;\n    }\n  }\n",
            ])),
        ),
        Bn = Mn,
        Sn = /%(.*?)%/,
        An = function (e, t, n) {
          var a = e.find(function (e) {
            return e.data.stringId === t;
          });
          if (a) {
            var i = a.data.text;
            return i.includes("%")
              ? (function (e, t) {
                  var n = Sn.exec(e)[0],
                    a = t.split(" ")[0];
                  return e.replace(n, a);
                })(i, n)
              : i;
          }
          return n;
        },
        In = function () {
          var e = Object(r.useContext)(He).translations;
          return function (t, n) {
            return "error" === e[0] ? n : e.length > 0 ? An(e, t, n) : n;
          };
        },
        Cn = Fe.d.div(
          nt ||
            (nt = Object(Pe.a)([
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 145px);\n  @media (max-width: 500px) {\n    width: 100vw;\n  }\n",
            ])),
        ),
        Dn = function (e) {
          var t = e.children;
          return Object(O.jsx)(Cn, { children: t });
        },
        Nn = function () {
          return Object(O.jsx)(l.s, { variant: "textSubtle", outline: !0, startIcon: Object(O.jsx)(l.i, {}), children: "Community" });
        },
        _n = function () {
          return Object(O.jsx)(l.s, { variant: "textSubtle", outline: !0, startIcon: Object(O.jsx)(l.u, {}), children: "Risk 1" });
        },
        En = function () {
          return Object(O.jsx)(l.s, { variant: "secondary", outline: !0, startIcon: Object(O.jsx)(l.u, {}), children: "Risk 2" });
        },
        Pn = function () {
          return Object(O.jsx)(l.s, { variant: "secondary", outline: !0, startIcon: Object(O.jsx)(l.u, {}), children: "Risk 3" });
        },
        Fn = function () {
          return Object(O.jsx)(l.s, { variant: "secondary", outline: !0, startIcon: Object(O.jsx)(l.u, {}), children: "Risk 4" });
        },
        Ln = function () {
          return Object(O.jsx)(l.s, { variant: "binance", outline: !0, startIcon: Object(O.jsx)(l.i, {}), children: "Risk 5" });
        },
        zn = function (e) {
          var t = In(),
            n = Object(d.j)(),
            a = n.connect,
            i = n.reset,
            r = Object(l.y)(a, i).onPresentConnectModal;
          return Object(O.jsx)(l.d, Object(T.a)(Object(T.a)({ onClick: r }, e), {}, { children: t(292, "Unlock Wallet") }));
        },
        Rn = Fe.d.div(at || (at = Object(Pe.a)(["\n  padding: 16px 0;\n"]))),
        Yn = Fe.d.div(it || (it = Object(Pe.a)(["\n  padding-top: 16px;\n"]))),
        Hn = Fe.d.a(rt || (rt = Object(Pe.a)(["\n  text-decoration: none;\n  color: ", ";\n"])), function (e) {
          return e.theme.colors.secondary;
        }),
        Qn = Object(Fe.e)(
          st ||
            (st = Object(Pe.a)([
              "\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n",
            ])),
        ),
        Un = Fe.d.div(
          ut ||
            (ut = Object(Pe.a)([
              "\n  background: linear-gradient(\n    45deg,\n    rgba(0, 0, 255, 1) 0%,\n    rgba(154, 0, 255, 1) 10%,\n    rgba(222, 33, 208, 1) 20%,\n    rgba(220, 74, 79, 1) 30%,\n    rgba(218, 216, 63, 1) 40%,\n    rgba(201, 226, 47, 1) 50%,\n    rgba(127, 238, 28, 1) 60%,\n    rgba(21, 242, 95, 1) 70%,\n    rgba(12, 248, 186, 1) 80%,\n    rgba(7, 217, 251, 1) 90%,\n    rgba(0, 0, 255, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: ",
              " 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n",
            ])),
          Qn,
        ),
        Jn = Fe.d.div(
          ot ||
            (ot = Object(Pe.a)([
              "\n  line-height: 25px;\n  padding: 0 8px;\n  background: #25beca;\n  border-radius: 8px;\n  color: ",
              ";\n  font-weight: 900;\n  margin-bottom: 8px;\n  display: inline-block;\n",
            ])),
          function (e) {
            return e.theme.colors.background;
          },
        ),
        qn = Fe.d.div(ct || (ct = Object(Pe.a)(["\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  margin-bottom: 16px;\n"]))),
        Wn = Fe.d.div(
          pt ||
            (pt = Object(Pe.a)([
              "\n  line-height: 1.5rem;\n  color: ",
              ";\n  > span {\n    float: left;\n  }\n  .right {\n    float: right;\n    color: ",
              ";\n    font-weight: 900;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.secondary;
          },
          function (e) {
            return e.theme.colors.primary;
          },
        ),
        Vn = Fe.d.div(
          dt ||
            (dt = Object(Pe.a)([
              "\n  align-self: stretch;\n  background: ",
              ";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n  img {\n    height: 80px;\n    width: 80px;\n  }\n",
            ])),
          function (e) {
            return e.theme.card.background;
          },
        ),
        Kn = function (e) {
          var t = e.farm,
            n = e.removed,
            i = In(),
            s = Ee(),
            u = _e(),
            o = Object(d.j)().account,
            p = t.lpSymbol.split(" ")[0].toLocaleLowerCase(),
            y = Object(r.useMemo)(
              function () {
                return t.lpTotalInQuoteToken
                  ? t.quoteTokenSymbol === a.BNB
                    ? new m.a(t.lpTotalInQuoteToken).div(u)
                    : t.quoteTokenSymbol === a.BDAY
                    ? s.times(t.lpTotalInQuoteToken)
                    : t.lpTotalInQuoteToken
                  : null;
              },
              [u, s, t.lpTotalInQuoteToken, t.quoteTokenSymbol],
            ),
            b = y ? "$".concat(Number(y).toLocaleString(void 0, { maximumFractionDigits: 0 })) : "-";
          return Object(O.jsxs)(Vn, {
            children: [
              "BDAY" === t.tokenSymbol && Object(O.jsx)(Un, {}),
              Object(O.jsxs)(qn, {
                children: [
                  Object(O.jsxs)(l.j, {
                    flexDirection: "column",
                    alignItems: "flex-start",
                    children: [
                      Object(O.jsx)(Jn, { children: t.multiplier }),
                      1 === t.risk ? Object(O.jsx)(_n, {}) : "",
                      2 === t.risk ? Object(O.jsx)(En, {}) : "",
                      3 === t.risk ? Object(O.jsx)(Pn, {}) : "",
                      4 === t.risk ? Object(O.jsx)(Fn, {}) : "",
                      5 === t.risk ? Object(O.jsx)(Ln, {}) : "",
                    ],
                  }),
                  Object(O.jsx)("img", { src: "/images/farms/".concat(p, ".png"), alt: t.tokenSymbol }),
                ],
              }),
              Object(O.jsxs)(Wn, {
                children: [
                  Object(O.jsx)("span", { children: i(316, "Deposit") }),
                  Object(O.jsx)("span", { className: "right", children: t.lpSymbol && t.lpSymbol.toUpperCase().replace("PANCAKE", "") }),
                ],
              }),
              Object(O.jsxs)(Wn, {
                children: [
                  Object(O.jsx)("span", { children: i(318, "Earn") }),
                  Object(O.jsx)("span", { className: "right", children: t.dual ? t.dual.earnLabel : "BDAY" }),
                ],
              }),
              !n &&
                Object(O.jsxs)(Wn, {
                  children: [
                    Object(O.jsx)("span", { children: i(352, "APY") }),
                    Object(O.jsx)("span", {
                      className: "right",
                      children: t.apy ? "".concat(t.apy.times(new m.a(100)).toNumber().toLocaleString("en-US").slice(0, -1), "%") : "Loading ...",
                    }),
                  ],
                }),
              Object(O.jsx)(Rn, {
                children: o
                  ? Object(O.jsx)(l.d, { as: c.b, to: "/farm/".concat(t.lpSymbol), style: { width: "100%" }, children: i(568, "Select") })
                  : Object(O.jsx)(zn, { fullWidth: !0 }),
              }),
              !n &&
                Object(O.jsxs)(Wn, {
                  children: [Object(O.jsx)("span", { children: i(23, "Total Liquidity") }), Object(O.jsx)("span", { className: "right", children: b })],
                }),
              Object(O.jsx)(Yn, {
                children: Object(O.jsxs)(Hn, {
                  href: "https://bscscan.com/address/".concat(t.lpAddresses[56]),
                  target: "_blank",
                  children: [i(356, "View on BscScan"), " >"],
                }),
              }),
            ],
          });
        },
        Xn = function () {
          var e = Object(p.i)(),
            t = e.url,
            n = e.isExact,
            a = In();
          return Object(O.jsx)(Gn, {
            children: Object(O.jsxs)(l.e, {
              activeIndex: n ? 0 : 1,
              size: "sm",
              variant: "subtle",
              children: [
                Object(O.jsx)(l.f, { as: c.b, to: "".concat(t), children: a(999, "Active") }),
                Object(O.jsx)(l.f, { as: c.b, to: "".concat(t, "/history"), children: a(999, "Inactive") }),
              ],
            }),
          });
        },
        Gn = Fe.d.div(lt || (lt = Object(Pe.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),
        $n = Fe.d.div(yt || (yt = Object(Pe.a)(["\n  background-color: ", ";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])), function (e) {
          return e.theme.colors.textSubtle;
        }),
        Zn = Object(Fe.d)(c.c)(
          mt ||
            (mt = Object(Pe.a)([
              "\n  display: none;\n  @media (max-width: 400px) {\n    display: block;\n    background: #50d7dd;\n    border-radius: 5px;\n    line-height: 40px;\n    font-weight: 900;\n    padding: 0 20px;\n    margin-bottom: 30px;\n    color: #fff;\n  }\n",
            ])),
        ),
        ea = Fe.d.img(bt || (bt = Object(Pe.a)(["\n  @media (max-width: 500px) {\n    width: 100vw;\n  }\n"]))),
        ta = Fe.d.div(
          ft || (ft = Object(Pe.a)(["\n  color: ", ";\n  font-size: 29px;\n  width: 50vw;\n  text-align: center;\n  font-weight: 900;\n  margin: 50px;\n"])),
          function (e) {
            return e.theme.colors.secondary;
          },
        ),
        na = function () {
          var e = Object(p.i)().path,
            t = In(),
            n = Ce(),
            i = n.filter(function (e) {
              return 0 !== e.pid && "0X" !== e.multiplier;
            }),
            s = n.filter(function (e) {
              return 0 !== e.pid && "0X" === e.multiplier;
            }),
            u = Object(r.useCallback)(
              function (e, t) {
                var i,
                  r,
                  s = new m.a(
                    (null ===
                      (i = n.find(function (e) {
                        return 1 === e.pid;
                      })) || void 0 === i
                      ? void 0
                      : i.tokenPriceVsQuote) || 0,
                  ),
                  u = new m.a(
                    (null ===
                      (r = n.find(function (e) {
                        return 4 === e.pid;
                      })) || void 0 === r
                      ? void 0
                      : r.tokenPriceVsQuote) || 0,
                  );
                return e
                  .map(function (e) {
                    if (!e.tokenAmount || !e.lpTotalInQuoteToken || !e.lpTotalInQuoteToken) return e;
                    var t = Tn.times(e.poolWeight),
                      n = t.times(kn),
                      i = s.times(n).div(e.lpTotalInQuoteToken);
                    if (e.quoteTokenSymbol === a.BUSD) i = s.times(n).div(e.lpTotalInQuoteToken);
                    else if (e.quoteTokenSymbol === a.BDAY) i = n.div(e.lpTotalInQuoteToken);
                    else if (e.quoteTokenSymbol === a.BNB) i = u.times(n).div(e.lpTotalInQuoteToken);
                    else if (e.dual) {
                      var r = e && s.times(t).times(kn).div(e.lpTotalInQuoteToken),
                        o = e.tokenPriceVsQuote && new m.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(kn).div(e.lpTotalInQuoteToken);
                      i = r && o && r.plus(o);
                    }
                    return Object(T.a)(Object(T.a)({}, e), {}, { apy: i });
                  })
                  .map(function (e) {
                    return Object(O.jsx)(Kn, { farm: e, removed: t }, e.pid);
                  });
              },
              [n],
            );
          return Object(O.jsxs)(Dn, {
            children: [
              Object(O.jsx)(ta, { children: t(999, "Stake LP tokens to earn BDAY") }),
              Object(O.jsx)(Zn, { exact: !0, activeClassName: "active", to: "/staking", children: "Staking" }),
              Object(O.jsx)(Xn, {}),
              Object(O.jsxs)(Dn, {
                children: [
                  Object(O.jsx)($n, {}),
                  Object(O.jsx)(p.b, { exact: !0, path: "".concat(e), children: Object(O.jsx)(Bn, { children: u(i, !1) }) }),
                  Object(O.jsx)(p.b, { exact: !0, path: "".concat(e, "/history"), children: Object(O.jsx)(Bn, { children: u(s, !0) }) }),
                ],
              }),
              Object(O.jsx)(ea, { src: "/images/cakecat.png" }),
            ],
          });
        },
        aa = function (e, t) {
          return new new _.a(e).eth.Contract(I, t);
        },
        ia = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t, n, a) {
              var i, r;
              return j.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (i = aa(t, n)), (e.prev = 1), (e.next = 4), i.methods.balanceOf(a).call();
                      case 4:
                        return (r = e.sent), e.abrupt("return", r);
                      case 8:
                        return (e.prev = 8), (e.t0 = e.catch(1)), e.abrupt("return", "0");
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]],
              );
            }),
          );
          return function (t, n, a) {
            return e.apply(this, arguments);
          };
        })(),
        ra = Fe.d.div(jt || (jt = Object(Pe.a)(["\n  min-height: calc(100vh - 152px);\n"]))),
        sa = ra,
        ua = Fe.d.div(xt || (xt = Object(Pe.a)(["\n  color: ", ";\n  font-size: 14px;\n"])), function (e) {
          var t = e.isFinished;
          return e.theme.colors[t ? "textDisabled" : "primary"];
        }),
        oa = function (e) {
          var t = e.text,
            n = e.isFinished,
            a = void 0 !== n && n;
          return Object(O.jsx)(ua, { isFinished: a, children: t });
        },
        ca = n(120),
        pa = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t, n, a) {
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", t.methods.approve(n.options.address, ca.ethers.constants.MaxUint256).send({ from: a }));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n, a) {
            return e.apply(this, arguments);
          };
        })(),
        da = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t, n, a, i) {
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (0 !== n) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        t.methods
                          .enterStaking(new m.a(a).times(new m.a(10).pow(18)).toString())
                          .send({ from: i })
                          .on("transactionHash", function (e) {
                            return e.transactionHash;
                          }),
                      );
                    case 2:
                      return e.abrupt(
                        "return",
                        t.methods
                          .deposit(n, new m.a(a).times(new m.a(10).pow(18)).toString())
                          .send({ from: i })
                          .on("transactionHash", function (e) {
                            return e.transactionHash;
                          }),
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n, a, i) {
            return e.apply(this, arguments);
          };
        })(),
        la = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t, n, a) {
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        t.methods
                          .deposit(new m.a(n).times(new m.a(10).pow(18)).toString())
                          .send({ from: a })
                          .on("transactionHash", function (e) {
                            return e.transactionHash;
                          }),
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n, a) {
            return e.apply(this, arguments);
          };
        })(),
        ya = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t, n, a) {
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        t.methods
                          .deposit()
                          .send({ from: a, value: new m.a(n).times(new m.a(10).pow(18)).toString() })
                          .on("transactionHash", function (e) {
                            return e.transactionHash;
                          }),
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n, a) {
            return e.apply(this, arguments);
          };
        })(),
        ma = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t, n, a, i) {
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (0 !== n) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        t.methods
                          .leaveStaking(new m.a(a).times(new m.a(10).pow(18)).toString())
                          .send({ from: i })
                          .on("transactionHash", function (e) {
                            return e.transactionHash;
                          }),
                      );
                    case 2:
                      return e.abrupt(
                        "return",
                        t.methods
                          .withdraw(n, new m.a(a).times(new m.a(10).pow(18)).toString())
                          .send({ from: i })
                          .on("transactionHash", function (e) {
                            return e.transactionHash;
                          }),
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n, a, i) {
            return e.apply(this, arguments);
          };
        })(),
        ba = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t, n, a) {
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ("0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC" !== t.options.address) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        t.methods
                          .emergencyWithdraw()
                          .send({ from: a })
                          .on("transactionHash", function (e) {
                            return e.transactionHash;
                          }),
                      );
                    case 2:
                      if ("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831" !== t.options.address) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        t.methods
                          .emergencyWithdraw()
                          .send({ from: a })
                          .on("transactionHash", function (e) {
                            return e.transactionHash;
                          }),
                      );
                    case 4:
                      return e.abrupt(
                        "return",
                        t.methods
                          .withdraw(new m.a(n).times(new m.a(10).pow(18)).toString())
                          .send({ from: a })
                          .on("transactionHash", function (e) {
                            return e.transactionHash;
                          }),
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n, a) {
            return e.apply(this, arguments);
          };
        })(),
        fa = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t, n, a) {
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        t.methods
                          .emergencyWithdraw()
                          .send({ from: a })
                          .on("transactionHash", function (e) {
                            return e.transactionHash;
                          }),
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n, a) {
            return e.apply(this, arguments);
          };
        })(),
        ja = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t, n, a) {
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (0 !== n) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        t.methods
                          .leaveStaking("0")
                          .send({ from: a })
                          .on("transactionHash", function (e) {
                            return e.transactionHash;
                          }),
                      );
                    case 2:
                      return e.abrupt(
                        "return",
                        t.methods
                          .deposit(n, "0")
                          .send({ from: a })
                          .on("transactionHash", function (e) {
                            return e.transactionHash;
                          }),
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n, a) {
            return e.apply(this, arguments);
          };
        })(),
        xa = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t, n) {
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        t.methods
                          .deposit("0")
                          .send({ from: n })
                          .on("transactionHash", function (e) {
                            return e.transactionHash;
                          }),
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        ha = (function () {
          var e = Object(x.a)(
            j.a.mark(function e(t, n) {
              return j.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        t.methods
                          .deposit()
                          .send({ from: n, value: new m.a(0) })
                          .on("transactionHash", function (e) {
                            return e.transactionHash;
                          }),
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        Oa = L(),
        ga = new _.a.providers.HttpProvider(Oa, { timeout: 1e4 }),
        va = function () {
          var e = Object(d.j)().ethereum,
            t = Object(r.useRef)(e),
            n = Object(r.useState)(new _.a(e || ga)),
            a = Object(h.a)(n, 2),
            i = a[0],
            s = a[1];
          return (
            Object(r.useEffect)(
              function () {
                e !== t.current && (s(new _.a(e || ga)), (t.current = e));
              },
              [e],
            ),
            i
          );
        },
        wa =
          (A.filter(function (e) {
            return e.isCommunity;
          }).map(function (e) {
            return e.tokenSymbol;
          }),
          n(303),
          n(304),
          n(305),
          n(306),
          n(307),
          n(308)),
        Ta = function (e, t, n) {
          var a = va(),
            i = Object(r.useState)(new a.eth.Contract(e, t, n)),
            s = Object(h.a)(i, 2),
            u = s[0],
            o = s[1];
          return (
            Object(r.useEffect)(
              function () {
                o(new a.eth.Contract(e, t, n));
              },
              [e, t, n, a],
            ),
            u
          );
        },
        ka = function (e) {
          return Ta(I, e);
        },
        Ma = function () {
          return Ta(C, J());
        },
        Ba = function (e) {
          var t = ae.find(function (t) {
              return t.sousId === e;
            }),
            n = t.poolCategory === i.BINANCE ? wa : ie;
          return Ta(n, t.contractAddress[56]);
        },
        Sa = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
            n = new m.a(e).dividedBy(new m.a(10).pow(t));
          return n.toNumber();
        },
        Aa = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
          return e.dividedBy(new m.a(10).pow(t)).toFixed();
        },
        Ia = Fe.d.img(ht || (ht = Object(Pe.a)(["\n  height: 48px;\n  margin-bottom: 16px;\n  width: 48px;\n"]))),
        Ca = n(83),
        Da = n.n(Ca),
        Na = Fe.d.span(Ot || (Ot = Object(Pe.a)(["\n  color: ", ";\n  font-weight: 900;\n"])), function (e) {
          return e.theme.colors.text;
        }),
        _a = function (e) {
          var t = e.value,
            n = e.decimals,
            a = e.fontSize,
            i = void 0 === a ? "14px" : a,
            s = Object(r.useState)(0),
            u = Object(h.a)(s, 2),
            o = u[0],
            c = u[1],
            p = Object(r.useState)(0),
            d = Object(h.a)(p, 2),
            l = d[0],
            y = d[1];
          return (
            Object(r.useEffect)(
              function () {
                "number" === typeof t && (c(l), y(t));
              },
              [t],
            ),
            Object(O.jsx)(Na, {
              style: { fontSize: i },
              children:
                "string" === typeof t
                  ? t
                  : Object(O.jsx)(Da.a, { start: o, end: l, decimals: void 0 !== n ? n : l < 0 ? 4 : l > 1e5 ? 0 : 3, duration: 1, separator: "," }),
            })
          );
        },
        Ea = Fe.d.div(gt || (gt = Object(Pe.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),
        Pa = Fe.d.div(vt || (vt = Object(Pe.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n  width: 100%;\n"])), function (e) {
          return e.theme.spacing[6];
        }),
        Fa = Fe.d.div(
          wt || (wt = Object(Pe.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"])),
        ),
        La = function (e) {
          var t = e.pid,
            n = e.earnings,
            a = In(),
            i = Object(r.useState)(!1),
            s = Object(h.a)(i, 2),
            u = s[0],
            o = s[1],
            c = (function (e) {
              var t = Object(b.b)(),
                n = Object(d.j)().account,
                a = Ma();
              return {
                onReward: Object(r.useCallback)(
                  Object(x.a)(
                    j.a.mark(function i() {
                      var r;
                      return j.a.wrap(function (i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              return (i.next = 2), ja(a, e, n);
                            case 2:
                              return (r = i.sent), t(ee(e, n)), i.abrupt("return", r);
                            case 5:
                            case "end":
                              return i.stop();
                          }
                      }, i);
                    }),
                  ),
                  [n, t, e, a],
                ),
              };
            })(t).onReward;
          return Object(O.jsx)(l.g, {
            children: Object(O.jsx)(l.h, {
              children: Object(O.jsxs)(Fa, {
                children: [
                  Object(O.jsxs)(Ea, {
                    children: [
                      Object(O.jsx)(Ia, { src: "/images/tokens/KEBAB.png", alt: "kebab" }),
                      Object(O.jsx)(_a, { value: Sa(n), fontSize: "40px" }),
                      Object(O.jsx)(oa, { text: a(330, "BDAY Earned") }),
                    ],
                  }),
                  Object(O.jsx)(Pa, {
                    children: Object(O.jsx)(l.d, {
                      disabled: !n.toNumber() || u,
                      onClick: Object(x.a)(
                        j.a.mark(function e() {
                          return j.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return o(!0), (e.next = 3), c();
                                case 3:
                                  o(!1);
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        }),
                      ),
                      children: u ? "Collecting BDAY" : "Harvest",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        za = function (e) {
          var t = Object(b.b)(),
            n = Object(d.j)().account,
            a = Ma();
          return {
            onStake: Object(r.useCallback)(
              (function () {
                var i = Object(x.a)(
                  j.a.mark(function i(r) {
                    var s;
                    return j.a.wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (i.next = 2), da(a, e, r, n);
                          case 2:
                            (s = i.sent), t(ee(e, n)), console.info(s);
                          case 5:
                          case "end":
                            return i.stop();
                        }
                    }, i);
                  }),
                );
                return function (e) {
                  return i.apply(this, arguments);
                };
              })(),
              [n, t, a, e],
            ),
          };
        },
        Ra = [5, 6, 3, 1, 22, 23],
        Ya = function (e) {
          var t = Object(b.b)(),
            n = Object(d.j)().account,
            a = Ma();
          return {
            onUnstake: Object(r.useCallback)(
              (function () {
                var i = Object(x.a)(
                  j.a.mark(function i(r) {
                    var s;
                    return j.a.wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (i.next = 2), ma(a, e, r, n);
                          case 2:
                            (s = i.sent), t(ee(e, n)), console.info(s);
                          case 5:
                          case "end":
                            return i.stop();
                        }
                    }, i);
                  }),
                );
                return function (e) {
                  return i.apply(this, arguments);
                };
              })(),
              [n, t, a, e],
            ),
          };
        },
        Ha = Fe.d.div(
          Tt || (Tt = Object(Pe.a)(["\n  height: ", "px;\n  width: ", "px;\n"])),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          },
        ),
        Qa = function (e) {
          var t,
            n = e.size,
            a = void 0 === n ? "md" : n,
            i = Object(r.useContext)(Fe.a).spacing;
          switch (a) {
            case "lg":
              t = i[6];
              break;
            case "sm":
              t = i[2];
              break;
            case "md":
            default:
              t = i[4];
          }
          return Object(O.jsx)(Ha, { size: t });
        },
        Ua = Fe.d.div(
          kt || (kt = Object(Pe.a)(["\n  align-items: center;\n  background-color: ", "00;\n  display: flex;\n  margin: 0;\n  padding: ", "px;\n"])),
          function (e) {
            return e.theme.colors.primaryDark;
          },
          function (e) {
            return e.theme.spacing[4];
          },
        ),
        Ja = Fe.d.div(Mt || (Mt = Object(Pe.a)(["\n  flex: 1;\n"]))),
        qa = function (e) {
          var t = e.children,
            n = s.a.Children.toArray(t).length;
          return Object(O.jsx)(Ua, {
            children: s.a.Children.map(t, function (e, t) {
              return Object(O.jsxs)(O.Fragment, { children: [Object(O.jsx)(Ja, { children: e }), t < n - 1 && Object(O.jsx)(Qa, {})] });
            }),
          });
        },
        Wa = Fe.d.div(
          Bt ||
            (Bt = Object(Pe.a)([
              "\n  align-items: center;\n  background-color: ",
              ";\n  border-radius: ",
              ";\n  display: flex;\n  height: 72px;\n  padding: 0 ",
              "px;\n",
            ])),
          function (e) {
            return e.theme.colors.input;
          },
          function (e) {
            return e.theme.radii.default;
          },
          function (e) {
            return e.theme.spacing[3];
          },
        ),
        Va = Fe.d.input(
          St ||
            (St = Object(Pe.a)([
              "\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",
              ";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n",
            ])),
          function (e) {
            return e.theme.colors.primary;
          },
        ),
        Ka = function (e) {
          var t = e.endAdornment,
            n = e.onChange,
            a = e.placeholder,
            i = e.startAdornment,
            r = e.value;
          return Object(O.jsxs)(Wa, { children: [!!i && i, Object(O.jsx)(Va, { placeholder: a, value: r, onChange: n }), !!t && t] });
        },
        Xa = Fe.d.div(At || (At = Object(Pe.a)([""]))),
        Ga = Fe.d.div(It || (It = Object(Pe.a)(["\n  width: ", "px;\n"])), function (e) {
          return e.theme.spacing[3];
        }),
        $a = Fe.d.div(Ct || (Ct = Object(Pe.a)(["\n  align-items: center;\n  display: flex;\n"]))),
        Za = Fe.d.div(
          Dt ||
            (Dt = Object(Pe.a)([
              "\n  align-items: center;\n  color: ",
              ";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n",
            ])),
          function (e) {
            return e.theme.colors.primary;
          },
        ),
        ei = Fe.d.span(Nt || (Nt = Object(Pe.a)(["\n  color: ", ";\n  font-weight: 700;\n"])), function (e) {
          return e.theme.colors.primary;
        }),
        ti = function (e) {
          var t = e.max,
            n = e.symbol,
            a = e.onChange,
            i = e.onSelectMax,
            r = e.value,
            s = In();
          return Object(O.jsxs)(Xa, {
            children: [
              Object(O.jsxs)(Za, { children: [t.toLocaleString(), " ", n, " ", s(526, "Available")] }),
              Object(O.jsx)(Ka, {
                endAdornment: Object(O.jsxs)($a, {
                  children: [
                    Object(O.jsx)(ei, { children: n }),
                    Object(O.jsx)(Ga, {}),
                    Object(O.jsx)("div", { children: Object(O.jsx)(l.d, { size: "sm", onClick: i, children: s(452, "Max") }) }),
                  ],
                }),
                onChange: a,
                placeholder: "0",
                value: r,
              }),
            ],
          });
        },
        ni = function (e) {
          var t = e.max,
            n = e.onConfirm,
            a = e.onDismiss,
            i = e.tokenName,
            s = void 0 === i ? "" : i,
            u = Object(r.useState)(""),
            o = Object(h.a)(u, 2),
            c = o[0],
            p = o[1],
            d = Object(r.useState)(!1),
            y = Object(h.a)(d, 2),
            m = y[0],
            b = y[1],
            f = In(),
            g = Object(r.useMemo)(
              function () {
                return Aa(t);
              },
              [t],
            ),
            v = Object(r.useCallback)(
              function (e) {
                p(e.currentTarget.value);
              },
              [p],
            ),
            w = Object(r.useCallback)(
              function () {
                p(g);
              },
              [g, p],
            );
          return Object(O.jsxs)(l.o, {
            title: "".concat(f(316, "Deposit"), " ").concat(s, " Tokens"),
            onDismiss: a,
            children: [
              Object(O.jsx)(ti, { value: c, onSelectMax: w, onChange: v, max: g, symbol: s }),
              Object(O.jsxs)(qa, {
                children: [
                  Object(O.jsx)(l.d, { variant: "secondary", onClick: a, children: f(462, "Cancel") }),
                  Object(O.jsx)(l.d, {
                    disabled: m,
                    onClick: Object(x.a)(
                      j.a.mark(function e() {
                        return j.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return b(!0), (e.next = 3), n(c);
                              case 3:
                                b(!1), a();
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      }),
                    ),
                    children: m ? f(488, "Pending Confirmation") : f(464, "Confirm"),
                  }),
                ],
              }),
            ],
          });
        },
        ai = function (e) {
          var t = e.onConfirm,
            n = e.onDismiss,
            a = e.max,
            i = e.tokenName,
            s = void 0 === i ? "" : i,
            u = Object(r.useState)(""),
            o = Object(h.a)(u, 2),
            c = o[0],
            p = o[1],
            d = Object(r.useState)(!1),
            y = Object(h.a)(d, 2),
            m = y[0],
            b = y[1],
            f = In(),
            g = Object(r.useMemo)(
              function () {
                return Aa(a);
              },
              [a],
            ),
            v = Object(r.useCallback)(
              function (e) {
                p(e.currentTarget.value);
              },
              [p],
            ),
            w = Object(r.useCallback)(
              function () {
                p(g);
              },
              [g, p],
            );
          return Object(O.jsxs)(l.o, {
            title: "Withdraw ".concat(s),
            onDismiss: n,
            children: [
              Object(O.jsx)(ti, { onSelectMax: w, onChange: v, value: c, max: g, symbol: s }),
              Object(O.jsxs)(qa, {
                children: [
                  Object(O.jsx)(l.d, { variant: "secondary", onClick: n, children: f(462, "Cancel") }),
                  Object(O.jsx)(l.d, {
                    disabled: m,
                    onClick: Object(x.a)(
                      j.a.mark(function e() {
                        return j.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return b(!0), (e.next = 3), t(c);
                              case 3:
                                b(!1), n();
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      }),
                    ),
                    children: m ? f(488, "Pending Confirmation") : f(464, "Confirm"),
                  }),
                ],
              }),
            ],
          });
        },
        ii = Fe.d.div(_t || (_t = Object(Pe.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),
        ri = Fe.d.div(Et || (Et = Object(Pe.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n  width: 100%;\n"])), function (e) {
          return e.theme.spacing[6];
        }),
        si = Fe.d.div(
          Pt || (Pt = Object(Pe.a)(["\n  height: ", "px;\n  width: ", "px;\n"])),
          function (e) {
            return e.theme.spacing[4];
          },
          function (e) {
            return e.theme.spacing[4];
          },
        ),
        ui = Fe.d.div(
          Ft || (Ft = Object(Pe.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"])),
        ),
        oi = function (e) {
          var t = e.lpContract,
            n = e.pid,
            a = e.tokenName,
            i = e.allowance,
            s = e.tokenBalance,
            u = e.stakedBalance,
            o = Object(d.j)().account,
            c = Object(r.useState)(!1),
            p = Object(h.a)(c, 2),
            y = p[0],
            f = p[1],
            g = In(),
            v = (function (e, t) {
              var n = Object(b.b)(),
                a = Object(d.j)().account,
                i = Ma();
              return {
                onApprove: Object(r.useCallback)(
                  Object(x.a)(
                    j.a.mark(function r() {
                      var s;
                      return j.a.wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (r.prev = 0), (r.next = 3), pa(e, i, a);
                              case 3:
                                return (s = r.sent), n(ee(t, a)), r.abrupt("return", s);
                              case 8:
                                return (r.prev = 8), (r.t0 = r.catch(0)), r.abrupt("return", !1);
                              case 11:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        null,
                        [[0, 8]],
                      );
                    }),
                  ),
                  [a, n, e, i, t],
                ),
              };
            })(t, n).onApprove,
            w = za(n).onStake,
            T = Ya(n).onUnstake,
            k = Object(l.x)(Object(O.jsx)(ni, { max: s, onConfirm: w, tokenName: a })),
            M = Object(h.a)(k, 1)[0],
            B = Object(l.x)(Object(O.jsx)(ai, { max: u, onConfirm: T, tokenName: a })),
            S = Object(h.a)(B, 1)[0],
            A = Object(r.useCallback)(
              Object(x.a)(
                j.a.mark(function e() {
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), f(!0), (e.next = 4), v();
                          case 4:
                            f(!1), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7), (e.t0 = e.catch(0)), console.error(e.t0);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]],
                  );
                }),
              ),
              [v],
            ),
            I = a.split(" ")[0].toLocaleLowerCase(),
            C = o && i && i.isGreaterThan(0);
          return Object(O.jsx)(l.g, {
            children: Object(O.jsx)(l.h, {
              children: Object(O.jsxs)(ui, {
                children: [
                  Object(O.jsxs)(ii, {
                    children: [
                      Object(O.jsx)(Ia, { src: "/images/farms/".concat(I, ".png"), alt: "".concat(a, " logo") }),
                      Object(O.jsx)(_a, { value: Sa(u), decimals: "HARD" === a ? 6 : void 0, fontSize: "40px" }),
                      Object(O.jsx)(oa, { text: "".concat(a, " ").concat(g(332, "Tokens Staked")) }),
                    ],
                  }),
                  Object(O.jsxs)(ri, {
                    children: [
                      !o && Object(O.jsx)(zn, {}),
                      o &&
                        (C
                          ? Object(O.jsxs)(O.Fragment, {
                              children: [
                                Object(O.jsx)(l.d, { disabled: u.eq(new m.a(0)), onClick: S, children: g(292, "Unstake") }),
                                Object(O.jsx)(si, {}),
                                Object(O.jsx)(l.l, { onClick: M, children: Object(O.jsx)(l.a, { color: "background" }) }),
                              ],
                            })
                          : Object(O.jsx)(l.d, { disabled: y, onClick: A, children: "Approve ".concat(a) })),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        ci = Fe.d.p(Lt || (Lt = Object(Pe.a)(["\n  color: ", ";\n  text-align: center;\n"])), function (e) {
          return e.theme.colors.text;
        }),
        pi = Fe.d.span(zt || (zt = Object(Pe.a)(["\n  color: ", ";\n  margin-left: 4px;\n"])), function (e) {
          return e.theme.colors.primary;
        }),
        di = function (e) {
          var t = e.tokenName,
            n = e.endBlock,
            a = In();
          return Object(O.jsxs)(ci, { children: ["".concat(t, " "), a(518, "will be distributed weekly until block"), Object(O.jsx)(pi, { children: n })] });
        },
        li = Object(Fe.d)(sa)(
          Rt ||
            (Rt = Object(Pe.a)([
              "\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  @media (min-width: 852px) {\n    padding-bottom: 48px;\n    padding-top: 48px;\n  }\n",
            ])),
        ),
        yi = Fe.d.div(Yt || (Yt = Object(Pe.a)(["\n  text-align: center;\n"]))),
        mi = Fe.d.div(Ht || (Ht = Object(Pe.a)(["\n  color: ", ";\n  font-size: 24px;\n  font-weight: 900;\n  margin-bottom: 24px;\n"])), function (e) {
          return e.theme.colors.secondary;
        }),
        bi = Fe.d.div(Qt || (Qt = Object(Pe.a)([""]))),
        fi = Fe.d.div(
          Ut ||
            (Ut = Object(Pe.a)([
              "\n  align-items: start;\n  display: grid;\n  grid-gap: 24px;\n  grid-template-columns: minmax(auto, 344px);\n  justify-content: center;\n  padding: 32px 0;\n\n  @media (min-width: 852px) {\n    grid-template-columns: repeat(2, minmax(auto, 344px));\n  }\n",
            ])),
        ),
        ji = Fe.d.h3(
          Jt || (Jt = Object(Pe.a)(["\n  color: ", ";\n  font-size: 16px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n"])),
          function (e) {
            return e.theme.colors.primary;
          },
        ),
        xi = function () {
          var e = In(),
            t = Object(d.j)(),
            n = t.ethereum,
            a = t.account,
            i = Object(p.h)().lpSymbol,
            s = (function (e) {
              return Object(b.c)(function (t) {
                return t.farms.data.find(function (t) {
                  return t.lpSymbol === e;
                });
              });
            })(i),
            u = s.pid,
            o = s.lpAddresses,
            c = s.tokenSymbol,
            l = s.dual,
            y = o[56],
            f = (function (e, t) {
              var n = Object(b.b)(),
                a = w().fastRefresh,
                i = De(e);
              return (
                Object(r.useEffect)(
                  function () {
                    t && n(ee(e, t));
                  },
                  [t, n, e, a],
                ),
                {
                  allowance: i.userData ? new m.a(i.userData.allowance) : new m.a(0),
                  tokenBalance: i.userData ? new m.a(i.userData.tokenBalance) : new m.a(0),
                  stakedBalance: i.userData ? new m.a(i.userData.stakedBalance) : new m.a(0),
                  earnings: i.userData ? new m.a(i.userData.earnings) : new m.a(0),
                }
              );
            })(u, a),
            j = f.allowance,
            x = f.tokenBalance,
            h = f.stakedBalance,
            g = f.earnings,
            v = Object(r.useMemo)(
              function () {
                return aa(n, y);
              },
              [n, y],
            );
          return Object(O.jsxs)(li, {
            children: [
              Object(O.jsxs)(yi, {
                children: [
                  Object(O.jsx)(mi, { children: e(999, "Stake LP tokens to earn BDAY") }),
                  l && Object(O.jsx)(di, { tokenName: c, endBlock: l.endBlock }),
                ],
              }),
              Object(O.jsxs)(bi, {
                children: [
                  Object(O.jsxs)(fi, {
                    children: [
                      Object(O.jsx)(La, { pid: u, earnings: g }),
                      Object(O.jsx)(oi, { lpContract: v, pid: u, tokenName: i.toUpperCase(), allowance: j, tokenBalance: x, stakedBalance: h }),
                    ],
                  }),
                  l
                    ? Object(O.jsx)(di, { tokenName: c, endBlock: l.endBlock })
                    : Object(O.jsx)(ji, {
                        children: e(
                          590,
                          "\u2b50\ufe0f Every time you stake and unstake LP tokens, the contract will automagically harvest BDAY rewards for you!",
                        ),
                      }),
                ],
              }),
            ],
          });
        },
        hi = Fe.d.div(
          qt ||
            (qt = Object(Pe.a)([
              "\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 968px;\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ",
              " {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n\n  ",
              " {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n",
            ])),
          function (e) {
            return e.theme.mediaQueries.sm;
          },
          function (e) {
            return e.theme.mediaQueries.lg;
          },
        ),
        Oi = function () {
          var e = Object(r.useState)([]),
            t = Object(h.a)(e, 2),
            n = t[0],
            a = t[1],
            i = Object(d.j)().account,
            s = w().fastRefresh;
          return (
            Object(r.useEffect)(
              function () {
                i &&
                  (function () {
                    var e = Object(x.a)(
                      j.a.mark(function e() {
                        var t, n, r;
                        return j.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = A.map(function (e) {
                                    return { address: J(), name: "pendingBday", params: [e.pid, i] };
                                  })),
                                  (e.next = 3),
                                  q(C, t)
                                );
                              case 3:
                                (n = e.sent),
                                  (r = A.map(function (e, t) {
                                    return Object(T.a)(Object(T.a)({}, e), {}, { balance: new m.a(n[t]) });
                                  })),
                                  a(r);
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()();
              },
              [i, s],
            ),
            n
          );
        },
        gi = function () {
          var e = Object(r.useState)([]),
            t = Object(h.a)(e, 2),
            n = t[0],
            a = t[1],
            i = Object(d.j)().account,
            s = w().fastRefresh;
          return (
            Object(r.useEffect)(
              function () {
                i &&
                  (function () {
                    var e = Object(x.a)(
                      j.a.mark(function e() {
                        var t, n;
                        return j.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = A.map(function (e) {
                                    return { address: J(), name: "pendingBday", params: [e.pid, i] };
                                  })),
                                  (e.next = 3),
                                  q(C, t)
                                );
                              case 3:
                                (n = e.sent), a(n);
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()();
              },
              [i, s],
            ),
            n
          );
        },
        vi = Fe.d.div(Wt || (Wt = Object(Pe.a)(["\n  color: ", ";\n  font-weight: 600;\n"])), function (e) {
          return e.theme.colors.text;
        }),
        wi = function (e) {
          var t = e.value,
            n = e.decimals,
            a = e.fontSize,
            i = void 0 === a ? "40px" : a,
            s = Object(Ca.useCountUp)({ start: 0, end: t, duration: 1, separator: ",", decimals: void 0 !== n ? n : t < 0 ? 4 : t > 1e5 ? 0 : 3 }),
            u = s.countUp,
            o = s.update,
            c = Object(r.useRef)(o);
          return (
            Object(r.useEffect)(
              function () {
                c.current(t);
              },
              [t, c],
            ),
            Object(O.jsx)(vi, { style: { fontSize: i }, children: u })
          );
        },
        Ti = Object(Fe.d)(l.t)(Vt || (Vt = Object(Pe.a)(["\n  color: ", ";\n"])), function (e) {
          return e.theme.colors.textDisabled;
        }),
        ki = function () {
          var e = In(),
            t = Object(d.j)().account,
            n = gi().reduce(function (e, t) {
              return e + new m.a(t).div(new m.a(10).pow(18)).toNumber();
            }, 0);
          return t ? Object(O.jsx)(wi, { value: n }) : Object(O.jsx)(Ti, { children: e(298, "Locked") });
        },
        Mi = function (e) {
          var t = Object(r.useState)(new m.a(0)),
            n = Object(h.a)(t, 2),
            a = n[0],
            i = n[1],
            s = Object(d.j)(),
            u = s.account,
            o = s.ethereum,
            c = w().fastRefresh;
          return (
            Object(r.useEffect)(
              function () {
                u &&
                  o &&
                  (function () {
                    var t = Object(x.a)(
                      j.a.mark(function t() {
                        var n;
                        return j.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), ia(o, e, u);
                              case 2:
                                (n = t.sent), i(new m.a(n));
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      }),
                    );
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })()();
              },
              [u, o, e, c],
            ),
            a
          );
        },
        Bi = Object(Fe.d)(l.t)(Kt || (Kt = Object(Pe.a)(["\n  color: ", ";\n"])), function (e) {
          return e.theme.colors.textDisabled;
        }),
        Si = function () {
          var e = In(),
            t = Mi(U());
          return Object(d.j)().account ? Object(O.jsx)(wi, { value: Sa(t), fontSize: "24px" }) : Object(O.jsx)(Bi, { children: e(298, "Locked") });
        },
        Ai = Object(Fe.d)(l.g)(
          Xt ||
            (Xt = Object(Pe.a)([
              "\n  background-image: url('/images/cake-bg.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  background-size: 60%;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 344px;\n  width: 100%;\n\n  ",
              " {\n    margin: 0;\n    max-width: none;\n  }\n",
            ])),
          function (e) {
            return e.theme.mediaQueries.lg;
          },
        ),
        Ii = Object(Fe.d)(l.k).attrs({ size: "lg" })(Gt || (Gt = Object(Pe.a)(["\n  margin-bottom: 24px;\n"]))),
        Ci = Fe.d.div($t || ($t = Object(Pe.a)(["\n  margin-bottom: 16px;\n"]))),
        Di = Fe.d.div(Zt || (Zt = Object(Pe.a)(["\n  margin-bottom: 8px;\n"]))),
        Ni = Fe.d.img(en || (en = Object(Pe.a)(["\n  margin-bottom: 16px;\n"]))),
        _i = Fe.d.div(tn || (tn = Object(Pe.a)(["\n  color: ", ";\n  font-size: 14px;\n"])), function (e) {
          return e.theme.colors.textSubtle;
        }),
        Ei = Fe.d.div(nn || (nn = Object(Pe.a)(["\n  margin-top: 24px;\n"]))),
        Pi = function () {
          var e = Object(r.useState)(!1),
            t = Object(h.a)(e, 2),
            n = t[0],
            a = t[1],
            i = Object(d.j)().account,
            s = In(),
            u = Oi().filter(function (e) {
              return e.balance.toNumber() > 0;
            }),
            o = (function (e) {
              var t = Object(d.j)().account,
                n = Ma();
              return {
                onReward: Object(r.useCallback)(
                  Object(x.a)(
                    j.a.mark(function a() {
                      var i;
                      return j.a.wrap(function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (i = e.reduce(function (e, a) {
                                  return [].concat(Object(k.a)(e), [ja(n, a, t)]);
                                }, [])),
                                a.abrupt("return", Promise.all(i))
                              );
                            case 2:
                            case "end":
                              return a.stop();
                          }
                      }, a);
                    }),
                  ),
                  [t, e, n],
                ),
              };
            })(
              u.map(function (e) {
                return e.pid;
              }),
            ).onReward,
            c = Object(r.useCallback)(
              Object(x.a)(
                j.a.mark(function e() {
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return a(!0), (e.prev = 1), (e.next = 4), o();
                          case 4:
                            e.next = 8;
                            break;
                          case 6:
                            (e.prev = 6), (e.t0 = e.catch(1));
                          case 8:
                            return (e.prev = 8), a(!1), e.finish(8);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 6, 8, 11]],
                  );
                }),
              ),
              [o],
            );
          return Object(O.jsx)(Ai, {
            children: Object(O.jsxs)(l.h, {
              children: [
                Object(O.jsx)(Ii, { children: s(542, "Farms & Staking") }),
                Object(O.jsx)(Ni, { src: "/images/kebab.svg", alt: "Bday logo", width: "128" }),
                Object(O.jsxs)(Ci, {
                  children: [Object(O.jsx)(Di, { children: Object(O.jsx)(ki, {}) }), Object(O.jsx)(_i, { children: s(544, "BDAY to Harvest") })],
                }),
                Object(O.jsxs)(Ci, {
                  children: [Object(O.jsx)(Di, { children: Object(O.jsx)(Si, {}) }), Object(O.jsx)(_i, { children: s(546, "BDAY in Wallet") })],
                }),
                Object(O.jsx)(Ei, {
                  children: i
                    ? Object(O.jsx)(l.d, {
                        id: "harvest-all",
                        disabled: u.length <= 0 || n,
                        onClick: c,
                        fullWidth: !0,
                        children: n ? s(548, "Collecting BDAY") : s(999, "Harvest all (".concat(u.length, ")")),
                      })
                    : Object(O.jsx)(zn, { fullWidth: !0 }),
                }),
              ],
            }),
          });
        },
        Fi = n(172),
        Li = Object(Fe.d)(l.g)(
          an ||
            (an = Object(Pe.a)([
              "\n  background-repeat: no-repeat;\n  background-position: top right;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 344px;\n  width: 100%;\n\n  ",
              " {\n    margin: 0;\n    max-width: none;\n  }\n",
            ])),
          function (e) {
            return e.theme.mediaQueries.lg;
          },
        ),
        zi = Object(Fe.d)(l.k).attrs({ size: "lg" })(rn || (rn = Object(Pe.a)(["\n  margin-bottom: 24px;\n"]))),
        Ri = function () {
          var e = Ge().isDark;
          return Object(O.jsx)(Li, {
            children: Object(O.jsxs)(l.h, {
              children: [
                Object(O.jsx)(zi, { children: "Latest BirthDay Cake Tweet" }),
                e
                  ? Object(O.jsx)(Fi.TwitterTimelineEmbed, {
                      sourceType: "profile",
                      screenName: "bdaycakefinance",
                      theme: "dark",
                      options: { tweetLimit: "1" },
                      noBorders: !0,
                      noHeader: !0,
                      noFooter: !0,
                      placeholder: "Loading Last BirthDay Cake Tweet",
                      transparent: !0,
                    })
                  : Object(O.jsx)(Fi.TwitterTimelineEmbed, {
                      sourceType: "profile",
                      screenName: "bdaycakefinance",
                      theme: "light",
                      options: { tweetLimit: "1" },
                      noBorders: !0,
                      noHeader: !0,
                      noFooter: !0,
                      placeholder: "Loading Last BirthDay Cake Tweet",
                      transparent: !0,
                    }),
              ],
            }),
          });
        },
        Yi = Object(Fe.d)(l.g)(
          sn ||
            (sn = Object(Pe.a)([
              "\n  background-repeat: no-repeat;\n  background-position: top right;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 344px;\n  width: 100%;\n\n  ",
              " {\n    margin: 0;\n    max-width: none;\n  }\n",
            ])),
          function (e) {
            return e.theme.mediaQueries.lg;
          },
        ),
        Hi = Fe.d.div(
          un ||
            (un = Object(Pe.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"])),
        ),
        Qi = Object(Fe.d)(l.k).attrs({ size: "lg" })(on || (on = Object(Pe.a)(["\n  margin-bottom: 24px;\n"]))),
        Ui = function () {
          var e = In(),
            t = (function () {
              var e = w().slowRefresh,
                t = Object(r.useState)(),
                n = Object(h.a)(t, 2),
                a = n[0],
                i = n[1];
              return (
                Object(r.useEffect)(
                  function () {
                    function e() {
                      return (e = Object(x.a)(
                        j.a.mark(function e() {
                          var t, n;
                          return j.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (t = H(re, U())), (e.next = 3), t.methods.totalSupply().call();
                                case 3:
                                  (n = e.sent), i(new m.a(n));
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        }),
                      )).apply(this, arguments);
                    }
                    !(function () {
                      e.apply(this, arguments);
                    })();
                  },
                  [e],
                ),
                a
              );
            })(),
            n = (function (e) {
              var t = Object(r.useState)(new m.a(0)),
                n = Object(h.a)(t, 2),
                a = n[0],
                i = n[1],
                s = Object(d.j)(),
                u = s.account,
                o = s.ethereum,
                c = w().slowRefresh;
              return (
                Object(r.useEffect)(
                  function () {
                    u &&
                      o &&
                      (function () {
                        var t = Object(x.a)(
                          j.a.mark(function t() {
                            var n;
                            return j.a.wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (t.next = 2), ia(o, e, "0x000000000000000000000000000000000000dEaD");
                                  case 2:
                                    (n = t.sent), i(new m.a(n));
                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          }),
                        );
                        return function () {
                          return t.apply(this, arguments);
                        };
                      })()();
                  },
                  [u, o, e, c],
                ),
                a
              );
            })(U()),
            a = t ? Sa(t) - Sa(n) : 0;
          return Object(O.jsx)(Yi, {
            children: Object(O.jsxs)(l.h, {
              children: [
                Object(O.jsx)(Qi, { children: e(534, "BDAY Stats") }),
                Object(O.jsxs)(Hi, {
                  children: [
                    Object(O.jsx)(l.t, { fontSize: "14px", children: e(536, "Total BDAY Supply") }),
                    a && Object(O.jsx)(wi, { fontSize: "14px", value: a }),
                  ],
                }),
                Object(O.jsxs)(Hi, {
                  children: [
                    Object(O.jsx)(l.t, { fontSize: "14px", children: e(538, "Total BDAY Burned") }),
                    Object(O.jsx)(wi, { fontSize: "14px", value: Sa(n) }),
                  ],
                }),
                Object(O.jsxs)(Hi, {
                  children: [
                    Object(O.jsx)(l.t, { fontSize: "14px", children: e(540, "New BDAY/block") }),
                    Object(O.jsx)(wi, { fontSize: "14px", decimals: 0, value: 1 }),
                  ],
                }),
              ],
            }),
          });
        },
        Ji = Object(Fe.d)(l.g)(
          cn ||
            (cn = Object(Pe.a)([
              "\nbackground-repeat: no-repeat;\nbackground-position: top right;\nmargin-left: auto;\nmargin-right: auto;\nmax-width: 344px;\nwidth: 100%;\n\n",
              " {\n  margin: 0;\n  max-width: none;\n}\n",
            ])),
          function (e) {
            return e.theme.mediaQueries.lg;
          },
        ),
        qi = function () {
          for (var e = In(), t = Ce(), n = Ee(), i = _e(), r = new m.a(0), s = 0; s < t.length; s++) {
            var u = t[s];
            u.lpTotalInQuoteToken &&
              (r =
                u.quoteTokenSymbol === a.BNB
                  ? r.plus(new m.a(u.lpTotalInQuoteToken).div(i))
                  : u.quoteTokenSymbol === a.BDAY
                  ? r.plus(n.times(u.lpTotalInQuoteToken))
                  : r.plus(u.lpTotalInQuoteToken));
          }
          var o = (Math.round(100 * r.toNumber()) / 100).toLocaleString();
          return Object(O.jsx)(Ji, {
            children: Object(O.jsxs)(l.h, {
              children: [
                Object(O.jsx)(l.k, { size: "lg", mb: "24px", children: e(999, "Total Vault") }),
                o
                  ? Object(O.jsxs)(O.Fragment, {
                      children: [
                        Object(O.jsx)(l.k, { size: "xl", children: "$".concat(o) }),
                        Object(O.jsx)(l.t, { color: "textSubtle", children: e(999, "Across all farming pairs and stakings") }),
                      ],
                    })
                  : Object(O.jsx)(O.Fragment, { children: Object(O.jsx)(l.r, { height: 66 }) }),
              ],
            }),
          });
        },
        Wi = Fe.d.div(
          pn ||
            (pn = Object(Pe.a)([
              "\n  align-items: center;\n  background-image: url('/images/pan-bg-mobile.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  margin: 32px auto;\n  max-width: 904px;\n  padding-top: 128px;\n  text-align: center;\n\n  ",
              " {\n    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');\n    background-position: left center, right center;\n    height: 165px;\n    margin-top: 48px;\n    padding-top: 0;\n  }\n",
            ])),
          function (e) {
            return e.theme.mediaQueries.lg;
          },
        ),
        Vi = Object(Fe.d)(l.k)(
          dn || (dn = Object(Pe.a)(["\n  color: ", ";\n  font-size: 40px;\n  margin-bottom: ", "px;\n"])),
          function (e) {
            return e.theme.colors.secondary;
          },
          function (e) {
            return e.theme.spacing[4];
          },
        ),
        Ki = Object(Fe.d)(l.t)(ln || (ln = Object(Pe.a)(["\n  font-weight: 400;\n"]))),
        Xi = Object(Fe.d)(l.b)(
          yn ||
            (yn = Object(Pe.a)([
              "\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  ",
              " {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  ",
              " {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n",
            ])),
          function (e) {
            return e.theme.mediaQueries.sm;
          },
          function (e) {
            return e.theme.mediaQueries.lg;
          },
        ),
        Gi = function () {
          var e = In();
          return Object(O.jsxs)(sa, {
            children: [
              Object(O.jsx)(Wi, {
                children: Object(O.jsxs)("div", {
                  children: [
                    Object(O.jsx)(Vi, { as: "h1", children: e(576, "Birthday Cake") }),
                    Object(O.jsx)(Ki, { children: e(578, "Cakes are good but Birthday Cakes tastes better!") }),
                  ],
                }),
              }),
              Object(O.jsx)(hi, {
                children: Object(O.jsxs)(Xi, { children: [Object(O.jsx)(Pi, {}), Object(O.jsx)(Ri, {}), Object(O.jsx)(Ui, {}), Object(O.jsx)(qi, {})] }),
              }),
            ],
          });
        },
        $i = n(173),
        Zi = n.n($i),
        er = n(309),
        tr = n.n(er),
        nr = s.a.createContext(0),
        ar = function (e) {
          var t = e.children,
            n = Object(r.useRef)(0),
            a = Object(r.useState)(0),
            i = Object(h.a)(a, 2),
            s = i[0],
            u = i[1];
          return (
            Object(r.useEffect)(function () {
              var e = Y(),
                t = setInterval(
                  Object(x.a)(
                    j.a.mark(function t() {
                      var a;
                      return j.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), e.eth.getBlockNumber();
                            case 2:
                              (a = t.sent) !== n.current && ((n.current = a), u(a));
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    }),
                  ),
                  6e3,
                );
              return function () {
                return clearInterval(t);
              };
            }, []),
            Object(O.jsx)(nr.Provider, { value: s, children: t })
          );
        },
        ir = function () {
          return Object(r.useContext)(nr);
        },
        rr = Fe.d.div(
          mn ||
            (mn = Object(Pe.a)([
              "\n  background: ",
              ";\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  border-radius: 32px;\n  display: flex;\n  color: ",
              ";\n  box-shadow: ",
              ";\n  flex-direction: column;\n  position: relative;\n",
            ])),
          function (e) {
            return e.theme.card.background;
          },
          function (e) {
            var t = e.isFinished;
            return e.theme.colors[t ? "textDisabled" : "secondary"];
          },
          function (e) {
            return e.isActive
              ? "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4);"
              : "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)";
          },
        ),
        sr = Fe.d.div(
          bn || (bn = Object(Pe.a)(["\n  color: ", ";\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.1;\n  margin-bottom: 14px;\n"])),
          function (e) {
            var t = e.isFinished;
            return e.theme.colors[t ? "textDisabled" : "text"];
          },
        ),
        ur = Fe.d.img(fn || (fn = Object(Pe.a)(["\n  height: 64px;\n"]))),
        or = Fe.d.div(jn || (jn = Object(Pe.a)(["\n  color: ", ";\n  font-size: 40px;\n  font-weight: 600;\n"])), function (e) {
          return e.theme.colors.text;
        }),
        cr = Fe.d.div(xn || (xn = Object(Pe.a)(["\n  color: ", ";\n  font-size: 14px;\n  margin-bottom: 16px;\n"])), function (e) {
          return e.theme.colors.textSubtle;
        }),
        pr = Fe.d.a(
          hn ||
            (hn = Object(Pe.a)([
              "\n  align-items: center;\n  background-color: transparent;\n  border: 2px solid ",
              ";\n  border-radius: 16px;\n  color: ",
              ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: center;\n  margin: 16px 0;\n  text-decoration: none;\n\n  &:hover {\n    border-color: ",
              ";\n    color: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            return e.theme.colors.primary;
          },
          function (e) {
            return e.theme.colors.primaryBright;
          },
          function (e) {
            return e.theme.colors.primaryBright;
          },
        ),
        dr = Fe.d.div(On || (On = Object(Pe.a)(["\n  display: flex;\n  font-size: 14px;\n"]))),
        lr = Fe.d.div(gn || (gn = Object(Pe.a)(["\n  color: ", ";\n  font-size: 14px;\n"])), function (e) {
          return e.theme.colors.text;
        }),
        yr = Fe.d.div(vn || (vn = Object(Pe.a)(["\n  border-top: 1px solid ", ";\n  padding: 24px;\n"])), function (e) {
          return e.theme.isDark ? "#524B63" : "#E9EAEB";
        }),
        mr = function () {
          var e = In();
          return Object(O.jsxs)(rr, {
            children: [
              Object(O.jsxs)("div", {
                style: { padding: "24px" },
                children: [
                  Object(O.jsxs)(sr, {
                    children: [e(414, "Your Project?"), " ", Object(O.jsx)("span", { role: "img", "aria-label": "eyes", children: "\ud83d\udc40" })],
                  }),
                  Object(O.jsx)(ur, { src: "/images/bdayapplynow.svg", alt: "Your project here" }),
                  Object(O.jsx)(or, { children: "???" }),
                  Object(O.jsx)(cr, { children: e(416, "Create a pool for your token") }),
                  Object(O.jsx)(pr, {
                    href:
                      "https://docs.google.com/forms/d/e/1FAIpQLSd8BzE8ogjAmu4tvJnmjYPHPxEgrn350ppXSWn_Vh1ZcftI7Q/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link",
                    target: "_blank",
                    children: e(418, "Apply Now"),
                  }),
                  Object(O.jsxs)(dr, {
                    children: [Object(O.jsxs)("div", { style: { flex: 1 }, children: [e(352, "APY"), ":"] }), Object(O.jsx)(lr, { children: "??" })],
                  }),
                  Object(O.jsxs)(dr, {
                    children: [
                      Object(O.jsxs)("div", {
                        style: { flex: 1 },
                        children: [Object(O.jsxs)("span", { role: "img", "aria-label": "coming", children: ["\ud83c\udf82", " "] }), e(384, "Your Stake"), ":"],
                      }),
                      Object(O.jsx)(lr, { children: "??? BDAY" }),
                    ],
                  }),
                ],
              }),
              Object(O.jsx)(yr, { children: Object(O.jsx)(Nn, {}) }),
            ],
          });
        },
        br = Object(Fe.d)(l.t)(wn || (wn = Object(Pe.a)(["\n  color: ", ";\n"])), function (e) {
          var t = e.isDisabled,
            n = e.color,
            a = e.theme;
          return t ? a.colors.textDisabled : n;
        }),
        fr = function (e) {
          var t = e.value,
            n = e.fontSize,
            a = e.color,
            i = e.decimals,
            s = e.isDisabled,
            u = e.unit,
            o = Object(r.useRef)(0);
          return (
            Object(r.useEffect)(
              function () {
                o.current = t;
              },
              [t],
            ),
            Object(O.jsxs)(br, {
              bold: !0,
              color: a,
              fontSize: n,
              isDisabled: s,
              children: [
                Object(O.jsx)(Da.a, { start: o.current, end: t, decimals: i, duration: 1, separator: "," }),
                t && u && Object(O.jsx)("span", { children: u }),
              ],
            })
          );
        };
      fr.defaultProps = { fontSize: "32px", isDisabled: !1, color: "text", decimals: 3 };
      var jr,
        xr,
        hr,
        Or,
        gr,
        vr,
        wr,
        Tr,
        kr,
        Mr,
        Br,
        Sr,
        Ar,
        Ir,
        Cr,
        Dr,
        Nr,
        _r,
        Er,
        Pr,
        Fr,
        Lr,
        zr,
        Rr,
        Yr,
        Hr,
        Qr,
        Ur,
        Jr,
        qr,
        Wr = fr,
        Vr = function (e) {
          var t = e.max,
            n = e.onConfirm,
            a = e.onDismiss,
            i = e.tokenName,
            s = void 0 === i ? "" : i,
            u = Object(r.useState)(""),
            o = Object(h.a)(u, 2),
            c = o[0],
            p = o[1],
            d = Object(r.useState)(!1),
            y = Object(h.a)(d, 2),
            m = y[0],
            b = y[1],
            f = In(),
            g = Object(r.useMemo)(
              function () {
                return Aa(t);
              },
              [t],
            ),
            v = Object(r.useCallback)(
              function (e) {
                p(e.currentTarget.value);
              },
              [p],
            ),
            w = Object(r.useCallback)(
              function () {
                p(g);
              },
              [g, p],
            );
          return Object(O.jsxs)(l.o, {
            title: "".concat(f(316, "Deposit"), " ").concat(s, " Tokens"),
            onDismiss: a,
            children: [
              Object(O.jsx)(ti, { value: c, onSelectMax: w, onChange: v, max: g, symbol: s }),
              Object(O.jsxs)(qa, {
                children: [
                  Object(O.jsx)(l.d, { fullWidth: !0, variant: "secondary", onClick: a, children: f(462, "Cancel") }),
                  Object(O.jsx)(l.d, {
                    fullWidth: !0,
                    disabled: m,
                    onClick: Object(x.a)(
                      j.a.mark(function e() {
                        return j.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return b(!0), (e.next = 3), n(c);
                              case 3:
                                b(!1), a();
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      }),
                    ),
                    children: m ? f(488, "Pending Confirmation") : f(464, "Confirm"),
                  }),
                ],
              }),
            ],
          });
        },
        Kr = function (e) {
          var t = e.onConfirm,
            n = e.onDismiss,
            a = e.max,
            i = e.tokenName,
            s = void 0 === i ? "" : i,
            u = Object(r.useState)(""),
            o = Object(h.a)(u, 2),
            c = o[0],
            p = o[1],
            d = Object(r.useState)(!1),
            y = Object(h.a)(d, 2),
            m = y[0],
            b = y[1],
            f = In(),
            g = Object(r.useMemo)(
              function () {
                return Aa(a);
              },
              [a],
            ),
            v = Object(r.useCallback)(
              function (e) {
                p(e.currentTarget.value);
              },
              [p],
            ),
            w = Object(r.useCallback)(
              function () {
                p(g);
              },
              [g, p],
            );
          return Object(O.jsxs)(l.o, {
            title: "Withdraw ".concat(s),
            onDismiss: n,
            children: [
              Object(O.jsx)(ti, { onSelectMax: w, onChange: v, value: c, max: g, symbol: s }),
              Object(O.jsxs)(qa, {
                children: [
                  Object(O.jsx)(l.d, { variant: "secondary", onClick: n, children: f(462, "Cancel") }),
                  Object(O.jsx)(l.d, {
                    disabled: m,
                    onClick: Object(x.a)(
                      j.a.mark(function e() {
                        return j.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return b(!0), (e.next = 3), t(c);
                              case 3:
                                b(!1), n();
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      }),
                    ),
                    children: m ? f(488, "Pending Confirmation") : f(464, "Confirm"),
                  }),
                ],
              }),
            ],
          });
        },
        Xr = function (e) {
          var t = e.earnings,
            n = e.onConfirm,
            a = e.onDismiss,
            i = e.tokenName,
            s = void 0 === i ? "" : i,
            u = Object(r.useState)(!1),
            o = Object(h.a)(u, 2),
            c = o[0],
            p = o[1],
            d = In(),
            y = Object(r.useMemo)(
              function () {
                return Aa(t);
              },
              [t],
            );
          return Object(O.jsxs)(l.o, {
            title: "".concat(d(999, "Compound"), " ").concat(d(330, "".concat(s, " Earned"))),
            onDismiss: a,
            children: [
              Object(O.jsx)(Gr, { children: Object(O.jsx)(Wr, { value: Number(y) }) }),
              Object(O.jsxs)(qa, {
                children: [
                  Object(O.jsx)(l.d, { fullWidth: !0, variant: "secondary", onClick: a, children: d(462, "Cancel") }),
                  Object(O.jsx)(l.d, {
                    fullWidth: !0,
                    disabled: c,
                    onClick: Object(x.a)(
                      j.a.mark(function e() {
                        return j.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return p(!0), (e.next = 3), n(y);
                              case 3:
                                p(!1), a();
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      }),
                    ),
                    children: c ? d(488, "Pending Confirmation") : d(464, "Confirm"),
                  }),
                ],
              }),
            ],
          });
        },
        Gr = Fe.d.div(jr || (jr = Object(Pe.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n"]))),
        $r = Fe.d.div(xr || (xr = Object(Pe.a)(["\n  color: #ed4b9e;\n  font-size: 24px;\n  font-weight: 600;\n  text-transform: uppercase;\n"]))),
        Zr = Fe.d.a(hr || (hr = Object(Pe.a)(["\n  color: #ed4b9e;\n  font-size: 14px;\n"]))),
        es = function (e) {
          var t = e.hasBalance;
          return void 0 !== t && t
            ? Object(O.jsxs)("div", {
                children: [
                  Object(O.jsx)($r, { children: "Action Required" }),
                  Object(O.jsx)(Zr, {
                    href: " https://pancakeswap.medium.com/urgent-action-required-changes-to-syrup-pools-70b98d7b2541",
                    target: "_blank",
                    children: "What do I need to do?",
                  }),
                ],
              })
            : Object(O.jsx)("div", { children: Object(O.jsx)(sr, { isFinished: !0, children: "FINISHED" }) });
        },
        ts = Fe.d.button(
          Or ||
            (Or = Object(Pe.a)([
              "\n  align-items: center;\n  background: ",
              ";\n  border: 0;\n  border-radius: 12px;\n  color: ",
              ";\n  cursor: pointer;\n  display: flex;\n  font-size: ",
              "px;\n  font-weight: 700;\n  height: ",
              "px;\n  justify-content: center;\n  outline: none;\n  padding-left: ",
              "px;\n  padding-right: ",
              "px;\n  pointer-events: ",
              ";\n  width: 100%;\n  border: 2px solid ",
              ";\n  width: 100px;\n  height: 30px;\n  font-size: 14px;\n  padding: 0px;\n",
            ])),
          function (e) {
            return e.disabled ? "#ddd" : e.theme.card.background;
          },
          function (e) {
            return e.disabled ? "#acaaaf" : "#32cad7";
          },
          function (e) {
            return e.fontSize;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.padding;
          },
          function (e) {
            return e.padding;
          },
          function (e) {
            return e.disabled ? "none" : void 0;
          },
          function (e) {
            return e.disabled ? "#eee" : "#33cbd7";
          },
        ),
        ns = Object(Fe.d)(c.b)(
          gr ||
            (gr = Object(Pe.a)([
              "\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ",
              "px;\n  padding: 0 ",
              "px;\n  text-decoration: none;\n",
            ])),
          function (e) {
            return -e.theme.spacing[4];
          },
          function (e) {
            return e.theme.spacing[4];
          },
        ),
        as = Fe.d.a(
          vr ||
            (vr = Object(Pe.a)([
              "\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ",
              "px;\n  padding: 0 ",
              "px;\n  text-decoration: none;\n",
            ])),
          function (e) {
            return -e.theme.spacing[4];
          },
          function (e) {
            return e.theme.spacing[4];
          },
        ),
        is = function (e) {
          var t,
            n,
            a,
            i = e.children,
            s = e.disabled,
            u = e.href,
            o = e.onClick,
            c = e.size,
            p = e.text,
            d = e.to,
            l = Object(r.useContext)(Fe.a),
            y = l.colors,
            m = l.spacing,
            b = y.background;
          switch (c) {
            case "sm":
              (n = m[3]), (t = 36), (a = 14);
              break;
            case "lg":
              (n = m[4]), (t = 72), (a = 16);
              break;
            case "md":
            default:
              (n = m[4]), (t = 56), (a = 16);
          }
          var f = Object(r.useMemo)(
            function () {
              return d ? Object(O.jsx)(ns, { to: d, children: p }) : u ? Object(O.jsx)(as, { href: u, target: "__blank", children: p }) : p;
            },
            [u, p, d],
          );
          return Object(O.jsxs)(ts, { boxShadow: undefined, color: b, disabled: s, fontSize: a, onClick: o, padding: n, size: t, children: [i, f] });
        },
        rs = n(700),
        ss = n(701),
        us =
          ((wr = {}),
          Object(ne.a)(wr, i.BINANCE, function () {
            return Object(O.jsx)(l.s, { variant: "binance", outline: !0, startIcon: Object(O.jsx)(l.c, {}), children: "Binance" });
          }),
          Object(ne.a)(wr, i.CORE, function () {
            return Object(O.jsx)(l.s, { variant: "secondary", outline: !0, startIcon: Object(O.jsx)(l.u, {}), children: "Core" });
          }),
          Object(ne.a)(wr, i.COMMUNITY, Nn),
          wr),
        os = Fe.d.div(
          Tr || (Tr = Object(Pe.a)(["\n  border-top: 1px solid ", ";\n  color: ", ";\n  padding: 24px;\n"])),
          function (e) {
            return e.theme.isDark ? "#524B63" : "#E9EAEB";
          },
          function (e) {
            var t = e.isFinished;
            return e.theme.colors[t ? "textDisabled2" : "primary2"];
          },
        ),
        cs = Fe.d.button(
          kr ||
            (kr = Object(Pe.a)([
              "\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n  color: ",
              ";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 16px;\n  font-weight: 600;\n  height: 32px;\n  justify-content: center;\n  outline: 0;\n  padding: 0;\n  &:hover {\n    opacity: 0.9;\n  }\n\n  & > svg {\n    margin-left: 4px;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.primary;
          },
        ),
        ps = Fe.d.div(Mr || (Mr = Object(Pe.a)(["\n  margin-top: 24px;\n"]))),
        ds = Fe.d.div(Br || (Br = Object(Pe.a)(["\n  align-items: center;\n  display: flex;\n"]))),
        ls = Fe.d.div(Sr || (Sr = Object(Pe.a)(["\n  flex: 1;\n"]))),
        ys = Fe.d.div(Ar || (Ar = Object(Pe.a)(["\n  font-size: 14px;\n"]))),
        ms = Fe.d.a(Ir || (Ir = Object(Pe.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  color: #12aab5;\n"]))),
        bs = function (e) {
          var t = e.projectLink,
            n = e.totalStaked,
            a = e.blocksRemaining,
            i = e.isFinished,
            s = e.blocksUntilStart,
            u = e.poolCategory,
            o = Object(r.useState)(!1),
            c = Object(h.a)(o, 2),
            p = c[0],
            d = c[1],
            l = In(),
            y = p ? rs.a : ss.a,
            m = us[u];
          return Object(O.jsxs)(os, {
            isFinished: i,
            children: [
              Object(O.jsxs)(ds, {
                children: [
                  Object(O.jsx)(ls, { children: Object(O.jsx)(m, {}) }),
                  Object(O.jsxs)(cs, {
                    onClick: function () {
                      return d(!p);
                    },
                    children: [p ? "Hide" : "Details", " ", Object(O.jsx)(y, {})],
                  }),
                ],
              }),
              p &&
                Object(O.jsxs)(ps, {
                  children: [
                    Object(O.jsxs)(ds, {
                      style: { marginBottom: "4px" },
                      children: [
                        Object(O.jsx)(ls, {
                          children: Object(O.jsxs)(ys, {
                            children: [Object(O.jsxs)("span", { role: "img", "aria-label": "syrup", children: ["\ud83c\udf82", " "] }), l(408, "Total")],
                          }),
                        }),
                        Object(O.jsx)(Wr, { fontSize: "14px", isDisabled: i, value: Sa(n) }),
                      ],
                    }),
                    s > 0 &&
                      Object(O.jsxs)(ds, {
                        children: [
                          Object(O.jsx)(ls, { children: Object(O.jsxs)(ys, { children: [l(410, "Start"), ":"] }) }),
                          Object(O.jsx)(Wr, { fontSize: "14px", isDisabled: i, value: s, decimals: 0 }),
                        ],
                      }),
                    0 === s &&
                      a > 0 &&
                      Object(O.jsxs)(ds, {
                        children: [
                          Object(O.jsx)(ls, { children: Object(O.jsxs)(ys, { children: [l(410, "End"), ":"] }) }),
                          Object(O.jsx)(Wr, { fontSize: "14px", isDisabled: i, value: a, decimals: 0 }),
                        ],
                      }),
                    Object(O.jsx)(ms, { href: t, target: "_blank", children: l(412, "View project site") }),
                  ],
                }),
            ],
          });
        },
        fs = s.a.memo(bs),
        js = Fe.d.div(
          Cr ||
            (Cr = Object(Pe.a)([
              "\n  background-image: url('/images/pool-finished-sash.svg');\n  background-position: top right;\n  background-repeat: not-repeat;\n  height: 135px;\n  position: absolute;\n  right: -24px;\n  top: -24px;\n  width: 135px;\n",
            ])),
        ),
        xs = Fe.d.div(
          Dr || (Dr = Object(Pe.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  width: 100%;\n  box-sizing: border-box;\n"])),
        ),
        hs = Fe.d.div(Nr || (Nr = Object(Pe.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n"]))),
        Os = Fe.d.div(
          _r || (_r = Object(Pe.a)(["\n  height: ", "px;\n  width: ", "px;\n"])),
          function (e) {
            return e.theme.spacing[4];
          },
          function (e) {
            return e.theme.spacing[4];
          },
        ),
        gs = Fe.d.div(Er || (Er = Object(Pe.a)(["\n  display: flex;\n  font-size: 14px;\n"]))),
        vs = function (e) {
          var t = e.pool,
            n = t.sousId,
            s = t.image,
            u = t.tokenName,
            o = t.stakingTokenName,
            c = t.stakingTokenAddress,
            p = t.projectLink,
            y = t.harvest,
            f = t.apy,
            g = t.tokenDecimals,
            v = t.poolCategory,
            w = t.totalStaked,
            T = t.startBlock,
            k = t.endBlock,
            M = t.isFinished,
            B = t.userData,
            S = t.stakingLimit,
            A = v === i.BINANCE,
            I = In(),
            C = ka(c),
            D = Object(d.j)().account,
            N = ir(),
            _ = (function (e, t) {
              var n = Object(b.b)(),
                a = Object(d.j)().account,
                i = Ba(t);
              return {
                onApprove: Object(r.useCallback)(
                  Object(x.a)(
                    j.a.mark(function r() {
                      var s;
                      return j.a.wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (r.prev = 0), (r.next = 3), pa(e, i, a);
                              case 3:
                                return (s = r.sent), n(Te(t, a)), r.abrupt("return", s);
                              case 8:
                                return (r.prev = 8), (r.t0 = r.catch(0)), r.abrupt("return", !1);
                              case 11:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        null,
                        [[0, 8]],
                      );
                    }),
                  ),
                  [a, n, e, i, t],
                ),
              };
            })(C, n).onApprove,
            E = (function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = Object(b.b)(),
                a = Object(d.j)().account,
                i = Ma(),
                s = Ba(e);
              return {
                onStake: Object(r.useCallback)(
                  (function () {
                    var r = Object(x.a)(
                      j.a.mark(function r(u) {
                        return j.a.wrap(function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                if (0 !== e) {
                                  r.next = 5;
                                  break;
                                }
                                return (r.next = 3), da(i, 0, u, a);
                              case 3:
                                r.next = 12;
                                break;
                              case 5:
                                if (!t) {
                                  r.next = 10;
                                  break;
                                }
                                return (r.next = 8), ya(s, u, a);
                              case 8:
                                r.next = 12;
                                break;
                              case 10:
                                return (r.next = 12), la(s, u, a);
                              case 12:
                                n(Me(e, a)), n(ke(e, a));
                              case 14:
                              case "end":
                                return r.stop();
                            }
                        }, r);
                      }),
                    );
                    return function (e) {
                      return r.apply(this, arguments);
                    };
                  })(),
                  [a, n, t, i, s, e],
                ),
              };
            })(n, A).onStake,
            P = (function (e) {
              var t = Object(b.b)(),
                n = Object(d.j)().account,
                a = Ma(),
                i = Ba(e),
                s = Ra.includes(e);
              return {
                onUnstake: Object(r.useCallback)(
                  (function () {
                    var r = Object(x.a)(
                      j.a.mark(function r(u) {
                        var o, c, p;
                        return j.a.wrap(function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                if (0 !== e) {
                                  r.next = 7;
                                  break;
                                }
                                return (r.next = 3), ma(a, 0, u, n);
                              case 3:
                                (o = r.sent), console.info(o), (r.next = 18);
                                break;
                              case 7:
                                if (!s) {
                                  r.next = 14;
                                  break;
                                }
                                return (r.next = 10), fa(i, u, n);
                              case 10:
                                (c = r.sent), console.info(c), (r.next = 18);
                                break;
                              case 14:
                                return (r.next = 16), ba(i, u, n);
                              case 16:
                                (p = r.sent), console.info(p);
                              case 18:
                                t(Me(e, n)), t(ke(e, n)), t(Be(e, n));
                              case 21:
                              case "end":
                                return r.stop();
                            }
                        }, r);
                      }),
                    );
                    return function (e) {
                      return r.apply(this, arguments);
                    };
                  })(),
                  [n, t, s, a, i, e],
                ),
              };
            })(n).onUnstake,
            F = (function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = Object(b.b)(),
                a = Object(d.j)().account,
                i = Ba(e),
                s = Ma();
              return {
                onReward: Object(r.useCallback)(
                  Object(x.a)(
                    j.a.mark(function r() {
                      return j.a.wrap(function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              if (0 !== e) {
                                r.next = 5;
                                break;
                              }
                              return (r.next = 3), ja(s, 0, a);
                            case 3:
                              r.next = 12;
                              break;
                            case 5:
                              if (!t) {
                                r.next = 10;
                                break;
                              }
                              return (r.next = 8), ha(i, a);
                            case 8:
                              r.next = 12;
                              break;
                            case 10:
                              return (r.next = 12), xa(i, a);
                            case 12:
                              n(Be(e, a)), n(ke(e, a));
                            case 14:
                            case "end":
                              return r.stop();
                          }
                      }, r);
                    }),
                  ),
                  [a, n, t, s, i, e],
                ),
              };
            })(n, A).onReward,
            L = Object(r.useState)(!1),
            z = Object(h.a)(L, 2),
            R = z[0],
            Y = z[1],
            H = Object(r.useState)(!1),
            Q = Object(h.a)(H, 2),
            U = Q[0],
            J = Q[1],
            q = new m.a((null === B || void 0 === B ? void 0 : B.allowance) || 0),
            W = new m.a((null === B || void 0 === B ? void 0 : B.stakingTokenBalance) || 0),
            V = new m.a((null === B || void 0 === B ? void 0 : B.stakedBalance) || 0),
            K = new m.a((null === B || void 0 === B ? void 0 : B.pendingReward) || 0),
            X = Math.max(T - N, 0),
            G = Math.max(k - N, 0),
            $ = o === a.BCAKE,
            Z = (null === V || void 0 === V ? void 0 : V.toNumber()) > 0,
            ee = !Z && !q.toNumber() && !A,
            te = M && Z,
            ne = new m.a(S).multipliedBy(new m.a(10).pow(g)),
            ae = Object(l.x)(
              Object(O.jsx)(Vr, { max: S && W.isGreaterThan(ne) ? ne : W, onConfirm: E, tokenName: S ? "".concat(o, " (").concat(S, " max)") : o }),
            ),
            ie = Object(h.a)(ae, 1)[0],
            re = Object(l.x)(Object(O.jsx)(Xr, { earnings: K, onConfirm: E, tokenName: o })),
            se = Object(h.a)(re, 1)[0],
            ue = Object(l.x)(Object(O.jsx)(Kr, { max: V, onConfirm: P, tokenName: o })),
            oe = Object(h.a)(ue, 1)[0],
            ce = Object(r.useCallback)(
              Object(x.a)(
                j.a.mark(function e() {
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), Y(!0), (e.next = 4), _();
                          case 4:
                            e.sent || Y(!1), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8), (e.t0 = e.catch(0)), console.error(e.t0);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]],
                  );
                }),
              ),
              [_, Y],
            );
          return Object(O.jsxs)(rr, {
            isActive: te,
            isFinished: M && 0 !== n,
            children: [
              M && 0 !== n && Object(O.jsx)(js, {}),
              Object(O.jsxs)("div", {
                style: { padding: "24px" },
                children: [
                  Object(O.jsxs)(sr, { isFinished: M && 0 !== n, children: [$ && "[OLD]", " ", u, " ", I(348, "Pool")] }),
                  Object(O.jsxs)("div", {
                    style: { marginBottom: "8px", display: "flex", alignItems: "center" },
                    children: [
                      Object(O.jsx)("div", { style: { flex: 1 }, children: Object(O.jsx)(ur, { src: "/images/tokens/".concat(s || u, ".png"), alt: u }) }),
                      D &&
                        y &&
                        !$ &&
                        Object(O.jsx)(is, {
                          disabled: !K.toNumber() || U,
                          text: U ? "Collecting" : "Harvest",
                          onClick: Object(x.a)(
                            j.a.mark(function e() {
                              return j.a.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return J(!0), (e.next = 3), F();
                                    case 3:
                                      J(!1);
                                    case 4:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          ),
                        }),
                    ],
                  }),
                  $
                    ? Object(O.jsx)(es, { hasBalance: Z })
                    : Object(O.jsxs)(hs, {
                        children: [
                          Object(O.jsx)(Wr, { value: Sa(K, g), isDisabled: M, decimals: "BTCB" === u ? 8 : 3 }),
                          0 === n && D && y && Object(O.jsx)(is, { disabled: !K.toNumber() || U, text: I(999, U ? "Compounding" : "Compound"), onClick: se }),
                        ],
                      }),
                  Object(O.jsx)(oa, { isFinished: M && 0 !== n, text: I(330, "".concat(u, " earned")) }),
                  Object(O.jsxs)(xs, {
                    children: [
                      !D && Object(O.jsx)(zn, {}),
                      D &&
                        (ee && !$
                          ? Object(O.jsx)("div", {
                              style: { flex: 1 },
                              children: Object(O.jsx)(l.d, { disabled: M || R, onClick: ce, fullWidth: !0, children: "Approve ".concat(o) }),
                            })
                          : Object(O.jsxs)(O.Fragment, {
                              children: [
                                Object(O.jsx)(l.d, {
                                  disabled: V.eq(new m.a(0)) || U,
                                  onClick: $
                                    ? Object(x.a)(
                                        j.a.mark(function e() {
                                          return j.a.wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return J(!0), (e.next = 3), P("0");
                                                case 3:
                                                  J(!1);
                                                case 4:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        }),
                                      )
                                    : oe,
                                  children: "Unstake ".concat(o),
                                }),
                                Object(O.jsx)(Os, {}),
                                !$ && Object(O.jsx)(l.l, { disabled: M && 0 !== n, onClick: ie, children: Object(O.jsx)(l.a, { color: "background" }) }),
                              ],
                            })),
                    ],
                  }),
                  Object(O.jsxs)(gs, {
                    children: [
                      Object(O.jsxs)("div", { style: { flex: 1 }, children: [I(352, "APY"), ":"] }),
                      M || $ || !f || (null === f || void 0 === f ? void 0 : f.isNaN()) || !(null === f || void 0 === f ? void 0 : f.isFinite())
                        ? "-"
                        : Object(O.jsx)(Wr, {
                            fontSize: "14px",
                            isDisabled: M,
                            value: null === f || void 0 === f ? void 0 : f.toNumber(),
                            decimals: 2,
                            unit: "%",
                          }),
                    ],
                  }),
                  Object(O.jsxs)(gs, {
                    children: [
                      Object(O.jsxs)("div", {
                        style: { flex: 1 },
                        children: [Object(O.jsxs)("span", { role: "img", "aria-label": o, children: ["\ud83c\udf82", " "] }), I(384, "Your Stake"), ":"],
                      }),
                      Object(O.jsx)(Wr, { fontSize: "14px", isDisabled: M, value: Sa(V) }),
                    ],
                  }),
                ],
              }),
              Object(O.jsx)(fs, { projectLink: p, totalStaked: w, blocksRemaining: G, isFinished: M, blocksUntilStart: X, poolCategory: v }),
            ],
          });
        },
        ws = Fe.d.div(Pr || (Pr = Object(Pe.a)(["\n  background-color: ", ";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])), function (e) {
          return e.theme.colors.textSubtle;
        }),
        Ts = Fe.d.div(
          Fr ||
            (Fr = Object(Pe.a)([
              "\n  align-items: center;\n  color: ",
              ";\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 250px;\n  padding: 48px 0;\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    font-size: 16px;\n    li {\n      margin-bottom: 4px;\n    }\n  }\n  img {\n    height: auto;\n    max-width: 100%;\n  }\n  @media (min-width: 576px) {\n    grid-template-columns: 1fr 1fr;\n    margin: 0;\n    max-width: none;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.primary;
          },
        ),
        ks = Fe.d.div(
          Lr ||
            (Lr = Object(Pe.a)([
              "\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 904px;\n  padding-bottom: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  @media (min-width: 576px) {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n  @media (min-width: 968px) {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n",
            ])),
        ),
        Ms = Fe.d.div(
          zr ||
            (zr = Object(Pe.a)([
              "\n  align-items: start;\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-gap: 16px;\n  @media (min-width: 576px) {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  @media (min-width: 852px) {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  @media (min-width: 968px) {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n  & > div {\n    grid-column: 2 / 8;\n    @media (min-width: 576px) {\n      grid-column: span 4;\n    }\n  }\n",
            ])),
        ),
        Bs = function () {
          var e = Object(p.i)().path,
            t = In(),
            n = Object(d.j)().account,
            a = Ce(),
            i = Ne(n),
            r = ir(),
            s = i.map(function (e) {
              var t = a.find(function (t) {
                  return t.tokenSymbol === e.stakingTokenName;
                }),
                n = new m.a(null === t || void 0 === t ? void 0 : t.tokenPriceVsQuote),
                i = n;
              "BDAY" !== e.tokenName &&
                (i = new m.a(
                  a.find(function (t) {
                    return t.tokenSymbol === e.tokenName;
                  }).tokenPriceVsQuote,
                ));
              var s = i.times(e.tokenPerBlock).times(kn),
                u = n.times(Sa(e.totalStaked)),
                o = s.div(u).times(100);
              return Object(T.a)(Object(T.a)({}, e), {}, { isFinished: 0 !== e.sousId && (e.isFinished || r > e.endBlock), apy: o });
            }),
            u = tr()(s, function (e) {
              return e.isFinished;
            }),
            o = Object(h.a)(u, 2),
            c = o[0],
            y = o[1];
          return Object(O.jsxs)(ks, {
            children: [
              Object(O.jsxs)(Ts, {
                children: [
                  Object(O.jsxs)("div", {
                    children: [
                      Object(O.jsx)(l.k, { as: "h1", size: "xxl", mb: "16px", children: t(282, "Bcakeup?") }),
                      Object(O.jsxs)("ul", {
                        children: [
                          Object(O.jsx)("li", { children: t(580, "Stake BDAY to earn new tokens.") }),
                          Object(O.jsx)("li", { children: t(404, "You can unstake at any time.") }),
                          Object(O.jsx)("li", { children: t(406, "Rewards are calculated per block.") }),
                        ],
                      }),
                    ],
                  }),
                  Object(O.jsx)("img", { src: "/images/syrup.png", alt: "BDAY POOL icon" }),
                ],
              }),
              Object(O.jsx)(ws, {}),
              Object(O.jsxs)(Ms, {
                children: [
                  Object(O.jsx)(p.b, {
                    exact: !0,
                    path: "".concat(e),
                    children: Object(O.jsxs)(O.Fragment, {
                      children: [
                        Zi()(y, ["sortOrder"]).map(function (e) {
                          return Object(O.jsx)(vs, { pool: e }, e.sousId);
                        }),
                        Object(O.jsx)(mr, {}),
                      ],
                    }),
                  }),
                  Object(O.jsx)(p.b, {
                    path: "".concat(e, "/history"),
                    children: Zi()(c, ["sortOrder"]).map(function (e) {
                      return Object(O.jsx)(vs, { pool: e }, e.sousId);
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Ss = Fe.d.div(
          Rr ||
            (Rr = Object(Pe.a)([
              "\n  align-items: center;\n  background-image: url('/images/pan-bg-mobile.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  margin: 32px auto;\n  max-width: 904px;\n  padding-top: 128px;\n  text-align: center;\n\n  ",
              " {\n    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');\n    background-position: left center, right center;\n    height: 165px;\n    margin-top: 48px;\n    padding-top: 0;\n  }\n",
            ])),
          function (e) {
            return e.theme.mediaQueries.lg;
          },
        ),
        As = Object(Fe.d)(l.k)(
          Yr || (Yr = Object(Pe.a)(["\n  color: ", ";\n  font-size: 40px;\n  margin-bottom: ", "px;\n"])),
          function (e) {
            return e.theme.colors.secondary;
          },
          function (e) {
            return e.theme.spacing[4];
          },
        ),
        Is = Object(Fe.d)(l.t)(Hr || (Hr = Object(Pe.a)(["\n  font-weight: 400;\n"]))),
        Cs = function () {
          for (var e = In(), t = Ce(), n = Oi(), a = Ee(), i = [], r = 0; r < n.length; r++) {
            var s = {
              harvestable: n[r].balance,
              tokenSymbol: n[r].tokenSymbol,
              quoteTokenSymbol: n[r].quoteTokenSymbol,
              lpSymbol: n[r].lpSymbol,
              tokenAmount: t[r].tokenAmount,
              quoteTokenAmount: t[r].quoteTokenAmount,
              tokenPriceVsQuote: t[r].tokenPriceVsQuote,
              lpSupply: t[r].lpSupply,
              share: null,
              balanceBase: null,
              balanceQuote: null,
              balanceLP: null,
              tvl: null,
              harvestDisp: null,
            };
            "BCAKE" !== s.tokenSymbol &&
              ((s.share = s.harvestable.div(new m.a(s.lpSupply)).toNumber()),
              (s.balanceBase = new m.a(s.tokenAmount).times(s.share).toNumber()),
              (s.balanceQuote = new m.a(s.quoteTokenAmount).times(s.share).toNumber()),
              (s.share *= 100),
              (s.harvestDisp = s.harvestable.toNumber() / Math.pow(10, 18)),
              (s.tvl = 2 * s.balanceQuote),
              "BUSD" !== s.quoteTokenSymbol && (s.tvl = a.times(2 * s.balanceBase).toNumber()),
              i.push(s));
          }
          var u = Fe.d.table(Qr || (Qr = Object(Pe.a)(["\n\n  "]))),
            o = Fe.d.th(Ur || (Ur = Object(Pe.a)(["\n    border: 1px solid black;\n  "]))),
            c = Fe.d.td(Jr || (Jr = Object(Pe.a)(["\n    border: 1px solid black;\n  "])));
          return Object(O.jsxs)(sa, {
            children: [
              Object(O.jsx)(Ss, {
                children: Object(O.jsxs)("div", {
                  children: [
                    Object(O.jsx)(As, { as: "h1", children: e(576, "BSC Dashboard") }),
                    Object(O.jsx)(Is, { children: e(578, "Available for the Binance Smart Chain only") }),
                  ],
                }),
              }),
              Object(O.jsx)(hi, {
                children: Object(O.jsxs)(u, {
                  children: [
                    Object(O.jsx)("thead", {
                      children: Object(O.jsxs)("tr", {
                        children: [
                          Object(O.jsx)(o, { children: "LP Token" }),
                          Object(O.jsx)(o, { children: "Avail. Liquidities" }),
                          Object(O.jsx)(o, { children: "Harvestable KEBABs" }),
                          Object(O.jsx)(o, { children: "Total Value" }),
                        ],
                      }),
                    }),
                    Object(O.jsx)("tbody", {
                      children: i.map(function (e) {
                        return Object(O.jsxs)("tr", {
                          children: [
                            Object(O.jsxs)(c, { children: ["??? ", e.lpSymbol, Object(O.jsx)("br", {}), e.share, "%"] }),
                            Object(O.jsxs)(c, {
                              children: [e.balanceBase, " ", e.tokenSymbol, Object(O.jsx)("br", {}), e.balanceQuote, " ", e.quoteTokenSymbol],
                            }),
                            Object(O.jsxs)(c, { children: [e.harvestDisp, " BDAY"] }),
                            Object(O.jsxs)(c, { children: [e.tvl, Object(O.jsx)("br", {}), e.earning] }),
                          ],
                        });
                      }),
                    }),
                    Object(O.jsx)("tfoot", { children: Object(O.jsx)("tr", { children: Object(O.jsx)(c, { children: "YYY" }) }) }),
                  ],
                }),
              }),
            ],
          });
        },
        Ds = Fe.d.div(
          qr ||
            (qr = Object(Pe.a)([
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 152px);\n  justify-content: center;\n",
            ])),
        ),
        Ns = function () {
          var e = In();
          return Object(O.jsx)(sa, {
            children: Object(O.jsxs)(Ds, {
              children: [
                Object(O.jsx)(l.m, { width: "64px", mb: "8px" }),
                Object(O.jsx)(l.k, { size: "xxl", children: "404" }),
                Object(O.jsx)(l.t, { mb: "16px", children: e(999, "Oops, page not found.") }),
                Object(O.jsx)(l.d, { as: "a", href: "/", size: "sm", children: e(999, "Back Home") }),
              ],
            }),
          });
        };
      m.a.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 80 });
      var _s = function () {
          var e = Object(d.j)(),
            t = e.account,
            n = e.connect;
          return (
            Object(r.useEffect)(
              function () {
                !t && window.localStorage.getItem("accountStatus") && n("injected");
              },
              [t, n],
            ),
            Ie(),
            Object(O.jsxs)(c.a, {
              children: [
                Object(O.jsx)(l.q, {}),
                Object(O.jsx)(Le, {}),
                Object(O.jsx)(Ze, {
                  children: Object(O.jsxs)(p.d, {
                    children: [
                      Object(O.jsx)(p.b, { path: "/", exact: !0, children: Object(O.jsx)(Gi, {}) }),
                      Object(O.jsx)(p.b, { path: "/farms", children: Object(O.jsx)(na, {}) }),
                      Object(O.jsx)(p.b, { path: "/farm/:lpSymbol", children: Object(O.jsx)(xi, {}) }),
                      Object(O.jsx)(p.b, { path: "/pools", children: Object(O.jsx)(Bs, {}) }),
                      Object(O.jsx)(p.b, { path: "/dashboard", children: Object(O.jsx)(Cs, {}) }),
                      Object(O.jsx)(p.b, { path: "/staking", children: Object(O.jsx)(p.a, { to: "/pools" }) }),
                      Object(O.jsx)(p.b, { path: "/syrup", children: Object(O.jsx)(p.a, { to: "/pools" }) }),
                      Object(O.jsx)(p.b, { component: Ns }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        Es = s.a.memo(_s),
        Ps = Object(M.a)({ devTools: !1, reducer: { farms: te, pools: Se } }),
        Fs = function (e) {
          var t = e.children,
            n = L();
          return Object(O.jsx)(b.a, {
            store: Ps,
            children: Object(O.jsx)(Xe, {
              children: Object(O.jsx)(We, {
                children: Object(O.jsx)(d.a, {
                  chainId: parseInt("56"),
                  connectors: { walletconnect: { rpcUrl: n }, bsc: d.c },
                  children: Object(O.jsx)(ar, { children: Object(O.jsx)(v, { children: Object(O.jsx)(l.p, { children: t }) }) }),
                }),
              }),
            }),
          });
        };
      o.a.render(Object(O.jsx)(s.a.StrictMode, { children: Object(O.jsx)(Fs, { children: Object(O.jsx)(Es, {}) }) }), document.getElementById("root"));
    },
  },
  [[685, 2, 3]],
]);
