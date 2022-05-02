const ethers = require("ethers")
const provider = new ethers.providers.JsonRpcProvider(process.env.MAINNET_RPC);

module.exports = async (req, res) => {
    const { address } = req.query
    const ensDomain = await provider.lookupAddress(address)
    res.json({
        ensDomain
    })
}