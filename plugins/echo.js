class Echo {
    static get name() {
        return 'echo';
    }

    constructor(client, bot) {
        this.client = client;
        this.bot = bot;
        this.handleCommand = this.handleCommand.bind(this);
        this.command =
        {
            name: "echo",
            description: "repeats the provided text back to you",
            options: [{
                name: "text",
                description: "the text to be repeated",
                type: 3,
                required: true
            }]
        };
        this.initialize = this.initialize.bind(this);
    }

    enable() {
        this.client.on('ready', () => this.initialize());
    }

    disable() {
        this.client.removeListener('ready', () => this.initialize());
    }

    initialize() {
        this.slashCommands = this.bot._plugins.get('slashCommands');
        this.slashCommands.registerCommand(this.command, this.handleCommand);
    }

    handleCommand(interaction) {
        if (interaction.member.user.client) {
            return;
        }

        const words = interaction.options[0].value;

        interaction.channel.send(words.trim());
    }
}

module.exports = Echo;
