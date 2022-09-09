/**
 * =======================================
 * 剧情片段：各种小故事集散地
 * 
 * =======================================
**/

// Define the Characters
monogatari.characters ({
    'xmm': {
        name: '猫咪',
        color: '#00cc33',
    },
	'suz': {
        name: '铃木 未未子（同学）',
        color: '#00cc33',
    },

});

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'socialmedia-sasaki': {
		title: '推特动态',
		subtitle: '来自: 佐佐木美智子 凌晨00:30',
		body: `
			<p>艰难时期，该如何平心静气？</p>
			<p>（配图：佐佐木老师手抄的《金刚经》）</p>
		`
	},
	'socialmedia-mizutani': {
		title: '推特动态',
		subtitle: '来自: 水谷虎 晚上23:30',
		body: `
			<p>封校也不能忘记锻炼身体！</p>
			<p>（配图：水谷虎老师的哑铃和瑜伽垫）</p>
		`
	},
	'gallery-dice': {
		title: '解锁稀有画廊：运气王',
		subtitle: '',
		body: `
			<p>你竟然在游戏的所有随机事件中，都抽到了好结果！</p>
			<p>你太强了。</p>
		`
	},
});

monogatari.script ({

	'tiny-cat': [
		'show scene #000000 with fadeIn',
        's 今天楼层放风的时候，你在楼下偶遇了一只可爱的小猫咪',
		'play sound meow',
        'xmm 喵~',
        'i 哇，可爱，想撸一撸猫~',
        'a 不过这是野猫，小心过两天感染病毒哦。',
		'play sound choices',
        {
			'Choice': {
				'Dialog': 'i 要不要撸猫？',
				'yes': {
					'Text': '谁又能抵御喵星人的诱惑呢？（精神+1）',
					'Do': 'jump tiny-cat-play'
				},
				'No': {
					'Text': '就远远地看看吧',
					'Do': 'jump tiny-cat-not-play'
				}
			}
		},
    ],
    'tiny-cat-not-play': [
        'i 算了，就看看吧，互不打扰',
		'show scene dorm with fadeIn',
        's 你结束放风，回到了寝室',
		'jump tiny-cat-ending'
	],
	'tiny-cat-play': [
		'i 猫者，不rua不行！',
		'show scene dorm with fadeIn',
		'play sound meow',
		{'Function':{
			'Apply':function(){
				add_sanity(1);
			},
			'Reverse':function(){
				add_sanity(-1);
			},
		}},
		's 你跟小猫咪玩耍了很久，感觉心情好多了。结束放风后，你回到了寝室。（精神+1）',
		{
			'Conditional': {
				'Condition': function(){
					const result = Math.random();
					if(result <= 0.4) {
						return "covid";
					} else {
						return 'safe';
					}
				},
				'covid': 'jump tiny-cat-covid',
				'safe': 'jump tiny-cat-safe',
			}
		},
	],
	'tiny-cat-covid': [
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					story:{ cat_positive: true }
				});
			},
			'Reverse':function(){
				monogatari.storage({
					story:{ cat_positive: false }
				});
			},
		}},
		'a 应该不会因为撸猫而被感染病毒吧哈哈哈？',
		'jump tiny-cat-ending'
	],
	'tiny-cat-safe': [
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					story:{ cat_escape: true }
				});
			},
			'Reverse':function(){
				monogatari.storage({
					story:{ cat_escape: false }
				});
			},
		}},
		'jump tiny-cat-ending'
	],


	'tiny-cat2': [
		{
			'Conditional': {
				'Condition': function(){
					const {cat_positive} = monogatari.storage('story');
					return cat_positive
				},
				'False': 'jump test-dice-gallery',
				'True': 'jump tiny-cat2-positive',
			},
		},
	],
	'test-dice-gallery': [
		{
			'Conditional': {
				'Condition': function(){
					const {monopoly_bankrupt_escape} = monogatari.storage('story');
					const {starve_escape} = monogatari.storage('story');
					const {patrol_blame_escape} = monogatari.storage('story');
					const {cat_escape} = monogatari.storage('story');
					return patrol_blame_escape & starve_escape & monopoly_bankrupt_escape & cat_escape
				},
				'0': 'jump tiny-cat2-ending',
				'1': 'next',
			},
		},
		's 距离你撸猫过去了两天，你似乎并没有被病毒感染，你的运气实在是太好了',
		'show message gallery-dice',
		'gallery unlock dice',
		'jump tiny-cat2-ending',
	],
	'tiny-cat2-positive': [
		{'Function':{
			'Apply':function(){
				add_health(-8);
			},
			'Reverse':function(){
				add_health(8);
			},
		}},
		'jump ending-positive'
	],

	'mahjong': [
		'show scene #000000 with fadeIn',
		'stop music normal',
		'play music crowd loop',
        's 今天晚上，平日冷清的校园草坪上突然变得无比热闹，你从来没有见过这么多人充分地利用所有的公共空间',
		's 那种景观设计效果图上才有的氛围，突然就在现实世界实现了',
		's 人们凑在一起搓麻将，在草坪上野餐，打羽毛球，滑滑板。这时，你看到你的同学在向你招手——',
        'suz {{player.name}}来吗？一起来搓麻将呀！',
		'play sound choices',
        {
			'Choice': {
				'Dialog': 'i 要不要搓麻将？',
				'yes': {
					'Text': '让我这个雀圣出场吧！',
					'Do': 'jump mahjong-play'
				},
				'No': {
					'Text': '不了，下次吧',
					'Do': 'next'
				}
			}
		},
		'show scene dorm with fadeIn',
		's 你婉言谢绝了同学的邀请，在楼下漫步一会儿后，你回到了寝室。',
		'stop music crowd',
		'play music normal loop',
		'jump mahjong-ending'
    ],
	'mahjong-play': [
		'i 来来来！',
		{'Function':{
			'Apply':function(){
				add_sanity(1);
			},
			'Reverse':function(){
				add_sanity(-1);
			},
		}},
        's 你坐下之后才意识到，大家来自五湖四海，麻将的规则根本不一样。不过没关系，大家打得都很开心，直到老师开始赶学生回寝室。（精神+1）',
		'show scene dorm with fadeIn',
		'stop music crowd',
		'play music normal loop',
		's 你开心地回到了寝室。',
		'jump mahjong-ending'
    ],

	'brownie': [
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'False': 'jump brownie-ending',
				'True': 'next',
			},
		},
		's 一大早，你的室友因为急性肠胃炎，破例离开寝室，去校医院看病了。回来的时候，带回来一块学校面包房的巧克力蛋糕。',
		's 你和室友不禁将蛋糕奉为稀世珍宝，一番拍照之后，才小心翼翼、依依不舍地分三次吃完。',
		{'Function':{
			'Apply':function(){
				add_sanity(1);
			},
			'Reverse':function(){
				add_sanity(-1);
			},
		}},
		's 尽管如此，糖的魔力依然让你激动万分（精神+1）',
		'jump brownie-ending'
	],

	'sakura': [
        's 今天，你在玩手机的时候，无意间翻到去年樱花盛开之时，你跟好友共聚于绯红之下，漫步于春色之中的照片。你不禁对室友说道：',
		'i 冈田桑，故乡的sakura又开了。',
		'a 可惜，我们届不到了。',
		's 你突然觉得世事无常，如果不能好好珍惜当下，也许到了第二天，你所习以为常的美好也许就再也回不来了。',
		'i 唉……不知道今年的樱花又盛开了多少。人面不知何处去，樱花依旧笑春风啊……',
		'jump sakura-ending'
	],

	'monopoly': [
		'a {{player.name}}，你看我翻到了什么？大富翁！要不要把隔壁寝室的同学一起叫来玩？',
		'play sound choices',
        {
			'Choice': {
				'Dialog': 'i 要不要玩大富翁？',
				'yes': {
					'Text': '来来来！',
					'Do': 'jump monopoly-play'
				},
				'No': {
					'Text': '不了不了',
					'Do': 'next'
				}
			}
		},
		's 你婉言谢绝了冈田的邀请。',
		'jump monopoly-ending'
	],
	'monopoly-play': [
		'i 好耶！',
        's 这天，你们在一张小小的桌面上厮杀了两个多小时，感受了人生的大起大落，贫富的急剧分化，资本的无情铁手',
		{
			'Conditional': {
				'Condition': function(){
					const result = Math.random();
					if(result <= 0.6) {
						return "win";
					} else {
						return 'lose';
					}
				},
				'win': 'jump monopoly-win',
				'lose': 'jump monopoly-lose',
			}
		},
    ],
	'monopoly-win': [
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					story:{ monopoly_bankrupt_escape: true }
				});
				add_sanity(1);
			},
			'Reverse':function(){
				monogatari.storage({
					story:{ monopoly_bankrupt_escape: false }
				});
				add_sanity(-1);
			},
		}},
		's 幸运的是，由于你一开始抢到了高价值地块，你最终不断积累财富，成为了游戏的赢家！（精神+1）',
		'jump monopoly-ending'
	],
	'monopoly-lose': [
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		's 不幸的是，虽然你一开始抢到了高价值地块，但你中途现金流断裂，在游戏遗憾破产败北。你有些沮丧。（精神-1）',
		'i 真不走运，下次有机会再玩吧！',
		'jump monopoly-ending'
	],

	'socialmedia-sasaki': [
		'play sound new_message',
		'p 叮咚！',
		's 你在玩手机时，无意间刷到了佐佐木老师在Twitter上的动态',
		'play sound notification',
		'show message socialmedia-sasaki',
		'jump socialmedia-sasaki-ending',
	],
	'socialmedia-mizutani': [
		'play sound new_message',
		'p 叮咚！',
		's 你在玩手机时，凑巧刷到了水谷老师在Twitter上的动态',
		'play sound notification',
		'show message socialmedia-mizutani',
		'jump socialmedia-mizutani-ending',
	],


	'swap':[
		's 你听说最近由于物资缺乏，同学们之间在进行以物易物的原始活动。',
		's 你觉得这是一个换到自己想要物资的好机会，只是说讨价还价、寻找交易的过程非常费心费力。',
		{
			'Choice': {
				'Dialog': 's 你愿意参与以物易物活动吗？',
				'e1': {
					'Text': '参加（精神-2，物资+2）',
					'Do': 'jump swap-join'
				},
				'e2': {
					'Text': '算了',
					'Do': 'jump swap-ending',
				},
			}
		},
	],
	'swap-join':[
		{'Function':{
			'Apply':function(){
				add_food(2);
			},
			'Reverse':function(){
				add_food(-2);
			},
		}},
		's 经过漫长的交易，你用一块橡皮换到了一袋橘子！（物资+2）',
        {'Function':{
			'Apply':function(){
				add_sanity(-2);
			},
			'Reverse':function(){
				add_sanity(2);
			},
		}},
        's 但是你也砍价砍到崩溃（精神-2）',
        'jump swap-ending'
    ],

	'last-supper': [
		's 明天早上就要走了，你和舍友早早地收拾好东西，把桌上的杂物塞进了柜子里。',
		's 看着生活了数月的宿舍一瞬间空旷了许多，你们发出了一声慨叹。',
		'i 要走了啊',
		'a 怎么啦，想作诗一首吗？',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'a 怎么啦，想作诗一首吗？',
				'yes': {
					'Text': '不想',
					'Do': 'jump last-supper-ending',
				},
				'No': {
					'Text': '“65472”',
					'Do': 'next',
					'Condition': function(){
						const {school} = monogatari.storage('player');
						return school <= 1;
					}
				}
			}
		},
		'i 65472',
		'a 好诗',
		's 你们相视一笑，舍友忽然想到了什么，翻箱倒柜找出了两罐啤酒。',
		'i 你怎么会有这种好东西？',
		'a 封校前喝剩下的，就算是吃了猪肉都没舍得拿它出来洗胃，就是为了今天',
		'i 毅力真强啊',
		'a 那可不，那次有人开十罐可乐我都没舍得拿出来',
		'i 幸好我不知道，不然早把你卖了',
		's 你们打开易拉罐，啜饮着涌出的泡沫，品味着这来之不易的美酒',

		'a 我忽然想到一件事',
		'i 嗯？',
		'a 我回想了一下这么多天的经历，现在看来它们都遥远而淡薄，因为比起回家，这一切似乎都变得可以忍受了，所以我们痛苦的到底是什么？',
		'i 或许是失去自由吧。',
		'a 自由？',
		'i 不仅仅是身体上的自由，还有选择的自由，以及拒绝的自由。',
		'a 确实，被关在宿舍里，我们只能接受别人给我们准备的东西，就算准备的过程不合理，我们拿到的东西也并不好，也只能接受，不能说不，也无法改变。',
		'i 嗯',
		'a 所以，有什么办法吗？',
		'i 我们要做的便是反抗，反抗专制的自由，自由的专制。',
		'a 听起来……很玄妙。',
		'i 要不要听爸爸解释？',
		'a 我才是……算了，您请。',
		'i 人都是不自由的，但意识到了不自由，便有了自由。无法迈出宿舍、混乱的指令、老师的官僚主义、后勤阿姨的痛苦……这些都是桎梏，但好在，我们意识到了桎梏的存在，因此我们才会反抗，为了我们的自由。',
		's 舍友喝了口啤酒',
		'i 无论是65472还是猪肉虫，从抗议超市购买数额到匀物资给阿姨，究其根本都是我们看到了问题，尝试改变而发起的战斗，正是这些支撑着我们，让我们维持住了自身，没有在漫长的封校中沉沦。',
		'i 这便是我们的自由。',
		'a 而现在能够离开，正是我们的战斗所争取到的自由，尽管并不完美',
		'i 尽管并不完美',
		'a …………',
		'i …………',
		'a ……',
		'i ……',
		's 宿舍里没有人说话，你和舍友碰杯，慢慢地喝下了酒',
		'i 敬自由',
		'a 敬自由',
		'jump last-supper-ending'
	],

});