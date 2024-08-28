const solanaWeb3 = require('@solana/web3.js')
const AdapterBase = require('@solana/wallet-adapter-base')
const AdapterWallets = require('@solana/wallet-adapter-wallets')

window.solanaWeb3 = solanaWeb3;
window.AdapterBase = AdapterBase;
window.AdapterWallets = AdapterWallets;
