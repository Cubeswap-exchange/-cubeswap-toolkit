import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as cubeswapDefaultVersion } from "../lists/cubeswap-default.json";
import { version as cubeswapExtendedVersion } from "../lists/cubeswap-extended.json";
import { version as cubeswapTop15Version } from "../lists/cubeswap-top-15.json";
import { version as cubeswapTop100Version } from "../lists/cubeswap-top-100.json";
import { version as coingeckoVersion } from "../lists/coingecko.json";
import { version as cmcVersion } from "../lists/cmc.json";
import { version as cubeswapMiniVersion } from "../lists/cubeswap-mini.json";
import { version as cubeswapMiniExtendedVersion } from "../lists/cubeswap-mini-extended.json";
import cubeswapDefault from "./tokens/cubeswap-default.json";
import cubeswapExtended from "./tokens/cubeswap-extended.json";
import cubeswapTop100 from "./tokens/cubeswap-top-100.json";
import cubeswapTop15 from "./tokens/cubeswap-top-15.json";
import coingecko from "./tokens/coingecko.json";
import cmc from "./tokens/cmc.json";
import cubeswapMini from "./tokens/cubeswap-mini.json";
import cubeswapMiniExtended from "./tokens/cubeswap-mini-extended.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "cubeswap-default": {
    list: cubeswapDefault,
    name: "CubeswapSwap Default",
    keywords: ["cubeswap", "default"],
    logoURI: "https://cubeswap.exchange/logo.png",
    sort: false,
    currentVersion: cubeswapDefaultVersion,
  },
  "cubeswap-extended": {
    list: cubeswapExtended,
    name: "CubeswapSwap Extended",
    keywords: ["cubeswap", "extended"],
    logoURI: "https://cubeswap.exchange/logo.png",
    sort: true,
    currentVersion: cubeswapExtendedVersion,
  },
  "cubeswap-top-100": {
    list: cubeswapTop100,
    name: "CubeswapSwap Top 100",
    keywords: ["cubeswap", "top 100"],
    logoURI: "https://cubeswap.exchange/logo.png",
    sort: true,
    currentVersion: cubeswapTop100Version,
  },
  "cubeswap-top-15": {
    list: cubeswapTop15,
    name: "CubeswapSwap Top 15",
    keywords: ["cubeswap", "top 15"],
    logoURI: "https://cubeswap.exchange/logo.png",
    sort: true,
    currentVersion: cubeswapTop15Version,
  },
  coingecko: {
    list: coingecko,
    name: "CoinGecko",
    keywords: ["defi"],
    logoURI:
      "https://www.coingecko.com/assets/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png",
    sort: true,
    currentVersion: coingeckoVersion,
  },
  cmc: {
    list: cmc,
    name: "CoinMarketCap",
    keywords: ["defi"],
    logoURI: "https://ipfs.io/ipfs/QmQAGtNJ2rSGpnP6dh6PPKNSmZL8RTZXmgFwgTdy5Nz5mx",
    sort: true,
    currentVersion: cmcVersion,
  },
  "cubeswap-mini": {
    list: cubeswapMini,
    name: "CubeswapSwap Mini",
    keywords: ["cubeswap", "cube", "mini program", "mini"],
    logoURI: "https://cubeswap.exchange/logo.png",
    sort: true,
    currentVersion: cubeswapMiniVersion,
  },
  "cubeswap-mini-extended": {
    list: cubeswapMiniExtended,
    name: "CubeswapSwap Mini Ext",
    keywords: ["cubeswap", "cube", "mini program", "mini", "extended"],
    logoURI: "https://cubeswap.exchange/logo.png",
    sort: true,
    currentVersion: cubeswapMiniExtendedVersion,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
          if (t1.chainId === t2.chainId) {
            // CSE first in extended list
            if ((t1.symbol === "CSE") !== (t2.symbol === "CSE")) {
              return t1.symbol === "CSE" ? -1 : 1;
            }
            return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
          }
          return t1.chainId < t2.chainId ? -1 : 1;
        })
      : list,
  };
};

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};
