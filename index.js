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

await welcome();
await askName();

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player';
        }
    });
    playerName = answers['player_name'];
}

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'JavaScript was created in 10 days then released on\n',
    choices: [
      'May 23rd, 1995',
      'Nov 24th, 1995',
      'Dec 4th, 1995',
      'Dec 17, 1996',
    ],
  });

  return handleAnswer(answers.question_1 === 'Dec 4th, 1995');
}