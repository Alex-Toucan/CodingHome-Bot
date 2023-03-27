import * as dotenv from 'dotenv';

dotenv.config();

import * as path from 'path';

import {Client, Events, GatewayIntentBits} from 'discord.js';
import {CommandManager} from "./commandManager";

const client = new Client({intents: [GatewayIntentBits.Guilds]});

const cmdManager: CommandManager = new CommandManager(path.join(__dirname, 'commands'));

client.once(Events.ClientReady, () => console.log(`Logged in as ${client.user.tag}`));

client.login(process.env.TOKEN);