/* global monogatari */


/**
 * =======================================
 * 
 * Monogatari框架的基础设定
 * 
 * =======================================
 **/


// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Day-start': {
		title: '第{{player.day}}天',
		subtitle: '看看你的状态和物品如何',
		body: `
			<p>健康值={{player.health}} 精神值={{player.sanity}}</p>
			<p>物资x{{player.food}}</p>
		`
	},
	'Day2-eat': {
		title: '进食的妙用',
		subtitle: '每天晚上，玩家可通过消耗“物资”点数来完成进食。',
		body: `
			<p>在健康值小于5时，消耗1点物资可回复1点健康。</p>
			<p>在健康值等于5时，消耗2点物资可回复1点精神。</p>
			<p>每天晚上通过进食最多恢复1点属性。</p>
		`
	},
	'Day6-sanity': {
		title: '“足不出户”政策开始',
		subtitle: '作为出现过阳性病例的楼宇，现进入更严格的封控状态。',
		body: `
			<p>在“足不出户”状态期间，由于憋得慌，每天晚上精神值会-1。</p>
			<p>解除封控状态的时间并不清楚。</p>
		`
	},
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: '欢迎',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});

// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'gate': 'gate.png',
	'street': 'street.png',
	'dorm': 'dorm.png',
	'laptop': 'laptop.png',
});


// Define the Characters
monogatari.characters ({
	'i': {
		name: '{{player.name}}',
		color: 'rgb(234, 131, 0)',
	},
	's': {
		name: '',
		color: '#000000',
	},
	//整活人设：相对情绪化，容易被带动，精力充沛
	'a': {
		name: '冈田 茂（室友）',
		color: '#ff6666',
		directory:'mateA',
		sprites:{
			normal:'normal.png',
			angry:'angry.png',
			sad:'sad.png',
			happy:'happy.png',
		},
		expressions:{
			normal:'expressions/normal.png',
			angry:'expressions/angry.png',
			sad:'expressions/sad.png',
			happy:'expressions/happy.png',
		},
		// default_expression: 'normal',
	},
	//2G人设：逃避，放弃思考，整日睡觉
	'b': {
		name: '小野 裕太（室友）',
		color: '#ff6666',
		directory:'mateB',
		sprites:{
			normal:'normal.png'
		}
	},
	'p': {
		name: '手机',
		color: '#66ccff',
	},
});


/**
 * =======================================
 * 
 * 各种自定义函数的集散地
 * 
 * =======================================
 **/


// 每天可以用1点食物拿来回复1点健康值
// 健康值回满之后，每天可以用2点食物拿来回复1点精神值
monogatari.$('consume_food', {
	'Choice': {
		'Dialog': 'i 一天结束了，你选择……',
		'sleep': {
			'Text': '直接睡觉',
			'Do': {'Function':{
				'Apply':function(){
					add_health(0);
				},
				'Reverse':function(){
					add_health(0);
				},
			}},
		},
		'hunger': {
			'Text': '吃点零食填填肚子（物资-1，健康+1）',
			'Do': {'Function':{
				'Apply':function(){
					add_food(-1);
                    add_health(+1);
				},
				'Reverse':function(){
					add_food(+1);
                    add_health(-1);
				},
			}},
			'Condition': function(){
				const {food} = monogatari.storage('player');
                const {health} = monogatari.storage('player');
				return (food >= 1)&&(health<5);
			}
		},
        'enjoy': {
			'Text': '吃点零食开心开心（物资-2，精神+1）',
			'Do': {'Function':{
				'Apply':function(){
					add_food(-2);
                    add_sanity(+1);
				},
				'Reverse':function(){
					add_food(+2);
                    add_sanity(-1);
				},
			}},
			'Condition': function(){
				const {food} = monogatari.storage('player');
                const {health} = monogatari.storage('player');
				return (food > 1)&&(health>=5);
			}
		}
	}
});

// 判断结局
monogatari.$('ending_trigger', {
    'Conditional': {
        'Condition': function(){
            const {sanity} = monogatari.storage('player');
            const {health} = monogatari.storage('player');
            if(sanity <= 0) {
                return "End pdf";
            } else if (health <= 0) {
                return "End sick";
            } else {
                return 'Other';
            }
        },
        'End pdf': 'jump ending-pdf',
        'End sick': 'jump ending-positive',
        'Other': 'next',
    }
});

// 进入下一天
monogatari.$('next_day', {
	'Function':{
        'Apply':function(){
            const {day} = monogatari.storage('player');
            monogatari.storage({
                player:{
                    day: day + 1
                }
            });
            //monogatari.run("show canvas stats");
            // 不用以上语句，以上语句在回滚的时候会报错，而且是uncaught error
            monogatari._actions[0]._configuration.objects.stats.props.drawText();
        },
        'Reverse':function(){
            const {day} = monogatari.storage('player');
            monogatari.storage({
                player:{
                    day: day - 1
                }
            });
            monogatari._actions[0]._configuration.objects.stats.props.drawText();
        },
	}
});


/**
 * =======================================
 * 
 * 故事线
 * 
 * =======================================
 **/


monogatari.script ({
	// The game starts here.
	'Start': [
		'jump Day0'
	],

	//==========================Day 0===============================
	'Day0': [
		'jump Day0-begin',
	],
	'Day0-ending': [
		'jump Day1'
	],

	//==========================Day 1===============================
	'Day1': [
		'jump Day1-begin',
	],
	'Day1-ending': [
		'i （今天就到这里吧）',
		'$ next_day',
		'jump Day2'
	],

	//==========================Day 2===============================
	'Day2': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'i 又是一觉睡到中午了！下午干啥呢？',
		'jump Day2-1'
	],
	'Day2-ending': [
		'show message Day2-eat',
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day3'
	],
	'Day2-1': [
		'jump starve'
	],
	'Day2-2': [
		'jump rainbow'
	],
	'Day2-3': [
		'jump Day2-4'
	],
	'Day2-4': [
		'jump Day2-ending'
	],

	//==========================Day 3===============================
	'Day3': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day3-1'
	
	],
	'Day3-ending': [
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day4'
	],
	'Day3-1': [
		'jump bureau'
	],
	'Day3-2': [
		'jump starve2'
	],
	'Day3-3': [
		'jump rainbow2'
	],
	'Day3-4': [
		'jump Day3-ending'
	],

	//==========================Day 4===============================
	'Day4': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day4-1'
	],
	'Day4-ending': [
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day5'
	],
	'Day4-1': [
		'jump bureau2'
	],
	'Day4-2': [
		'jump starve3'
	],
	'Day4-3': [
		'jump rainbow3'
	],
	'Day4-4': [
		'jump Day4-ending'
	],

	//==========================Day 5===============================
	'Day5': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day5-1'
	],
	'Day5-ending': [
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day6'
	],
	'Day5-1': [
		'jump bureau3'
	],
	'Day5-2': [
		'jump exodus'
	],
	'Day5-3': [
		'jump balcony'
	],
	'Day5-4': [
		'jump Day5-ending'
	],

	//==========================Day 6===============================
	'Day6': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day6-1'
	],
	'Day6-ending': [
		'show message Day6-sanity',
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		
		'jump Day7'
	],
	'Day6-1': [
		'jump bureau4'
	],
	'Day6-2': [
		'jump exodus2'
	],
	'Day6-3': [
		'jump Day6-4'
	],
	'Day6-4': [
		'jump Day6-ending'
	],


	// ========================== Day 7 ===============================
	'Day7': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day7-1'
	],
	'Day7-ending': [	
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day8'
	],
	'Day7-1': [
		'jump bureau5'
	],
	'Day7-2': [
		'jump exodus3'
	],
	'Day7-3': [
		'jump starve4'
	],
	'Day7-4': [
		'jump Day7-ending'
	],

	// ========================== Day 8 ===============================
	'Day8': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day8-1'
	],
	'Day8-ending': [
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day9'
	],
	'Day8-1': [
		'jump Day8-2'
	],
	'Day8-2': [
		'jump exodus4'
	],
	'Day8-3': [
		'jump bureau6'
	],
	'Day8-4': [
		'jump balcony2'
	],
	'Day8-5': [
		'jump Day8-ending'
	],


    // ========================== Day 9 ===============================
	'Day9': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day9-1'
	],
	'Day9-ending': [
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day10'
	],
	'Day9-1': [
		'jump Day9-2'
	],
	'Day9-2': [
		'jump stripe'
	],
	'Day9-3': [
		'jump balcony3'
	],
	'Day9-4': [
		'jump Day9-ending'
	],

	// ========================== Day 10 ===============================
	'Day10': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day10-1'
	],
	'Day10-ending': [
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day11'
	],
	'Day10-1': [
		'jump Day10-2'
	],
	'Day10-2': [
		'jump pork'
	],
	'Day10-3': [
		'jump stripe2'
	],
	'Day10-4': [
		'jump bureau7'
	],
	'Day10-5': [
		'jump Day10-ending'
	],

	// ========================== Day 11 ===============================
	'Day11': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day11-1'
	],
	'Day11-ending': [
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day12'
	],
	'Day11-1': [
		'jump pork2'
	],
	'Day11-2': [
		'jump stripe3'
	],
	'Day11-3': [
		'jump balcony4'
	],
	'Day11-4': [
		'jump Day11-ending'
	],


	// ========================== Day 12 ===============================
	'Day12': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day12-1'
	],
	'Day12-ending': [
		's 到了晚上，你惊喜地发现，楼宇已经解除封控啦！',
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'end'
	],
	'Day12-1': [
		'jump pork3'
	],
	'Day12-2': [
		'jump stripe4'
	],
	'Day12-3': [
		'jump Day12-4'
	],
	'Day12-4': [
		'jump Day12-ending'
	],
	
});