# Sample-Node-cli
This is a sample NodeJS project implementing a CLI tool which can be extensible by just adding more components.
I am new to NodeJS and this is my first program. I may not be following standard Node.js practices and standards that effect performance.

# Description
This code used "commander" module to implement CLI with proper error handling, ability to add more commands on fly without making changes to exiting code.
The actions folder contains .js files and each of them corresponding to a command that is supported.

# Installation
    cd <code folder(the directory where package.json exists)>
    npm install

# Testing (Runs the unit tests that are written using mocha, chai, assert)
    npm test

# Running
    cd src
    node shopback-calculator.js redeem www.shopback.sg
    node shopback-calculator.js spend 10 10 10
    node shopback-calculator.js signup www.shopback.my

# Adding new command
To add one more command, craete a .js file with <command_name>.js format in "actions" folder  and implement following methods.
The functionality of the tool, help gets updated on fly with new command.

    handle(args)
    description()

# Help
    node shopback-calculator.js -h
    node shopback-calculator.js spend -h
    node shopback-calculator.js redeem -h
    node shopback-calculator.js signup -h
    node shopback-calculator.js <any new command> -h

