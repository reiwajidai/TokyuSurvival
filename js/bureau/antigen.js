/**
 * =======================================
 * 剧情片段：抗原
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上antigen-前缀
 * =======================================
**/

monogatari.characters ({
	'zyz': {
		name: '志愿者同学',
		color: 'rgb(0, 168, 138)',
	},
});

monogatari.script ({
	// Important: the destination must be correctly defined
	'antigen-ending': [
		'jump bureau3-2'
	],
	'antigen2-ending': [
		'jump bureau5-2'
	],

	// The game starts here.
	'antigen': [
		'play sound knocking_door',
		's 早上，睡梦中的你被一阵敲门声吵醒',
		'zyz {{player.name}}同学，请记得提交你的抗原检测结果',
		'zyz {{player.name}}同学！！',
		'i 欸欸欸，好的好的（你躺在床上应着）',
		'i 这就是人工叫早服务？话说这个抗原结果为什么一定要早上提交啊！',
		'a 其实你也可以今天零点提交，零点提交的结果也算作早上的',
		'a 但是的确，八点半这个提交时间实在是太早了。我听着走廊上一直都是志愿者同学的敲门声。',
		'i 要不要跟老师反映一下这个问题？',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 要不要跟老师反映一下这个问题?',
				'yes': {
					'Text': '反映问题',
					'Do': 'jump antigen-call'
				},
				'No': {
					'Text': '不反映问题',
					'Do': 'jump antigen-not-call'
				}
			}
		},
	],
	'antigen-not-call': [
		'i 算了算了，估计也不会有什么结果的吧',
		's 你草草地做完抗原测试，正打算上床睡个回笼觉，却发现已经睡不着了',
		'jump antigen-ending'
	],
	'antigen-call': [
		'play sound ringtones',
		's 你拨通了佐佐木老师的电话',
		'sa 哈啰！同学你好，我是佐佐木老师~',
		'i 老师你好，我想反映一个问题：我们楼每天早上要求八点半提交抗原结果，但这个时间太早了。八点半大多数同学都还没有起床，来不及完成核酸测试。',
		'i 学生志愿者只好挨个敲门提醒，但这样搞得大家都很疲惫。我问其他楼栋的同学说，他们可以九点半、十点提交。如果晚一点提交，志愿者同学也不用挨个敲门，抗原结果也可以收齐一些。',
		'i 所以老师，我们可以早上晚一些提交抗原结果吗？',
		'sa 呃目前这个提交时间是学校要求的哦，没有办法。我们楼目前是处于非封控状态，学校要求早交；你说的楼宇处于封控状态，是可以晚交的',
		'i 为什么封控状态的楼宇反而可以晚交呢，老师？而且，从八点钟推迟到九点钟会产生很严重的影响吗？老师您觉得是不是可以改一改提交时间呢？',
		'sa 没有办法呢，这也是学校上面的安排',
		'i 老师，请问这是哪位领导定的政策？您可以把领导的联系方式给我吗？我去跟他谈。',
		's 佐佐木老师开始做出冗长的解释，但一直没有谈到联系方式的问题',
		{
			'Conditional': {
				'Condition': function(){
					const r = check_gallery('speech');
					return r;
				},
				'True': 's 你很明白，佐佐木老师是不会交出联系方式的。毕竟，佐佐木老师存在的意义，便是替领导阻挡来自学生的直接冲击',
				'False': 's 你的直觉告诉你，你无论如何都拿不到领导的联系方式',
			}
		},
		's 想到这儿，你不禁血压升高，只想开骂，否则觉得自己要憋出病来。但是你还是说道：',
		'i 嗯嗯好的老师，我也没什么可问的了，谢谢您',
		's 你挂断了电话',
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					story:{
						antigen_call: true
					}
				});
			},
			'Reverse':function(){
				monogatari.storage({
					story:{
						antigen_call: false
					}
				});
			},
		}},
		'jump antigen-ending'
	],

	'antigen2': [
		{
			'Conditional': {
				'Condition': function(){
					const {antigen_call} = monogatari.storage('story');
					return antigen_call
				},
				'False': 'jump antigen2-ending',
				'True': 'jump antigen2-angry',
			}
		},
	],
	'antigen2-angry': [
		's 今天是进入封控状态的第一个早上，你失望地发现，抗原结果依然是要求八点半交',
		'i 佐佐木老师说的话就是瞎话，这不封控过后，提交时间根本没有延后吗？',
		'a 我看这个八点半的时间就是佐佐木一个人自己定的',
		'i 她为什么要这么定？',
		'a 卷KPI呗！她定得早一些，结果就早收齐一些。',
		'a 说不定是这样：东京的疾控中心要求是每天中午十二点提交结果，学校于是就要求每天十一点，有的楼栋要求每天十点，而我们的佐佐木老师呢？只有定成八点，她的业绩才能最好看咯！',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 's 室友说的有道理吗？',
				'yes': {
					'Text': '对啊，那不就是层层加码吗？',
					'Do': 'jump antigen2-yes'
				},
				'No': {
					'Text': '室友想太多了，应该是佐佐木老师忘记调整时间了吧',
					'Do': 'jump antigen2-no'
				}
			}
		},
	],
	'antigen2-yes':[
		'i 呵呵，层层加码是吧？',
		'a 对啊，那不然呢？',
		{'Function':{
			'Apply':function(){
				add_school(-1);
				add_sanity(-1);
			},
			'Reverse':function(){
				add_school(1);
				add_sanity(1);
			},
		}},
		's （精神-1）',
		'jump antigen2-ending'
	],
	'antigen2-no':[
		'i 你想太多了，应该是佐佐木老师忘记调整提交时间了吧',
		'a 也有可能，但愿如此',
		'jump antigen2-ending',
	],

});