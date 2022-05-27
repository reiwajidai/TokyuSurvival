/**
 * =======================================
 * 剧情片段：颜色条
 * 
 * 
 * 如何整合进主线剧情：
 * （1）在主线剧情中使用命令：jump stripe
 * （2）在本文件的stripe-ending中设定支线结束后的回传位置
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上stripe-前缀
 * =======================================
 **/

monogatari.assets ('gallery', {
	'poet':'poet.png',
});

monogatari.characters ({
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
});

monogatari.action ('message').messages ({
	'stripe-investigation': {
		title: '学校公报',
		subtitle: '针对近期学生反映的猪肉品质问题：',
		body: `
			<p>我校将保存样本交于化验中心检查，未发现任何寄生虫污染，此次事件是供应商所为，与学校没有关系</p>
            <p>以上</p>
		`
	},
    'stripe-unlock': {
		title: '解锁画廊：诗人',
		subtitle: '',
		body: `
			<p>封校乃是艺术创作的根源！封校万岁，封，再多封几个月！</p>
		`
	},
    'stripe-poem1': {
		title: '猫猫的疑惑',
		subtitle: '作者：吕微',
		body: `
			<p>樱花大道空空</p>
            <p>只有一些猫</p>
            <p>人在哪里</p>
            <p>猫猫们也不知道</p>
            <p>喵喵</p>
		`
	},
    'stripe-poem2': {
		title: '动物农场',
		subtitle: '作者：其已',
		body: `
			<p>你说所有动物</p>
            <p>一律都平等</p>
            <p>结尾却是</p>
            <p>拿破仑和人类的</p>
            <p>欢宴</p>
		`
	},
    'stripe-poem3': {
		title: '无题',
		subtitle: '作者：何来露',
		body: `
			<p>我从墓中醒来</p>
            <p>不知这人间</p>
            <p>是何年月</p>
            <p>东京人竟然挨饿？</p>
            <p>睡了</p>
		`
	},
    'stripe-poem4': {
		title: '无题',
		subtitle: '作者：须弥',
		body: `
			<p>休歌硕鼠鹑奔</p>
            <p>彼是敌国谣</p>
            <p>且颂嵩高</p>
            <p>天子无愁君窃乐</p>
            <p>陶陶</p>
		`
	},
});

monogatari.script ({
    'stripe-ending': [
        'qyc （截图：我现在很好，没有被处分）',
        'qya 看来没事',
        'qyc 保护我方队友',
        'jump Day9-3',
    ],
    'stripe2-ending': [
        'jump Day10-4',
    ],
    'stripe3-ending': [
        'jump Day11-3',
    ],
    'stripe4-ending': [
        'jump Day12-3',
    ],


	'stripe': [
        's 你收到一条信息',
        // （ppt截图，此处要不要放原文？）
        'qya 卧槽……这哥们儿真是个勇士……',
        'qyb 这是疫情发布会现场？',
        'qyc 对',
        'qyd 卧槽，哪个寮的',
        'qyc 北山寮的',
        'qyc 领导念稿子，现在发布会都不给发言了，这兄弟直接共享屏幕开骂',
        'qyc 大快人心',
        'qyc 据说这老哥平时天天当志愿者',
        'qya 这得是逼多急了才能干出这事',
        'qyb 迟早会有人这么干的',
        'qyd 不会吃处分吧……',
        'qyc 会的吧',
        'qya 要是学校下处分，我第一个上书讨说法',
        'qyc 对，我们联名上书！',
        {
            'Choice': {
                'Dialog': 'i 是否参与跟帖?',
                'listen': {
                    'Text': '加我一个，不能让他被处分',
                    'Do': 'jump stripe-write'
                },
                'ignore': {
                    'Text': '非杠，但是像这老哥一样动不动就冲，以后没有公司会要的',
                    'Do': 'jump stripe-notwrite'
                },
                
            }
        },
    ],
    'stripe-notwrite': [
        'i 特殊时期更要一致对外，搞内讧只会让外人看笑话。',
        {'Function':{
			'Apply':function(){
				add_school(1);
			},
			'Reverse':function(){
				add_school(-1);
			},
		}},
        'jump stripe-ending'
    ],
    'stripe-write': [
        's 你觉得和同学们达成了统一战线，你们从来没这么团结过。（精神+1）',
        {'Function':{
			'Apply':function(){
				add_sanity(1);
			},
			'Reverse':function(){
				add_sanity(-1);
			},
		}},
        'jump stripe-ending'
    ],


    'stripe2': [
        's 你今天刷Facebook的时候，发现65472已经变成了一种接头暗号。其中最火的一篇文章，是“65472”格式的网友诗歌大赛。',
        {
            'Choice': {
                'Dialog': 'i 你要欣赏一下网友的诗集吗？',
                'ignore': {
                    'Text': '算了',
                    'Do': 'jump stripe2-ending'
                }, 
                'listen': {
                    'Text': '看看！',
                    'Do': 'next',
                },
            }
        },
        'show message stripe-poem1',
        'i 有点意思啊……要再看一篇吗？',
        {
            'Choice': {
                'Dialog': 'i 你要再看一篇吗？',
                'ignore': {
                    'Text': '算了',
                    'Do': 'jump stripe2-ending'
                }, 
                'listen': {
                    'Text': '再看看！',
                    'Do': 'next',
                },
            }
        },
        'show message stripe-poem2',
        'i 哈哈哈！',
        {
            'Choice': {
                'Dialog': 'i 你要再看一篇吗？',
                'ignore': {
                    'Text': '算了',
                    'Do': 'jump stripe2-ending'
                }, 
                'listen': {
                    'Text': '再看看！',
                    'Do': 'next',
                },
            }
        },
        'show message stripe-poem3',
        'i 哈哈哈！',
        {
            'Choice': {
                'Dialog': 'i 你要再看一篇吗？',
                'ignore': {
                    'Text': '算了',
                    'Do': 'jump stripe2-ending'
                }, 
                'listen': {
                    'Text': '再看看！',
                    'Do': 'next',
                },
            }
        },
        'show message stripe-poem4',
        'i 哈哈哈！',
        'jump stripe2-poem-or-not'
    ],


    'stripe2-poem-or-not': [
        's 你看了这么多诗以后，仿佛自己也获得了灵感，但你在犹豫该不该跟风创作',
        {
            'Choice': {
                'Dialog': 'i 你要参与短诗创作吗？',
                'listen': {
                    'Text': '参与',
                    'Do': 'jump stripe2-poem'
                },
                'ignore': {
                    'Text': '算了',
                    'Do': 'jump stripe2-notpoem'
                },
                
            }
        },
    ],
    'stripe2-notpoem': [
        {
			'Conditional': {
				'Condition': function(){
					const {school} = monogatari.storage('player');
					return school<2
				},
				'True': 's 你并不想让狂欢消解了事件本身的力量。',
				'False': 's 你虽然理解大家在封校期间对学校管理方法的不满，但你觉得参与狂欢的人对抗的方式过于偏激。只要持续地向学校反馈，总会有解决方法的不是吗？学校并不是学生的敌人，领导和老师都只是想要更有效地进行疾病防控，而作为学生，这种宣泄会让外人看不到校方所做的种种努力，只看到管理混乱的一面。其实学校的状况远没有网上说的那么糟糕。',
			}
		},
        'jump stripe2-ending'
    ],
    'stripe2-poem': [
        's 昨天的一张ppt竟然引发了此等创作热潮，你从来没有如此密集地感受过东急整出这么多好活儿。大概同学和老师们都没有想过，平日中学习到的创作理论和方法，会在此时此地，以一种如此戏谑的方式变成一种艺术狂欢。',
        's 你文思如泉涌，于是提笔作诗一首（精神+1）',
        'show message stripe-unlock',
        'gallery unlock poet',
        {'Function':{
			'Apply':function(){
				add_sanity(1);
                add_school(-1);
			},
			'Reverse':function(){
				add_sanity(-1);
                add_school(1);
			},
		}},
        'jump stripe2-ending'
    ],


    'stripe3': [
        's 第二届65472艺术创作大赛',
        's （此处需要素材）',
        'i 校友个个都是人才……',
        'jump stripe3-ending'
    ],


    'stripe4': [
        's 今天你发现，那位进行PPT创作的朋友，他的微博被爆出来，他被网暴了',
        's （此处剧情与讨论有待进一步展开）',
        'jump stripe4-ending'
    ],





})