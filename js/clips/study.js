/**
 * =======================================
 * 剧情片段：学习
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上study-前缀
 * =======================================
**/

monogatari.action ('message').messages ({
    'crown-unlock': {
		title: '解锁画廊：卷王',
		subtitle: '',
		body: `
			<p>GPA就要5.0！卷起来！</p>
			<img src='./assets/gallery/crown.png' width="40">
		`
	},
})

monogatari.script ({

    'study':[
		's 由于封校，所有的课程都成了网课，于是你打开了网络会议室，加入到在线课程之中',
        's 但你发现，上网课的时候，自己更容易开始摸鱼。前几十分钟还好，但时间一久，你就一边玩手机一边听课了',
		'play sound choices',
        {
			'Choice': {
				'Dialog': 's 你在网课上玩手机，你感觉……',
				'e1': {
					'Text': '我没能约束好自己，我有错',
					'Do': 'next'
				},
				'e2': {
					'Text': '没什么大不了，线下课我也玩手机',
					'Do': 'next',
				},
			}
		},
		{'Function':{
			'Apply':function(){
				add_study(-1);
			},
			'Reverse':function(){
				add_study(1);
			},
		}},
        's 想罢，你继续玩手机玩到下课（学业-1）',
        'jump study-ending'
    ],


    'study2':[
		's 今天的网课是八点钟开始，但你今天实在是太困了，你很不想起床',
        'i 我得想个两全其美的办法……',
		'play sound choices',
        {
			'Choice': {
				'Dialog': 's 你决定……',
				'e1': {
					'Text': '在床上听网课',
					'Do': 'jump study2-bed'
				},
				'e2': {
					'Text': '懒什么懒，下床听课（精神-1）',
					'Do': 'jump study2-getup',
				},
			}
		},
    ],
    'study2-bed':[
		{'Function':{
			'Apply':function(){
				add_study(-1);
			},
			'Reverse':function(){
				add_study(1);
			},
		}},
		's 你决定在床上听课，果然，你听着听着就睡着了（学业-1）',
        'jump study2-ending'
    ],
    'study2-getup':[
        {'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		's 你挣扎着下床听了课（精神-1）',
        'jump study2-ending'
    ],


    'study3':[
		{'Function':{
			'Apply':function(){
				add_study(-1);
			},
			'Reverse':function(){
				add_study(1);
			},
		}},
		's 今天的你打算好好地完成老师布置的作业，但正要查资料的时候，你发现你想查的书都躺在图书馆里，而封校之后的你自然是借不到书的（学业-1）',
        'jump study3-ending'
    ],


    'study4':[
		's 今天的你打算在寝室里预习明天的功课，这门课不预习就很难听懂。但你发现你的室友正在与朋友开黑打游戏，一直在大呼小叫。',
        'play sound choices',
		{
			'Choice': {
				'Dialog': 's 你该怎么办？',
				'delay': {
					'Text': '等到深夜舍友睡了再学习吧',
					'Do': 'jump study4-delay',
				},
				'force': {
					'Text': '强行学一点',
					'Do': 'jump study4-force'
				},
				'drop': {
					'Text': '不学了，躺平',
					'Do': 'jump study4-drop'
				},
				'discuss': {
					'Text': '让室友稍微小点声',
					'Do': 'jump study4-discuss',
					'Condition': function(){
						const {sanity} = monogatari.storage('player');
						return sanity > 2;
					}
				}
			}
		}
    ],
    'study4-delay':[
        {'Function':{
			'Apply':function(){
				add_health(-1);
			},
			'Reverse':function(){
				add_health(1);
			},
		}},
		's 你决定等室友睡了再熬夜自习，当然这样做伤身体（健康-1）',
		{'Function':{
			'Apply':function(){
				add_study(1);
			},
			'Reverse':function(){
				add_study(-1);
			},
		}},
        's 但是你确实学到了东西（学业+1）',
        'jump study4-ending'
    ],
    'study4-force':[
		's 你决定强行学习，但你发现，有别人在一旁大呼小叫的时候，你很难集中精力',
        {'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
        's 你感到很郁闷（精神-1）',
        'jump study4-ending'
    ],
    'study4-drop':[
		's 于是你决定立刻躺平',
        'jump study4-ending'
    ],
    'study4-discuss':[
		's 你让室友稍微小点声，然而毕竟是在玩游戏，室友怎能真正控制住他的嗓门？',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
        's 于是你依旧没有学进去，你感到很郁闷（精神-1）',
        'jump study4-ending'
    ],


	'study5':[
		{'Function':{
			'Apply':function(){
				add_study(-1);
			},
			'Reverse':function(){
				add_study(1);
			},
		}},
		's 今天的你打算好好研究研究高等数学，但正要进入状态之时，志愿者同学催你下楼做核酸了（学业-1）',
        'i 老师们总是说这段时间是难得的闭关时间，但事实果真如此吗？',
        'i 事实上，我们的时间完全被时间飘忽不定的核酸检测、抗原检测、各种学校通知、各种学校登记给打散了。',
		{
			'Conditional': {
				'Condition': function(){
					const {sanity} = Truemonogatari.storage('player');
					return sanity>3
				},
				'False': 'i 为了稳定情绪就已经精疲力尽了，还怎么有力气学习？',
				'True': 'next',
			}
		},
        'jump study5-ending'
    ],


	'study7':[
		's 今天的你打算在寝室里好好自习，但你发现你的室友正在与他的同学上讨论课，他的讲话声音影响了你的学习状态。',
		'play sound choices',
        {
			'Choice': {
				'Dialog': 's 室友在讨论，你该怎么办？',
				'delay': {
					'Text': '等到深夜舍友睡了再学习吧',
					'Do': 'jump study7-delay',
				},
				'force': {
					'Text': '强行学习',
					'Do': 'jump study7-force'
				},
				'drop': {
					'Text': '不学了，躺平',
					'Do': 'jump study7-drop'
				},
				'discuss': {
					'Text': '让室友稍微小点声',
					'Do': 'jump study7-discuss',
					'Condition': function(){
						const {sanity} = monogatari.storage('player');
						return sanity > 2;
					}
				}
			}
		}
    ],
    'study7-delay':[
        {'Function':{
			'Apply':function(){
				add_health(-1);
			},
			'Reverse':function(){
				add_health(1);
			},
		}},
		's 你决定等室友睡了再熬夜自习，当然这样做伤身体（健康-1）',
		{'Function':{
			'Apply':function(){
				add_study(1);
			},
			'Reverse':function(){
				add_study(-1);
			},
		}},
        's 但是你确实学到了东西（学业+1）',
        'jump study7-ending'
    ],
    'study7-force':[
		's 你决定强行学习，但你发现，有别人在一旁讲话的时候，你很难集中精力',
        {'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
        's 你感到很郁闷（精神-1）',
        'jump study7-ending'
    ],
    'study7-drop':[
		's 于是你决定立刻躺平',
        'jump study7-ending'
    ],
    'study7-discuss':[
		's 你让室友稍微小点声，室友减小了说话的声音',
		{'Function':{
			'Apply':function(){
				add_study(1);
			},
			'Reverse':function(){
				add_study(-1);
			},
		}},
        's 虽然并没有完全排除声音的干扰，但你好歹学进去了（学业+1）',
        'jump study7-ending'
    ],

    'study6':[
		's 今天的学习内容主要是看电子文献，平日喜欢翻阅纸质文档的你看了一会儿，便觉得眼睛酸胀。',
        's 但你才看了一半的文献，怎么办？',
		'play sound choices',
        {
			'Choice': {
				'Dialog': 's 但你才看了一半的文献，怎么办？',
				'e1': {
					'Text': '强撑着继续看',
					'Do': 'jump study6-force'
				},
				'e2': {
					'Text': '立刻躺平',
					'Do': 'jump study6-drop',
				},
			}
		},
    ],
    'study6-drop':[
		's 于是你决定立刻躺平',
        'jump study6-ending'
    ],
    'study6-force':[
		{'Function':{
			'Apply':function(){
				add_study(1);
			},
			'Reverse':function(){
				add_study(-1);
			},
		}},
		's 你坚持看完了文献，学到一些东西（学业+1）',
        {'Function':{
			'Apply':function(){
				add_health(-1);
			},
			'Reverse':function(){
				add_health(1);
			},
		}},
        's 但是你感觉头晕眼花（健康-1）',
        'jump study6-ending'
    ],


    'study9':[
		's 明天就要考试了，但你今天感到心情倦怠，并不能打起学习的劲头。',
        's 特别是，今晚有你最喜爱电子游戏战队的决赛直播，你不想错过',
		'play sound choices',
        {
			'Choice': {
				'Dialog': 's 你该如何选择？',
				'e1': {
					'Text': '看直播（精神+1，学业-1）',
					'Do': 'jump study9-drop'
				},
				'e2': {
					'Text': '按原计划复习，到点睡觉',
					'Do': 'jump study9-continue',
				},
				'e3': {
					'Text': '熬夜加班复习（学业+1，健康-1）',
					'Do': 'jump study9-late',
				},
			}
		},
    ],
    'study9-drop':[
        {'Function':{
			'Apply':function(){
				add_sanity(1);
			},
			'Reverse':function(){
				add_sanity(-1);
			},
		}},
		's 你果断选择了游戏直播，你度过了一个美妙的夜晚（精神+1）',
		{'Function':{
			'Apply':function(){
				add_study(-1);
			},
			'Reverse':function(){
				add_study(1);
			},
		}},
        's 但代价则是，荒废了学业（学业-1）',
        'jump study9-ending'
    ],
    'study9-continue':[
		's 你坚持复习，学到一些东西',
        'jump study9-ending'
    ],
	'study9-late':[
		{'Function':{
			'Apply':function(){
				add_study(1);
			},
			'Reverse':function(){
				add_study(-1);
			},
		}},
		's 你坚持熬夜复习，学了不少（学业+1）',
        {'Function':{
			'Apply':function(){
				add_health(-1);
			},
			'Reverse':function(){
				add_health(1);
			},
		}},
        's 但是你感觉心跳加速，天旋地转（健康-1）',
        'jump study9-ending'
    ],


    'study8':[
		's 今天的你得临时抱个佛脚，准备一下后天的考试了，你拿起书坐在了书桌前',
        {
			'Conditional': {
				'Condition': function(){
					const {sanity} = monogatari.storage('player');
                    const {health} = monogatari.storage('player');
					return (sanity>2) & (health>2)
				},
				'1': 'jump study8-success',
				'0': 'jump study8-fail',
			}
		},
    ],
    'study8-success':[
		{'Function':{
			'Apply':function(){
				add_study(1);
			},
			'Reverse':function(){
				add_study(-1);
			},
		}},
		's 幸运的是，你复习得非常顺利（学业+1）',
        'jump study8-ending'
    ],
    'study8-fail':[
		{'Function':{
			'Apply':function(){
				add_study(-1);
			},
			'Reverse':function(){
				add_study(1);
			},
		}},
		's 可不幸的是，这几天你一直都觉得有些头晕脑胀，学不进去（学业-1）',
        'i 感觉自己很萎靡……不知道是身体亚健康了，还是心情一直都很差的缘故……',
        'jump study8-ending'
    ],

    'study10':[
		's 今天是考试的日子，你心情忐忑地参加了线上考试',
        {
			'Conditional': {
				'Condition': function(){
					const {study} = monogatari.storage('player');
					return study > 0
				},
				'True': 'jump study10-success',
				'False': 'jump ending-fish',
			}
		},
    ],
    'study10-success':[
		's 幸运的是，你考试通过了！',
        {
			'Conditional': {
				'Condition': function(){
					const {study} = monogatari.storage('player');
					return study >= 4
				},
				'True': 'jump study10-good',
				'False': 'jump study10-ending',
			}
		},
    ],
    'study10-good':[
        {'Function':{
			'Apply':function(){
				add_sanity(2);
			},
			'Reverse':function(){
				add_sanity(-2);
			},
		}},
		's 而且你考了一个高分！（精神+2）',
		'show message crown-unlock',
		'gallery unlock crown',
        'jump study10-ending',
    ],
})