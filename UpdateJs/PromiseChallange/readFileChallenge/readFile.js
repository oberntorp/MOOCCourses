// 1. Get file names (from the files in data.zip) using fs module's readdir. 
// 2. Loop through and print off the name of each file in the dir
// 3. Using readFile (NOT readFileSync), read the files and in the callback, print the filename. Note: They will not be the same as in the previous step. 
// 4. Look at the file contents, count up the total number of the string "gotYa" in each. Print an array that has the count for each file in ascending order. For a little more work, make it an object with a key of file name, value of count instead. 
// 5. As soon as the full contents of any single are read, print them out. Do not wait for any other file to complete.

const fs = require('fs');
const basePath = "./data";
const gotYaCount = [];
fs.readdir(basePath, (err, files) => {
    const filePromises = files.map((fileName) => {
        return new Promise((resolve, reject) => {
            fs.readFile(`${basePath}/${fileName}`, "utf8", (error, data) => {
                if (error) {
                    reject(error);
                }
                resolve({
                    fileName,
                    fileData: data
                });
            });
        });
    });
    Promise.all(filePromises).then((fileObjects) => {
        return fileObjects.map((x) => {
            return {
                [x.fileName]: (x.fileData.match(/gotYa/g) || []).length
            };
        });
    }).then((gotYaCount) => {
        console.log(gotYaCount.sort((a, b) => a - b));
        Promise.race(filePromises).then((fileDoneFirst) => {
            console.log(`File done first ${fileDoneFirst.fileName}`);
        });
    });
});