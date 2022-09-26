# 🥞 Cubeswap UIkit

[![Version](https://img.shields.io/npm/v/@cubeswap/uikit)](https://www.npmjs.com/package/@cubeswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@cubeswap/uikit)](https://www.npmjs.com/package/@cubeswap/uikit)

Cubeswap UIkit is a set of React components and hooks used to build pages on Cubeswap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @cubeswap/uikit`

***Note**: In case you want to use the older version of the Cubeswap UIkit, you should install @cubeswap-libs/uikit, instead, but we recommend using the latest version of the UIkit.*


## Setup

### Theme

Before using Cubeswap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@cubeswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@cubeswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://cubeswap.github.io/cubeswap-uikit/)
