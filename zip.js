const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const zipName = path.basename(__dirname) + ".zip"

const output = fs.createWriteStream(path.join(__dirname, zipName));
const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});

output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('warning', function (err) {
    if (err.code !== 'ENOENT') {
        throw err;
    }
});

archive.on('error', function (err) {
    throw err;
});

archive.pipe(output);

archive.directory('dist/', false);

archive.finalize().then(() => {
    fs.rename(zipName, "dist/" + zipName, function(err) {
        if ( err ) console.log('ERROR: ' + err);
    })
})

