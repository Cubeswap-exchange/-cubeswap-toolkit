import fs from "fs";
import path from "path";
import { getAddress } from "@ethersproject/address";
import cubeswapDefault from "./tokens/cubeswap-default.json";
import cubeswapExtended from "./tokens/cubeswap-extended.json";
import cubeswapTop100 from "./tokens/cubeswap-top-100.json";
import cubeswapTop15 from "./tokens/cubeswap-top-15.json";
import coingecko from "./tokens/coingecko.json";
import cmc from "./tokens/cmc.json";
import cubeswapMini from "./tokens/cubeswap-mini.json";
import cubeswapMiniExtended from "./tokens/cubeswap-mini-extended.json";

const lists = {
  "cubeswap-default": cubeswapDefault,
  "cubeswap-extended": cubeswapExtended,
  "cubeswap-top-100": cubeswapTop100,
  "cubeswap-top-15": cubeswapTop15,
  coingecko,
  cmc,
  "cubeswap-mini": cubeswapMini,
  "cubeswap-mini-extended": cubeswapMiniExtended,
};

const checksumAddresses = (listName: string): void => {
  let badChecksumCount = 0;
  const listToChecksum = lists[listName];
  const updatedList = listToChecksum.reduce((tokenList, token) => {
    const checksummedAddress = getAddress(token.address);
    if (checksummedAddress !== token.address) {
      badChecksumCount += 1;
      const updatedToken = { ...token, address: checksummedAddress };
      return [...tokenList, updatedToken];
    }
    return [...tokenList, token];
  }, []);

  if (badChecksumCount > 0) {
    console.info(`Found and fixed ${badChecksumCount} non-checksummed addreses`);
    const tokenListPath = `${path.resolve()}/src/tokens/${listName}.json`;
    console.info("Saving updated list to ", tokenListPath);
    const stringifiedList = JSON.stringify(updatedList, null, 2);
    fs.writeFileSync(tokenListPath, stringifiedList);
    console.info("Checksumming done!");
  } else {
    console.info("All addresses are already checksummed");
  }
};

export default checksumAddresses;
