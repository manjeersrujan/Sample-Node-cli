/**
 * Created by Manjeer on 5/13/17.
 * This loads all supported commands and pass the arguments from CLI to the corresponding js module.
 */


var program = require('commander');
var colors = require('colors');
const fs = require('fs');
/*
All actions should be under this folder
 */
const actionFolder = './actions/';

var baseProgram = program.version('0.0.1');

function make_red(txt) {
    return colors.red(txt); //display the help text in red on the console
}


/*
Read each file and pass arguments to corresponding js module.
 */
fs.readdir(actionFolder, (err, files) => {
    var actionsMap=[];
    files.forEach(file => {
            var actionName=file.split(".")[0];
            actionsMap[actionName] = require('./actions/'+actionName);
            baseProgram
                .command(actionName+" <arg> [otherArgs...]")
                .description(actionsMap[actionName].description())
                .action(function (arg, otherArgs) {
                    var args=[];
                    args.push(arg)
                    if (otherArgs) {
                        otherArgs.forEach(function (oDir) {
                            args.push(oDir);
                        });
                    }
                    try {
                        console.log(actionsMap[actionName].handle(args));
                    } catch (ex) {
                        console.log(make_red(ex.message));
                        program.outputHelp();
                    }
                });
});
program.parse(process.argv);
});



