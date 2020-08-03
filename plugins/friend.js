class Friend {
    static get name() {
        return 'friend';
    }
    
    constructor(bot, botOp) {
        this.bot = bot;
        this._handleMessage = this._handleMessage.bind(this);
        this.friendString = ["God you're so sexy and cool", "Hot take, bro", "You're such a leo", "Real goblin hours, huh?", "Shut up, you fckin kinnie", "I'm glad we're friends", "Your brain is wrinkly and your meat is huge.", "Hate that", "You're just saying that for discord clout", "Let me say slurs, I wanna be a real gamer.", "Have you seen the show where the guy turns himself into a pickle? It's hilarious!", "Moshimoshi" , "I'm thinkin bout melone...", "Ỳ͖̱͕̗̟̝͌̍̔ͯͪ̽o̷̯̩̫͎ͪ̓ͧͩṵ̹̼̟̪r̗̟̰̅̌̒̕ͅ ̱͇̙ͯr͇̗̝̜̝̻̗͐ͯ͛ͨ̓ȩ͚̏̒̑̎̅̍ạ͈̦̲̪̍̇̓̽l̟̮̬͕̠̓͂͒ͦî̺̠̪̞͔̥ͤͥͨ̒̌ͬͅt͓̙͎̹̣̎͜y͖̞̫͓̪̲͑͛ͭ̽ͣ ̪̮̦̫͖̺̬ͪ̍į͓̝̦̖̤ͣ́̈́̅̏ͅś̙͕͇͍͖̫͑̔͗͂̊ͅ ͕̥̳̟̘̈́͛̃ͦ̃͂ͧ̕s̟̗͖̗ͣǫ͍͇͕̥̲̭ ̉͛́̄͑̏͠v̱̗͙̭̮̒̓͆̌̿͆͂́ḙ̰̽̋͡r̵̩̜̫͕̠ͪ́̌͆ͮy̙͉̹͎̆̾ͩ̃͆̕ ̲̹̩̠̇͒f̑̉̓̔̄͏̻ṟ̶̣̓͊ͦ̓̾ͣá͙ͯg̳͍̱̮̻̊i͕̝ͣͯ̚l͎͎̻̾̒ͩ̎ͩ͝e̛͚͈̫̤͙ͣ̇", "110100100", "Fate/Stay Night: At Least Two Bladeworks", "Sounds like something Gilgamesh would say...", "Check out my Soundwave Cosplay", ":0", "https://open.spotify.com/show/1413PDeEXovGSmD0n1MlAg?si=B1qzeEd9Q--xe_79sIr3vg"];
    }
    
    enable() {
        this.bot.on('message', this._handleMessage);
    }
    
    disable() {
        this.bot.removeListener('message', this._handleMessage);
    }
    
    generateFriendMessage(message) {
        let max = this.friendString.length;
        message.channel.send(this.friendString[Math.floor(Math.random() * max)]);
    }
    
    _handleMessage(message){
        if (message.author.tag != "allthesehatchets#6457"){
            return;
        }
        else{
            this.generateFriendMessage(message);
        }
    }   
}

module.exports = Friend;