/**
 * =======================================
 * 剧情片段：食为天
 * 
 * 
 * 【1】
 * 封楼头一天（4.2），学校要求各宿舍楼按规定时间顺序放人打早饭，
 * 但是食堂产能严重不足，队伍排满了食堂一直排过桥。
 * 一半的同学排了仨小时队后被告知由于要准备午饭不给早饭了，只能饿着。
 * （健康-1）
 * 
 * 【2】
 * 封楼的前两天要求持打饭通行票在规定时段才可出楼，由学校工作人员监管。
 * 但是晚上有的楼没人监管，就可以出去到罗森买货。
 * 玩家若是选择溜出去，则可以买到一些吃的（食物+2）
 *
 * 【3】
 * 4.8号下午五点的时候，晚饭已经在楼下了。
 * 但是因为通报阳性，说是因为“抗原检测和核酸的防疫要求”之类，
 * 一直拖到七点还没发饭。然后说饭因为露天放了超过两个小时还是四个小时，
 * 按照“防疫规定”不能吃了，只能扔。那个时候外面好多小区饭都吃不上，
 * 八百多份嘴边的盒饭就这么扔了。全楼饿到十一点，然后发了一个奥利奥一个牛奶。
 * （健康-1）
 *
 * 如何整合进主线剧情：
 * （1）在主线剧情中使用命令：jump starve
 * （2）在本文件的starve-ending中设定支线结束后的回传位置
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上starve-前缀
 * =======================================
 **/

 monogatari.script ({

	// Story [1] starts here.
	'starve': [
        {
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'True': 'jump starve-leader',
				'False': 'next',
			}
		},
        'a 这个你也拿一张吧',
        's 室友递给你一张小纸票',
        'i 嗯？这是啥？',
        'a 现在食堂不允许堂食了，每个寝室每顿饭派代表去食堂打包盒饭，这个是出寝室楼的一次性通行证',
        'i 回到凭票供应的时代了吗？哈哈哈',
        'a 咱们寝室三个人，每个人负责一顿饭吧',
        'i 那我负责今天的早饭吧',
        'a 行，你可以早点去',
        'jump starve-choice'
    ],
    'starve-leader': [
		'play sound new_message',
        'p （叮咚）层长群：现在食堂不允许堂食了，每个寝室每顿饭派代表去食堂打包盒饭。现在请各位层长到楼下拿一下出入寝室楼用的通行证，每个寝室每天3张',
        'i 这是回到凭票供应的时代了吗？',
        's 你去楼下拿了通行证，发现现在才早上六点半，室友都还没起床。很明显早饭需要你去拿了，但你现在还有点困。',
		'jump starve-choice'
	],
    'starve-choice': [
		'play sound choices',
        {
			'Choice': {
				'Dialog': 'i 要不要早点去食堂打包早饭?',
				'yes': {
					'Text': '再困也要早去（精神-1）',
					'Do': 'jump starve-early'
				},
				'No': {
					'Text': '睡会再去吧',
					'Do': 'next'
				}
			}
		},
		'stop music normal',
		'play music crowd loop',
        's 你睡到大约早上八点钟，再慢悠悠地去拿早饭。但没想到食堂人手严重不足，学生已经排了很长的队。贪吃蛇一样的队伍排到了食堂外边。',
        's 你排了三个小时的队，但快排到你的时候，你却被告知：由于食堂要准备午饭了，早饭不再供应，现在学校请所有排早饭的同学打道回府',
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
		's 毕竟都十一点了，你决定还是咬咬牙直接排午饭得了，但很明显，你饿了一早上。（健康值-1，精神值-1）',
		'stop music crowd',
		'play music normal loop',
		'jump starve-ending'
	],
    'starve-early': [
		'stop music normal',
		'play music crowd loop',
        {'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
                add_sanity(1);
			},
		}},
        's 你早早地去排了队，拿到早饭后你发现：因为食堂人手严重不足，学生已经排了很长的队。贪吃蛇一样的队伍排到了食堂外边。',
        's 后来你听说，有一半的同学排了三个小时的队，却在最后被告知：由于食堂要准备午饭了，早饭不再供应。你不禁暗自庆幸自己的决断。',
		'stop music crowd',
		'play music normal loop',
		'jump starve-ending'
	],

	// Story [2] starts here.
	'starve2': [
        's 你发现你的舍友正在叹气',
		'i 怎么啦，不开心的样子？',
		'a 现在要有一次性通行证，才能在规定时段出楼。但是，我们的物资好像不太够了，最好还是再买点。',
		'i 对啊对啊，中午打饭的时候，楼下宿管大叔还在看着大门呢，没证根本出不了门',
		'a 欸不过，现在已经晚上十点了欸，宿管大叔总不会十几个小时一直看着吧',
		'a 要不要试着下楼看看大叔在不在？不在的话，咱们就溜去小卖部买点吃的用的？',
		'i 啊虽然听起来不错，但万一跟阳性患者有接触，自己也阳了怎么办？',
		'a 也对哦，挺难抉择的一个问题……',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 要不要溜去小卖部买点吃的用的?',
				'yes': {
					'Text': '去去去！（物资+2）',
					'Do': 'jump starve2-go'
				},
				'No': {
					'Text': '算了吧，免得被抓到之后挨骂',
					'Do': 'next'
				}
			}
		},
		'i 算了算了，万一被抓住了，或者自己阳了咋办？',
		'jump starve2-ending'
	],
	'starve2-go': [
		'i 好主意，走走走！',
		{
			'Conditional': {
				'Condition': function(){
					const result = Math.random();
					if(result <= 0.25) {
						return "success-with-covid";
					} else if (result >= 0.5) {
						return "success";
					} else {
						return 'fail';
					}
				},
				'fail': 'jump starve2-fail',
				'success-with-covid': 'jump starve2-covid',
				'success': 'next',
			}
		},
		{'Function':{
			'Apply':function(){
				add_food(2);
				monogatari.storage({
					story:{ starve_escape: true }
				});
			},
			'Reverse':function(){
                add_food(-2);
				monogatari.storage({
					story:{ starve_escape: false }
				});
			},
		}},
        's 你和室友偷偷溜去小卖部买了一些必要物品。所幸，晚上宿管大叔暂时不在，你们没有被发现。（物资+2）',
		//'a 应该不会因为偷偷溜出去而被感染吧哈哈哈？',
		'jump starve2-ending'
	],
	'starve2-fail': [
		's 你和室友打算偷偷溜去小卖部。然而，刚溜出宿舍门，就被宿管大叔喝止了。',
		'a 唉，算了算了，那就回寝室吧。',
		'jump starve2-ending'
	],
	'starve2-covid': [
		{'Function':{
			'Apply':function(){
				add_food(2);
				monogatari.storage({
					story:{ starve_positive: true, }
				});
			},
			'Reverse':function(){
                add_food(-2);
				monogatari.storage({
					story:{ starve_positive: false, }
				});
			},
		}},
		's 你和室友偷偷溜去小卖部买了一些必要物品。所幸，晚上宿管大叔暂时不在，你们没有被发现。（物资+2）',
		'a 应该不会因为偷偷溜出去而被感染吧哈哈哈？',
		'jump starve2-ending'
	],


    // Story [3] starts here.
	'starve3': [
        's 时间来到了晚上，不知为何，已经晚上6点了，但学校的盒饭一直没有送来',
		'i 今晚的晚饭怎么还没来啊？',
		'a 群里说下午五点的时候，晚饭已经在楼下了。但是因为通报阳性，说是因为“抗原检测和核酸的防疫要求”之类，一直没有安排发饭。',
		'i 那这……咱们再等等？',
		'a 对啊，还有什么办法呢？',
		's ……等到晚上7点了，还是没有发饭。',
		'a 艹！群里说因为晚饭露天放了超过两个小时，按照“防疫规定”不能吃了，只能扔。',
		'i 外面好多小区饭都吃不上，这八百多份嘴边的盒饭就这么扔了？',
		'a ……后续学校会补发一点干粮给大家。真的是服了。',
		{'Function':{
			'Apply':function(){
				add_health(-1);
			},
			'Reverse':function(){
				add_health(1);
			},
		}},
		's 于是，全楼饿到当晚十一点，然后发了一个奥利奥一个牛奶。（健康-1）',
		'jump starve3-ending'
	],


	'starve4': [
		{
			'Conditional': {
				'Condition': function(){
					const {starve_positive} = monogatari.storage('story');
					return starve_positive
				},
				'False': 'jump starve4-ending',
				'True': 'jump starve4-positive',
			},
		},
	],
	'starve4-positive': [
		{'Function':{
			'Apply':function(){
				add_health(-8);
			},
			'Reverse':function(){
				add_health(8);
			},
		}},
		'jump ending-positive'
	],


});
