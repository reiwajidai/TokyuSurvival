/**
 * =======================================
 * 剧情片段：直播
 *
 * 如何整合进主线剧情：
 * （1）在主线剧情中使用命令：jump live
 * （2）在本文件的live-ending中设定支线结束后的回传位置
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上live-前缀
 * =======================================
 **/

/* global monogatari */

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'live-notice': {
		title: '全体学生会议',
		subtitle: '会议时间: 今晚21:30-22:30',
		body: `
			<p>各位同学，目前校园疫情防控的形势异常严峻，今晚召开本楼全体学生会议，请全体学生准时参加！</p>
			<p>各位层长通知大家迅速进入直播间等候，临时通知，请大家理解。</p>
		`
	},
	'live-end': {
		title: '',
		subtitle: '',
		body: `
			<p>会议已结束。</p>
		`
	},
});

// Define the Characters
monogatari.characters ({
	'pl': {
		name: '评论区',
		color: '#799AFF'
	},
	'ld': {
		name: '学校领导',
		color: '#799AFF'
	},
});

monogatari.script ({
	// Important: the destination must be correctly defined
	'live-ending': [
		'jump bureau6-ending'
	],

	// The game starts here.
	'live': [
		'a {{player.name}}，你看咱学生群里转的消息了吗？说是我们楼又出了一个阳性',
		'i 啥？又是阳性？为啥我们楼又没有通知？',
		'a 就是很无语啊，同样的事情又发生了一遍：其他楼的学生都知道了，但我们还不知道',
		's 到了晚上九点钟左右，楼层群里突然来了通知',
		'a 看看楼层群，群里有通知了',
		'i 通知？我看看',
		'play sound notification',
		'show message live-notice',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 要不要参加楼栋学生会议?',
				'yes': {
					'Text': '听听看',
					'Do': 'jump live-start'
				},
				'No': {
					'Text': '不听',
					'Do': 'jump live-leader'
				}
			}
		}
	],
	'live-start': [
		'i 要不一起听听看吧？',
		'a 好！小点声，直播开始了',
		'show scene laptop with fadeIn',
		'i 你把直播间的评论区也打开看看？',
		'a OK',
		'ld 咳咳，同学们我们的会议正式开始了啊……',
		'ld 昨天，我们发现了有同学存在抗原异常的情况，学校领导第一时间就决定展开排查，进行复检……',
		'ld ……经最终确认，存在核酸异常的情况……',
		'a 哎哟哟，领导您这才通报啊？能不能讲一点我们不知道的东西？',
		'a 之前其他学生都知道了，为什么我们反而被蒙在鼓里？',

		'ld ……针对病毒狡猾的传播性质，建议同学们洗澡的时候批次错开，按寝室去洗……',
		'pl 学生A：？？？',
		'pl 学生A：老师，我们这边没有公共浴室，都是独卫的',
		'pl 学生A：您是不是念错稿了？',
		'pl 学生B：老师您别说了，您该洗澡了',
		'ld ……学校面临着物资困难的问题，但领导班子依然在加班加点，希望同学们理解……',
		'pl 学生B：A同学，你的言论针砭时弊、振聋发聩，私聊我姓名学号，给你加创新学分',
		'pl 学生C：饮食不能和脚痛大学比的话，至少要跟浦淡大学标齐吧？实在不行保证一下食品安全行不行？',
		'pl 学生D：脚痛大学是你爹吧这么舔？',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 要不要做点啥?',
				'joke': {
					'Text': '在评论区吐槽',
					'Do': 'jump live-joke'
				},
				'support': {
					'Text': '在评论区发表支持学校的意见',
					'Do': 'jump live-support'
				},
				'No': {
					'Text': '什么都不做',
					'Do': 'jump live-leader'
				}
			}
		}
	],
	'live-joke': [
		'i 吐槽吐槽！',
		'pl {{player.name}}：对于同学在各方面的责难，校领导表示已经原谅你们了',
		'a 哈哈哈有点好笑！',
		{'Function':{
			'Apply':function(){
				add_school(-1);
			},
			'Reverse':function(){
				add_school(1);
			},
		}},
		'a 当他们缺乏能力、干不好事情的时候，他们是真的只能卖惨，所以根本没有必要认为他们有显著的恶意',
		'i 厉害呀老哥，鞭辟入里！',
		'jump live-second-half'
	],
	'live-support': [
		'i 还是说点好话吧！',
		'pl {{player.name}}：也是把老师们都糟践惨了，共度时艰吧',
		{'Function':{
			'Apply':function(){
				add_school(1);
			},
			'Reverse':function(){
				add_school(-1);
			},
		}},
		'jump live-second-half'
	],
	'live-second-half': [
		's 学校领导对着稿子又念了一大通，但你觉得信息密度实在太低，以至于昏昏欲睡',
		'i 他们直接发个文字通告不好吗？为什么要浪费彼此的时间来开会？',
		's 叽里呱啦四十分钟后，你看着评论区里漫天的吐槽，似乎也有点麻木了',
		'ld 鉴于今天的时间也不早了，那我们的会也就到此为止吧……',
		'pl 学生A：？？？',
		'pl 学生B：？？？问答环节呢？',
		'pl 学生A：老师，我们的问题您解答了吗？',
		'ld 最后再说一句，最近学校里流传着各类虚假信息，在此提醒大家，传播不实消息将严肃处理……',
		'pl 学生C：？？？',
		'pl 学生D：？？？',
		's 问号刷遍了评论区',
		'a 校领导啊，真实信息你们也不给啊！',
		'ld 同学们再见！',
		'pl 学生A：？？？',
		'pl 学生B：装瞎是吧？看不见评论区？',
		'show message live-end',
		'show scene dorm with fadeIn',
		'a 艹',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'i （精神值-1）', 
		'jump live-leader'
	],

	'live-leader':[
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'False': 'jump live-ending',
				'True': 'next',
			}
		},
		'play sound new_message',
		'p 叮咚！',
		's 你打开手机发现，今晚的层长会议也将展开对于阳性病例的说明会',
		'i 作为层长，我肯定得参加一下',
		'show scene laptop with fadeIn duration 2s',
		's 你刚进线上会议室，就听见其他层长要求水谷老师说明详细情况。',
		'show character mi serious',
		'cza 这一次的阳性病例，也是两天前发烧，学校今天才报，我们所有志愿者又在毫不知情的情况下干了两天！',
		'czb 我们想问问老师：为什么不提前通知？',
		'show character mi angry',
		'mi 我在这里说明一下啊：该名同学住在4层，自前天晚间起体温偏高，体温自测38.3°C，伴有喉咙痛、全身酸痛等症状；昨晚前的历次核酸检测和自测抗原均为阴性，且发热之前未发现其他症状；',
		'mi 而我们专班应对情况的第一个“手势”，就是加测抗原。',
		'mi 昨天深夜，该名学生加测抗原结果显示异常，学校作出了代配药品及将该名学生转出宿舍的安排，于今日0:05转移至隔离点；并要求与该名同学14天内有过接触的师生紧急制动。',
		'mi 今天上午，该名学生在集中隔离点再次测得抗原结果异常；',
		'mi 今天下午17:40，发布了该名学生昨日下午核酸检测结果，显示异常，并再次复核核酸结果；',
		'mi 学校经过流调确定了8名师生为该学生密接，今天晚20:00左右，以上8名师生被转运至隔离点；',
		'mi 今天晚21:00该名学生被转运至东京方舱医院。',
		'cza 老师，我们只是想问，发烧了，为什么不早点告诉我们？',
		'mi 我们是严格按照相关“手势”操作的，为的就是保障同学们的安全……',

		's 水谷老师又把他的“手势”内容详细地讲了一遍，你实在听不下去了，于是转头去问室友：',
		'hide character mi',
		'show scene dorm with fadeIn',
		'i “手势”是个什么东西？',
		'a 公务员体系里的黑话吧，类似于领导指示的东西？',
		'i 呵，学到了学到了',
		{
			'Conditional': {
				'Condition': function(){
					const {school} = monogatari.storage('player');
					return school<3
				},
				'True': 'i 真TM牛逼哦',
				'False': 'next',
			}
		},
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		's 想到志愿者同学们再一次高危工作了两天，你不由得叹了口气（精神-1）',
		{
			'Conditional': {
				'Condition': function(){
					const {school} = monogatari.storage('player');
					return school<3
				},
				'True': 's 当然更深层次的原因是，你觉得在水谷老师心里，“手势”比学生的健康更为重要。',
				'False': 'next',
			}
		},
		'jump live-ending'
	]

});