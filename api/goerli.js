const tx = require("../rlp-tx-construction")
const txConstructor = new tx(process.env.GOERLI_RPC)

module.exports = async (req, res) => {
    const { txHash } = req.query
    const rawTransaction = await txConstructor.getRawTransaction(txHash)
    res.json({
        data: rawTransaction
    })
}