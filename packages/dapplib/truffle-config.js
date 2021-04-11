require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note predict company harvest bean tackle twelve'; 
let testAccounts = [
"0x9a8261d0df2b59eca353fa48350c327678b43fbd8343dd67eb28e0301bd4f273",
"0x5daeccf43e854e3ad16bf1a3631ed21a2031ecb98beda374c5ecaa82e0d95cc9",
"0xf7e9df7c6e10fddb38c9902f8ce7c0508f5795a31a6faa00e7af3837e7093551",
"0xd976fe632b10849c8c1b836fee9ddce260813ffa2b6d3a51f814884ac87c8106",
"0x1be5ac245670f37d55a3f87e96407487f62e8a874f5d77a3ad6c0295792cc4d3",
"0x598b6a0b2cafbdbdb6ee7a2f88f468dce5ff2f4c816915981152fa50980bb6db",
"0xd8d142cc3e6427048fceb0113a8e0d0bbd652ae4c0329d200424ba1310575792",
"0x596633a4be3373bd1c65591266a3570d94c008bf4f719904cad69e036b778e0a",
"0x821f401949efe1b0da1a0bdcbf659b8e945b979289c1546488fd83cc66f4ce52",
"0x8c49315f02537d9aecf9e57542f267155cacaabc675557618a0684e5d76c61ec"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
