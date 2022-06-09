/**
 * =======================================
 * 剧情片段：阳台表演
 * 
 * 【day1】
 * 你听到阳台上有人叫“我想出去！”
 * 你和室友笑了笑
 * 
 * 【day2】
 * 你听到阳台上此起彼伏地叫“我想出去！”
 * 你选择：
 * （1）趴在窗台聆听（护校-1）
 * （2）置之不理
 * （3）在楼层群里叫他们闭嘴（护校+1）
 * 
 * 【day3】
 * 你收到一个群聊邀请“国际东急”
 * 是否加入？是
 * 群公告：打开电脑功放，八点到阳台上播放国际歌，唱完就散！
 * 你选择：
 * （1）反手举报给辅导员（护校>=5开启该选项，护校+1）
 * （2）直接退群（普通）
 * （3）看一波热闹（普通）
 * （4）打开电脑功放并播放国际歌（护校<=2开启该选项，护校-1）
 *
 * 【day4】
 * 你收到一则群聊消息，约定晚上八点一起喊楼
 * 临近八点，突然所有学院发布通知，于19：50召开全体学生大会
 * 你选择：
 * （1）去开会
 * （2）不开会
 * （3）不开会并且在八点钟喊楼（精神+1，护校<=1开启该选项）
 * 		虽然最后发现喊楼的人不多
 * 
 * 如何整合进主线剧情：
 * （1）在主线剧情中使用命令：jump balcony
 * （2）在本文件的balcony-ending中设定支线结束后的回传位置
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上balcony-前缀
 * =======================================
 **/

/* global monogatari */

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'balcony-internationale': {
		title: '群通告',
		subtitle: '来自“国际东急”',
		body: `
			<p>打开电脑功放，八点到阳台上播放国际歌，唱完就散！</p>
		`
	},
	'balcony-apologize': {
		title: '号召',
		subtitle: '东急各校区学生今晚八点集体大喊：东急道歉！',
		body: `
			<p>各校区的同学们：自疫情开始，东急封校最长已达49天，封寝22夭，却几乎每！天！都！有！新增病例。学校在疫情防控方面信息一直不透明，核酸异常从未在官方通报中精准到具体楼宇，也没有向学生公开过校内阳性病例流调情况。</p>
			<p>校内会议形式主义现象严重，在院级、宿舍级的全体会议上，多次出现校方念稿了拒绝回答学生问题的情况。更高层级领导拒绝与学生对话，只委派没有实权的驻楼老师与同学沟通，学生从始至终就等到一句"我会向上反馈的"，没有下文。</p>
			<p>就在昨天，不少同学在吃完咸肉后，才发现自己吃到一的是含有猪乳头和疑似寄生虫的肉，且后续多名同学肠胃出现问题。然而，除了一张网传的学校盖章通告，校方未给出任何回应！甚至在这份通告中拒绝道歉。将全部责任推给供货方，不承认学校有监督食品制作安全，保障学生的生命安全的义务。猪乳头在食堂的加工处理过程中明明非常容易被发现，但还是送到了学生的嘴里！</p>
			<p>鉴于此，我号召各位向学于4月27号（今晚）八点共同大喊：''东急道歉！“同学们也可以表达自己的诉求，重要的是让他们听到我们的声量！希望各位能踊跃转发、积极行动，只有发声才能不让东急沦为官僚的东急！东急，是学生的东急！</p>
			`
	},
	'balcony-emergency': {
		title: '年级群紧急通知！',
		subtitle: '晚上7：50开年级会！晚上7：50开年级会！',
		body: `
			<p>每一个东急的学生都是学校的一份子，东急的荣辱和大家的荣辱是一体的，今晚楼内的活动我院全体同学不准参加，并请劝阻身边的同学，冷静的提出述求并解决问题。</p>
		`
	},
	'balcony-leader': {
		title: '各位层长同学',
		subtitle: '来自：水谷 虎 老师',
		body: `
			<p>如果今天晚上有播放高音喇叭或者喊叫行为的话，请立即在所在楼层和相邻楼层进行巡视并锁定房间号，感谢大家的支持。</p>
			<p>对于此事，我们已经掌握相关证据，X楼的兄弟们绝对不能出现这种行为！</p>
		`
	},
});


// Define the Characters
monogatari.characters ({
	'lg': {
		name: '楼上老哥',
		color: 'rgb(0, 168, 138)',
	},
	'lg2': {
		name: '楼上老哥B',
		color: 'rgb(0, 168, 138)',
	},
	'lg3': {
		name: '楼上老哥C',
		color: 'rgb(0, 168, 138)',
	},
	'lg4': {
		name: '楼上老哥D',
		color: 'rgb(0, 168, 138)',
	},

});

monogatari.script ({
	// The game starts here.
	'balcony': [
		's 夜幕降临，你正在百无聊赖之时，忽然听见宿舍阳台外面，仿佛响起了人的呼喊声',
		'i 是有人在喊什么东西吗？',
		'a 去听听呗',
		's 你和室友走到阳台上听了起来，只听得楼上一声————',
		'lg 我！要！出！去！',
		'lg 我！要！出！去！',
		'a 完了，又疯一个',
		's 你和室友相视一笑',
		'jump balcony-ending',
	],

	'balcony-ending': [
		// Important: the destination must be correctly defined
		'jump Day5-4'
	],
	'balcony2-ending': [
		// Important: the destination must be correctly defined
		'jump Day8-5'
	],
	'balcony3-ending': [
		// Important: the destination must be correctly defined
		'jump Day9-4'
	],
	'balcony4-ending': [
		// Important: the destination must be correctly defined
		'jump Day11-4'
	],

	// day2
	'balcony2': [
		's 夜幕降临，你又听见宿舍阳台外面响起了呼喊声，你走到了阳台前',
		'lg 我！要！出！去！',
		'lg2 我想回家！',
		'lg3 我！要！出！去！',
		'lg4 我想回家！',
		'i 疯的越来越多了啊',
		{
			'Choice': {
				'Dialog': 'i 你选择……',
				'listen': {
					'Text': '趴在窗台聆听',
					'Do': 'jump balcony2-listen'
				},
				'ignore': {
					'Text': '置之不理',
					'Do': 'jump balcony2-ignore'
				},
				'shutup': {
					'Text': '嫌吵，叫他们闭嘴',
					'Do': 'jump balcony2-shutup'
				}
			}
		}
	],

	'balcony2-listen': [
		's 你趴在窗台前，静静地听了好一阵子，若有所思',
		{'Function':{
			'Apply':function(){
				add_school(-1);
			},
			'Reverse':function(){
				add_school(1);
			},
		}},
		'jump balcony2-ending',
	],

	'balcony2-ignore': [
		'i 两手一摊，两腿一翻，凡尘俗世，与我无关',
		'i 还是再打一把游戏吧',
		'jump balcony2-ending',
	],

	'balcony2-shutup': [
		'i 吵什么吵！不学习不睡觉啦！（大吼）',
		'i 什么人啊这是',
		{'Function':{
			'Apply':function(){
				add_school(1);
			},
			'Reverse':function(){
				add_school(-1);
			},
		}},
		'jump balcony2-ending',
	],

	//day3
	'balcony3': [
		'p （叮咚！）',
		'i 咦？群聊邀请？“国际东急”群？点进去看看。',
		'i 哟呵，这群还有群通告呢。',
		'show message balcony-internationale',
		'i 呵……',
		{
			'Choice': {
				'Dialog': 'i 你选择……',
				'report': {
					'Text': '反手举报给辅导员',
					'Do': 'jump balcony3-report',
					'Condition': function(){
						const {school} = monogatari.storage('player');
						return school >= 5;
					}
				},
				'exit': {
					'Text': '直接退群',
					'Do': 'jump balcony3-exit'
				},
				'watch': {
					'Text': '看一波热闹',
					'Do': 'jump balcony3-watch'
				},
				'join': {
					'Text': '打开电脑功放并播放国际歌',
					'Do': 'jump balcony3-join',
					'Condition': function(){
						const {school} = monogatari.storage('player');
						return school <= 2;
					}
				}
			}
		}
	],

	'balcony3-report': [
		'i 举报举报！',
		'i 什么校外势力。',
		{'Function':{
			'Apply':function(){
				add_school(1);
			},
			'Reverse':function(){
				add_school(-1);
			},
		}},
		'jump balcony3-ending',
	],
	'balcony3-exit': [
		'i 有点危险啊……',
		'i 还是退群吧，免得被学校找。',
		'jump balcony3-ending',
	],
	'balcony3-watch': [
		'i 有点意思……',
		's 八点，你来到窗前，只听得熟悉的旋律再次响起……',
		's ~起来，饥寒交迫的奴隶，起来，全世界受苦的人！满腔的热血已经沸腾，要为真理而斗争~',
		'jump balcony3-ending',
	],
	'balcony3-join': [
		's 你打开了电脑功放，播放国际歌。熟悉的旋律再次响起……',
		'i ~起来，饥寒交迫的奴隶，起来，全世界受苦的人！满腔的热血已经沸腾，要为真理而斗争~',
		{'Function':{
			'Apply':function(){
				add_school(-1);
			},
			'Reverse':function(){
				add_school(1);
			},
		}},
		'jump balcony3-ending',
	],

	//day4
	'balcony4': [
		'p （叮咚！）',
		'show character a normal',
		'a 你看到群里疯传的这张图没？',
		'i 啥图啊？我看看',
		'show message balcony-apologize',
		'i 这是要搞波大的啊',
		'a 学校里各种群都在传，应该是全校都知道了，只是不知道到八点是啥状况呢',
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader;
				},
				'True': 'jump balcony4-leader-msg',
				'False': 'jump balcony4-continue',
			}
		},
	],
	'balcony4-leader-msg': [
		'p （叮咚！）',
		's 你发现层长群也来了一条消息',
		'show message balcony-leader',
		'jump balcony4-continue',
	],
	'balcony4-continue': [
		'show character a happy',
		'a 突然觉得等不及了呢哈哈哈',
		'hide character a',
		's 时间逐渐过去，到了晚上七点半的时候……',
		'p （叮咚！）',
		'show character a normal',
		'a 年级群里的新通知？',
		'show message balcony-emergency',
		'i 关键是，我看其他学院统统都要求学生这个点儿开会',
		'i 有的还要求必须开摄像头参会',
		'show character a happy',
		'a 哈哈哈我要笑死了！拖延战术，先下手为强是吧？',
		'a 不知道为啥，他们越着急，我就越想笑哈哈哈哈哈',
		'hide character a',
		{
			'Choice': {
				'Dialog': 'i 你选择……',
				'meet': {
					'Text': '去开会',
					'Do': 'jump balcony4-meet',
				},
				'nomeet': {
					'Text': '不开会',
					'Do': 'jump balcony4-nomeet'
				},
				'yell': {
					'Text': '不开会并且在八点钟喊楼',
					'Do': 'jump balcony4-yell',
					'Condition': function(){
						const {school} = monogatari.storage('player');
						return school <= 1;
					}
				}
			}
		}
	],
	'balcony4-meet': [
		'i 还是去开个会吧，毕竟是学院的要求',
		'show scene laptop',
		's 七点五十，会议准时开始。然而今天的会议仿佛比以往更没有实质内容。各位老师草草汇报了一些工作情况之后，会议就结束了',
		'i 这是开了个什么会呢……',
		'show scene dorm',
		'jump balcony4-ending',
	],
	'balcony4-nomeet': [
		'i 不听不听，反正也不可能有啥重要的事',
		'i 不如玩玩游戏呢',
		'jump balcony4-ending',
	],
	'balcony4-yell': [
		'i 去tm的，这时候不喊，什么时候喊？',
		's 到了晚上八点的时候，你走到窗台前，大喊：',
		'i 东！急！道！歉！',
		'i 不！要！问！题！肉！',
		's 空荡荡的夜空，传来几声零星的回应',
		'a 好像真正喊楼的人也不太多欸……',
		'i 没关系，我自己爽了就行',
		{'Function':{
			'Apply':function(){
				add_sanity(1);
			},
			'Reverse':function(){
				add_sanity(-1);
			},
		}},
		'jump balcony4-ending',
	],
});