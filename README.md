# defi_app

Liquidity mining app where investors can stake one cryptocurrency to yield another one.

## Installation

npm install
truffle compile
truffle migrate

## console interaction

truffle console
tokenFarm = await TokenFarm.deployed()
name = await tokenFarm.name()
address = await tokenFarm.address

## Issue tokens

truffle exec scripts/issue-token.js

## Run webapp

Run webapp
npm run start
