import addresses from "../constants/contracts";
import { MAINNET_CHAIN_ID, TESTNET_CHAIN_ID } from "../constants/common";
import { getCubeswapProfileAddress } from "./addressHelpers";

describe("addressHelpers", () => {
  it("getAddress returns correct mainnet address", () => {
    const profileAddress = getCubeswapProfileAddress(MAINNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.cubeswapProfile[MAINNET_CHAIN_ID]);
  });
  it("getAddress returns correct testnet address", () => {
    const profileAddress = getCubeswapProfileAddress(TESTNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.cubeswapProfile[TESTNET_CHAIN_ID]);
  });
});
