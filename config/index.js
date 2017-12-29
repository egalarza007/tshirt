
const config = {
    local: {
        mode: 'local',
        host : 'localhost',
        port: 5000,
        db:"mongodb://localhost:27017", 
        contacts_db:"mongodb://localhost:27017"
    },
    stage: {
        mode: 'stage',
        host : 'localhost',
        port: 3000,
        db:"mongodb://localhost:27017", 
        contacts_db:"mongodb://localhost:27017"

    },
    pro: {
        mode: 'pro',
        host : 'domain',
        port: 80,
        db:"mongodb://localhost:27017", 
        contacts_db:"mongodb://localhost:27017"

    }
}
module.exports = function(mode) {
        let envir = process.env.ENVIR
        let m = envir ?  envir : process.argv[2]
     return config[mode || m] || config.local;
}


