import {CommandInteraction, SlashCommandBuilder} from "discord.js";

export function isCommand(obj: object): obj is ICommand {
	return 'data' in obj && 'run' in obj;
}

export interface ICommand {
	data: Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">;
	run: (interaction: CommandInteraction) => Promise<void>;
}