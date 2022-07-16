/* global monogatari */


/**
 * =======================================
 * 
 * Monogatari框架的基础设定
 * 
 * =======================================
 **/


// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Day-start': {
		title: '第{{player.day}}天',
		subtitle: '看看你的状态和物品如何',
		body: `
			<p>健康={{player.health}} 精神={{player.sanity}} 学业={{player.study}}</p>
			<p>物资x{{player.food}}</p>
			<p>记得第11天要考试哦~</p>
		`
	},
	'Final-Day-start': {
		title: '第{{player.day}}天',
		subtitle: '今天是最后一天，看看你的状态和物品如何',
		body: `
			<p>健康值={{player.health}} 精神值={{player.sanity}}</p>
			<p>物资x{{player.food}}</p>
		`
	},
	'Day2-eat': {
		title: '进食的妙用',
		subtitle: '每天晚上，玩家可通过消耗“物资”点数来完成进食。',
		body: `
			<p>在健康值小于5时，消耗1点物资可回复1点健康。</p>
			<p>在健康值等于5时，消耗2点物资可回复1点精神。</p>
			<p>每天晚上通过进食最多恢复1点属性。</p>
		`
	},
	'Day4-letter': {
		title: '致东急X楼所有学生的一封信',
		subtitle: '',
		body: `
			<p>各位同学，晚上好！很抱歉由于突发紧急情况，让大家暂时饿了肚子。</p>
			<p>……由于核酸检测中出现异常情况，我们今天下午直到现在对部分人员进行了紧急摸排。
			根据防疫要求，为了保障同学们的健康和安全，防止餐食被污染，核酸摸排与餐食发放不可同时进行。
			根据食品健康要求，餐食做好2小时食用可能出现食品安全问题，做好4小时以上确定不可食用。因此原定给的盒饭很抱歉地不能给大家食用。</p>
			<p>同时，为了帮助大家及时进行检测，少睡懒觉，我们还增加了“人工叫早”服务。
			如果你在ddl前没有按时提交报告，那么将会有志愿者人工敲门叫早哦！为了体谅同学们，请大家还是按时提交哦！……</p>
			<p>特殊时期更要团结一心，我们一起加油！！！真的大家都特别辛苦，不过我们还是要一手坚决抓防疫、一手保正常生活，我们一起努力！</p>
			<p>爱大家的 佐佐木老师</p>
		`
	},
	'Day5-letter': {
		title: '致东急X楼所有学生的一封信',
		subtitle: '',
		body: `
			<p>展信佳。昨天的狂风暴雨让今天的温度骤降。大家做核酸的时候有没有听昨天信里的温馨提示，多穿点呀？</p>
			<p>……大家有没有发现，今天我们的“X楼天团”更强了？根据昨天学校的集中统一部署，全校每栋宿舍楼宇都会迎来“大家长”。
			昨天夜里，A学院副院长水谷虎老师乘着月色来到我们楼，从今日起正式作为X楼的总指挥长。
			B学院研究员伊东阳一老师也作为X楼的“紧急联络人”倾情加盟，在楼宇外围为同学们提供各项支持。
			在东急X楼，我们不是孤身一人！……</p>
			<p>分享给大家一首学生合唱团的原创歌曲《晨曦》，希望大家保持信心、坚定决心、多点耐心、稳住躁动的心，一定会有晨曦到来的那一天！</p>
			<p>最爱大家的 佐佐木老师</p>
		`
	},
	'Day7-letter': {
		title: '致东急X楼所有学生的一封信',
		subtitle: '',
		body: `
			<p>今天是Day7， 你还好吗？感谢大家克服一切配合学校防疫工作。大家都辛苦了。
			我们每一个人都在隐忍，在克制，在付出，在积极配合，大部分人默默消化着自己的情绪。</p>
			<p>
			面对家人，也许你已习惯了报喜不报忧，也许你不敢给家人打电话，怕自己突然破防。但是，不管怎样，给亲人打个电话，报个平安，
			让他们看到，你在宿舍里的生活还都正常，储备物资还有不少存货。让他们知道：你在东急一切都好！
			</p>
			<p>时刻爱着大家的 佐佐木老师</p>
		`
	},
	'Day8-letter': {
		title: '致东急X楼所有学生的一封信',
		subtitle: '',
		body: `
			<p>十分抱歉，今天的信件没有如约在今天的第一秒如约而至；今天是我们X楼全体hxd心情复杂的一天，也是一些同学破防的一天。
			相信hxd们已经在速报和信息发布会中了解到，我们楼内有一位hxd的异常情况。</p>
			<p>“疾风知劲草，板荡识诚臣。”在这个艰难困苦的时间段更需要同学们团结一心。
			各位hxd请相信，X楼是靠得住的，学校是靠得住的。我们一起努力，尽最大可能护全楼平安！</p>
			<p>始终与大家在一起的 佐佐木老师</p>
		`
	},
	'Day10-letter': {
		title: '致东急X楼所有学生的一封信',
		subtitle: '',
		body: `
			<p>
			今天天气阴有小雨，和前几天相比更凉爽了些。明天不再下雨了，估计下楼做核酸时也会更舒服一些啦。</p>
			<p>
			……在今日收到的订购物资中，楼宇和楼宇之间物资限量不同的情况确实属实，这其中有主观因素，也有客观因素。
			今天学校再一次统一了限额标准，明天我们X楼订购的物资限额也将按照这个标准执行……</p>
			<p>
			今天徘徊在我脑海的，一直想问大家的一个问题：假如你是负责学校小卖部物资的那位总管，
			你会如何做？以及你能不能做到更好，能不能在保障疫情防控的前提下响应全校师生的物资期待?</p>
			<p>
			关于同学们提到的“不明物体”的现象，食品安全是生命线，每一位“守护者”们都极其重视，尽最大的可能予以避免。
			如果真的确实遇到相关事件，请大家不要担心，一定要第一时间与住楼老师、楼层长联系，学校一定会在每一个饭盒中保障每一个东急人的食品安全！</p>
			<p>陪你说晚安的 佐佐木老师</p>
		`
	},
	'Day11-letter': {
		title: '致东急X楼所有学生的一封信',
		subtitle: '',
		body: `
			<p>
			最近收到了同学们反响强烈的很多问题，其中很多问题反响特别强烈，
			我也一直在反思，之前“一封信”的风格和形式是不是远非大家希望看到的？同学们希望获取到的信息和我们提供的信息是不是不太相符？
			我们对每个hxd的关心是不是还远远不够？给各位hxd的信还是否要坚持下去？</p>
			<p>
			各位住楼老师的工作分工以及联系方式已在“导航站”公开。欢迎大家就有关问题随时电话联系，
			也可以在留言板中留言。对于同学们提出的疑问，我们也将在每天晚上进行整合，在一封信中明确回复。
			</p>
			<p>
			各位hxd，我一直都在关注着我们每个同学的留言和观点，hxd们最大的需求其实就是【信息公开透明】和【物资保障到位】。
			出现问题不可怕，可怕的是问题得不到解决或者同一个问题再次出现。我们将切实回应同学们的各项需求，努力让各位hxd满意。</p>
			<p>始终和你在一起的 佐佐木老师</p>
		`
	},
	'Day12-letter': {
		title: '致东急X楼所有学生的一封信',
		subtitle: '',
		body: `
			<p>
			这两天各位hxd针对物资、餐食、饮水、信息公开等陆续提出了一系列意见建议，提问逻辑清晰、特别有条理、聚焦问题特别明确。
			同学们切切实实从hxd利益出发的精神让X楼感动！……</p>
			<p>
			……前几日中午同学们反映午餐供应的“咸肉”存在质量问题，经调查和与东京高校后勤配货管理中心联系，已暂停涉事公司的供货资格并待市场监督管理局进一步调查处理。
			学校对此事高度重视，校疫情防控工作领导小组召开专门会议，专题研究如何提升餐食品质，努力为学生提供更加满意的服务……</p>
			<p>
			今日鸡汤：疫情如同一面放大镜，照出人类发展方式和生活方式的痼疾，照出全球治理体系的短板，
			告诫我们要勇手变革、善于行动。若是你正茫然不知所措，也请重新振作，毕竟除了自我治愈与振作，人生从来没有退路。</p>
			<p>重视每一个hxd关切的 佐佐木老师</p>
		`
	},
	'Day13-letter': {
		title: '致东急X楼所有学生的一封信',
		subtitle: '',
		body: `
			<p>
			见字如唔。在这段时间里，我们共同见证着一段历史，也许是东京百年都难遇的一段特殊时期。
			但请大家相信，只要有人的地方，世界就不会是冰冷的，有那么多可爰的人在没日没夜奋斗着，
			是所有普通人的勇敢，造就着一座城的伟大。所以请相信曙光一定会按时到来，到那时东京还是那个东京，东急还是你深爱的母校。</p>
			<p>
			各位hxd，大家注意到了吗，做完核酸回宿舍的路上，一朵朵紫色的小花在绽放。
			学校已经陆续对各校区非封控楼宇开启了楼下活动的计划，相信，X楼的楼下活动不是梦，我们走出校园不是梦，实现动态清零也不是梦！
			兄弟们，晚安，好梦！愿你梦到花香~</p>
			<p>愿你梦到花香的 佐佐木老师</p>
		`
	},
	'Day14-letter': {
		title: '致东急X楼所有学生的一封信',
		subtitle: '',
		body: `
			<p>
			明天也将是近10多天以来第一个“无核酸日”。期待不久的将来，我们就将正式解除封控啦。
			在封控的这段时间里，始终给予我们勇气、力量和信心的是我们志愿者兄弟们。今天，请各位hxd允许我向大家介绍他们，他们真的值得！</p>
			<p>
			那起始于一个与倒春寒不期而遇的三月，原本是人间最美四月天的光景也在封控之下黯然失色。
			封控前夜，X楼临时党支部应时成立，一大批党员同志云集响应，越来越多的同学也积极行动起来，踊跃参与到志愿服务当中。
			而职工阿姨，她们是穿梭在黑白之间的孤勇者，污泥满身独自对峙疫情围困下的绝望，愚公移山般不断为生活刷新，维持着混乱下少有的秩序与尊严。
			那些我们每天都会点开的链接，每天都会收到的温热的饭菜，一封封饱含温暖和关切的信件，背后都凝聚着一片片心血。</p>
			<p>
			岂曰无衣，与子同袍！疫情之下，没有什么救世主，每一名挺身而出的兄弟都是我们的英雄！</p>
			<p>感谢每一位hxd的 X楼</p>
			<p>（本信策划、文案、图片制作等由小泽金太郎、山本大雄、羽生大作等同学联合完成）</p>
		`
	},
	'Day6-sanity': {
		title: '“足不出户”政策开始',
		subtitle: '作为出现过阳性病例的楼宇，现进入更严格的封控状态。',
		body: `
			<p>不能打水，不能洗衣服，第一批线上订购的物资滞留无法发放。满足最基本的需求都开始变得困难重重。</p>
			<p>在“足不出户”状态期间，由于憋得慌，每天晚上精神值会-1。而且解除封控状态的时间并不清楚。</p>
		`
	},
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: '欢迎',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
	'Content': `
		<h5>Contact</h5>
		<p>The developers are welcoming similar stories from game players to further enrich
		the game experience. If you are willing to provide these, feel free to contact us by following email:</p>
		<p><u>reiwajidai@protonmail.com</u></p>
		<p>You can also visit our github page to follow or join the game development</p>
		<a href='https://github.com/reiwajidai/TokyuSurvival'><u>Click to visit Github page</u></a>
		<p>-</p>
		<h5>Producer</h5>
		<p>Mizutani Ko</p>
		<p>-</p>
		<h5>Story</h5>
		<p>Ito Yoichi</p>
		<p>-</p>
		<h5>Programming</h5>
		<p>Hirata Ichiro</p>
		<p>-</p>
		<h5>Graphics</h5>
		<p>Sasaki Michiko</p>
		<p>-</p>
		<h5>Music & SFX</h5>
		<p>Suzuki Keiko</p>
		<p>-</p>
		<h5>Testing</h5>
		<p>Suzuki Michiko</p>
		<p>-</p>
		<h5>Special Thanks</h5>
		<p>Suzuki Michiko</p>
	`,
});

// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {
	// story gallery
	'badge':'badge.png',
	'rainbow':'rainbow.jpg',
	'poet':'poet.png',
	'speech':'speech.png',
	'crown':'king.png',
	// ending gallery
	'pdf':'pdf.PNG',
    'positive':'positive.png',
	'fish':'fish.png',
	'tea': 'tea.png',
    'safe':'ending-safe.png',
    'depressed':'ending-depressed.png',
    'confused':'ending-confused.png',
    'reboot':'ending-reboot.png',
    'fight':'ending-fight.png',
	// rare gallery
    'artist': 'artist.png',
	'dice': 'dice.png',
});

// Define the music used in the game.
monogatari.assets ('music', {
	'normal': 'bgm_normal.mp3',
	'internationale': 'bgm_internationale.mp3',
	'sad': 'bgm_sad.mp3',
	'crowd': 'bgm_crowd.mp3',
	'good_ending': 'good_ending.mp3',
	'bad_ending': 'bad_ending.mp3',
	'normal_ending': 'normal_ending.mp3',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'choices': 'choices.mp3',
	'click_button': 'click_button.mp3',
	'envelope_unfold': 'envelope_unfold.mp3',
	'knocking_door': 'knocking_door.mp3',
	'meow': 'meow.mp3',
	'new_gallery': 'new_gallery.mp3',
	'new_message': 'new_message.mp3',
	'new_day': 'next_day.mp3',
	'notification': 'notification.mp3',
	'ringtones': 'ringtones.mp3',
	'typing': 'typing.mp3',
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'gate': 'gate.png',
	'street': 'street.png',
	'dorm': 'dorm.png',
	'laptop': 'laptop.png',
	'balcony': 'balcony.png',
});


// Define the Characters
monogatari.characters ({
	'i': {
		name: '{{player.name}}',
		color: 'rgb(234, 131, 0)',
	},
	's': {
		name: '',
		color: '#000000',
	},
	//整活人设：相对情绪化，容易被带动，精力充沛
	'a': {
		name: '冈田 茂（室友）',
		color: '#ff6666',
		directory:'mateA',
		sprites:{
			normal:'normal.png',
			angry:'angry.png',
			sad:'sad.png',
			happy:'happy.png',
		},
		expressions:{
			normal:'expressions/normal.png',
			angry:'expressions/angry.png',
			sad:'expressions/sad.png',
			happy:'expressions/happy.png',
		},
		// default_expression: 'normal',
	},
	//2G人设：逃避，放弃思考，整日睡觉
	'b': {
		name: '小野 裕太（室友）',
		color: '#ff6666',
		directory:'mateB',
		sprites:{
			normal:'normal.png'
		}
	},
	'p': {
		name: '手机',
		color: '#66ccff',
	},
	'qz': {
		name: '群主',
		color: 'rgb(0, 168, 138)',
	},
	'qya': {
		name: '群友A',
		color: 'rgb(0, 168, 138)',
	},
    'qyb': {
		name: '群友B',
		color: 'rgb(0, 168, 138)',
	},
    'qyc': {
		name: '群友C',
		color: 'rgb(0, 168, 138)',
	},
    'qyd': {
		name: '群友D',
		color: 'rgb(0, 168, 138)',
	},
	'fdy': {
		name: '辅导员',
		color: '#00cc33',
	},
});


/**
 * =======================================
 * 
 * 各种自定义函数的集散地
 * 
 * =======================================
 **/


// 每天可以用1点食物拿来回复1点健康值
// 健康值回满之后，每天可以用2点食物拿来回复1点精神值
monogatari.$('consume_food', {
	'Choice': {
		'Dialog': 'i 一天结束了，你选择……',
		'sleep': {
			'Text': '直接睡觉',
			'Do': {'Function':{
				'Apply':function(){
					
				},
				'Reverse':function(){
					
				},
			}},
		},
		'hunger': {
			'Text': '吃点零食填填肚子（物资-1，健康+1）',
			'Do': {'Function':{
				'Apply':function(){
					add_food(-1);
                    add_health(+1);
				},
				'Reverse':function(){
					add_food(+1);
                    add_health(-1);
				},
			}},
			'Condition': function(){
				const {food} = monogatari.storage('player');
                const {health} = monogatari.storage('player');
				return (food >= 1)&&(health<5);
			}
		},
        'enjoy': {
			'Text': '吃点零食开心开心（物资-2，精神+1）',
			'Do': {'Function':{
				'Apply':function(){
					add_food(-2);
                    add_sanity(+1);
				},
				'Reverse':function(){
					add_food(+2);
                    add_sanity(-1);
				},
			}},
			'Condition': function(){
				const {food} = monogatari.storage('player');
                const {health} = monogatari.storage('player');
				return (food > 1)&&(health>=5);
			}
		}
	}
});

// 判断结局
monogatari.$('ending_trigger', {
    'Conditional': {
        'Condition': function(){
            const {sanity} = monogatari.storage('player');
            const {health} = monogatari.storage('player');
            if(sanity <= 0) {
                return "End pdf";
            } else if (health <= 0) {
                return "End sick";
            } else {
                return 'Other';
            }
        },
        'End pdf': 'jump ending-pdf',
        'End sick': 'jump ending-positive',
        'Other': 'next',
    }
});
monogatari.$('sleep_condition', {
    'Conditional': {
        'Condition': function(){
            const {sanity} = monogatari.storage('player');
            const {health} = monogatari.storage('player');
            if(sanity < 2) {
                return "depressed";
            } else {
                return 'Other';
            }
        },
        'depressed': 's 在凌晨你失眠醒来，很想家，只好在被窝里小声哭着再睡去',
        'Other': 'next',
    }
});

// 进入下一天
monogatari.$('next_day', {
	'Function':{
        'Apply':function(){
            const {day} = monogatari.storage('player');
            monogatari.storage({
                player:{
                    day: day + 1
                }
            });
            //monogatari.run("show canvas stats");
            // 不用以上语句，以上语句在回滚的时候会报错，而且是uncaught error
            monogatari._actions[0]._configuration.objects.stats.props.drawText();
        },
        'Reverse':function(){
            const {day} = monogatari.storage('player');
            monogatari.storage({
                player:{
                    day: day - 1
                }
            });
            monogatari._actions[0]._configuration.objects.stats.props.drawText();
        },
	}
});


/**
 * =======================================
 * 
 * 故事线
 * 
 * =======================================
 **/


monogatari.script ({
	// The game starts here.
	'Start': [
		'jump Day0'
	],

	//==========================Day 0===============================
	'Day0': [
		'jump Day0-begin',
	],
	'Day0-ending': [
		'jump Day1'
	],

	//==========================Day 1===============================
	'Day1': [
		'jump Day1-begin',
	],
	'Day1-ending': [
		'i （今天就到这里吧）',
		'$ next_day',
		'jump Day2'
	],

	//==========================Day 2===============================
	'Day2': [
		'show scene dorm with fadeIn',
		'play sound new_day',
		'show message Day-start',
		'i 又是一觉睡到中午了！下午干啥呢？',
		'jump Day2-1'
	],
	'Day2-1': [
		'jump starve'
	],
	'starve-ending': [
		'jump study'
	],
	'study-ending':[
		'jump mahjong'
	],
	'mahjong-ending':[
		'jump rainbow'
	],
	'rainbow-ending': [
		'jump Day2-ending'
	],
	'Day2-ending': [
		'show message Day2-eat',
		'$ consume_food',
		'show scene #000000 with fadeIn duration 1s',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day3'
	],

	//==========================Day 3===============================
	'Day3': [
		'show scene dorm with fadeIn',
		'play sound new_day',
		'show message Day-start',
		'jump Day3-1'
	],
	'Day3-1': [
		'jump study2'
	],
	'study2-ending':[
		'jump bureau'
	],
	'bureau-ending': [
		'jump starve2'
	],
	'starve2-ending': [
		'jump unseen'
	],
	'unseen-ending':[
		'jump rainbow2',
	],
	'rainbow2-ending': [
		'jump Day3-ending'
	],
	'Day3-ending': [
		'$ consume_food',
		'show scene #000000 with fadeIn duration 1s',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day4'
	],

	//==========================Day 4===============================
	'Day4': [
		'show scene dorm with fadeIn',
		'play sound new_day',
		'show message Day-start',
		'jump Day4-1'
	],
	'Day4-1': [
		'jump bureau2'
	],
	'bureau2-ending': [
		'jump study3'
	],
	'study3-ending':[
		'jump monopoly'
	],
	'monopoly-ending': [
		'jump unseen2'
	],
	'unseen2-ending':[
		'jump starve3',
	],
	'starve3-ending': [
		'jump rainbow3'
	],
	'rainbow3-ending': [
		'jump Day4-ending'
	],
	'Day4-ending': [
		'play sound new_message',
		'p 叮咚！',
		's 在手机群聊里，你收到了一封来自驻楼老师的信',
		'play sound envelope_unfold',
		'show message Day4-letter',
		'a 佐佐木老师……这交流形式还挺有意思的啊',
		'a 不过这人工叫早服务是什么鬼东西？',
		'$ consume_food',
		'show scene #000000 with fadeIn duration 1s',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day5'
	],


	//==========================Day 5===============================
	'Day5': [
		'show scene dorm with fadeIn',
		'play sound new_day',
		'show message Day-start',
		'jump Day5-1'
	],
	'Day5-1': [
		'jump bureau3'
	],
	'bureau3-ending': [
		'jump exodus'
	],
	'exodus-ending': [
		'jump swap'
	],
	'swap-ending':[
		'jump unseen3'
	],
	'unseen3-ending':[
		'jump balcony',
	],
	'balcony-ending': [
		'jump study4'
	],
	'study4-ending':[
		'jump Day5-ending'
	],
	'Day5-ending': [
		'play sound new_message',
		'p 叮咚！',
		's 你又收到了一封来自佐佐木老师的信',
		'play sound envelope_unfold',
		'show message Day5-letter',
		'a 新来一个水谷，一个伊东……不知道会搞出什么名堂呢',
		'$ consume_food',
		'show scene #000000 with fadeIn duration 1s',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day6'
	],

	//==========================Day 6===============================
	'Day6': [
		'show scene dorm with fadeIn',
		'play sound new_day',
		'show message Day-start',
		'play sound knocking_door',
		's 早上，睡梦中的你被一阵敲门声吵醒',
		'zyz {{player.name}}同学，请记得提交你的抗原检测结果',
		'zyz {{player.name}}同学！！',
		'i 欸欸欸，好的好的（你躺在床上应着）',
		'a {{player.name}}，你也在床上呢？',
		'i 嗯呐',
		'a 我刚看了一下新闻，昨日东京新增病例一万一',
		'i 前几天不也八九千了嘛',
		'a 对啊，不知道啥时候是个头阿……',
		'jump Day6-1'
	],
	'Day6-1': [
		'jump bureau4'
	],
	'bureau4-ending': [
		'jump study5'
	],
	'study5-ending':[
		'jump exodus2'
	],
	'exodus2-ending': [
		'jump unseen4'
	],
	'unseen4-ending': [
		'jump sakura'
	],
	'sakura-ending': [
		'jump Day6-ending'
	],
	'Day6-ending': [
		'show message Day6-sanity',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		'$ consume_food',
		'show scene #000000 with fadeIn duration 1s',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		's 这天晚上，你做了一个关于吃布朗尼蛋糕的美梦。',
		'$ next_day',
		'jump Day7'
	],


	// ========================== Day 7 ===============================
	'Day7': [
		'show scene dorm with fadeIn',
		'play sound new_day',
		'show message Day-start',
		'play sound knocking_door',
		's 早上，睡梦中的你被一阵敲门声吵醒',
		'zyz {{player.name}}同学，请记得提交你的抗原检测结果',
		'zyz {{player.name}}同学！！',
		'i 欸欸欸，好的好的（你躺在床上应着）',
		's 今天是进入封控状态的第一个早上，早餐是由楼层志愿者统一配送的。',
		's 今日份的早饭是：一个菜包，一个发糕，一个鸡蛋，一袋豆浆。你默默地将早饭吃完了。',
		's 今天因为志愿者同学敲门的缘故，你再一次被迫早起。但早起就意味着清醒了吗，好像并不是，你只觉得全身无力，又爬回床上躺着',
		's 但躺着又睡不着了，你只得又忿忿地下床',
		'a {{player.name}}，昨天东京新增多少病例啊？',
		'i 一万三',
		'a 哎哟呦，这日子，长着呐！',
		'jump Day7-1'
	],
	'Day7-1': [
		'jump bureau5'
	],
	'bureau5-ending': [
		'jump exodus3'
	],
	'exodus3-ending': [
		'jump unseen5'
	],
	'unseen5-ending': [
		'jump study6'
	],
	'study6-ending':[
		'jump starve4'
	],
	'starve4-ending': [
		'jump Day7-ending'
	],
	'Day7-ending': [
		'play sound new_message',
		'p 叮咚！',
		's 佐佐木老师的每日问候又来了',
		'play sound envelope_unfold',
		'show message Day7-letter',	
		'i 今天东急大学的官方媒体还发送了一篇推文，名字叫做《爸、妈请放心，我在东急挺好的！》',
		'i 学校是唯恐家长不知道事实的真相吗哈哈哈？',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		'$ consume_food',
		'show scene #000000 with fadeIn duration 1s',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ sleep_condition',
		'$ next_day',
		'jump Day8'
	],

	// ========================== Day 8 ===============================
	'Day8': [
		'show scene dorm with fadeIn',
		'play sound new_day',
		'show message Day-start',
		'play sound knocking_door',
		's 早上，睡梦中的你被一阵敲门声吵醒',
		'zyz {{player.name}}同学，请记得提交你的抗原检测结果',
		'zyz {{player.name}}同学！！',
		'i 欸欸欸，好的好的（你躺在床上应着）',
		'i 冈田，今天的新增数字是一万一',
		'a 欸？好像比昨天少了一些，不是吗？',
		'i 嗯嗯对的。',
		's 今日份的早饭是：一个肉包，一个馒头，一个鸡蛋，一袋豆浆。你默默地将早饭吃完了。',
		'jump Day8-1'
	],
	'Day8-1': [
		'jump brownie'
	],
	'brownie-ending': [
		'jump study7'
	],
	'study7-ending':[
		'jump exodus4'
	],
	'exodus4-ending': [
		'jump unseen6'
	],
	'unseen6-ending': [
		'jump bureau6'
	],
	'bureau6-ending': [
		'jump balcony2',
	],
	'balcony2-ending': [
		'jump Day8-ending'
	],
	'Day8-ending': [
		'play sound new_message',
		'p 叮咚！',
		's 佐佐木老师的每日问候又来了',
		'play sound envelope_unfold',
		'show message Day8-letter',	
		'i 这个信里的hxd是个啥？',
		'a “好兄弟”的拼音首字母',
		'i 哦哦……哈，哈哈。',
		'show scene #000000 with fadeIn',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		'$ consume_food',
		's 你看了看宿舍里空荡荡的食物架子，数数自己十几天没有吃水果了，甚至担心明天能不能拉出屎',
		'i 唉，睡吧睡吧',
		'show scene #000000 with fadeIn duration 1s',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ sleep_condition',
		'$ next_day',
		'jump Day9'
	],


    // ========================== Day 9 ===============================
	'Day9': [
		'show scene dorm with fadeIn',
		'play sound new_day',
		'show message Day-start',
		'play sound knocking_door',
		's 早上，你听见一阵敲门声',
		'zyz {{player.name}}同学，请记得提交你的抗原检测结果',
		'i 欸，好的',
		's 平时死活起不来的你，现在可以自然醒了。大概是生物钟告诉你，现在不起，迟早也会有人叫醒你做抗原，做核酸，登记问卷。',
		'a {{player.name}}，东京新增病例又回到一万三了……',
		'i 唉，反反复复……',
		's 今日份的早饭是：一个花卷，一个馒头，一个鸡蛋，一袋豆浆。你把早饭塞进了自己的嘴里。',
		'jump Day9-1'
	],
	'Day9-1': [
		'jump tiny-cat'
	],
	'tiny-cat-ending': [
		'jump stripe'
	],
	'stripe-ending': [
		'jump study8'
	],
	'study8-ending':[
		'jump balcony3'
	],
	'balcony3-ending': [
		'jump Day9-4'
	],
	'Day9-4': [
		'jump Day9-ending'
	],
	'Day9-ending': [
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		'$ consume_food',
		'show scene #000000 with fadeIn duration 1s',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ sleep_condition',
		'$ next_day',
		'jump Day10'
	],


	// ========================== Day 10 ===============================
	'Day10': [
		'show scene dorm with fadeIn',
		'play sound new_day',
		'show message Day-start',
		's 你很早就醒来了，于是只得下床做核酸，登记问卷。',
		'a {{player.name}}，今天新增多少啊？',
		'i 一万两千五',
		'a 比昨天又下去了一点，不过总的来说还是高位运行',
		's 今日份的早饭是什么你没有在意，你只是机械地把它们塞进了嘴里。',
		'jump Day10-1'
	],
	'Day10-1': [
		'jump pork'
	],
	'pork-ending': [
		'jump stripe2'
	],
	'stripe2-ending': [
		'jump study9'
	],
	'study9-ending':[
		'jump bureau7'
	],
	'bureau7-ending': [
		'jump socialmedia-sasaki',
	],
	'socialmedia-sasaki-ending': [
		'jump Day10-ending'
	],
	'Day10-ending': [
		'play sound new_message',
		'p 叮咚！',
		's 佐佐木老师的每日问候又来了',
		'play sound envelope_unfold',
		'show message Day10-letter',
		'i 感觉字里行间，佐佐木老师也快破防了',
		'a 可不是嘛？这些老师每天千头万绪地，上有领导，下有学生，不破防就怪了。',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		'$ consume_food',
		'show scene #000000 with fadeIn duration 1s',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ sleep_condition',
		'$ next_day',
		'jump Day11'
	],

	// ========================== Day 11 ===============================
	'Day11': [
		'show scene dorm with fadeIn',
		'play sound new_day',
		'show message Day-start',
		'a {{player.name}}，今天是一万两千',
		'i 又少了五百，是吗？',
		'a 对，按这个减弱速度推算的话……约莫二十天之后东京可以社会面清零',
		'i 你说巧不巧，跟东京都知事的承诺日期差不多一样？',
		'a 那可不，到时候，不能清零也得清零咯。',
		's 今日份的早饭是一个肉包，一个馒头，一个鸡蛋，一袋豆浆。你小心地咬开肉包的皮，仔细嗅了嗅馅儿的味道。',
		's 似乎没有什么大问题，但你依旧把肉包丢掉了。',
		'jump Day11-1'
	],
	'Day11-1': [
		'jump pork2'
	],
	'pork2-ending': [
		'jump stripe3'
	],
	'stripe3-ending': [
		'jump study10'
	],
	'study10-ending':[
		'jump balcony4'
	],
	'balcony4-ending': [
		'jump tiny-cat2'
	],
	'tiny-cat2-ending': [
		'jump socialmedia-mizutani'
	],
	'socialmedia-mizutani-ending': [
		'jump Day11-ending'
	],
	'Day11-ending': [
		'play sound new_message',
		'p 叮咚！',
		's 佐佐木老师的每日问候又来了',
		'play sound envelope_unfold',
		'show message Day11-letter',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},	
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		'$ consume_food',
		'show scene #000000 with fadeIn duration 1s',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ sleep_condition',
		'$ next_day',
		'jump Day12'
	],


	// ========================== Day 12 ===============================
	'Day12': [
		'show scene dorm with fadeIn',
		'play sound new_day',
		'show message Day-start',
		'i 冈田，今天是一万一千四',
		'a 嗯……',
		's 今日份的早饭是一个菜包，一个花卷，一个鸡蛋，一袋豆浆。你把它们塞进了嘴里。',
		'jump Day12-1'
	],
	'Day12-1': [
		'jump exodus5'
	],
	'exodus5-ending': [
		'jump tea'
	],
	'tea-ending': [
		'jump Day12-ending'
	],
	'Day12-ending': [
		'play sound new_message',
		'p 叮咚！',
		's 佐佐木老师的每日问候又来了',
		'play sound envelope_unfold',
		'show message Day12-letter',	
		's 到了晚上，你惊喜地发现，楼宇已经解除封控啦！',
		'$ consume_food',
		'show scene #000000 with fadeIn duration 1s',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day13'
	],

	// ========================== Day 13 ===============================
	'Day13': [
		'show scene dorm with fadeIn',
		'play sound new_day',
		'show message Day-start',
		's 你躺着床上看了看手机，今天东京播报的新增病例数是一万零五百，你没再跟冈田聊起这事',
		's 今日份的早饭是一个菜包，一个花卷，一个鸡蛋，一袋豆浆。',
		'jump Day13-1'
	],
	'Day13-1': [
		'jump pork3'
	],
	'pork3-ending': [
		'jump tea2'
	],
	'tea2-ending':[
		'jump exodus6'
	],
	'exodus6-ending':[
		'jump Day13-ending'
	],
	'Day13-ending': [
		'play sound new_message',
		'p 叮咚！',
		's 佐佐木老师的每日问候又来了',
		'play sound envelope_unfold',
		'show message Day13-letter',	
		'$ consume_food',
		'show scene #000000 with fadeIn duration 1s',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day14'
	],


	// ========================== Day 14 ===============================
	'Day14': [
		'show scene dorm with fadeIn',
		'play sound new_day',
		'show message Day-start',
		's 今早你起的很晚，于是把早饭与午饭合着吃了',
		'jump Day14-1'
	],
	'Day14-1': [	
		'jump bureau8'
	],
	'bureau8-ending': [
		'jump unseen7',
	],
	'unseen7-ending': [
		'play sound new_message',
		'p 叮咚！',
		's 佐佐木老师的每日问候又来了',
		'play sound envelope_unfold',
		'show message Day14-letter',
		'jump unseen8'
	],
	'unseen8-ending': [
		'jump last-supper'
	],
	'last-supper-ending': [
		'jump Day14-ending'
	],
	'Day14-ending': [
		'$ consume_food',
		'show scene #000000 with fadeIn duration 1s',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'stop music normal',
		'show scene dorm with fadeIn',
		'show message Final-Day-start',
		'jump ending-choose',
	],
	
});