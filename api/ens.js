const ethers = require("ethers")
const provider = new ethers.providers.JsonRpcProvider(process.env.MAINNET_RPC);

module.exports = async (req, res) => {
    const { address } = req.query
    try {
        const ensDomain = await provider.lookupAddress(address)
        res.end(ensDomain)
        
    } catch (error) {
        res.end(null)
    }
}