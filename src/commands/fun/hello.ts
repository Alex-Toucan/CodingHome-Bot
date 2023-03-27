import {ICommand} from "../../command";
import {CommandInteraction, SlashCommandBuilder} from "discord.js";

const hello: ICommand = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Says hello back!'),
	async run(interaction: CommandInteraction): Promise<void> {
		await interaction.reply(`Hello, ${interaction.user.toString()}!`);
	}
}

export default hello;