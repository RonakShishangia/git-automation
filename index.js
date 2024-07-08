const moment = require('moment');
const simpleGit = require('simple-git');
const jsonfile = require('jsonfile')

file = './data.json';

const commitCode = n => {
    if (n === 0) return simpleGit().push();
    const x = Math.floor(Math.random() * 54) + 1 //random.int(0, 54);
    const y = Math.floor(Math.random() * 6) + 1 //random.int(0, 6); 
    DATE = moment().subtract(1, "y").add(1, "d").add(x, 'w').add(y, 'd');

    // Generate random hours (0-23) and minutes (0-59)
    const randomHours = Math.floor(Math.random() * 24);
    const randomMinutes = Math.floor(Math.random() * 60);

    // Format time with leading zeros (optional)
    const formattedHours = randomHours.toString().padStart(2, '0');
    const formattedMinutes = randomMinutes.toString().padStart(2, '0');
    
    const randomTime = `${formattedHours}:${formattedMinutes}`;
    // Combine date and time (format can be customized)
    const formattedDateTime = DATE + 'T' + randomTime;

    const obj = [{ DATE: formattedDateTime }];
    jsonfile.writeFile(file, obj, (err) => {
        if (err) console.log("file write error: ", err);
        console.log("Data: ", obj);
        // jsonfile.readFile(file, (err, data) => {
        //     console.log("File data:", data);
        // });
        // simpleGit().add('./*').commit(DATE, {'--date': formattedDateTime}).push();
        simpleGit().add('./*').commit(formattedDateTime, {'--date': formattedDateTime}, commitCode.bind(this, --n));
    });
}

commitCode(100);