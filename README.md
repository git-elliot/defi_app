# defi_app

Liquidity mining app where investors can stake one cryptocurrency to yield another one.

## Installation

1. Install packages - `npm install`
2. Compile smart contracts - `truffle compile`
3. Run smart contracts - `truffle migrate`
4. Reset contracts and run again - `truffle migrate --reset`

## Console interaction

Hit in terminal `truffle console`

```JS
tokenFarm = await TokenFarm.deployed()
name = await tokenFarm.name()
address = await tokenFarm.address
```

## Issue tokens

Hit in terminal - `truffle exec scripts/issue-token.js`

## Run webapp

Run your web application in browser - `npm run start`
