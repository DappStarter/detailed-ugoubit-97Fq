require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remind provide hunt prison olympic trophy'; 
let testAccounts = [
"0x9efe4ce6c9fcf3c2f8d6f4971b8cc4045a4e336433807c8869ccb096465c79bf",
"0xc7bb4cc170f5887391e33e81487f492a7a4370a8d74681e6b276e979024b5619",
"0xeb422580e1a5d72eb1ecf0a6f5aafced25efb37e009bbfb2c40f9deaaf6a53fd",
"0x2a9aa4c771999a85c716597edad1fb2fcbfa0571da03ee50a2ac8027709c37c8",
"0xb694e883d15f765562f7292de6947dd14d5b1d2d2a678fdb39044288b33bb25c",
"0xad4a7e1d48fa68ecb19d7e6b5064d365835a6f8e9ca8c595c0653fcffde7b259",
"0x67da8436a68f9d5724c5a6617f783aeb9020d10d2cc73c29f5e9f55fd59dd381",
"0x8cdc819e03e8e4ac0427a21b6a545f3085035d8c97d3dbd3a175943feb126dfd",
"0x1d57dab7568e983d122daf86f76fe9016b15c92a53c16627cc2c3d2575bba1bc",
"0xdc2f38acbf3fb7ba30f1b4da2c7d1445f03d5fcbf7089858799ec19550e61ecd"
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
            version: '^0.8.0'
        }
    }
};

