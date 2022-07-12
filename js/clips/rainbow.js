/**
 * =======================================
 * 剧情片段：彩虹
 * 
 * 舍友的建筑物理声光热作业要求做一个彩虹
 * 
 * 第一阶段：
 * 舍友说要做这个作业，于是用矿泉水桶做水漏测试初号机
 * （1）选择帮助->触发第二阶段（发生在第二天）
 * （2)围观->舍友第二天放弃
 * 
 * 第二阶段：
 * 舍友说要做成品，借502胶
 * （1）我没有->无事发生
 * （2）借502胶->第二天成功出现彩虹，精神+1
 *
 * 如何整合进主线剧情：
 * （1）在主线剧情中使用命令：jump rainbow
 * （2）在本文件的rainbow-ending中设定支线结束后的回传位置
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上rainbow-前缀
 * =======================================
 **/

/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'rainbow-watch': {
		title: '解锁画廊：彩虹',
		subtitle: '你和室友一起欣赏了彩虹',
		body: `
			<p>这也许是整个游戏中唯一的彩色。</p>
			<p>属性增加：精神值+1</p>
			<img src='./assets/gallery/rainbow small.jpg' width="40">
		`
	},
});


// Define the Characters
monogatari.characters ({

});

monogatari.script ({

	// day1 starts here.
	'rainbow': [
		'show character a normal',
		'a 不要的空水桶我要了。',
		'i 你想干啥？',
		'a 建筑物理声光热有一个作业，要我们寻找彩虹。',
		'i 这边建议彩虹糖呢。',
		'show character a happy',
		'a 原本我想拍午饭甘蓝汤汁的油花的，但这么珍贵的东西我已经收藏起来晚上拌饭了。',
		'i 所以你现在？',
		'show character a normal',
		'a 做滴漏',
		'i 和彩虹有啥关系？',
		'a 不知道，但这不是很coooooool——吗？',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 要不要帮忙?',
				'help': {
					'Text': '帮助',
					'Do': 'jump rainbow-support'
				},
				'Nohelp': {
					'Text': '围观',
					'Do': 'jump rainbow-givingup'
				}
			}
		},
	],

	'rainbow-support': [
		'i 我也来整活!',
		'show character a happy',
		'a 好耶！',
		'show character a normal',
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					story:{
						rainbow_help: true
					}
				});
				return true;
			},
			'Reverse':function(){
				monogatari.storage({
					story:{
						rainbow_help: false
					}
				});
			},
		}},
		'hide character a',
		'jump rainbow-ending'
	],

	'rainbow-givingup': [
		'i 我就来围观围观',
		'hide character a',
		'jump rainbow-ending'
	],

	// day2 starts here.
	'rainbow2': [
		{
			'Conditional': {
				'Condition': function(){
					const {rainbow_help} = monogatari.storage('story');
					return rainbow_help
				},
				'True': 'jump rainbow2-needglue',
				'False': 'jump rainbow2-ending',
			}
		}
	],

	'rainbow2-needglue': [
		'show character a normal',
		'a 借我502一晚上。',
		'i 为啥是一晚上？',
		'a 彩虹装置需要做一夜。',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 要不要借?',
				'help': {
					'Text': '借502胶（物资-1）',
					'Do': 'jump rainbow-glue',
					'Condition': function(){
						const {food} = monogatari.storage('player');
						return (food >= 1);
					}
				},
				'Nohelp': {
					'Text': '我没有',
					'Do': 'jump rainbow-noglue'
				}
			}
		}
	],

	'rainbow-glue': [
		'i 比起502我觉得热熔胶更好，我正好有',
		{'Function':{
			'Apply':function(){
				add_food(-1);
				monogatari.storage({
					story:{
						rainbow_glue: true
					}
				});
				return true;
			},
			'Reverse':function(){
				add_food(1);
				monogatari.storage({
					story:{
						rainbow_glue: false
					}
				});
			},
		}},
		's 物资-1',
		'hide character a',
		'jump rainbow2-ending'
	],

	'rainbow-noglue': [
		'hide character a',
		'jump rainbow2-ending'
	],

	// day3 starts here.
	'rainbow3': [
		{
			'Conditional': {
				'Condition': function(){
					const {rainbow_glue} = monogatari.storage('story');
					return rainbow_glue
				},
				'True': 'jump rainbow3-watch',
				'False': 'jump rainbow3-ending',
			}
		}
	],


	'rainbow3-watch': [
		'show character a happy',
		'a 彩虹出现啦，一起来看吧。',
		'i 好耶！',
		'play sound new_gallery',
		'show message rainbow-watch',
		'gallery unlock rainbow',
		{'Function':{
			'Apply':function(){
				add_sanity(1);
			},
			'Reverse':function(){
				add_sanity(-1);
			},
		}},
		'hide character a',
		'jump rainbow3-ending'
	],
});