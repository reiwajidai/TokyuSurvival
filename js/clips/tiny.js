/**
 * =======================================
 * 剧情片段：各种小故事集散地
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上tiny-前缀
 * =======================================
**/

// Define the Characters
monogatari.characters ({
    'xmm': {
        name: '猫咪',
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



});