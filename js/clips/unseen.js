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
});

monogatari.script ({

    // The game starts here.
    'unseen': [
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
		'jump unseen-ending',
	],

    'unseen2': [
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
		'jump unseen2-ending',
	],
});