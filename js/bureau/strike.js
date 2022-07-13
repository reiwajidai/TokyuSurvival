/**
 * =======================================
 * 剧情片段：层长破防
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上strike-前缀
 * =======================================
 **/

 monogatari.script ({
	// Important: the destination must be correctly defined
	'strike-ending': [
		'jump bureau4-ending'
	],
	'strike2-ending': [
		'jump bureau5-ending'
	],
	'strike3-ending': [
		'jump bureau6-2'
	],

	// The game starts here.
	'strike': [
		'show character a normal',
		'a {{player.name}}，你看咱学生群里转的消息了吗？说是我们楼出了一个阳性',
		'i 啥？阳性？为啥我们楼的楼群里根本没有通知呢？',
		'show character a angry',
		'a 就是很无语啊，其他楼的学生都知道了，但我们还不知道',
		'hide character a',
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'False': 'jump strike-ending',
				'True': 'next',
			}
		},

		//层长角色剧情
		's 这时你看了看手机，发现层长群的消息已经99+了：',
		'cza 兄弟们，我绷不住了啊！这个伊东老师给我们开会，定下来的都是些什么政策啊！',
		'cza 为了减少人员交叉感染，他要求各个层长不再选派楼层志愿者，让层长一个人完成从早到晚所有的物资、盒饭配送工作！',
		'cza 我们不用上课了吗？他这是想把我们累死？',
		'czb 哼，我看他就是想直接复制他之前管理其他楼栋的经验',
		'czb 毕竟他是刚被调到这栋楼里来的……',
		'cza 而且，而且！咱们楼里出了阳性，为什么这些老师不马上说？哪怕悄悄地告诉我们这些层长与志愿者也行啊。',
		'cza 搞得我们这两日的楼层志愿者们，都在毫不知情的情况下工作，一点风险意识都没有！',
		'czb 对！而且这两天防护服装的水平肉眼可见地下滑：之前还是有大白可以穿，昨天就只有蓝色防护服了，结果今天面屏也没有了，有的楼层连手套都缺，太离谱了！',
		'czb 学校就是想让学生在病毒面前白送是吧？',
		'cza 就这工作条件，这老师还在提这种无理的要求，我明天凭什么听他的？',
		'play sound choices',
		{
			'Choice': {
				'Dialog': 'i 你要怎么做?',
				'yes': {
					'Text': '不搭理老师的要求，继续选派楼层志愿者',
					'Do': 'jump strike-ignore'
				},
				'No': {
					'Text': '按老师的做，自己扛下所有',
					'Do': 'jump strike-obey'
				}
			}
		},
    ],
	'strike-ignore': [
        's 你决定不理会伊东老师的安排，继续选派楼层志愿者',
        'jump strike-ending'
    ],
	'strike-obey': [
        's 你决定按老师的做，自己扛下所有',
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					story:{
						strike_obey: true
					}
				});
			},
			'Reverse':function(){
				monogatari.storage({
					story:{
						strike_obey: false
					}
				});
			},
		}},
        'jump strike-ending'
    ],

    'strike2': [
        {
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'False': 'jump strike2-starve',
				'True': 'next',
			}
		},
		's 今天中午，你听说由于伊东老师的政策，某层楼的层长直接撂挑子不干了，伊东老师只得自己去送那层楼的盒饭。那层楼的盒饭，是全楼里送得最慢的。',
		's 而且你还听说，伊东老师昨晚定下来的政策，根本没跟水谷和佐佐木老师商量过。',
		{
			'Conditional': {
				'Condition': function(){
					const {strike_obey} = monogatari.storage('story');
					return strike_obey
				},
				'True': 'jump strike2-work',
				'False': 'jump strike2-notwork',
			}
		}
    ],
	'strike2-starve': [
		{'Function':{
			'Apply':function(){
				add_health(-1);
			},
			'Reverse':function(){
				add_health(1);
			},
		}},
        's 不知为何，今天的盒饭送的特别晚，你挨了饿。（健康-1）',
        'jump strike2-ending'

    ],
	'strike2-work': [
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
		's 但这又与你何干呢？你辛辛苦苦扛下了从早到晚所有的物资、盒饭配送工作。（健康-1，精神-1）',
		'i 累死了，穿着防护服感觉真的热到虚脱',
        'jump strike2-ending'
    ],
	'strike2-notwork': [
        's 但这又与你何干呢？反正你们层依然保持着原有的人员分工，累的也不是你。',
        'i 哈哈哈我就看个乐子',
		'jump strike2-ending'
    ],


    'strike3': [
		{
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'False': 'jump strike3-ending',
				'True': 'next',
			}
		},
        's 对了，令你高兴（或是沮丧？）的是，当你今天打开层长群的时候，发现层长一人负责全部事务的政策无疾而终。',
        {
			'Conditional': {
				'Condition': function(){
					const {strike_obey} = monogatari.storage('story');
					return strike_obey
				},
				'True': 'i 我怎么觉得我又白干了……',
				'False': 'next',
			}
		},
		'jump strike3-ending'
    ],



});