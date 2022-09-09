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


var img_stack = [];
var img_pointer = 0;


function generate_img_label() {

    // 读取已有图片序列
    let game_name = monogatari._settings.Name;
    let game_version = monogatari._settings.Version;
    try{
        img_stack = localStorage.getItem(game_name + '::GameData::'+ game_version + '_img_stack').split(',');
        img_pointer = parseInt(localStorage.getItem(game_name + '::GameData::'+ game_version + '_img_pointer'));    
    }catch(err){
        // 生成编号序列
        let arr = []
        for(let i=2; i<=16; i++){
            arr.push(i)
        }

        // Shuffle: 类似于冒泡排序的逆向过程
        let i = arr.length;
        while (i) {
            let j = Math.floor(Math.random() * i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }

        // 赋值给img_stack并存储到localStorage
        img_stack = arr;
        localStorage.setItem(game_name + '::GameData::'+ game_version + '_img_stack', img_stack.toString())
        localStorage.setItem(game_name + '::GameData::'+ game_version + '_img_pointer', 0)
        img_pointer = 0;
    }
}
function get_img_link() {
    let b = img_stack[img_pointer];
    img_pointer++;
    return 'p' + b + '.jpg'
}

monogatari.assets ('images', {
    'artist_img': '../gallery/artist.png',
});

monogatari.characters ({
    'zzwz': {
		name: '文章：第二届65472艺术创作大赛',
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
    'stripe-unlock2': {
		title: '解锁稀有画廊：艺术家',
		subtitle: '',
		body: `
            <p>真正的艺术，往往还需要跨周目的封校，恭喜你发现了游戏的宝藏！</p>
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

	'stripe': [
        'play sound new_message',
        's 你收到一条图片信息',
        'show image p1.jpg',
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
        'hide image p1.jpg',
        'play sound choices',
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
        'qyc （截图：我现在很好，没有被处分）',
        'qya 看来没事',
        'qyc 保护我方队友',
        'jump stripe-ending'
    ],
    'stripe-write': [
        {'Function':{
			'Apply':function(){
				add_sanity(1);
                add_care(1);
			},
			'Reverse':function(){
				add_sanity(-1);
                add_care(-1);
			},
		}},
        's 你觉得和同学们达成了统一战线，你们从来没这么团结过。（精神+1）',
        'qyc （截图：我现在很好，没有被处分）',
        'qya 看来没事',
        'qyc 保护我方队友',
        'jump stripe-ending'
    ],


    'stripe2': [
        's 你今天刷Facebook的时候，发现65472已经变成了一种接头暗号。其中最火的一篇文章，是“65472”格式的网友诗歌大赛。',
        'play sound choices',
        {
            'Choice': {
                'Dialog': 'i 你要欣赏一下网友的诗集吗？',
                'ignore': {
                    'Text': '算了',
                    'Do': 'jump stripe2-ending'
                }, 
                'report': {
                    'Text': '举报！',
                    'Do': 'jump stripe2-report',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school === 5;
					}
                }, 
                'report2': {
                    'Text': '举报！(精神+1)',
                    'Do': 'jump stripe2-report2',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school >= 6;
					}
                }, 
                'listen': {
                    'Text': '看看！',
                    'Do': 'next',
                },
            }
        },
        'play sound notification',
        'show message stripe-poem1',
        'i 有点意思啊……要再看一篇吗？',
        'play sound choices',
        {
            'Choice': {
                'Dialog': 'i 你要再看一篇吗？',
                'ignore': {
                    'Text': '算了',
                    'Do': 'jump stripe2-ending'
                }, 
                'report': {
                    'Text': '举报！',
                    'Do': 'jump stripe2-report',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school === 5;
					}
                }, 
                'report2': {
                    'Text': '举报！(精神+1)',
                    'Do': 'jump stripe2-report2',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school >= 6;
					}
                }, 
                'listen': {
                    'Text': '再看看！',
                    'Do': 'next',
                },
            }
        },
        'play sound notification',
        'show message stripe-poem2',
        'i 哈哈哈！',
        'play sound choices',
        {
            'Choice': {
                'Dialog': 'i 你要再看一篇吗？',
                'ignore': {
                    'Text': '算了',
                    'Do': 'jump stripe2-ending'
                }, 
                'report': {
                    'Text': '举报！',
                    'Do': 'jump stripe2-report',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school === 5;
					}
                }, 
                'report2': {
                    'Text': '举报！(精神+1)',
                    'Do': 'jump stripe2-report2',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school >= 6;
					}
                }, 
                'listen': {
                    'Text': '再看看！',
                    'Do': 'next',
                },
            }
        },
        'play sound notification',
        'show message stripe-poem3',
        'i 哈哈哈！',
        'play sound choices',
        {
            'Choice': {
                'Dialog': 'i 你要再看一篇吗？',
                'ignore': {
                    'Text': '算了',
                    'Do': 'jump stripe2-ending'
                }, 
                'report': {
                    'Text': '举报！',
                    'Do': 'jump stripe2-report',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school === 5;
					}
                }, 
                'report2': {
                    'Text': '举报！(精神+1)',
                    'Do': 'jump stripe2-report2',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school >= 6;
					}
                }, 
                'listen': {
                    'Text': '再看看！',
                    'Do': 'next',
                },
            }
        },
        'play sound notification',
        'show message stripe-poem4',
        'i 哈哈哈！',
        'jump stripe2-poem-or-not'
    ],


    'stripe2-poem-or-not': [
        's 你看了这么多诗以后，仿佛自己也获得了灵感，但你在犹豫该不该跟风创作',
        'play sound choices',
        {
            'Choice': {
                'Dialog': 'i 你要参与短诗创作吗？',
                'listen': {
                    'Text': '参与',
                    'Do': 'jump stripe2-poem'
                },
                'report': {
                    'Text': '写什么写，举报！',
                    'Do': 'jump stripe2-report',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school === 5;
					}
                }, 
                'report2': {
                    'Text': '写什么写，举报！(精神+1)',
                    'Do': 'jump stripe2-report2',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school >= 6;
					}
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
        's 你文思如泉涌，于是提笔作诗一首（精神+1）',
        'play sound new_gallery',
        'show message stripe-unlock',
        'gallery unlock poet',
        'jump stripe2-ending'
    ],
    'stripe2-report': [
        's 你虽然理解大家在封校期间对学校管理方法的不满，但你觉得参与狂欢的人对抗的方式过于偏激。',
        'i 只要持续地向学校反馈，总会有解决方法的不是吗？学校并不是学生的敌人，领导和老师都只是想要更有效地进行疾病防控。',
        'i 而作为学生，这种宣泄会让外人看不到校方所做的种种努力，只看到管理混乱的一面。其实学校的状况远没有网上说的那么糟糕。',
        {'Function':{
			'Apply':function(){
                add_school(1);
			},
			'Reverse':function(){
                add_school(-1);
			},
		}},
        's 你反手点了一个举报',
        'jump stripe2-ending'
    ],
    'stripe2-report2': [
        's 你觉得参与狂欢的人对抗的方式过于偏激。',
        'i 只要持续地向学校反馈，总会有解决方法的不是吗？学校并不是学生的敌人，领导和老师都只是想要更有效地进行疾病防控。',
        'i 而作为学生，这种宣泄会让外人看不到校方所做的种种努力，只会抹黑学校。',
        {'Function':{
			'Apply':function(){
				add_sanity(1);
                add_school(1);
			},
			'Reverse':function(){
				add_sanity(-1);
                add_school(-1);
			},
		}},
        's 你反手点了一个举报，维护了学校的良好形象（精神+1）',
        'jump stripe2-ending'
    ],


    'stripe3': [
        'play sound new_message',
        'p 叮咚！',
        's 你打开手机，发现一篇转载火热的推文，文章标题是“第二届65472艺术创作大赛”',
        'i 有意思，我点进去看看！',
        'zzwz 在青年节即将到来之际，为激发同学们的抗疫热情，作为拥有东京地区最优质食堂的高等学府，东急大学特为全校师生特制限定版刺身套餐提升疫情期间的伙食质量，并鼓励大家以该套餐为灵感进行自由创作。',
        'zzwz 根据大赛规则，本次线上赛区获Facebook转发量前10%的作品将晋级复赛，作品将被印刷寄送给同学远在老家的爸妈，并附书信一封、马蹄酥一份，向同学们的爸妈展示TA在东急挺好的',
        'zzwz 进入复赛的作品有机会竞争最终大奖：厕所不限时预约券5张。',
        'zzwz 作为本次“猪肉刺身杯”设计大赛线上指定合作方，本报记者第一时间赶赴比赛现场，遴选优质作品进行线上展览，供同学们参观学习。',
 
        'show image p1',
        's 网友作品1',

        'hide image p1',
        'show image p2',
        's 网友作品2',

        'hide image p2',
        'show image p3',
        's 网友作品3',

        'hide image p3',
        'show image p4',
        's 网友作品4',

        'hide image p4',
        'show image p5',
        's 网友作品5',

        'hide image p5',

        'play sound choices',
        {
            'Choice': {
                'Dialog': 's 看了这么多艺术创作，你的想法是……',
                'listen': {
                    'Text': '校友个个都是人才……',
                    'Do': 'jump stripe3-if-unlock',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school <= 4;
					}
                },
                'report': {
                    'Text': '举报！',
                    'Do': 'jump stripe3-report',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school === 5;
					}
                }, 
                'report2': {
                    'Text': '举报！(精神+2)',
                    'Do': 'jump stripe3-report2',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school >= 6;
					}
                }, 
            }
        },
    ],
    'stripe3-if-unlock': [
        {
			'Conditional': {
				'Condition': function(){
                    let unlock_artist_gallery = false;
                    const {school} = monogatari.storage('player');

                    // 判断是否解锁画廊+重置序号
                    if ((img_pointer > 14)&& (school < 3)){
                        img_pointer = 0;
                        if(! check_gallery('artist')){
                            unlock_artist_gallery = true;
                        }
                    }

                    // 存储序号
                    let game_name = monogatari._settings.Name;
                    let game_version = monogatari._settings.Version;
                    localStorage.setItem(game_name + '::GameData::'+ game_version + '_img_pointer', img_pointer)
					
                    return unlock_artist_gallery
				},
				'True': 'jump stripe3-unlock-gallery',
				'False': 'jump stripe3-ending',
			}
		},
    ],
    'stripe3-unlock-gallery':[
        's 不知为何，你仿佛在前世早已经历过无数次封控，对于这样的艺术创作，你早已稔熟于心。',
        {'Function':{
			'Apply':function(){
				add_sanity(1);
			},
			'Reverse':function(){
				add_sanity(-1);
			},
		}},
        's 你灵光一闪，于是提笔作画一幅（精神+1）',
        'show image artist_img',
        'i 嗯……感觉不错呢！',
        's 从画面风格上，你似乎也受到马列维奇的作品的影响',
        'hide image artist_img',
        'play sound new_gallery',
        'show message stripe-unlock2',
        'gallery unlock artist',
        'jump stripe3-ending'
    ],
    'stripe3-report': [
        {'Function':{
			'Apply':function(){
                add_school(1);
			},
			'Reverse':function(){
                add_school(-1);
			},
		}},
        's 你反手点了一个举报',
        'jump stripe3-ending'
    ],
    'stripe3-report2': [
        {'Function':{
			'Apply':function(){
				add_sanity(2);
                add_school(1);
			},
			'Reverse':function(){
				add_sanity(-2);
                add_school(-1);
			},
		}},
        's 你反手点了一个举报，再次维护了学校的良好形象（精神+2）',
        'jump stripe3-ending'
    ],

    'stripe4': [
        //'s 今天你发现，那位进行PPT创作的朋友，他的微博被爆出来，他被网暴了',
        //'s （此处剧情与讨论有待进一步展开）',
        'jump stripe4-ending'
    ],





})