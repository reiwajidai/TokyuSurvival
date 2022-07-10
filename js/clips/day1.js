/**
 * =======================================
 * 主线
 * 
 * 如何整合进主线剧情：
 * （1）在主线剧情中使用命令：jump Day1
 * （2）在本文件的Day1-ending中设定Day1结束后的回传位置
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上Day1-前缀
 * =======================================
 **/


// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	
});

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Noodles': {
		title: '获得泡面！',
		subtitle: '虽然是老坛酸菜味的，但你觉得也无所谓了',
		body: `
			<p>物资+2</p>
		`
	},
	'Day1-lockdown': {
		title: '紧急通知',
		subtitle: '请全体同学立刻回到寝室待命！',
		body: `
			<p>立刻回到寝室，不要走动！</p>
			<p>等待学校的进一步通知！</p>
		`
	},
});


// Define the Characters
monogatari.characters ({
	'njq': {
		name: '年级群',
		color: '#66ccff',
	},
	'ba': {
		name: '校门保安',
		color: '#66ccff',
	},

});

monogatari.script ({
	// The game starts here.
	'Day1-begin': [
		'show scene dorm with fadeIn',
		'i 寒假过的好快啊！只能不情愿地开学回校咯',
		'i 开学后，该毕设毕设，该答辩答辩，该实习实习',
		'i 今天嘛，又是一觉睡到中午的一天！和平时没什么两样',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 好无聊啊，下午干啥呢?',
				'phone': {
					'Text': '宅寝室玩手机',
					'Do': 'jump Day1-Stay'
				},
				'out': {
					'Text': '去学校外面逛逛',
					'Do': 'jump Day1-Out'
				},
				'south': {
					'Text': '去尝尝南校区的饭菜',
					'Do': 'jump Day1-south'
				}
			}
		}
	],

	'Day1-Stay': [
		'i 好!王者农药，开启！',
        'show scene #000000 with fadeIn',
        'wait 1000',
        'show scene dorm with fadeIn',
		'i 回过神来，我竟然玩了三个小时……',
		'play sound new_message',
        'p （叮咚，未读消息99+）',
        'i 年级群？说啥啊？',
        'njq 由于疫情情况持续加剧，经学校研判，从今天下午三点开始，全体学生不准出校门，后续管理安排稍后公布',
        'njq 重复一遍：全体学生，不许出校门，出了校门的，马上回来！',
        'i 艹？',
        'i 封校了？',
		'njq 学校会保障物资，快递外卖也能进校',
		'i 啊这样，那也没什么大不了的，只是做核酸比较麻烦而已',
		'jump Day1-in-campus'
	],

	'Day1-Out': [
		'i 好!艾尔花园我来啦！',
        'show scene street with fadeIn',
		'i 逛了一圈，白天的艾尔还是冷清了些……',
		'play sound new_message',
        'p （叮咚）',
        'i 年级群？说啥啊？',
        'njq 由于疫情情况持续加剧，经学校研判，从今天下午三点开始，全体学生不准出校门，后续管理安排稍后公布',
        'njq 重复一遍：全体学生，不许出校门，出了校门的，马上回来！',
        'i 艹？',
        'i 封校了？',
        'i 我现在咋整？',
		'play sound choices',
        {
			'Choice': {
				'Dialog': 'i 要不要立刻回学校呢?',
				'Yes': {
					'Text': '立刻回去',
					'Do': 'jump Day1-Return'
				},
				'No': {
					'Text': '再溜达溜达',
					'Do': 'jump Day1-Hanging'
				}
			}
		},
	],

	'Day1-south': [
		'i 好!去尝尝南校区的饭菜吧',
        'show scene street with fadeIn',
		'i 南校区的饭菜，果然一如既往啊',
		'play sound new_message',
        'p （叮咚，未读消息99+）',
        'i 年级群？说啥啊？',
        'njq 由于疫情情况持续加剧，经学校研判，从今天下午三点开始，全体学生不准出校门，后续管理安排稍后公布',
        'njq 重复一遍：全体学生，不许出校门，出了校门的，马上回来！',
        'i 艹？',
        'i 封校了？',
		'i 那还是赶快离开南校区，回宿舍比较好',
		'ba 不好意思同学，现在各个校区都已经封控了，你现在不能出去',
		'i 可我是其他校区的……',
		'ba 不好意思，上面命令就是这样的，你在这里等一会儿吧，等学校的进一步安排',
		's 你向辅导员和同学求助，希望能被转运回校。但却被告知，自己要在南校区待几天了',
		'i 可是吃喝拉撒睡怎么解决啊……',
		's 你在南校区的几天度日如年，和保洁阿姨一起睡桌子睡瑜伽垫睡床板，手上没有电脑，你在想自己的项目面试怎么办。',
		's 过了几天，学校终于将你们送回寝室了，你不禁感慨，自己也算经过磨砺了，往后的生活会好的。',
		's 直到某天晚上……',
		'jump Day1-lockdown',
	],

    'Day1-Return': [
        'i 慌了慌了，赶快回去呆着吧',
        'show scene dorm with fadeIn',
		'i 感觉气氛凝重起来了呢',
        'i 看来是真封校了',
        'njq 学校会保障物资，快递外卖也能进校',
		'i 啊这样，那也没什么大不了的，只是做核酸比较麻烦而已',
		'jump Day1-in-campus'
	],

    'Day1-Hanging': [
        'i 管他呢，先浪再说',
		'i 感觉气氛凝重起来了呢',
		'play sound new_message',
        'p （叮咚）',
        'i 室友发消息了',
        'a {{player.name}}在外面吗？你要不买一点泡面吧，感觉要封好多天了呢',
        'i 纳尼，有那么夸张吗？',
		'play sound choices',
        {
			'Choice': {
				'Dialog': 'i 要不要买点泡面?',
				'Yes': {
					'Text': '买点泡面回寝室(物资+2)',
					'Do': 'jump Day1-Buy'
				},
				'No': {
					'Text': '不用买，直接回学校',
					'Do': 'jump Day1-Return'
				}
			}
		},
	],

    'Day1-Buy': [
        'i 买买买！',
        'show scene dorm with fadeIn',
		'play sound notification',
		'show message Noodles',
		{'Function':{
			'Apply': function(){
				add_food(2);
			},
			'Reverse': function(){
				add_food(-2);
			},
		}},
        'i 害，看来是真封校了',
        'njq 学校会保障物资，快递外卖也能进校',
		'i 啊这样，那也没什么大不了的，只是做核酸比较麻烦而已',
		'jump Day1-in-campus'
	],

	'Day1-in-campus':[
		'show scene #000000 with fadeIn',
		's 生活一天天地过去，被隔离在别的校区的同学也陆续回寝室，住在东京的同学都回家了',
		's 听说后勤人员也能到游泳馆洗澡，你开始习惯这种生活，甚至觉得上网课很好',
		's 直到某天晚上……',
		'jump Day1-lockdown'
	],

	'Day1-lockdown':[
		'show scene dorm with fadeIn',
		'play sound new_message',
		'p （叮咚，未读消息99+）',
        'i 年级群？又说啥啊？',
		'play sound notification',
		'show message Day1-lockdown',
		'i 艹？',
		'show character a normal',
		'a 我回来啦！',
		'i 欸你怎么手上拎着这么多东西？',
		{'Function':{
			'Apply': function(){
				add_food(1);
			},
			'Reverse': function(){
				add_food(-1);
			},
		}},
		'a 封校啦！那还不先去教超屯点货？虽然最后也没抢到什么东西（物资+1）',
		'a 哦对了，我们宿舍楼组建了一个楼层群，现在正在招募楼层长，就是楼层志愿者。你要去吗？',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 要不要志愿去做宿舍楼的楼层长?',
				'Yes': {
					'Text': '去',
					'Do': 'jump Day1-volunteer'
				},
				'No': {
					'Text': '不去',
					'Do': 'jump Day1-notvolunteer'
				}
			}
		},
	],
	'Day1-volunteer':[
		'i 去啊去啊，为同学们做点好事嘛',
		'hide character a',
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					player:{
						leader: true
					}
				});
				return true;
			},
			'Reverse':function(){
				monogatari.storage({
					player:{
						leader: false
					}
				});
			},
		}},
		'jump Day1-ending',
	],
	'Day1-notvolunteer':[
		'i 算了算了，感觉屁事肯定挺多的',
		'hide character a',
		'jump Day1-ending',
	],
});