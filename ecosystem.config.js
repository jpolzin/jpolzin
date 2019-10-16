module.exports = {
    apps: [{
        name: 'jpolzin',
        script: './bin/www'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-18-220-189-199.us-east-2.compute.amazonaws.com',
            key: '~/.ssh/jpolzin.pem',
            ref: 'origin/master',
            repo: 'git@github.com:jpolzin/joshua-polzin.git',
            path: '/home/ubuntu/jpolzin',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}