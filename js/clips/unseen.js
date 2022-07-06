/**
 * =======================================
 * 剧情片段：看不见的人
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上unseen-前缀
 * =======================================
**/

monogatari.characters ({
	'ay': {
		name: '保洁阿姨',
		color: 'rgb(0, 168, 138)',
	},
	'hqqz': {
		name: '后勤群 群主',
		color: 'rgb(0, 168, 138)',
	},
});


// Define the messages used in the game.
monogatari.action ('message').messages ({
	'unseen-sale': {
		title: '校园店铺商品打折促销！',
		subtitle: '生活用品组合，仅需0.1元！',
		body: `
			<p>防疫用品包括：口罩</p>
			<p>生活用品包括：牙刷牙膏、毛巾、香皂、洗发水沐浴露、卫生纸、卫生巾、洗手液等</p>
			<p>劳保用品包括：劳保手套、橡胶手套、其他防护用品</p>
			<p>数量有限，先到先得，请有意者在校园草坪上购买</p>
		`
	},
	'unseen-news': {
		title: '东京读买新闻',
		subtitle: '东急大学33位厨师给8500名师生连续供餐10天，校园平稳有序',
		body: `
			<p>
			学校紧急封闭后，各校区餐饮资源分布本就不均，再加上部分人员无法进校，人手短缺、
			部分食堂需要消杀导致保障能力降低，餐饮供应困难问题突出。
			校长表示，学校有个片区食堂仅有厨师33人，但要为8500名师生提供一日三餐，
			封闭后33位厨师三班倒地为师生提供放心餐饮，连续10天，撑了下来。</p>
			<p>
			校长表示，截至目前，校园内师生员工多轮核酸检测结果均为阴性，校园总体平稳有序，
			“作为校长，我要特别感谢学校教职员工的辛劳和付出，特别感谢东急学子们的理解支持和配合。”</p>
		`
	},
});

monogatari.script ({

    // The game starts here.
	'unseen': [
        's 封校之后，你听说学校后勤的叔叔阿姨们陷入了生活物资短缺的状态',
		'i 也是啊，毕竟大多数叔叔阿姨平日都住在校外，这一封校，家里的东西根本拿不着了',
		'p 叮咚！',
		's 你发现你某个群聊里的同学正想各种方法给后勤人员一些生活用品。一个后勤大叔在群里说，自己缺一份草纸。',
		{
			'Choice': {
				'Dialog': 'i 要不要捐一份草纸给大叔？',
				'donate': {
					'Text': '捐（物资-1）',
					'Do': 'jump unseen-donate',
                    'Condition': function(){
						const {food} = monogatari.storage('player');
						return food>0;
					}
				},
				'nothave': {
					'Text': '可惜我没有',
					'Do': 'jump unseen-ending',
                    'Condition': function(){
						const {food} = monogatari.storage('player');
						return food<=0;
					}
				},
				'notdonate': {
					'Text': '不捐',
					'Do': 'jump unseen-ending',
                    'Condition': function(){
						const {food} = monogatari.storage('player');
						return food>0;
					}
				}
			}
		},
	],
	'unseen-donate':[
		{'Function':{
			'Apply':function(){
				add_food(-1);
			},
			'Reverse':function(){
				add_food(1);
			},
		}},
		's 你将你的草纸转交给了后勤大叔，大叔表示感谢。（精神+1）',
		{'Function':{
			'Apply':function(){
				add_sanity(1);
			},
			'Reverse':function(){
				add_sanity(-1);
			},
		}},
		'jump unseen-ending',
	],

	'unseen2':[
		's 今天，你听说一位后勤阿姨被她的领导训斥了，训斥理由是“后勤服务人员不能收受学生物资”。',
		'a 嘿，那么学校有解决后勤人员的物资短缺问题吗？神奇神奇',
		'jump unseen2-ending',
	],

	'unseen3':[
		'p 叮咚！',
		's 你发现群里出现了这样一条消息',
		'show message unseen-sale',
		'i 这是什么促销，竟然有劳保用品，挺有意思的……',
		'jump unseen3-ending',
	],

	'unseen4':[
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'True': 'jump unseen4-ending',
				'False': 'next',
			}
		},
		'p 叮咚！',
		's 你点开了你手机里的一个群',
		'qya 群友们你们看看这条新闻',
		'show message unseen-news',
		'qya 就是这些保障学校平稳运转、每天工作时间近15小时的后勤叔叔阿姨们，现在基本生活物资都还没人解决。',
		'qya 由于封校突然，有很多校工没来得及带上换洗衣服。现在天气都变热了，我们楼里的一个阿姨还在穿毛衣，一个是捡了同学扔掉的衣服穿。',
		'qyb 如果楼里的有多余的衣服（尤其是夏天的衣服）可以给校工们！',
		'qyc 我刚在几个寝室收集了二三十条短袖，应该够十几个阿姨穿。我一会带给阿姨们，她们可以晚上休息的时候分给其她人。',
		'qyd 不过话说回来，我们是不是也该跟上面部门反映一下这个情况？保证一下校工的物资与薪酬？',
		'qya 嗯嗯同意！',
		'qyb 同意！',
		'qyc 要不大家一同起草一封诉求信吧！',
		{
			'Choice': {
				'Dialog': 'i 要参与诉求信的撰写吗？',
				'broken': {
					'Text': '参与',
					'Do': 'jump unseen4-join',
				},
                'partly': {
					'Text': '不参与',
					'Do': 'next',
				},
			}
		},
		'jump unseen4-ending',
	],

	'unseen4-join':[
		's 你参与到诉求信的撰写当中，感觉自己为后勤校工也回馈了一些微小的力量。（精神+1）',
		{'Function':{
			'Apply':function(){
				add_sanity(1);
			},
			'Reverse':function(){
				add_sanity(-1);
			},
		}},
		'jump unseen4-ending',
	],

	'unseen5':[
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'True': 'jump unseen5-ending',
				'False': 'next',
			}
		},
		'p 叮咚！',
		's 你看群消息说，有关部门已经收到了群友撰写的关于后勤人员保障措施的诉求信。',
		'jump unseen5-ending',
	],

	'unseen6':[
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'True': 'jump unseen6-ending',
				'False': 'next',
			}
		},
		'p 叮咚！',
		's 你打开了之前给后勤人员写诉求信的消息群。',
		'hqqz 是在抱歉各位，基于各方面的考虑，我决定还是解散这个群。',
		'i 啊……这样……',
		'jump unseen6-ending',
	],

    'unseen7': [
        's 今天晚上正好碰上楼层放风的时间，于是你开始下楼活动',
        'show scene #000000 with fadeIn',
        's 活动结束刚准备回寝室，你便在楼下碰见了负责楼栋保洁的阿姨。但今天的阿姨，眼泪在眼眶里打转。',
        'i 阿姨你怎么了？有什么事吗？',
        'ay 怎么摊上这种事，走也走不掉……',
        'ay 学校封了之后，只有两个人负责我们这边三栋楼。而且每天的垃圾数量比以往多了快一倍……',
        'ay 工资还是只有两三千，还得每天花二十几块钱买盒饭，哪里够用哦……',
        'i 阿姨你们这么加班，能有些加班费吗？',
        'ay 哪里有这些？没有……',
        'ay 不干了，这疫情结束了我就不干了……',
        's 你不知道应该回答什么，只得安慰了阿姨一会，默默地回到寝室',

        'show scene dorm with fadeIn',
        's 你跟你的室友说起了这件事，室友回答道：',
        'show character a sad',
        'a 这些阿姨都是学校外包的，工资很低，特别累',
        'a 阿姨疫情前还能出去做兼职，现在兼职也没有，一个月三千的工资，买学校的盒饭都舍不得',
        's 你与室友相顾无言',
        'hide character a',
		'jump unseen7-ending',
	],

    'unseen8': [
        'a “职工阿姨……孤勇者”，呵呵！佐佐木竟然说的没错呢。学生在网上织围脖，学校尚且还会在形式上应一应。',
		'a 而阿姨们的困境呢？恐怕有关领导根本不会正眼瞧上哪怕一眼吧！这种无人知晓、无人关心的孤单境地，真可以被叫做“孤勇者”呢！',
		'a 但都无所谓了：所有的苦难，都将成为滋养宣传机器的祭品。召唤一些动人事迹，抛洒一些虚幻泪水，从而让一切都在感动、感恩中翻篇。',
		'a 翻篇之后，所有人都可以卸下这几个月的负担，以一种从未经历这一切的心态，重新拥抱曾经伤害了自己的世界。',
		'a 翻篇之后，过去的历史虽然还铭刻在某处的档案里，但它在大家心中，已经彻底死了！',
		'a 永远沉睡吧！啊哈哈哈哈！啊哈哈哈哈……',
		{
			'Choice': {
				'Dialog': 'i 听着室友的言辞，你觉得……',
				'broken': {
					'Text': '他不会是坏掉了吧？',
					'Do': 'next',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school>=5;
					}
				},
                'partly': {
					'Text': '他不会是坏掉了吧？但说得还有点道理……',
					'Do': 'next',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school>0 && school<5;
					}
				},
				'agree': {
					'Text': '他确乎是坏掉了，但TMD说得太对了！',
					'Do': 'next',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school<=0;
					}
				}
			}
		},
		'jump unseen8-ending',
	],
});