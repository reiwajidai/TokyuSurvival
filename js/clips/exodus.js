/**
 * =======================================
 * 剧情片段：出东京记
 * 
 *
 * 如何整合进主线剧情：
 * （1）在主线剧情中使用命令：jump exodus
 * （2）在本文件的exodus-ending中设定支线结束后的回传位置
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上exodus-前缀
 * =======================================
 **/

/* global monogatari */

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});

// Define the messages used in the game.
monogatari.action ('message').messages ({

});


// Define the Characters
monogatari.characters ({
	//群主
	'qz': {
		name: '老乡群 群主',
		color: 'rgb(0, 168, 138)',
	},
	//群友
	'qy': {
		name: '老乡群 群友',
		color: 'rgb(0, 168, 138)',
	},
	//朋友
	'py': {
		name: '脚痛大学 朋友',
		color: 'rgb(0, 168, 138)',
	},
	'xx': {
		name: '学校通知',
		color: 'rgb(0, 168, 138)',
	},
	

});

monogatari.script ({

	// The game starts here.
	'exodus': [
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'True': 'jump exodus-ending',
				'False': 'next',
			}
		},
		'p （叮咚）',
		'i 欸，这是啥？',
		'p <朋友圈：扫描二维码加入xx省老乡群.jpg>',
		'i 早就听说有老乡群了，我加入群聊看看去',
		's 你加入了老乡群，正好发现群主在讲话',
		'qz 各位新来的成员记得改群昵称哦',
		's 接着，你发现群里在聊隔壁学校已经允许学生离校返乡的事情',
		'qy 所以说现在脚痛大学已经放人了对吧',
		'qy 是这样的，他们派了车送走人',
		'qy 狗币东急还不放！',
		'i 我好像有个脚痛的朋友……',
		{
			'Choice': {
				'Dialog': 'i 你回忆一下，究竟有没有这个朋友？',
				'have': {
					'Text': '我有',
					'Do': 'jump exodus-have',
				},
				'nothave': {
					'Text': '哦记错了，没有',
					'Do': 'jump exodus-nothave'
				},
			}
		},
	],
	'exodus-have': [
		//选项：
		//我有
		's 你联系了你的朋友',
		'i 听说你们放人了？',
		'py 对的，有车接送，咋了',
		'i 慕了',
		'i 蛐蛐温室公里，你们脚痛大学还怕脚痛？',
		's 你返回了老乡群',
		'i 群友们，脚痛确实放人了',
		'jump exodus-call',
	],
	'exodus-nothave': [
		//我没有
		'qy 脚痛确实放人了，我问了朋友',
		'jump exodus-call',
	],

	'exodus-call': [
		//收束：
		'qy {{player.name}}！',
		'qy {{player.name}}！',
		'qz 那我们开始第一步工作吧，先收集一下信息',
		'qz 谁建个表？',
		{
			'Choice': {
				'Dialog': 'i 要不要参与表格收集工作？',
				'have': {
					'Text': '我来！',
					'Do': 'jump exodus-help',
				},
				'nothave': {
					'Text': '算了吧',
					'Do': 'jump exodus-nothelp'
				},
			}
		},
	],
	'exodus-help': [
		//选择：
		//帮助
		'i 我来',
		{'Function':{
			'Apply':function(){
				const {exodus_help} = monogatari.storage('story');
				monogatari.storage({
					story:{
						exodus_help: exodus_help + 1
					}
				});
				return true;
			},
			'Reverse':function(){
				const {exodus_help} = monogatari.storage('story');
				monogatari.storage({
					story:{
						exodus_help: exodus_help - 1
					}
				});
			},
		}},
		's 你参与到表格收集的过程中去，不一会儿就收集好了',
		'jump exodus-ending',
	],
	'exodus-nothelp': [
		//选择：
		//不帮助
		'jump exodus-ending',
	],
		

	//day2
	'exodus2': [
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'True': 'jump exodus2-ending',
				'False': 'next',
			}
		},
		//第二天或者后几天：
		'p （叮咚）',
		'i 欸，老乡群的消息',
		'qy 朋友们，我刚问到，脚痛人已经落地了',
		'qy 草，然后呢',
		'qy 我朋友已经坐上了家里来接他的轮椅',
		'qy {{player.name}}！看看啊{{player.name}}！',
		'qz 上次说的人员表格基本收集好了，我们现在得接洽一下航空公司，搞清楚情况',
		{
			'Conditional': {
				'Condition': function(){
					const {exodus_help} = monogatari.storage('story');
					return exodus_help >= 1;
				},
				'True': 'qy 我问过了，大方航空说他们能运，前提是我们能到黑荞机场',
				'False': 'qy 我问到的结果是……',
			}
		},
		'qy rnm他们都落地了',
		'qz 我们再完善一下之前的人员表格吧',
		{
			'Choice': {
				'Dialog': 'i 要不要参与统计返乡表格？',
				'have': {
					'Text': '参与',
					'Do': 'jump exodus2-help',
				},
				'nothave': {
					'Text': '不参与',
					'Do': 'jump exodus2-nothelp'
				},
			}
		},
	],
	'exodus2-help': [
		//选择：
		//帮助
		'i 我来',
		{'Function':{
			'Apply':function(){
				const {exodus_help} = monogatari.storage('story');
				monogatari.storage({
					story:{
						exodus_help: exodus_help + 1
					}
				});
				return true;
			},
			'Reverse':function(){
				const {exodus_help} = monogatari.storage('story');
				monogatari.storage({
					story:{
						exodus_help: exodus_help - 1
					}
				});
			},
		}},
		'jump exodus2-ending',
	],
	'exodus2-nothelp': [
		//选择：
		//不帮助
		's 你决定做点自己的事',
		'jump exodus2-ending',
	],
		

	//day3
	'exodus3': [
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'True': 'jump exodus3-ending',
				'False': 'next',
			}
		},
		//第二天或几天后：
		'p （叮咚）',
		'i 欸，老乡群的消息',
		'qz 接下来就剩下向学校请愿了……我放个表格，大家一起梳理一下我们的措辞',
		{
			'Choice': {
				'Dialog': 'i 要不要参与梳理措辞？',
				'have': {
					'Text': '参与',
					'Do': 'jump exodus3-help',
				},
				'nothave': {
					'Text': '不参与',
					'Do': 'jump exodus3-nothelp'
				},
			}
		},
	],
	
	'exodus3-help': [
		//选择：
		//帮助
		'i 基于以上数点，我认为回家是非常合理的请求……',
		's 你很快写好了措辞，你觉得回家有望了，心里不禁一阵高兴（精神+1）',
		{'Function':{
			'Apply':function(){
				add_care(1);
				add_sanity(1);
				const {exodus_help} = monogatari.storage('story');
				monogatari.storage({
					story:{
						exodus_help: exodus_help + 1
					}
				});
			},
			'Reverse':function(){
				add_care(-1);
				add_sanity(-1);
				const {exodus_help} = monogatari.storage('story');
				monogatari.storage({
					story:{
						exodus_help: exodus_help - 1
					}
				});
			},
		}},
		'jump exodus3-ending',
	],
	'exodus3-nothelp': [
		//选择：
		//不帮助
		's 你决定做点自己的事',
		'jump exodus3-ending',
	],	
		

	// day4
	'exodus4': [
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'True': 'jump exodus4-ending',
				'False': 'next',
			}
		},
		//第二天或几天后：
		'p （叮咚）',
		'qz 各位，有个坏消息，学校不同意，也不肯帮我们找车',
		{
			'Conditional': {
				'Condition': function(){
					const {exodus_help} = monogatari.storage('story');
					return exodus_help >= 2;
				},
				'True': 'qy 草，飞机都联系好了',
				'False': 'next',
			}
		},
		'qy 我要回家！',
		'qy 草！什么鬼啊！',
		'qz 我转载一下学校通知吧：',
		'xx ……前日的暴动事件造成了极端恶劣的影响，学生无组织无纪律，以冲击学校的方式表达自己的诉求……',
		'xx 经确认，这是境外势力的阴谋，很多人根本不是学生，他们渗透进入每一个群聊，鼓动学生回家，妄图将流毒散播到全世界',
		'xx 说句阴谋论的话，疫情起始于脚痛，现在又是脚痛首先传出放人回家的谣言……',
		'a 可恶……还以为能回家了……怎么会是骗人的……',
		'qz 害，虽然的确很气人，但学校不放人，咱也没办法啊',
		'qz 以后咱这群就继续用来扯淡吧',
		'i （精神-1）',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'jump exodus4-ending',
	],


});