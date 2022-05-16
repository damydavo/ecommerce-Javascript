const fs = require('fs')

class UsersRepository {
    constructor(filename) {
        if(!filename) throw new Error('you need to create a filename repo');

        this.filename = filename;
        try{
            fs.accessSync(this.filename);

        }catch(err){
            fs.writeFileSync(this.filename, '[]')
        }

    }

    async getAll() {
         
    }
}


const repo = new UsersRepository('users.json');