const crypto = require('crypto');
const CreateFileHash= (Path)=>{
    return new Promise((resolve, reject) =>{
        const hash = crypto.createHash('sha256');
        const stream = fs.createReadStream(Path);

        stream.on('data',(chunk)=>{
            hash.update(chunk);
        });
        stream.on('end',()=>{resolve(hash.digest('hex'));});
        stream.on('error',(err)=>{reject(err);});

    })
}
module.exports = CreateFileHash;