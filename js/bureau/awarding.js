/**
 * =======================================
 * 剧情片段：表彰大会
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上awarding-前缀
 * =======================================
**/

monogatari.characters ({
	
});

monogatari.script ({
	// Important: the destination must be correctly defined
	'awarding-ending': [
		'jump bureau8-ending'
	],

	// The game starts here.
	'awarding': [
        's 你的室友拍了拍你',
        'a 群里发消息了，咱们楼今天晚上要召开志愿者表彰大会。',
		{
			'Conditional': {
				'Condition': function(){
					const {school} = monogatari.storage('player');
					return school<2;
				},
				'True': 'i 啊，表彰大会？这猪肉事件才过去几天，就等不及歌功颂德了？',
				'False': 'i 哦？怎么这个表彰会开得这么早？',
			}
		},
        'a 你看看你这觉悟还是不行，过几天可是国际青年节，你忘了？',
        'a 这时候不冲一下行政KPI，什么时候冲？你看看手机，宣传咱们楼防控事迹的官方文章已经发在网上了。',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 要不要参加这个表彰大会呢?',
				'yes': {
					'Text': '去听听看吧',
					'Do': 'jump awarding-join',
                    'Condition': function(){
						const {leader} = monogatari.storage('player');
						return !leader;
					}
				},
                'yes2': {
					'Text': '作为层长，自然是必须要去的',
					'Do': 'jump awarding-join',
                    'Condition': function(){
						const {leader} = monogatari.storage('player');
						return leader;
					}
				},
				'No': {
					'Text': '不听不听',
					'Do': 'jump awarding-not-join',
                    'Condition': function(){
						const {leader} = monogatari.storage('player');
						return !leader;
					}
				}
			}
		},
	],
	'awarding-not-join': [
		'i 算了，我听这个干嘛？',
        {
			'Conditional': {
				'Condition': function(){
					const {school} = monogatari.storage('player');
					return school<2;
				},
				'True': 'i 还真要跟他们一起“且颂嵩高”？我呸！',
				'False': 'i 这跟我又有什么关系呢？',
			}
		},
		'jump awarding-discussion-entry'
	],
	'awarding-join': [
        'show scene laptop with fadeIn',
		's 你从电脑上加入了表彰大会的直播会议室，发现表彰大会已经开始一段时间了，水谷老师现在正在发言。',
		
		's 佐佐木老师开始宣读获奖志愿者名单……',
		{
			'Conditional': {
				'Condition': function(){
					const {school} = monogatari.storage('player');
                    const {leader} = monogatari.storage('player');
					if(leader && school>=5) {
                        return "leader-school";
                    } else if (leader && school<5) {
                        return "leader";
                    } else {
                        return 'Other';
                    }
				},
				'leader-school': 'jump awarding-leader-school',
				'leader': 'jump awarding-leader',
                'Other': 'jump awarding-ask-performance',
			}
		},
	],
    'awarding-leader': [
		{'Function':{
			'Apply':function(){
				add_food(2);
			},
			'Reverse':function(){
				add_food(-2);
			},
		}},
		'sa 获得优秀层长的同学是：{{player.name}}同学！这位同学将获得薯片一包、可乐一瓶！（物资+2）',
        'jump awarding-ask-performance'
	],
    'awarding-leader-school': [
		{'Function':{
			'Apply':function(){
				add_food(2);
                add_sanity(1);
			},
			'Reverse':function(){
				add_food(-2);
                add_sanity(-1);
			},
		}},
		'sa 获得优秀层长的同学是：{{player.name}}同学!这位同学将获得薯片一包、可乐一瓶！（物资+2）',
        's 你感到无比开心与自豪（精神+1）',
        'jump awarding-ask-performance'
	],


    'awarding-ask-performance': [
        's 念完名单后，佐佐木老师又说道：',
        'sa 再次感谢各位志愿者同学！同时我也想问问大家，我们楼宇最近在拍摄防疫相关的宣传视频，想邀请大家一同参与。',
        'sa 如果大家有什么才艺的话，我们可以在宿舍楼下拍一段小视频，剪辑成小短片宣传出去。大家要来吗？',
        'i 欸？才艺表演？',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 要不要参加才艺表演呢?',
				'yes': {
					'Text': '高兴参与',
					'Do': 'jump awarding-join-performance',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school>=5;
					}
				},
				'No': {
					'Text': '还是算了吧……',
					'Do': 'jump awarding-dialogue-ask',
				}
			}
		},
	],
    'awarding-join-performance': [
		{'Function':{
			'Apply':function(){
                add_sanity(1);
			},
			'Reverse':function(){
                add_sanity(-1);
			},
		}},
        's 你高兴地答应了宣传视频的录制，你计划在宿舍楼下拍一段弹吉他的视频（精神+1）',
        'jump awarding-dialogue-ask'
	],
    'awarding-dialogue-ask': [
        'mi 接下来，我们也邀请到了几位志愿者同学代表来谈谈他们的感想……',
        'a:normal 哇，这个表彰大会还挺长的欸',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 要不要继续听吗?',
				'yes': {
					'Text': '听听看',
					'Do': 'jump awarding-join-dialogue',
				},
				'No': {
					'Text': '不听了',
					'Do': 'jump awarding-quit-dialogue',
				}
			}
		},
	],
    'awarding-quit-dialogue': [
		'i 算了，我听这个干嘛？',
        's 你退出了会议室',
        'show scene dorm with fadeIn',
		'jump awarding-discussion-entry'
	],
    'awarding-join-dialogue': [
        's 你决定继续听听看',
		's 对谈持续了很久。表彰大会结束后，你退出了会议室',
        'show scene dorm with fadeIn',
        'jump awarding-discussion-entry'
	],

	'awarding-discussion-entry': [
        {
			'Conditional': {
				'Condition': function(){
					const {school} = monogatari.storage('player');
					return school>=4;
				},
				'True': 'jump awarding-ending',
				'False': 'jump awarding-discussion',
			}
		},
	],
	'awarding-discussion': [
		'show character a normal',
		'i 你说，佐佐木老师前后搞这么多花活儿，累不累啊？',
		'show character a sad',
		'a 当然累啊！你没发现，她白天开完十几个小时的会议，晚上给我们写一封信都写到凌晨一点吗？',
		'i 这信根本没几个人认真看……',
		'show character a normal',
		'a 当然没几个人认真看，但是她不得不写。',
		'a 她好像是学校里新来的行政老师，既不像位高权重的水谷那样可以调动各种资源，又不像以科研为主业的伊东那样可以划水。',
		'a 为了能在考核评估中不被垫底，她必须以适合自己的方式做出“成绩”：写信、组织表彰大会、拍宣传视频，都是这样子。',
		'i 对啊，我这段时间看到社交媒体上好多年轻的行政老师深夜破防了……',
		'i 为什么基层老师和学生都很累，都做了很多，但大家最后都不满意呢？',
		'hide character a',
		's 你和室友都陷入了短暂的沉思。',
        'jump awarding-ending',
	],


});