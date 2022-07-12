/**
 * =======================================
 * 剧情片段：语言艺术
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上speech-前缀
 * =======================================
 **/

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'speech-unlocked': {
		title: '解锁画廊：语言艺术',
		subtitle: '',
		body: `
			<p>你和室友就“官僚主义”话题畅谈到深夜</p>
			<p>精神值+2</p>
		`
	},
});

 monogatari.characters ({
	'yam':{
		name: '山口 雄（层长）',
		color: 'rgb(0, 168, 138)',
	},
	'fuj':{
		name: '藤本 启介（层长）',
		color: 'rgb(0, 168, 138)',
	}
});

 monogatari.script ({
	// Important: the destination must be correctly defined
	'speech-ending': [
		'jump bureau7-ending'
	],


	// The game starts here.
	'speech': [
		'a {{player.name}}，你听说了二号楼物资订购的事吗？',
		'i 不知道欸，什么事啊？',
		'a 之前我们楼订购物资的时候，每件商品是3件封顶对吧？然而二号楼是20件……',
		'i 啊？为什么他们可以拿那么多？',
		'a 反正现在学生群里意见很大呢，到现在学校也没解释呢。',
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		's 你觉得分配物资时出现分配不均的问题尚且可以忍受，但学校对这个问题的处理态度让你很生气（精神-1）',
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'False': 'jump speech-ending',
				'True': 'next',
			}
		},
		'play sound new_message',
		'p （叮咚）',
		's 你看了看手机，说是楼栋管理老师要召集层长开会，谈一谈物资分发的问题',
		'a 去听听看呗，看看老师打算怎么解决。',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 你要参加层长会议吗?',
				'yes': {
					'Text': '去',
					'Do': 'jump speech-listen'
				},
				'No': {
					'Text': '不去',
					'Do': 'jump speech-notlisten'
				}
			}
		},
	],
	'speech-notlisten':[
		'i 算了算了，我已经不想知道了',
		's 你决定不去参加会议',
		'jump speech-ending'
	],
	'speech-listen':[
		'i 好的，我去听听看',
		'show scene laptop',
		's 你用电脑进入了线上会议室',

		'show character mi serious',
		'mi 咳咳，会议开始了啊，大家确认一下麦克风',
		'hide character mi',
		'show character it happy',
		'it 同学们好！',
		'hide character it',
		'show character sa happy',
		'sa 同学们好！',
		'hide character sa',
		'show character mi serious',
		'mi 大家能互相听见吗？',
		'hide character mi',
		'show character sa happy',
		'sa 可以听见',
		'hide character sa',
		'fuj （没有麦克风权限，在评论区留言）佐佐木老师的声音太小了，我听不见。',
		'yam （没有麦克风权限，在评论区留言）我也听不见。',
		'show character mi serious',
		'mi （没注意到评论区）那会议开始吧。',

		// 小卖部订购问题
		'show character mi happy',
		'mi 首先我们来说说物资问题啊，自封闭以来，学校一直很关心我们楼宇学生的物资需求……',
		'mi ……特别是我们片区的领导，为我们楼争取了机会向学校反映，给我们封控楼，特别是我们楼开了小卖部订购的权限。',
        'show character mi serious',
		'mi 但是随之产生的问题是什么？大家制定了规则之后，除了二号楼以外，所有的楼宇都是按照学校的标准来限购的。',
		'mi 但是二号楼由于各种原因就是开放了，没有限制，所以导致了我们首次的购物引起了不对等的这种情况。',
		'mi 同学们反映午餐中包括肉的质量问题，我们的楼栋专班第一时间也是通过各种渠道给校区专班和我们的学校反馈。',
		'mi 那么学校也及时的——我相信大家都信息很通畅——发布了一个关于供货商的通知，在市场监督管理局的配合下和主管下，我们也相关的进行了一个供材的一个通知。',
		'mi 同时也通过不同的渠道，从其他的符合质量标准的食材的供应商来进货，马上来解决大家的午餐的用餐的，包括大家反馈的问题。',
		'show character mi angry',
		'mi 我这边再强调一下，我们楼里面所有的师生都吃的是一样的，绝对没有特殊关照。',
		'show character mi happy',
		'mi 我要特别感谢我们的来担任志愿者的同学，你们真的非常辛苦：每天的物资的运送、三餐的发放、核酸的检测，大家确实是很辛苦。',
		'mi 很多包括我们几个老师也是一样，午餐也没时间吃，因为发餐来不及，我们就开始筹备，一直到晚上5点多，在这里也是感谢我们所有志愿者的辛勤的付出。',
		'mi 特别是昨天下暴雨，在暴雨快来之前，我们把紧急的学同校友会捐赠的物资赶紧搬到楼里面。',
		'mi 因为如果不及时搬运的话，我们整个的捐赠物资都泡汤了，什么饼干包括一些饮料包括等等，就不能够确保大家能够正常的发放到我们学校提供的物资。',
		'mi 看看大家还有什么问题吗？',
		'show character mi angry',

		'yam 水谷老师，我先说一个小问题：刚刚我们确实是听不清楚佐佐木老师的声音，我和我室友的都是这样，要把音量开得非常大才勉勉强强听见。',
		'yam 然后您和另外一个老师直接说能听到，就让会议开始了',
		'yam 既然同学和老师是站在一条线上的话，应该稍微先问一下同学能不能听清楚吧？',
		'yam 第二个物资的问题：二号楼的负责老师当初把这个不限购政策敲定了，然后志愿者还发出去了，这是最离谱的事情——发的时候志愿者都没有疑问的吗？',
		'yam 然后二号楼因为没有按照规定去订购物资被处罚，但所谓的处罚就是两周之内不能买了。我觉得这个处罚真的太有问题。',
		'yam 这样的话，我们楼也来搞一次‘不限购’好了，然后我也愿意两周之内不买了，这样可以吗？对吧？',
		'yam 我觉得就很离谱，目前这个解释我觉得就非常非常难以接受。',

		'show character mi happy',
		'mi 好的，美智子在吗，你来回答一下',
		'hide character mi',
		'show character sa normal',
		'sa 嗯嗯好的，我刚把所有的音量都调到最大。',
		'sa 不得不说我们第一次订购的时候，我们这几个老师其实都从来没有做过类似的工作。',
		'show character sa noticed',
		'sa 所以，对于“限购”一词的理解或者沟通，确实是欠沟通，也确实是出现了这方面的情况，不得不承认确实是有问题的。',
		
		// 讨论公平问题
		'show character sa wrong',
		'sa 我们有同学讲，我们不遵守规则的人为什么反而能拿到好处。其实我想说的是：当一个人抢跑的时候，我们不可能我们每个人都抢跑。',
		'show character sa normal',
		'sa 当然我们也会争取向学校反映，因为我们第一次确实订的少，我们看看学校能不能再给我们再解决。',
		'show character sa noticed',
		
		'yam 老师，现在同学们实锤：一号楼的学生今天闹了，然后争取到了一次不限购的机会，这个事情老师你们了解吗？',
		
		'show character sa normal',
		'sa 现在我还没有了解到，我会议结束之后我再确定一下，然后我们还会再进行申报，看看能不能想办法再给我们加一次订购。',
		'show character sa noticed',
		'sa 而且我们从学校层面，肯定还是希望大家拿到的东西都是一样多的',

		'yam 可以老师，同学们的意思就是：希望你们不要再一味的说“公平”就可以了',
		'hide character sa',
		

		// 信息公开问题
		's 作为层长，你突然觉得你应该补充一些什么，于是你打开了麦克风：',
		'i 老师，物资这个事儿也不是一次两次了，我觉得每次出现这种谣言，如果老师们或者负责人不来解答，把消息维持在不透明的状态，影响一定是扩大的，而且是往恶性的方向扩大的。',
		'i 我想提个建议，如果能做到这点会让我们舒服很多：能公开各个楼宇物资分配的实际数额吗？',
		'i 每个楼能分配到多少箱多少盒什么东西，直接简简单单地把数量以及每个楼的订购标准，以一个日报的形式公开不就好了吗？',
		
		'show character it normal',
		'it 我们现在每次订购之前，我们这几个负责各个楼负责物资的老师都会互相通气，保证我们之间的信息是透明的。',
		'it 这样子才能避免某一个楼，因为一个疏忽，或者一个临时的不成熟的决议决定，最后带来了整个片区的在物资分发、配送、订购上面的一个矛盾。',
		'show character it happy',
		'it 刚好借这个机会给大家讲一下我们物资订购的流程……',
		's 伊东老师开启了他关于物资订购的长篇大论。',
		'a:normal 这老师怎么答非所问呢，他根本没有回应你的提议……',
		'i 对啊……',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 你要怎么办?',
				'yes': {
					'Text': '向伊东老师追问你的提议',
					'Do': 'jump speech-chase'
				},
				'No': {
					'Text': '不再追问',
					'Do': 'jump speech-notchase'
				}
			}
		},
	],
	'speech-notchase':[
		'hide character it',
		'i 算了，我已经不想再问了，就随他们去吧。',
		'a:sad 唉，这算个什么事呢……',
		'show scene dorm',
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
		's 你失望地退出了会议（精神-1）',
		'jump speech-ending'
	],
	'speech-conflict':[
		'hide character it',
		's 你与伊东老师发生了激烈的语言冲突，水谷老师非常生气，命令你退出会议冷静冷静。',
		'show scene dorm',
		's 你气冲冲地退出了会议',
		{'Function':{
			'Apply':function(){
				add_school(-1);
				add_care(1);
			},
			'Reverse':function(){
				add_school(1);
				add_care(-1);
			},
		}},
		'jump speech-ending'
	],
	'speech-conflict2':[
		'hide character it',
		's 你与伊东老师发生了激烈的语言冲突，水谷老师非常生气，命令你退出会议冷静冷静。',
		'show scene dorm',
		's 你气冲冲地退出了会议',
		{'Function':{
			'Apply':function(){
				add_school(-1);
				add_care(1);
			},
			'Reverse':function(){
				add_school(1);
				add_care(-1);
			},
		}},
		'jump speech-ending'
	],
	'speech-chase':[
		'show character it dontcare',
		'i Ok老师，您可能没太理解我的意思：我相信您是很努力的在帮我们争取权益了，我们也不想难为您，只是想让您把每天跟别的楼长的商量的结果跟我们说一下。',
		'i 您不能做到只有你们老师之间通气了、公开了，而不让你的学生们知道这些信息。我相信你那边应该是有数据的。',
		'show character it confused',
		'it 总量，每个楼肯定是不一样的。那我们是如何控制总量的呢？是按人均算的。',
		'show character it normal',
		'it 比如每个同学可以拿0~3个物资，这样子按照既满足同学的一个需求，然后又能满足校区的一个要求，但是到最后总数的时候肯定是不一样的……',
		'it 对于其他楼宇拿到了多少，我认为我不能下决断是吧？但是我认为通过我们楼宇之间的协同的工作，最后一定会大家按人均来分……',
		'a:angry ？？？他到底有没有听你说话？',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 你要怎么办?',
				'yes': {
					'Text': '向伊东老师再次重申你的提议',
					'Do': 'jump speech-chase2'
				},
				'No': {
					'Text': '不再追问',
					'Do': 'jump speech-notchase'
				}
			}
		},
	],
	'speech-chase2':[
		'show character it dontcare',
		'i 老师我知道。您不用跟我讲分配标准是什么，我们其实只需要知道的是您到底是怎么分配的：每个楼到底拿到了多少。',
		'i 我觉得这个要求对于您也不算难。如果说您不愿意继续回答我这个问题，我就静音了。',
		'show character it confused',
		'it 我不知道我是不是准确理解了你这个问题。你是不是指，我们为什么要定0~3这个数目对吧……',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 's 你不禁觉得血压再次升高，你要怎么办?',
				'yes': {
					'Text': '开骂',
					'Do': 'jump speech-conflict',
					'Condition': function(){
						const {school} = monogatari.storage('player');
						const {sanity} = monogatari.storage('player');
						return school <= 1 && sanity <= 1;
					}
				},
				'No': {
					'Text': '耐心地向伊东老师解释',
					'Do': 'next'
				}
			}
		},
		'show character it dontcare',
		'i 我的意思是：比如“今天我们楼拿到了100箱饼干，但是没有牛奶，但是一号楼拿到了100箱牛奶，没有饼干”。您直接告诉我们就这些好了，具体是否公平让同学们去做评判。',
		'show character it confused',
		'it 我不知道你说的意思是不是这样：我们申购了800箱，但是只到了400箱，这400箱的数目是怎么定的？……',
		'show character it dontcare',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 's 伊东老师真的可以让人急出病来，你要怎么办?',
				'yes': {
					'Text': '开骂',
					'Do': 'jump speech-conflict',
					'Condition': function(){
						const {school} = monogatari.storage('player');
						const {sanity} = monogatari.storage('player');
						return school <= 2 && sanity <= 2;
					}
				},
				'No': {
					'Text': '深呼吸，耐心地向伊东老师解释（精神-1）',
					'Do': 'next'
				}
			}
		},
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'i 不是这个意思，就比如说我们楼订购了800箱牛奶，实际到了400。我们也想知道一号楼订购了多少箱牛奶，实际到了多少，就这么简单。',
		'show character it confused',
		'it 哦~你的意思就是希望整个校区每一栋楼的订购量，然后能让大家知道是吧？',
		'i 对',
		'show character it happy',
		'it 好的，我把你这个问题记一下，谢谢你。',
		'a MD，绕这么半天，他到最后也只是“记一下”。',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 's 你觉得你之前的耐心解释似乎都白费了，你真的很想骂人，你要怎么办？？',
				'yes': {
					'Text': '管不了了！开骂！',
					'Do': 'jump speech-conflict2',
					'Condition': function(){
						const {school} = monogatari.storage('player');
						const {sanity} = monogatari.storage('player');
						return school <= 3;
					}
				},
				'No': {
					'Text': '不行，一定要忍，忍住！（精神-1）',
					'Do': 'next'
				}
			}
		},
		{'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
		'hide character it',
		's 你关闭麦克风之后，跟室友说道：',
		'i 唉，说白了，这些驻楼老师没有决定权。他们遇到什么问题都只能向上反映。',
		'a:normal 对！之前我跟老师怼的时候，他们也说他们不能决定，规则不是他们定的。',
		'a:normal 然后我说：那你把负责领导的电话给我，我直接跟他反映。他们又不给电话！',
		'i 他们不能给啊！你想想，他们要是给了，领导要这群基层老师干嘛呢？',
		'a:normal 我也知道他们没有决定权，我想说的只是：他们做的都是无用功！',
		'a:normal 他们现在做的事情，只是在不断复读：老师也很辛苦，你们的意见我会上报。',
		'i “你们说得对、的确有问题、我们会上报”————这不就骗傻子吗？',
		'a:angry 他们之前可以说是骗都懒得骗！',
		'a:sad 唉，我不听这个会议了，听了只会来气',
		'i 行，我觉得我也没什么想听的了。',
		'show scene dorm with fadeIn',
		's 你退出了会议',
		'show character a normal',
		'a 不过啊，我算是总结了这种基层公务员的三板斧了。',
		'a 他们在回应群众需求的时候，首先要答非所问，尽可能地拖长回答的长度，从而支开话题，让群众忘记他们的诉求。',
		'a 如果群众不吃这一套，那就是第二步：装糊涂，假装听不懂别人的话，尽管他自己多半是帝国七大毕业的高材生。',
		'show character a happy',
		'a 群众还穷追不舍的话，那就出大招：你说得对，我记下来，回头向上反映。',
		'a 对于这种三板斧，你怎么看？',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'a 对于这种三板斧，你怎么看？',
				'yes': {
					'Text': '学校管理就是层层上传的嘛，没办法的事',
					'Do': 'jump speech-reject',
				},
				'No': {
					'Text': '这是一个本可以解决的结构性问题',
					'Do': 'next'
				}
			}
		},
		'i 很多人都觉得这种三板斧是无法避免的，因为管理体制就是层层上传',
		'i 但是，我们是否可以反思这种管理体制本身呢：真的是屁大点事都需要上达天听吗？',
		'a 对！其实很多事交给学生自己，也能办好。',
		'i 但这个社会似乎更愿意把所有事情都抓起来，然而，在封印了大家伙的决策能力的同时，人民群众的智慧也一起被封印了',
		'a 哈哈哈有道理！我还想到一件事……',
		'jump speech-final'
    ],
	'speech-reject':[
		'a 这点我要反驳你一下：很多人都觉得这种三板斧是无法避免的，因为管理体制就是层层上传',
		'a 但是，我们是否可以反思这种管理体制本身呢：真的是屁大点事都需要上达天听吗？',
		'i 对哦！其实很多事交给学生自己，也能办好。',
		'i 但这个社会似乎更愿意把所有事情都抓起来，然而，在封印了大家伙的决策能力的同时，人民群众的智慧也一起被封印了',
		'a 哈哈哈有道理！我还想到一件事……',
		'jump speech-final'
	],
	'speech-final':[
		'play sound new_gallery',
		'show message speech-unlocked',
		'hide character a',
		'gallery unlock speech',
		{'Function':{
			'Apply':function(){
				add_sanity(2);
			},
			'Reverse':function(){
				add_sanity(-2);
			},
		}},
		'jump speech-ending'
	],


});