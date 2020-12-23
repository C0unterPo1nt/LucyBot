class SlashCommands {
    static get name() {
        return 'slashCommands';
    }

    constructor(client, bot) {
        this.client = client;
        this.bot = bot;
        this.registerCommand = this.registerCommand.bind(this);
        this.handleCommand = this.registerCommand.bind(this);
        this.responses = new Map();
    }

    registerCommand(command, response) {
        this.client.interactions.createCommand(command, "391007986321063946").catch(console.error);
        this.responses.set(command.name, response);
    }

    enable() {
        this.client.on('interactionCreate', (e) => this.handleCommand(e));
    }

    handleCommand(interaction) {
        this.responses.get(interaction.name)(interaction);
    }
}

module.exports = SlashCommands;
