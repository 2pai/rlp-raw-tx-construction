const ethers = require('ethers')

class RlpTxConstruction {

    constructor(URIJsonRPC) {
        this.providers = new ethers.providers.JsonRpcProvider(URIJsonRPC)
    }

    async getRawTransaction(txHash) {
        const { chainId } = await this.providers.getNetwork()
        const raw = await this.providers.send("eth_getTransactionByHash", [ txHash ]) 
        const tx = {
            nonce: raw.nonce, 
            gasPrice: raw.gasPrice, 
            gasLimit: raw.gas, 
            to: raw.to, 
            value: raw.value, 
            data: raw.input,
            chainId: chainId,
        }

        const signature = ethers.utils.joinSignature({
            v: raw.v,
            r: raw.r,
            s: raw.s,
        })



        const signedTransaction = await ethers.utils.serializeTransaction(tx,signature)
        return signedTransaction
    }
}

module.exports = RlpTxConstruction