const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
const { join } = require('path');
require('dotenv').config();

const variables = require("./src/handler/variables.js");
   
// Inicialização do Cliente
    const client = new ForgeClient({
        intents: [
        "GuildMessages",
        "Guilds",
        "MessageContent"
    ],
        events: [
        "ready",
        "error",
        "messageCreate"
    ], 
        prefixes: [
        "r.",
        "R."
    ], 
        extensions: [
        new ForgeDB()
    ]
})

ForgeDB.variables(variables)
   
// Pasta dos comandos comuns por texto e slash commands
   client.commands.load("./src/commands/common")
   client.applicationCommands.load("./src/commands/slash")
   
// Token do bot no arquivo .env
   client.login(process.env.BOT_TOKEN);