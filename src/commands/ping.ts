import {ICommand} from "../command";
import {CommandInteraction, SlashCommandBuilder} from "discord.js";

const ping: ICommand = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with pong!'),
	async run(interaction: CommandInteraction): Promise<void> {
		await interaction.reply(`${interaction.client.ws.ping}ms`);
	}
}

export default ping;