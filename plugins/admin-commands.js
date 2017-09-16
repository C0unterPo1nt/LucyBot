class AdminCommands {
    static get name() {
        return 'admin-commands';
    }

    constructor(bot) {
        this.bot = bot;
        this._handleMessage = this._handleMessage.bind(this);
    }

    enable() {
        this.bot.on('message', this._handleMessage);
    }

    disable() {
        this.bot.removeListener('message', this._handleMessage);
    }

    async _handleMessage(message) {
        const words = message.content.trim().split(/\s+/g);
        const command = words.shift();

        if (command === '!mute') {
            const member = message.mentions.members.first();

            if (!member) {
                return;
            }

            await member.setMute(true)
                .catch(error => {
                    message.channel.send(`Error: ${error.message}`);
                });
        }

        if (command === '!unmute') {
            const member = message.mentions.members.first();

            if (!member) {
                return;
            }

            await member.setMute(false)
                .catch(error => {
                    message.channel.send(`Error: ${error.message}`);
                });
        }

        if (command === '!kick') {
            const member = message.mentions.members.first();

            if (!member) {
                return;
            }

            await member.kick().catch(error => message.channel.send(`Error: ${error.message}`));
        }

        if (command === '!ban') {
            const member = message.mentions.members.first();

            if (!member) {
                return;
            }

            await member.ban().catch(error => message.channel.send(`Error: ${error.message}`));
        }

        if (command === '!purge') {
            try {
                const fetched = await message.channel.fetchMessages({ limit: 100 });
                message.channel.bulkDelete(fetched);
            } catch (error) {
                message.channel.send(`Error: ${error.message}`);
            }
        }
    }
}

module.exports = AdminCommands;
