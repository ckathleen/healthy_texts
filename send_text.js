const config = require('./config')
const contact_directory = require('./contact_directory')
const inspiring_texts = require('./inspiring_texts')
const client = require('twilio')(config.accountSid, config.authToken)
const date = new Date()

//Every 3 hours between 9am and 9pm, send the corresponding text in inspiring_texts.js
function sendText () {
    for (const contact in contact_directory) {
        client.messages.create({
            to: contact_directory[contact],
            from: '+12015542208',
            body: inspiring_texts[date.getHours()]
        })
        .then((message) => console.log(message, message.sid))
    }
}