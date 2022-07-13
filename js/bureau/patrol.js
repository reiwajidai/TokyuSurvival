/**
 * =======================================
 * 剧情片段：巡逻计划
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上patrol-前缀
 * =======================================
 **/

 monogatari.script ({
	// Important: the destination must be correctly defined
	'patrol-ending': [
		'jump bureau-ending'
	],
	'patrol2-ending': [
		'jump bureau2-ending'
	],
	'patrol3-ending': [
		'jump bureau3-ending'
	],

	// The game starts here.
	'patrol': [
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'False': 'jump patrol-non-leader',
				'True': 'next',
			}
		},
		'play sound new_message',
		'p （叮咚）',
		's 你打开了层长群聊',
		'lz 各位层长，紧急任务：请大家马上作为志愿者坐在各自楼层的楼道里！',
		'lz 刚刚书记来视察了，书记觉得有同学在寝室楼道里随意走动不安全，怕有相互感染的风险',
		'lz 所以请大家马上坐到楼道里去，监督其余同学不要走动！书记会从楼道摄像头里监督大家！',
		'cza 这什么智障操作？难道层长不用干别的事了吗？',
		'lz 唉，大家下午先应付一下书记吧，我估计也就是心血来潮',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 你要怎么做?',
				'yes': {
					'Text': '对着摄像头竖中指，然后按老师的做',
					'Do': 'jump patrol-troll'
				},
				'No': {
					'Text': '按老师的做',
					'Do': 'jump patrol-endure'
				}
			}
		}	
	],
	'patrol-troll': [
		's 你戴好口罩去了楼道，对着摄像头竖了一下中指',
		{'Function':{
			'Apply':function(){
				add_school(-1);
				add_sanity(1);
			},
			'Reverse':function(){
				add_school(1);
				add_sanity(-1);
			},
		}},
		'i 去tm的sb操作（精神值+1）',
		{
			'Conditional': {
				'Condition': function(){
					const result = Math.random();
					if(result <= 0.2) {
						return "blame";
					} else {
						return 'safe';
					}
				},
				'blame': 'jump patrol-blame',
				'safe': 'next',
			}
		},
		's 你在凉飕飕的楼道里呆了二十分钟，突然觉得书记并不会真的看摄像头，于是你溜回了宿舍',
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					story:{	patrol_blame_escape: true }
				});
			},
			'Reverse':function(){
				monogatari.storage({
					story:{	patrol_blame_escape: false }
				});
			},
		}},
		'jump patrol-evening',
	],
	'patrol-blame': [
		's 你在凉飕飕的楼道里呆了二十分钟，突然接到了辅导员的电话。在电话里，辅导员批评了你在摄像头前面的行为。完成巡逻后，你回到了宿舍。',
		{'Function':{
			'Apply':function(){
				add_care(1);
			},
			'Reverse':function(){
				add_care(-1);
			},
		}},
		'jump patrol-evening',
	],
	'patrol-endure': [
		'i 唉，就按书记的指示做吧',
		's 你按照书记的要求，搬了一把凳子，在黑漆漆的、凉飕飕的、空无一人的楼道里坐了一个小时。直到楼层开始配送晚饭了，你才得以回到宿舍',
		'jump patrol-evening',
	],
	'patrol-evening': [
		's 到了晚上，你本以为事情已经结束了，没想到群里又来了消息：',
		'lz 领导为了防止同学在楼道内聚集，决定将楼层志愿者活动常态化了',
		'lz 各层推出自己的志愿者，早7：30-晚11：30这16个小时期间每两小时轮一班。领导会看监控检查',
		'cza ……',
		'cza 我tm……',
		'czb 我在的楼层一共38个人，他这么一搞，等于每天反而多了8个人在外面接触。',
		'czb 这个点子，要不是脑袋被门夹过，还真想不出来',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 面对书记的不合理要求，你要怎么办?',
				'argue': {
					'Text': '尝试跟老师理论',
					'Do': 'jump patrol-argue'
				},
				'resist': {
					'Text': '在工作群里直接拒绝执行志愿者活动',
					'Do': 'jump patrol-resist'
				},
				'lazy': {
					'Text': '进行工作登记，但并不实际干活',
					'Do': 'jump patrol-lazy'
				},
				'Obey': {
					'Text': '按老师说的做',
					'Do': 'jump patrol-obey'
				}
			}
		}
	],
	'patrol-argue': [
		's 你决定尝试跟老师理论，但老师跟你说了一大堆“风险防控”、“减少聚集”、“大局意识”的话。事情仿佛并没有变化。',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 面对书记的不合理要求，你要怎么办?',
				'resist': {
					'Text': '在工作群里直接拒绝执行志愿者活动',
					'Do': 'jump patrol-resist'
				},
				'lazy': {
					'Text': '进行工作登记，但并不实际干活',
					'Do': 'jump patrol-lazy'
				},
				'Obey': {
					'Text': '按老师说的做',
					'Do': 'jump patrol-obey'
				}
			}
		}
	],
	'patrol-resist': [
		{'Function':{
			'Apply':function(){
				add_care(1);
				add_sanity(-1);
			},
			'Reverse':function(){
				add_care(-1);
				add_sanity(1);
			},
		}},
		's 你在工作群里直接表示要拒绝执行活动，遭到了老师的训斥（精神值-1）',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 面对书记的不合理要求，你要怎么办?',
				'lazy': {
					'Text': '进行工作登记，但并不实际干活',
					'Do': 'jump patrol-lazy'
				},
				'Obey': {
					'Text': '按老师说的做',
					'Do': 'jump patrol-obey'
				}
			}
		}
	],
	'patrol-obey': [
		'i 算了算了，就这样吧',
		's 你无可奈何，还是招募了明天的志愿者。作为层长，你当然不仅要做志愿者，还要值最早的那一班',
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					story:{
						patrol_obey: true
					}
				});
			},
			'Reverse':function(){
				monogatari.storage({
					story:{
						patrol_obey: false
					}
				});
			},
		}},
		'jump patrol-ending'
	],
	'patrol-lazy': [
		's 你进行了工作登记，并自告奋勇地包揽了明天所有的值班工作。然而，你并不打算真正出力。',
		'i 明天早上的我应该会不小心睡过头，然后把值班的工作忘掉吧？就这样跟老师解释吧！',
		'a 有那么一点公务员的经验了啊（笑）',
		'jump patrol-ending'
	],
	'patrol-non-leader': [
		'play sound new_message',
		'p 叮咚！',
		's 你发现你所在的楼层学生群里，层长同学发了一条消息。',
		'cz 各位同学，有个坏消息……',
		'cz 刚刚书记来视察了，书记觉得有同学在寝室楼道里随意走动不安全，怕有相互感染的风险',
		'cz 为了防止同学在楼道内聚集，领导制定了“楼层监督员”政策：',
		'cz 各层推出自己的志愿者，在楼道里坐着，监督其余同学不要在楼道里走动。早7：30-晚11：30这16个小时期间，每两小时轮一班，领导会看监控检查。',
		'qya ……',
		'qya 我tm……',
		'qyb 我们楼层一共大概40个人，他这么一搞，每天反而多了8个人在外面接触。',
		'qyb 这个点子，要不是脑袋被门夹过，还真想不出来',
		'cz 唉，毕竟是领导的决定，咱们楼层就轮班做志愿者吧',
		's 你不幸地成为了明天最早的值班志愿者。',
		'i 啊这……',
		'jump patrol-ending'
	],


	'patrol2': [
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'False': 'jump patrol2-work',
				'True': 'next',
			}
		},
		{
			'Conditional': {
				'Condition': function(){
					const {patrol_obey} = monogatari.storage('story');
					return patrol_obey
				},
				'True': 'jump patrol2-work',
				'False': 'jump patrol2-notwork',
			}
		}
	],
	'patrol2-work': [
		{'Function':{
			'Apply':function(){
				add_health(-1);
				add_sanity(-1);
			},
			'Reverse':function(){
				add_health(1);
				add_sanity(1);
			},
		}},
		's 为了响应书记的政策，今天的你起了个大早，在黑漆漆、凉飕飕、空无一人的楼道里坐了两个小时，你感到身心俱疲。（健康-1，精神-1）',
		's 同时，你听说今天有的楼层出了志愿者，有的没有。',
		'jump patrol2-ending'
	],
	'patrol2-notwork': [
		's 今天的你完美地完成了之前的计划：早上睡过头，以至于"忘记"了楼层值班的工作',
		'i 啦啦啦啦，老师，我不好意思啦~',
		's 同时，你听说今天有的楼层出了志愿者，有的没有。',
		'jump patrol2-ending'
	],


	'patrol3': [
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'False': 's 对了，令你高兴（或是沮丧？）的是，当你今天打开楼层群的时候，层长说学校取消了楼层监督员的政策。',
				'True': 's 对了，令你高兴（或是沮丧？）的是，当你今天打开层长群的时候，发现再也没有老师提起楼层监督员的事情了。',
			}
		},
		{
			'Conditional': {
				'Condition': function(){
					const {patrol_obey} = monogatari.storage('story');
					return patrol_obey
				},
				'True': 'i 唉，感觉自己就是白干一场啊。',
				'False': 'next',
			}
		},
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'False': 'i 我去，这不就是瞎折腾吗……',
				'True': 'next',
			}
		},
		'jump patrol3-ending'
	],


});