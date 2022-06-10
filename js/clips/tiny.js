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
        name: '铃木 マヨ子（同学）',
        color: '#00cc33',
    },

});

monogatari.script ({

	'tiny-cat': [
		'show scene #000000 with fadeIn',
        's 今天楼层放风的时候，你在楼下偶遇了一只可爱的小猫咪',
        'xmm 喵~',
        'i 哇，可爱，想撸一撸猫~',
        'a 不过这是野猫哦。',
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
        's 你跟小猫咪玩耍了很久，感觉心情好多了。结束放风后，你回到了寝室。（精神+1）',
		{'Function':{
			'Apply':function(){
				add_sanity(1);
			},
			'Reverse':function(){
				add_sanity(-1);
			},
		}},
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
				'False': 'jump tiny-cat2-ending',
				'True': 'jump tiny-cat2-positive',
			},
		},
	],
	'tiny-cat2-positive': [
		's 不知道为什么，今天晚上的你突然开始发烧、冒冷汗。你赶紧测了测抗原，突然发现结果是两条杠。',
		{'Function':{
			'Apply':function(){
				add_health(-5);
			},
			'Reverse':function(){
				add_health(5);
			},
		}},
		'i 啊这？！',
		'a 啊你…………怎么回事！',
		's 向学校报告后，你马上被重新测试了核酸结果，核酸结果很快就会出。',
		'jump tiny-cat2-ending'
	],

	'mahjong': [
		'show scene #000000 with fadeIn',
        's 今天晚上，平日冷清的校园草坪上突然变得无比热闹，你从来没有见过这么多人充分地利用所有的公共空间',
		's 那种景观设计效果图上才有的氛围，突然就在现实世界实现了',
		's 人们凑在一起搓麻将，在草坪上野餐，打羽毛球，滑滑板。这时，你看到你的同学在向你招手——',
        'suz {{player.name}}来吗？一起来搓麻将呀！',
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
		'jump mahjong-ending'
    ],
	'mahjong-play': [
		'i 来来来！',
        's 你坐下之后才意识到，大家来自五湖四海，麻将的规则根本不一样。不过没关系，大家打得都很开心，直到老师开始赶学生回寝室。（精神+1）',
        {'Function':{
			'Apply':function(){
				add_sanity(1);
			},
			'Reverse':function(){
				add_sanity(-1);
			},
		}},
		'show scene dorm with fadeIn',
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
				'True': 'jump brownie-ending',
				'False': 'next',
			},
		},
		's 一大早，你的室友因为急性肠胃炎，破例离开寝室，去校医院看病了。回来的时候，带回来一块学校面包房的巧克力蛋糕。',
		's 你和室友不禁将蛋糕奉为稀世珍宝，一番拍照之后，才小心翼翼、依依不舍地分三次吃完。',
		's 尽管如此，糖的魔力依然让你激动万分（精神+1）',
		{'Function':{
			'Apply':function(){
				add_sanity(1);
			},
			'Reverse':function(){
				add_sanity(-1);
			},
		}},
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
		's 幸运的是，由于你一开始抢到了高价值地块，你最终不断积累财富，成为了游戏的赢家！（精神+1）',
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
		'jump monopoly-ending'
	],
	'monopoly-lose': [
		's 不幸的是，虽然你一开始抢到了高价值地块，但你中途现金流断裂，在游戏遗憾破产败北。',
		'i 真不走运，下次有机会再玩吧！',
		'jump monopoly-ending'
	],

});