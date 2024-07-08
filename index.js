const moment = require('moment');
const simpleGit = require('simple-git');
const jsonfile = require('jsonfile')
// const fs = require('fs')

DATE = moment().format();
file = 'data.json';

const obj = [
    {
        DATE
    }
];
jsonfile.writeFile(file, obj, (err) => {
    if (err) console.log("file write error: ", err);
    const fileData = jsonfile.readFile(file, (err, data) => {
        console.log("File data1:", data);
        // data.push({DATE})
        // jsonfile.writeFile(file, data)
    });
});

// git commit
simpleGit().add([file]).commit(DATE, {'--date': DATE});