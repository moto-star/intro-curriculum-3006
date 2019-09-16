'use strict';
const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
const lot = lots[Math.floor(Math.random() * lots.length)];
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/うんせい/i, (msg) => {
		const username = msg.message.user.name;
		msg.send(`@${username}さんの今日のおみくじは${lot}`);
	});
};
