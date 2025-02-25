module.exports = {
    name: 'eval',
    aliases:  ['e'],
    type: 'messageCreate',
    code: `
    $eval[$message]
    `
}