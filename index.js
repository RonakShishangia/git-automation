const moment = require('moment');
const simpleGit = require('simple-git');
const jsonfile = require('jsonfile')

file = './data.json';

const commitCode = n => {
    if (n === 0) return simpleGit().push();
    const x = Math.floor(Math.random() * 54) + 1 //random.int(0, 54);
    const y = Math.floor(Math.random() * 6) + 1 //random.int(0, 6); 
    DATE = moment().subtract(1, "y").add(1, "d").add(x, 'w').add(y, 'd').format();
    const obj = [{ DATE }];
    jsonfile.writeFile(file, obj, (err) => {
        if (err) console.log("file write error: ", err);
        jsonfile.readFile(file, (err, data) => {
            console.log("File data:", data);
        });
        // simpleGit().add('./*').commit(DATE, {'--date': DATE}).push();
        simpleGit().add('./*').commit(DATE, {'--date': DATE}, commitCode.bind(this, --n));
    });
}

commitCode(100);