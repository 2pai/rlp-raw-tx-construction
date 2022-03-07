const tx = require("./rlp-tx-construction")
const txConstructor = new tx("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")

txConstructor.getRawTransaction("0x887e614e6d73c51ac515ca9667bb56103b246dfdfc9550d3048de997173b51ee").then(console.log)