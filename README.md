# Cubeswap Toolkit

This repository is a monorepo manage with [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [Lerna](https://lerna.js.org/).

## Packages

- [cubeswap-uikit](https://github.com/Cubeswap-exchange/cubeswap-toolkit/tree/master/packages/cubeswap-uikit) : React components used to build the Cubeswap UI.
**Moved to [cubeswap-frontend](https://github.com/Cubeswap-exchange/cubeswap-frontend)**
- [eslint-config-cubeswap](https://github.com/Cubeswap-exchange/cubeswap-toolkit/tree/master/packages/eslint-config-cubeswap) : An ESLint config for cubeswap, with Typescript and Prettier support. **Moved to [cubeswap-frontend](https://github.com/Cubeswap-exchange/cubeswap-frontend)**
- [cubeswap-profile-sdk](https://github.com/Cubeswap-exchange/cubeswap-toolkit/tree/master/packages/cubeswap-profile-sdk) : Handy functions to retrieve data for Cubeswap Profile system
- [token-lists](https://github.com/Cubeswap-exchange/cubeswap-toolkit/tree/master/packages/token-lists) : Main CubeswapSwap token list and tools to validate it. **Moved to [token-list](https://github.com/Cubeswap-exchange/token-list)**

## How to use

Clone the repository

```
git clone git@github.com:cubeswap/cubeswap-toolkit.git
```

Run yarn at the root of the workspace

```
cd cubeswap-toolkit
yarn
```

Then, refer to the readme of each project.
