const config = require('./config')
const contact_directory = require('./contact_directory')

const client = require('twilio')(config.accountSid, config.authToken)
const contacts = contact_directory

for (const contact in contacts) {
    console.log('contact: ', contacts[contact])
    client.messages.create({
        to: contacts[contact],
        from: '+12015542208',
        body: "It is okay to feel hungry."
    })
    .then((message) => console.log(message, message.sid))
}