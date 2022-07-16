/**
 * =======================================
 * 剧情片段：猪肉
 * 
 * 
 * 如何整合进主线剧情：
 * （1）在主线剧情中使用命令：jump pork
 * （2）在本文件的pork-ending中设定支线结束后的回传位置
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上pork-前缀
 * =======================================
 **/

monogatari.action ('message').messages ({
	'pork-investigation': {
		title: '学校公报',
		subtitle: '针对近期学生反映的猪肉品质问题：',
		body: `
			<p>我校将保存样本交于化验中心检查，未发现任何寄生虫污染，此次事件是供应商所为，与学校没有关系</p>
            <p>以上</p>
		`
	},
});

monogatari.script ({

	'pork': [
        's 来到了中午吃饭的时间，冈田拿着盒饭来到你的面前',
        'i 饿死了，你可算回来了',
        'a 快吃吧',
        's 舍友把买回的盒饭放在桌上',
        's 打开饭盒，里面照旧是压紧的米饭，两格绿油油的青菜，以及中间的一大块带皮猪肉……',
        'i 带皮猪肉？',
        's 餐盒里的那团可憎的生物质呈现出红与白交织的状态，红色与白色的部分以一种太阳系中不存在的混乱秩序交织在一起，而在那白色的组织层表面，隆起了一个令人作呕的凸起。',
        'play sound choices',
        {
            'Choice': {
                'Dialog': 'i 对于这样的猪肉，你选择……',
                'listen': {
                    'Text': '吃',
                    'Do': 'jump pork-eat'
                },
                'ignore': {
                    'Text': '不吃，饿着（健康-1）',
                    'Do': 'jump pork-noteat'
                },
                
            }
        },
    ],
    'pork-eat': [
        's 你咽下了这团可憎之物，感觉到喉咙几乎被它蕴含的盐分烧干',
        's 午睡起来，你发现群里的消息99+，点开后，发现群里这样说道：',
        'qya 我看了看这玩意好像是绦虫！',
        'qyb 不管是不是绦虫，我这必然是豪猪肉',
        {'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
        'i 我去……（精神-1）',
        'jump pork-write-or-not'
    ],
    'pork-noteat': [
        {'Function':{
			'Apply':function(){
				add_health(-1);
			},
			'Reverse':function(){
				add_health(1);
			},
		}},
        's 你将它丢进了垃圾桶，选择挨饿（健康-1）',
        's 午睡起来，你发现群里的消息99+，点开后，发现群里这样说道：',
        'qya 我看了看这玩意好像是绦虫！',
        'qyb 不管是不是绦虫，我这必然是豪猪肉',
        'i 我去……',
        'jump pork-write-or-not'
    ],
    'pork-write-or-not': [
        'qya 各位赶紧看看是不是中空的，也可能是血管',
        'qyb 辟个谣，这不是绦虫，医学院老师说可能是囊尾蚴！',
        'qyc 还不如不辟谣！',
        'qyd 学校不管这事，我们自己想办法，可以织围脖，我已经看到话题了',
        's 链接：东急给学生发放传统刺身美食',
        'play sound choices',
        {
            'Choice': {
                'Dialog': 'i 是否参与织围脖?',
                'listen': {
                    'Text': '我可是织围脖的熟手',
                    'Do': 'jump pork-write'
                },
                'ignore': {
                    'Text': '算了',
                    'Do': 'jump pork-notwrite'
                },
                'report': {
                    'Text': '怎么能散布这种非官方传言？',
                    'Do': 'jump pork-report',
                    'Condition': function(){
						const {school} = monogatari.storage('player');
						return school >= 3;
					}
                }, 
            }
        },
    ],
    'pork-notwrite': [
        's 你被这猪肉恶心到了，实在没兴趣把它从垃圾桶里找出来拍照',
        'jump pork-ending'
    ],
    'pork-write': [
        {'Function':{
			'Apply':function(){
				add_sanity(1);
			},
			'Reverse':function(){
				add_sanity(-1);
			},
		}},
        's 你写了一个帖子，大大出了一口恶气（精神+1）',
        'jump pork-ending'
    ],
    'pork-report': [
        'i 让子弹飞一会儿，坐等官方消息。在此之前，都是谣言。',
        {'Function':{
			'Apply':function(){
                add_school(1);
                add_sanity(-1);
			},
			'Reverse':function(){
                add_school(-1);
                add_sanity(1);
			},
		}},
        's 你被群友怼了，你忿忿不平地关闭了群聊（精神-1）',
        'jump pork-ending'
    ],


    'pork2': [
        's 你打开手机，发现猪肉话题已经在网络上火起来了。但过了一会，相关话题在围脖上的热度突然就没了',
        'i 草，东急删评了，公关果然是东急王牌专业',
        'jump pork2-ending'
    ],


    'pork3': [
        's 学校发布了关于猪肉事件的通知',
        'play sound notification',
        'show message pork-investigation',
        'qya 草！',
        'qyb 保存的样本能检出个der！',
        'qyc 你怎么不从垃圾桶捡出我们吃的东西去检验',
        {
			'Conditional': {
				'Condition': function(){
					const {informant} = monogatari.storage('story');
                    const {tea_tatakai} = monogatari.storage('story');
					const {tea_opinion} = monogatari.storage('story');
					return informant || tea_tatakai || tea_opinion
				},
				'True': 'jump pork3-ending',
				'False': 'next',
			}
		},
        'show character a normal',
        'a 话说我看了网上同学的一些分析，他们追查了这家猪肉供应商。',
        'a 他们发现这家供应商进口冻肉虽然被海关因为新冠病毒拦下来过，但并无直接证据说明我们吃的这批肉有任何寄生虫这类的严重问题',
        'a 所以就寄生虫来说，还真可能没有。但猪乳头的确没有按国家标准将它去掉。',
        'show character a sad',
        'a 唉，从另一方面来说，猪肉事件这些，平日在东京城里还发生得少吗？只是因为近日情况过于离谱，才让这些见不得台面的东西暴露在聚光灯之下。',
        'i 就好比说：当你在客厅餐桌上发现一只蟑螂时，屋里可能已经有十几只了？',
        'show character a normal',
        'a 对！我们这种全日本有名的理工职校，就是那张公共舆论里的“餐桌”。你想想，要是在平日，这些不达标的食物最终又会流向何方呢？',
        'play sound choices',
        {
            'Choice': {
                'Dialog': 's 你如何回答冈田?',
                'agree': {
                    'Text': '你说得对',
                    'Do': 'jump pork3-agree'
                },
                'disagree': {
                    'Text': '这次只是个偶然事件',
                    'Do': 'jump pork3-disagree'
                },
            }
        },
    ],
    'pork3-agree': [
        'hide character a',
        's 大家都陷入了沉思。',
        {'Function':{
			'Apply':function(){
				add_school(-1);
			},
			'Reverse':function(){
				add_school(1);
			},
		}},
        'jump pork3-ending'
    ],
    'pork3-disagree': [
        'a 哦，是吗？我不太相信。',
        'hide character a',
        's 大家都陷入了沉思。',
        'jump pork3-ending'
    ],



})