/**
 * =======================================
 * 主线：返校当日
 * 
 *
 * 如何整合进主线剧情：
 * （1）在主线剧情中使用命令：jump Day0
 * （2）在本文件的Day0-ending中设定支线结束后的回传位置
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上Day0-前缀
 * =======================================
 **/

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Day0-badge': {
		title: '解锁：东急校徽',
		subtitle: '辅导员送了你一个校徽。',
		body: `
			<p>除了可以在主菜单的“画廊”里查看之外，这个玩意儿没有任何功能。</p>
			<p>但缺少它的话，我想没人会承认我是个东急学子。</p>
			<img src='./assets/gallery/badge.png' width="40">
		`
	},
});

monogatari.script ({
	// The game starts here.
	'Day0-begin': [
		's 我是谁？',
		's 我在哪儿？',
		's 我仿佛做了一个梦……',
		'show scene gate with fadeIn duration 3s',
		'show canvas stats',
		'$ set_stats_size',
		{'Function':{
			'Apply': function(){
				add_food(0);
			},
			'Reverse': function(){
				add_food(0);
			},
		}},
		'show canvas greys',
		'fdy 同学，同学，别走神了！',
		'fdy 欢迎回到东急大学，首先，同学你叫什么名字呢？',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 同学你叫什么名字呢？',
				'phone': {
					'Text': '我叫……',
					'Do': 'jump Day0-enter-name'
				},
				'out': {
					'Text': '就叫我寄寄吧',
					'Do': 'jump Day0-not-enter-name'
				},
				'silence': {
					'Text': '保持沉默',
					'Do': 'jump Day0-silence',
					'Condition': function(){
						const r = check_gallery('badge');
						return r;
					}
				},
			}
		},
	],
	'Day0-enter-name':[
		{
			'Input': {
				'Text': '你叫甚么名字?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': '不说？不说你怎么报到？'
			}
		},
		{
			'Conditional': {
				'Condition': function(){
                    let {name} = monogatari.storage('player');
					const mySet = new Set(['虚渊流子', '伊东阳一', '平田一郎', '测试员']);
					if(mySet.has(name)) {
                        return "tester";
                    }  else {
                        return 'Other';
                    }
				},
				'tester': 'jump Day0-tester',
                'Other': 'jump Day0-instruction',
			}
		},
	],
	'Day0-silence':[
		'fdy 同学，同学，你咋不说话啊，怎么了？',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'fdy 同学，同学，你咋不说话啊，怎么了？',
				'give-name': {
					'Text': '哦哦不好意思，我叫……',
					'Do': 'jump Day0-enter-name'
				},
				'weird': {
					'Text': '我觉得不太对劲……我要回家',
					'Do': 'jump Day0-weird',
				},
			}
		},
	],
	'Day0-weird':[
        'i 老师不好意思，我觉得有点不舒服，我要回家。',
		's 说罢你头也不回地转身就走',
		'fdy 欸欸欸？同学，你怎么回事？同学！',
        'jump ending-fast',
    ],
	'Day0-not-enter-name':[
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					player:{
						name: '寄寄'
					}
				});
				return true;
			},
			'Reverse':function(){
				monogatari.storage({
					player:{
						name: ''
					}
				});
			},
		}},
		'jump Day0-instruction'
	],

	'Day0-instruction':[
		'fdy 好的{{player.name}}同学，报到工作已经完成',
		'fdy 我先提醒一下这学期的注意事项哦：',
		'fdy 右上角有一个存档按钮，可以对这学期的生活进行存档',
		'fdy 另外，你有一些个人属性和物品数量，你看一下',
		'play sound new_message',
		'show message Day-start',
		'fdy 健康值归零之后可解锁“凉了”结局，精神值归零之后可解锁“破大防”结局……',
		'fdy 在第11天会有考试，当天学业值小于1会解锁“挂科”结局。此外还有很多其他结局可以探索哦~',
		'fdy 物资则是游戏里的消耗品，可以用来推进剧情或者恢复个人属性~',
		'fdy 最后，你可以在游戏过程中解锁各种“画廊”，解锁后的画廊不仅可以在主菜单中查看，还可以在二刷、三刷游戏的时候带来意想不到的效果哦！',
		'fdy 我先送你第一个画廊吧',
		'play sound new_gallery',
		'show message Day0-badge',
		'gallery unlock badge',
		'fdy 好你可以回寝室啦',
		'i 嗯嗯谢谢老师~',
		'jump Day0-ending'
	],

	'Day0-tester':[
		'play sound choices',
		{
			'Choice': {
				'Dialog': 's 测试员可以进入时光机，直达……',
				'e1': {
					'Text': '第12天及其后',
					'Do': 'jump test-day12'
				},
				'e2': {
					'Text': '第9天',
					'Do': 'jump test-day9',
				},
				'e3': {
					'Text': '第6天',
					'Do': 'jump test-day6',
				},
			}
		},
	],
	'test-day12':[
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 测试员可以选择预期结局',
				'e1': {
					'Text': '第12天，普通倾向',
					'Do': 'jump test-normal'
				},
				'e2': {
					'Text': '第12天，自闭倾向',
					'Do': 'jump test-depressed'
				},
				'e3': {
					'Text': '第14天，塔塔开结局',
					'Do': 'jump test-fight',
				},
				'e4': {
					'Text': '第12天，赢麻倾向',
					'Do': 'jump test-reboot',
				},
				'e5': {
					'Text': '第12天，喝茶',
					'Do': 'jump test-tea',
				},
			}
		},
	],
	'test-normal':[
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					player:{
						name: '测试员寄寄',
						sanity: 4,
						school: 2,
						day: 12,
						leader: true,
					}
				});
				monogatari._actions[0]._configuration.objects.stats.props.drawText();
    			monogatari._actions[0]._configuration.objects.greys.props.draw();
				return true;
			},
			'Reverse':function(){
				return 0;
			},
		}},
		'jump Day12',
	],
	'test-depressed':[
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					player:{
						name: '测试员寄寄',
						sanity: 1,
						school: 0,
						day: 12,
						leader: true,
					}
				});
				monogatari._actions[0]._configuration.objects.stats.props.drawText();
    			monogatari._actions[0]._configuration.objects.greys.props.draw();
				return true;
			},
			'Reverse':function(){
				return 0;
			},
		}},
		'jump Day12',
	],
	'test-confused':[
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					player:{
						name: '测试员寄寄',
						sanity: 1,
						school: 8,
						day: 12,
						leader: true,
					}
				});
				monogatari._actions[0]._configuration.objects.stats.props.drawText();
    			monogatari._actions[0]._configuration.objects.greys.props.draw();
				return true;
			},
			'Reverse':function(){
				return 0;
			},
		}},
		'jump Day12',
	],
	'test-tea':[
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					player:{
						name: '测试员寄寄',
						sanity: 3,
						school: 3,
						day: 12,
						care:4,
						leader: true,
					},
					story:{
						balcony_forward: true,
					}
				});
				monogatari._actions[0]._configuration.objects.stats.props.drawText();
    			monogatari._actions[0]._configuration.objects.greys.props.draw();
				return true;
			},
			'Reverse':function(){
				return 0;
			},
		}},
		'jump Day12',
	],
	'test-fight':[
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					player:{
						name: '测试员寄寄',
						sanity: 10,
						school: -2,
						day: 14,
						leader: true,
					}
				});
				monogatari._actions[0]._configuration.objects.stats.props.drawText();
    			monogatari._actions[0]._configuration.objects.greys.props.draw();
				return true;
			},
			'Reverse':function(){
				return 0;
			},
		}},
		'jump Day14',
	],
	'test-reboot':[
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					player:{
						name: '测试员寄寄',
						sanity: 8,
						school: 8,
						day: 12,
						leader: true,
					}
				});
				monogatari._actions[0]._configuration.objects.stats.props.drawText();
    			monogatari._actions[0]._configuration.objects.greys.props.draw();
				return true;
			},
			'Reverse':function(){
				return 0;
			},
		}},
		'jump Day12',
	],
	'test-day9':[
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					player:{
						name: '测试员寄寄',
						sanity: 5,
						school: 3,
						day: 9,
						leader: true,
					}
				});
				monogatari._actions[0]._configuration.objects.stats.props.drawText();
    			monogatari._actions[0]._configuration.objects.greys.props.draw();
				return true;
			},
			'Reverse':function(){
				return 0;
			},
		}},
		'jump Day9',
	],
	'test-day6':[
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					player:{
						name: '测试员寄寄',
						sanity: 5,
						school: 3,
						day: 6,
						leader: true,
					}
				});
				monogatari._actions[0]._configuration.objects.stats.props.drawText();
    			monogatari._actions[0]._configuration.objects.greys.props.draw();
				return true;
			},
			'Reverse':function(){
				return 0;
			},
		}},
		'jump Day6',
	],
});