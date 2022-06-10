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
        's 某日中午吃饭',
        'i 饿死了，你可算回来了',
        'a 快吃吧',
        's 舍友把买回的盒饭放在桌上',
        's 打开饭盒，里面照旧是压紧的米饭，两格绿油油的青菜，以及中间的一大块带皮猪肉……',
        'i 带皮猪肉？',
        's 餐盒里的那团可憎的生物质呈现出红与白交织的状态，红色与白色的部分以一种太阳系中不存在的混乱秩序交织在一起，而在那白色的组织层表面，隆起了一个令人作呕的凸起。',
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
        'i 我去……（精神-1）',
        {'Function':{
			'Apply':function(){
				add_sanity(-1);
			},
			'Reverse':function(){
				add_sanity(1);
			},
		}},
        'jump pork-write-or-not'
    ],
    'pork-noteat': [
        's 你将它丢进了垃圾桶，选择挨饿（健康-1）',
        {'Function':{
			'Apply':function(){
				add_health(-1);
			},
			'Reverse':function(){
				add_health(1);
			},
		}},
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
        {
            'Choice': {
                'Dialog': 'i 是否参与织围脖?',
                'listen': {
                    'Text': '是',
                    'Do': 'jump pork-write'
                },
                'ignore': {
                    'Text': '算了',
                    'Do': 'jump pork-notwrite'
                },
                
            }
        },
    ],
    'pork-notwrite': [
        's 你被这猪肉恶心到了，实在没兴趣把它从垃圾桶里找出来拍照',
        'jump pork-ending'
    ],
    'pork-write': [
        's 你写了一个帖子，大大出了一口恶气（精神+1）',
        {'Function':{
			'Apply':function(){
				add_sanity(1);
			},
			'Reverse':function(){
				add_sanity(-1);
			},
		}},
        'jump pork-ending'
    ],


    'pork2': [
        's 第二天，你打开手机，发现猪肉话题已经在网络上火起来了',
        'qya 地区话题热搜第二了！',
        'qyb 好耶！',
        'qyc 好耶！',
        's 过了一会后',
        'qya 草，东急删评了',
        'qyb 公关果然是东急王牌专业',
        'jump pork2-ending'
    ],


    'pork3': [
        's 几天后，学校发布了关于猪肉事件的通知',
        'show message pork-investigation',
        'qya 草！',
        'qyb 保存的样本能检出个der！',
        'qyc 你怎么不从垃圾桶捡出我们吃的东西去检验',
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




})