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
			<p>学校配发的“战疫年货”大家都收到了吗？好多同学都说，今天好像过年了一样，家家户户都置办起了“年货”，感受到了浓浓的暖意。</p>
			<p>其实，对大家来说今天是“过年”，对老师们和志愿者们来说，今天过的更是“劳动节”。不过，只要是过节，我们大家都开心、都高兴！</p>
			<p>……但更重要的是，千万别忘了全天下最惦记你的，就是你的亲人。
			也许你已习惯了报喜不报忧，也许你不敢给家人打电话，怕自己突然破防。但是，不管怎样，给亲人打个电话，报个平安，
			让他们看到，你在宿舍里的生活还都正常，储备物资还有不少存货。让他们知道：你在东急一切都好！
			</p>
			<p>谁无暴风骤雨时，守得云开见月明。我们一起“守”住防疫成果，总有一天，“明月高悬夜空，眼下是春天。”</p>
			<p>时刻爱着大家的 佐佐木老师</p>
		`
	},
	'Day8-letter': {
		title: '致东急X楼所有学生的一封信',
		subtitle: '',
		body: `
			<p>十分抱歉，今天的信件没有如约在今天的第一秒如约而至；今天是我们X楼全体hxd心情复杂的一天，也是一些同学破防的一天。
			相信hxd们已经在速报和信息发布会中了解到，我们楼内有一位hxd的异常情况。在此特别向大家说明：</p>
			<p>这名hxd的身体情况如何？
			该名同学住在4层，自前天晚间起体温偏高，体温自测38.3°C，伴有喉咙痛、全身酸痛等症状；
			昨晚前的历次核酸检测和自测抗原均为阴性，且发热之前未发现其他症状；
			昨天深夜，该名学生加测抗原结果显示异常，学校作出了代配药品及将该名学生转出宿舍的安排，于今日0:05转移至隔离点；
			并要求与该名同学14天内有过接触的师生紧急制动。
			今天上午，该名学生在集中隔离点再次测得抗原结果异常；
			今天下午17:40发布了该名学生昨日下午核酸检测结果，显示异常，并再次复核核酸结果；
			学校经过流调确定了8名师生为该学生密接，今天晚20:00左右，以上8名师生被转运至隔离点；
			今天晚21:00该名学生被转运至东京方舱医院。
			</p>
			<p>“疾风知劲草，板荡识诚臣。”在这个艰难困苦的时间段更需要同学们团结一心。各位hxd请相信，X楼是靠得住的，学校是靠得住的。我们一起努力，尽最大可能护全楼平安！</p>
			<p>始终与大家在一起的 佐佐木老师</p>
		`
	},
	'Day10-letter': {
		title: '致东急X楼所有学生的一封信',
		subtitle: '',
		body: `
			<p>
			今天天气阴有小雨，和前几天相比更凉爽了些，体感温度也更舒适了些。明天不再下雨了，气温有所回升，估计下楼做核酸时也会更舒服一些啦。</p>
			<p>
			……在今日收到的订购物资中，楼宇和楼宇之间物资限量不同的情况确实属实，这其中有主观因素，也有客观因素。
			不过，不管怎么说，确实存在了这个问题，我们楼宇的各位hxd今天到货的物资也确实比一些楼宇少。
			今天学校再一次统一了限额标准，明天我们X楼订购的物资限额也将按照这个标准执行……</p>
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
			最近收到了同学们反响强烈的很多问题，其中很多问题反响特别强烈，特别是今天发放的物资情况让大家失望了。
			我也一直在反思，之前“一封信”的风格和形式是不是远非大家希望看到的？同学们希望获取到的信息和我们提供的信息是不是不太相符？
			我们对每个hxd的关心是不是还远远不够？给各位hxd的信还是否要坚持下去？</p>
			<p>
			各位住楼老师的工作分工以及联系方式已在“导航站”公开。欢迎大家就有关问题随时电话联系，
			也可以在留言板中留言。对于同学们提出的疑问，我们也将在每天晚上进行整合，在一封信中明确回复。
			如果已经解决将告知解决情况，如果正在解决过程中也会通报解决进展，
			如果确实存在困难暂时无法解决也会进行说明并开率寻求替代方案。
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
			同学们切切实实从800多位hxd利益出发的精神让X楼感动！……</p>
			<p>
			……前几日中午同学们反映午餐供应的“咸肉”存在质量问题，经调查和与东京高校后勤配货管理中心联系，已暂停涉事公司的供货资格并待市场监督管理局进一步调查处理。
			学校对此事高度重视，校疫情防控工作领导小组召开专门会议，专题研究如何提升餐食品质，努力为学生提供更加满意的服务……</p>
			<p>
			星光不负赶路人。希望我们X楼的全体hxd更加团结，拿出共同解决问题的勇气和智慧，解决hxd面临的困难和问题。
			目前我们X楼已经实现“脱贫”，我们将共同努力，早日让全体hxd“奔小康”！</p>
			<p>重视每一个hxd关切的 佐佐木老师</p>
		`
	},
	'Day13-letter': {
		title: '致东急X楼所有学生的一封信',
		subtitle: '',
		body: `
			<p>
			见字如唔。在这段时间里，天气有时晴有时雨，形势有时缓有时骤。
			不过，每一位hxd都肯奉献，每一位hxd都有担当，都在聚焦问题、都在寻求解决、都在互帮互助，都在同舟共济。
			在这一场“战疫”的考试中交出了超常的答卷。</p>
			<p>
			关于鲜葱饼干生产日期，相关公司表示：商品包装印刷错误、公司承诺质量没问题、相关部门正在调查中。</p>
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
			岂曰无衣，与子同袍！目前872人的X楼，有着863名同学，7名教师，2名阿姨。
			据不完全统计，仅从4月以来，参与志愿服务的好兄弟已有716人，志愿时长已累计超过3000小时！
			疫情之下，没有什么救世主，每一名挺身而出的兄弟都是我们的英雄！</p>
			<p>感谢每一位hxd的 X楼</p>
			<p>（本信策划、文案、图片制作等由小泽金太郎、山本大雄、羽生大作等同学联合完成）</p>
		`
	},
	'Day15-letter': {
		title: '致东急X楼所有学生的一封信',
		subtitle: '',
		body: `
			<p>
			今天这封信是我给X楼所有hxd的第10封信，不出意外也将是最后一封信了，这一系列的上万字的信件要截稿了。
			因为我们楼内好消息不断、越来越人丁兴旺，同学们也有越来越多的时间在楼外活动，
			所以根据安排，我将暂时不再负责X楼的相关工作，而转向在学校层面开展工作。</p>
			<p>
			这的确是一个难忘又难过的春天。那一天我正在“大操场”牵头开展核酸检测，接到了我们X楼有核酸异常的通报，于是穿上大白来到楼内紧急处置。
			那个时候，我也着实没想到会有近一个月的连续封控。那一天，确实没有让大家吃到热乎的晚饭；那一天的信息通报（也就是给大家写的第一封信）也确实很晚；
			那一天的每一个hxd都给了我足够的温暖和鼓励。不过，我们挺过来了！</p>
			<p>
			我们时刻铭记着一个个X楼的“大日子”。“X楼导航站”横空出世、“东急码”人手一图、“运转力提升计划”持续推进、
			“向楼宇报到”如火如荼、核酸检测一次比一次快、三餐发放一次比一次高效、从“小卖部”到“仓储式超市”再到“网络连锁店”的持续进化、
			“hxd的争霸赛和巅峰赛”风靡一时、“理发盒子”持续开张……我们真的有让X楼变得更好！</p>
			<p>
			Hxd们！总有千万般不舍，到了说再见的时候了！让我最后一次和大家说一句，晚安，hxd！</p>
			<p>永远永远永远爱着大家的 佐佐木老师</p>
		`
	},
	'Day6-sanity': {
		title: '“足不出户”政策开始',
		subtitle: '作为出现过阳性病例的楼宇，现进入更严格的封控状态。',
		body: `
			<p>在“足不出户”状态期间，由于憋得慌，每天晚上精神值会-1。</p>
			<p>解除封控状态的时间并不清楚。</p>
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

});

// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

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
					add_health(0);
				},
				'Reverse':function(){
					add_health(0);
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
		'show message Day-start',
		'i 又是一觉睡到中午了！下午干啥呢？',
		'jump Day2-1'
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
	'Day2-1': [
		'jump starve'
	],
	'Day2-2': [
		'jump rainbow'
	],
	'Day2-3': [
		'jump Day2-4'
	],
	'Day2-4': [
		'jump Day2-ending'
	],

	//==========================Day 3===============================
	'Day3': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day3-1'
	
	],
	'Day3-ending': [
		'$ consume_food',
		'show scene #000000 with fadeIn duration 1s',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day4'
	],
	'Day3-1': [
		'jump bureau'
	],
	'Day3-2': [
		'jump starve2'
	],
	'Day3-3': [
		'jump rainbow2'
	],
	'Day3-4': [
		'jump Day3-ending'
	],

	//==========================Day 4===============================
	'Day4': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day4-1'
	],
	'Day4-ending': [
		'p 叮咚！',
		's 在手机群聊里，你收到了一封来自驻楼老师的信',
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
	'Day4-1': [
		'jump bureau2'
	],
	'Day4-2': [
		'jump starve3'
	],
	'Day4-3': [
		'jump rainbow3'
	],
	'Day4-4': [
		'jump Day4-ending'
	],

	//==========================Day 5===============================
	'Day5': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day5-1'
	],
	'Day5-ending': [
		'p 叮咚！',
		's 你又收到了一封来自佐佐木老师的信',
		'show message Day5-letter',
		'a 新来一个水谷，一个伊东……不知道会搞出什么名堂呢',
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day6'
	],
	'Day5-1': [
		'jump bureau3'
	],
	'Day5-2': [
		'jump exodus'
	],
	'Day5-3': [
		'jump balcony'
	],
	'Day5-4': [
		'jump Day5-ending'
	],

	//==========================Day 6===============================
	'Day6': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day6-1'
	],
	'Day6-ending': [
		'show message Day6-sanity',
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		
		'jump Day7'
	],
	'Day6-1': [
		'jump bureau4'
	],
	'Day6-2': [
		'jump exodus2'
	],
	'Day6-3': [
		'jump Day6-4'
	],
	'Day6-4': [
		'jump Day6-ending'
	],


	// ========================== Day 7 ===============================
	'Day7': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day7-1'
	],
	'Day7-ending': [
		'p 叮咚！',
		's 佐佐木老师的每日问候又来了',
		'show message Day7-letter',	
		'a 话说你知道吗，今天东急大学的官方媒体还发送了一篇推文，名字叫做《爸、妈请放心，我在东急挺好的！》',
		'i 学校是唯恐家长不知道事实的真相吗哈哈哈？',
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day8'
	],
	'Day7-1': [
		'jump bureau5'
	],
	'Day7-2': [
		'jump exodus3'
	],
	'Day7-3': [
		'jump starve4'
	],
	'Day7-4': [
		'jump Day7-ending'
	],

	// ========================== Day 8 ===============================
	'Day8': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day8-1'
	],
	'Day8-ending': [
		'p 叮咚！',
		's 佐佐木老师的每日问候又来了',
		'show message Day8-letter',	
		'show scene #000000 with fadeIn',
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day9'
	],
	'Day8-1': [
		'jump Day8-2'
	],
	'Day8-2': [
		'jump exodus4'
	],
	'Day8-3': [
		'jump bureau6'
	],
	'Day8-4': [
		'jump balcony2'
	],
	'Day8-5': [
		'jump Day8-ending'
	],


    // ========================== Day 9 ===============================
	'Day9': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day9-1'
	],
	'Day9-ending': [
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day10'
	],
	'Day9-1': [
		'jump Day9-2'
	],
	'Day9-2': [
		'jump stripe'
	],
	'Day9-3': [
		'jump balcony3'
	],
	'Day9-4': [
		'jump Day9-ending'
	],

	// ========================== Day 10 ===============================
	'Day10': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day10-1'
	],
	'Day10-ending': [
		'p 叮咚！',
		's 佐佐木老师的每日问候又来了',
		'show message Day10-letter',	
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day11'
	],
	'Day10-1': [
		'jump Day10-2'
	],
	'Day10-2': [
		'jump pork'
	],
	'Day10-3': [
		'jump stripe2'
	],
	'Day10-4': [
		'jump bureau7'
	],
	'Day10-5': [
		'jump Day10-ending'
	],

	// ========================== Day 11 ===============================
	'Day11': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day11-1'
	],
	'Day11-ending': [
		'p 叮咚！',
		's 佐佐木老师的每日问候又来了',
		'show message Day11-letter',	
		's 到了晚上，你辗转反侧，为封控的状态而忧愁。（精神-1）',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day12'
	],
	'Day11-1': [
		'jump pork2'
	],
	'Day11-2': [
		'jump stripe3'
	],
	'Day11-3': [
		'jump balcony4'
	],
	'Day11-4': [
		'jump Day11-ending'
	],


	// ========================== Day 12 ===============================
	'Day12': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day12-1'
	],
	'Day12-ending': [
		'p 叮咚！',
		's 佐佐木老师的每日问候又来了',
		'show message Day12-letter',	
		's 到了晚上，你惊喜地发现，楼宇已经解除封控啦！',
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day13'
	],
	'Day12-1': [
		'jump Day12-2'
	],
	'Day12-2': [
		'jump stripe4'
	],
	'Day12-3': [
		'jump Day12-4'
	],
	'Day12-4': [
		'jump Day12-ending'
	],


	// ========================== Day 13 ===============================
	'Day13': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day13-1'
	],
	'Day13-ending': [
		'p 叮咚！',
		's 佐佐木老师的每日问候又来了',
		'show message Day13-letter',	
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day14'
	],
	'Day13-1': [
		'jump Day13-2'
	],
	'Day13-2': [
		'jump pork3'
	],
	'Day13-3': [
		'jump Day13-4'
	],
	'Day13-4': [
		'jump Day13-ending'
	],


	// ========================== Day 14 ===============================
	'Day14': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day14-1'
	],
	'Day14-ending': [
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'$ next_day',
		'jump Day15'
	],
	'Day14-1': [
		'jump Day14-2'
	],
	'Day14-2': [
		'jump Day14-3'
	],
	'Day14-3': [
		'jump bureau8'
	],
	'Day14-4': [
		'jump unseen',
	],
	'Day14-5': [
		'p 叮咚！',
		's 佐佐木老师的每日问候又来了',
		'show message Day14-letter',
		'jump unseen2'
	],


	// ========================== Day 15 ===============================
	'Day15': [
		'show scene dorm with fadeIn',
		'show message Day-start',
		'jump Day15-1'
	],
	'Day15-ending': [
		'$ consume_food',
		'i （今天就到这里吧）',
		'$ ending_trigger',
		'end'
	],
	'Day15-1': [
		'jump Day15-2'
	],
	'Day15-2': [
		'jump Day15-3'
	],
	'Day15-3': [
		'p 叮咚！',
		's 佐佐木老师的每日问候又来了',
		'show message Day15-letter',
		'jump Day15-4'
	],
	'Day15-4': [
		'jump Day15-ending'
	],
	
});