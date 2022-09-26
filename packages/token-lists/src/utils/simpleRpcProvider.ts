import { ethers } from "ethers";

const RPC_URL = "https://http-mainnet.cube.network
";

const simpleRpcProvider = new ethers.providers.StaticJsonRpcProvider(RPC_URL, 1818);

export default simpleRpcProvider;
