
const { Connection, clusterApiUrl, PublicKey, Transaction, SystemProgram } = window.solanaWeb3;
const { PhantomWalletAdapter } = window.AdapterWallets;

const connection = new Connection(clusterApiUrl('devnet'));
const phantomWallet = new PhantomWalletAdapter();
console.log(phantomWallet)

document.getElementById('connect-button').addEventListener('click', async () => {
    try {
        await phantomWallet.connect();
        const walletInfo = document.getElementById('wallet-info');
        walletInfo.textContent = `Connected: ${phantomWallet.publicKey.toString()}`;
    } catch (err) {
        console.error('Failed to connect wallet:', err);
    }
});

document.getElementById('dc-button').addEventListener('click', async () => {
    try {
        await phantomWallet.disconnect();
        const walletInfo = document.getElementById('wallet-info');
        walletInfo.textContent = ``;
    } catch (err) {
        console.error('Failed to connect wallet:', err);
    }
});

document.getElementById('tra').addEventListener('click', async () => {
    try {
        const recipient = new PublicKey('4bRYs66kGxujekaRGHJjvjP4g7SCou28FZJ8LPDsyDnR') // Replace with actual recipient public key
        const amount = 1000000000; // Amount in lamports (1 SOL = 1,000,000,000 lamports)

        // Create a transaction
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: phantomWallet.publicKey,
                toPubkey: recipient,
                lamports: amount,
            })
        );

        // Send the transaction
        const signature = await phantomWallet.sendTransaction(transaction, connection);
        await connection.confirmTransaction(signature, 'confirmed');
    } catch (err) {
        console.error(err);
    }
});

