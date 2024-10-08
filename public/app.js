document.getElementById('wormholeForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const fromAddress = document.getElementById('fromAddress').value;
    const toChain = document.getElementById('toChain').value;
    const toAddress = document.getElementById('toAddress').value;
    const amount = document.getElementById('amount').value;

    try {
        const response = await fetch('/wormhole', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fromAddress,
                toChain,
                toAddress,
                amount
            })
        });

        const data = await response.json();
        if (data.success) {
            document.getElementById('response').innerText = `Wormhole transfer initiated! Transaction Hash: ${data.txReceipt.transactionHash}`;
        } else {
            document.getElementById('response').innerText = `Error: ${data.message}`;
        }
    } catch (error) {
        document.getElementById('response').innerText = `Error: ${error.message}`;
    }
});
