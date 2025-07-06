#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from "inquirer";
import gradient from 'gradient-string';
import figlet from 'figlet';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';

console.log(chalk.bgGreen('HElloWorld!'));

let playerName ;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow('Welcome to CLI Game');
    await sleep();
    rainbowTitle.stop();
    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')}
    1. You will be asked a series of questions.
    2. Answer them correctly to win the game.
    3. Have fun!
    `);
}