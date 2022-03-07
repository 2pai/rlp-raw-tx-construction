const tx = require("../rlp-tx-construction")
const txConstructor = new tx("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")

module.exports = async (req, res) => {
    const { txHash } = req.query
    const rawTransaction = await txConstructor.getRawTransaction(txHash)
    res.json({
        data: rawTransaction
    })
}