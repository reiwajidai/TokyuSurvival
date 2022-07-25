/**
 * =======================================
 * 剧情片段：各种结局
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上ending-前缀
 * =======================================
 **/


// Define the messages used in the game.
monogatari.action ('message').messages ({
    'Ending-pdf': {
        title: '结局：破大防',
        subtitle: '在多重压力下，你的精神值归零了。',
        body: `
          <p>可惜啊，竟然没有坚持到解封，但这不是你的错……再玩一局试试看吧！</p>
          <img src='./assets/gallery/50w.PNG' width="40">
        `
    },
    'Ending-positive': {
        title: '结局：阳了',
        subtitle: 'Stay patient, stay positive.',
        body: `
          <p>小老弟怎么回事？竟然没有坚持到解封……注意保重身体健康，再玩一局试试看吧！</p>
          <img src='./assets/gallery/virus.png' width="40">
        `
    },
    'Ending-tea': {
        title: '结局：喝茶',
        subtitle: '小小茶盏，倾覆了你的世界。',
        body: `
          <p>以后还是小心谨慎一点吧。</p>
          <p>（何不再玩一遍，尝试更多结局？）</p>
          <img src='./assets/gallery/tea.png' width="40">
        `
    },
    'Ending-depressed': {
        title: '结局：让我自闭',
        subtitle: '你对这个世界感到失望，决定今后做一个自闭人。',
        body: `
          <p>然而，真的能找到可以完全自闭的桃花源吗？覆巢之下，岂有完卵？</p>
          <p>（何不再玩一遍，尝试更多结局？）</p>
        `
    },
    'Ending-fight': {
        title: '结局：永远的塔塔开星人',
        subtitle: '你对这个世界感到失望，决定今后改变世界。',
        body: `
          <p>不得不说，这又是个全新的开始。无数的困难险阻正等着你，给予你一次又一次的失败。</p>
          <p>但正如没有100%的成功，世上又哪有100%的失败呢？</p>
        `
    },
    'Ending-confused': {
        title: '结局：迷惘',
        subtitle: '你一方面觉得学校的运行法则没有问题，可另一方面，心中总有说不出的失落。',
        body: `
          <p></p>
          <p>（何不再玩一遍，尝试更多结局？）</p>
        `
    },
    'Ending-reboot': {
        title: '结局：赢麻了',
        subtitle: '好日子还在后头哩！',
        body: `
          <p>（何不再玩一遍，尝试更多结局？）</p>
          <img src='./assets/gallery/flag.png' width="40">
        `
    },
    'Ending-neutral': {
        title: '结局：平安回家',
        subtitle: '过往的三个月仿佛摁下了加速键，恍然若梦，雁过无痕。但这个梦，还会在某个黑夜重临吗？',
        body: `
          <p>（何不再玩一遍，尝试更多结局？）</p>
          <img src='./assets/gallery/door.png' width="40">
        `
    },
    'Ending-fast': {
        title: '结局：提前回家',
        subtitle: '赶在游戏正式开始之前，你就通关了……',
        body: `
          <p>（何不再玩一遍，尝试更多结局？）</p>
          <img src='./assets/gallery/door.png' width="40">
        `
    },
    'Ending-exam': {
        title: '结局：咸鱼挂科',
        subtitle: '学个屁，摆了。',
        body: `
          <p>今后愿做一条咸鱼</p>
          <p>（何不再玩一遍，尝试更多结局？）</p>
          <img src='./assets/gallery/fish.png' width="40">
        `
    },
});


// Define the Characters
monogatari.characters ({
    'lsx': {
        name: 'X老师',
        color: '#00cc33',
    },

});


monogatari.script ({
    'ending-choose': [
        's 今天是离校回家的日子，你昨晚收好了行李，今天起了一个大早，踏上了离校的大巴车',
        'show scene street',
        {
			'Conditional': {
				'Condition': function(){
					let {school} = monogatari.storage('player');
                    let {sanity} = monogatari.storage('player');
					if(sanity < 3 && school < 1) {
                        return "depressed";
                    } else if (sanity >= 5 && school < 0) {
                        return "fight";
                    } else if (sanity <= 3 && school >= 6) {
                        return "confused";
                    } else if (sanity > 3 && school >= 6) {
                        return "reboot";
                    }  else {
                        return 'neutral';
                    }
				},
				'depressed': 'jump ending-depressed',
                'fight': 'jump ending-fight',
				'confused': 'jump ending-confused',
                'reboot': 'jump ending-reboot',
                'neutral': 'jump ending-neutral',
			}
		},
    ],
    'ending-story':[
        'show scene #000000 with fadeIn',
        'play sound typing',
        'nvl <p></p>话说回故事开头的道人身上：自从道人推出网页游戏后，便有一好奇之人，上来便寻根究底。道人笑答：假语村言而已。酒余饭饱之时，同消寂寞罢了。',
        'play sound typing',
        'nvl 好奇之人怒道：不但作者不知，抄者不知，并阅者也不知。何其敷衍荒唐！不行，今天一定得找出个罪魁祸首来！',
        'play sound typing',
        'nvl 说罢便想将道人扭送官府，不料道人掏出通关文牒，原来是西洋的道人，皆大欢喜。',
        'play sound typing',
        'nvl 后人见了这部游戏，亦曾题过四句：说到心酸动情处，荒唐可悲亦可笑。由来本是虚妄梦，休怪世人瞎胡闹！',
        'nvl (点击结束游戏)',
        'end',
    ],
    'ending-depressed':[
        'play music normal_ending',
        's 在大巴车上，你隔着窗玻璃，看着仍处于静态管理之下的东京。东京的街道上空无一人，店铺紧闭，你觉得你仿佛闯入了一个尚未加载完全的电脑游戏。你不禁浮想联翩……',
        'i 唉，待在宿舍里真的好累啊。',
        'i 这也不是身体上的劳累，而是精神上的倦怠。简单点说，就是“麻了”',
        'i 口号上是说‘共克时艰’没错，可绝大多数的艰难，到底是天灾还是人祸？',
        'i 东急怎么说也是全日本最优秀的学校之一了，竟然也能出现这么多离谱事。',
        'i 作为普通学生，我只是觉得好无力……',
        {
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'True': 'i 做层长也只是加深了这种无力感。一团乱麻的指挥与官僚主义，让层长们提的建议没法实行。我们能做的只有为错误买单，用疲劳来粉饰上面的规矩。',
                'False': 'i 而且什么消息都不知道……或许当时应该选择当层长的，这样也许就能把学生的想法告诉老师，站高一点，更多地发声，让我们的宿舍生活过得好些。',
			}
		},
        'i 但这一切也都无所谓了，毕业混到公务员之后，哪怕是学校倒闭也跟我没关系了。',
        'i 我甚至感谢学校和疫情：谢谢你们，让我得以更麻木地活在这个世界上。',
        'i 学校也好，世界也好，与我何干？',
        'i 各人自扫门前雪吧！哪怕身后，洪水滔天。',
        'show message Ending-depressed',
        'gallery unlock depressed',
        'jump ending-story',
    ],
    'ending-fight':[
        'play music good_ending',
        's 在大巴车上，你隔着窗玻璃，看着仍处于静态管理之下的东京。东京的街道上空无一人，店铺紧闭，你觉得你仿佛闯入了一个尚未加载完全的电脑游戏。你不禁浮想联翩……',
        'i 哼，这几个月来东京的离谱事，我算是看透了',
        'i 什么积极防疫，什么尽力上报，肉食者借着关心别人的名义，不过是想保住自己的饭碗和利益',
        {
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
				'True': 'i 就拿当层长的事来说吧：真等着向上汇报的话，是永远等不到结果的。中间经手事务的人，既难有能力也难有动力去真正关心底层。学校如此，东京亦如此。',
                'False': 'i 中间经手事务的人，既难有能力也难有动力去真正关心底层。学校如此，东京亦如此。',
			}
		},
        'i 我本以为人与人之间可以靠善意活下去，但看来有些居高临下的人不是这么想的。',
        'i 之前有网友就说日本官府是癞蛤蟆，戳一下，动一下。现在看来真不假。不出点事情，学校的伙食质量又怎能上的去？',
        'i 所以啊，万事还是得靠我们学生自己去争取。',
        'i 这样想来，这次疫情也有那么一点点好处：它让我找到了黑暗之中的光明——那就是我们自己',
        'show message Ending-fight',
        'gallery unlock fight',
        'jump ending-story',
    ],
    'ending-confused':[
        'play music normal_ending',
        's 在大巴车上，你隔着窗玻璃，看着仍处于静态管理之下的东京。东京的街道上空无一人，店铺紧闭，你觉得你仿佛闯入了一个尚未加载完全的电脑游戏。你不禁浮想联翩……',
        'i 这几个月来学校里的事，实在是太离谱了……',
        'i 老师都很认真努力，学生也在尽力配合。大家都想做一个好人，但为什么最后都不满意，都很无奈？',
        'i 我们应该怪谁？是谁没有做好？',
        'show message Ending-confused',
        'gallery unlock confused',
        'jump ending-story',
    ],
    'ending-reboot':[
        'play music good_ending',
        's 你知道身边有很多同学在这段时间怨声载道，只有你知道东急做得真的很不错。临行前你和室友道别。',
        'a 如果能再考一次，我一定不会选东急。我去隔壁脚痛不香吗？',
        'i 你也跟风黑东急？疫情这种事情谁都不想碰上，很多老师也是第一次参加疫情防控工作，难免有很多状况一时之间没能处理好',
        'i 但是学校也在根据学生反馈改进工作不是吗？现在疫情之能成功控制住，已经是大胜利了，而且我们也能回去了，就不要太对学校求全责备了吧。',
        'a 我倒是觉得你现在还能替学校说话真的很神奇……要是你封校时不是恰好在校外囤了货，而是被关在南校区睡地铺，物资告急溜出去买时恰好被感染，还能觉得东急做的不错吗？',
        'a 你可能是运气好了一些，但是对大多数人来说，没赶上买物资，封禁期间连吃点小零食都没得就破大防了，也有可能不巧出门就阳了，这不都反映出东急在整个疫情期间物资保障情况和管理方式都出大问题了吗？',
        'i 没什么大不了，咱们学校疫情防控战已经取得阶段性胜利了，好日子还在后头哩！',
        'a 哼哼，是啊，那你可偷着乐吧！',
        'show message Ending-reboot',
        'gallery unlock reboot',
        'jump ending-story',
    ],
    'ending-neutral':[
        'play music normal_ending',
        's 在大巴车上，你隔着窗玻璃，看着仍处于静态管理之下的东京。东京的街道上空无一人，店铺紧闭，你觉得你仿佛闯入了一个尚未加载完全的电脑游戏。你不禁浮想联翩……',
        'i 唉，待在宿舍里真的好累',
        'i 这也不是身体上的劳累，而是精神上的倦怠。简单点说，就是“麻了”',
        {
			'Conditional': {
				'Condition': function(){
					const {leader} = monogatari.storage('player');
					return leader
				},
                'False': 'i 而且什么消息都不知道……或许当时应该选择当层长的，这样也许就能把学生的想法告诉老师，站高一点，更多地发声，让我们的宿舍生活过得好些。',
                'True': 'next',
			}
		},
        'show scene #000000 with fadeIn',
        's 经过一路颠簸，你平安回家，见到爸妈时，觉得过往的三个月仿佛像是摁下了加速键，雁过无痕。',
        'show message Ending-neutral',
        'gallery unlock safe',
        'jump ending-story',
    ],

    // 破大防结局
    'ending-pdf': [
        's 你在床上辗转反侧，睡也睡不着，只觉得心里发慌。突然你坐了起来，冲出寝室，在楼道里大喊：',
        'i 我受不了了！我要叫老师！直接打110！打12345！',
        'i 我是西方势力的间谍！把我带出学校！我收了美帝国主义的钱！',
        'i 我收了美帝国主义的钱，把我带出学校！你们把我带去的话……奖励50万！',
        's 你也不知道你为什么要说这些话，尽管你没有收过美帝国主义的一分钱。',
        'i 滚，滚，滚，滚！滚！！',
        's 你被110带走了。',
        'show scene #000000 with fadeIn',
        's 从110回来，你感觉精神恍惚。这时候你的微信响了一声。你没有在意，因为自从喊完自己是50w，不断有好事者发微信来找自己，或是好奇，或是关切，也有阴阳怪气的。辅导员的电话也已经接了几个了。',
        's 微信又响了几声。你仍没有在意。',
        's 微信电话铃声响起来。你终于掏出手机看了一眼。',
        'p （来电显示：X老师）',
        'i 连X老师也……可是，X老师的话，总归是愿意听一听的。',
        's 你接起了电话。',
        'lsx {{player.name}}，你最近还好吗？',
        'i 老师，有话直说吧。',
        'lsx 唉，你这几天没少被辅导员老师找吧。',
        'i 老师，不用开解我，我好着呢。',
        'lsx 你的事情我听说了。这些天我不在学校，但是我看近期校内的情况，感觉真的太难了，比我想象的难太多。大家基本都到极限了。',
        'i ……难啊。',
        'lsx 老师都很担心你。我们现在外面的生活也是乱七八糟的，我也理解大家很容易陷入焦虑，但是不要做伤害自己的事情。千万要保护好自己。',
        'i 怎么保护好自己？是谁把我逼成这样的？',
        'lsx ……说真的，这事儿说不清。老师们都相信自己是为了学生好，但是整个抗疫活动中，老师们也有很多事自己是拿不了主意的。',
        'i ……',
        'lsx 如果感觉困惑，就多想吧。有些事情我不方便直说，但是以你的悟性，能想通的。',
        'i 嗯。但是我累了，思考不动了。',
        'lsx 先好好休息吧，无论如何你和同学们都多保重。',
        'i 嗯，老师也是。',
        's （通话结束）',
        'i （保重吗……这日子还有什么盼头……）',

        'stop music normal',
        'stop music normal2',
        'play music bad_ending',
        'show message Ending-pdf',
        'gallery unlock pdf',

        'jump ending-story',
    ],
    // 阳性结局
    'ending-positive':[
        's 不知道为什么，今天晚上的你突然开始发烧、冒冷汗。你赶紧测了测抗原，突然发现结果是两条杠。',
        'i 啊这？！',
		'a 啊你…………怎么回事！',
		's 向学校报告后，你马上被重新测试了核酸结果，核酸结果很快就会出。',
        's 不幸的是，你的核酸结果复核为阳性',
        'show scene #000000 with fadeIn',
        's 由于你的情况实属令大家担忧，你被迅速地转移到附近的隔离医院。在医院，你得到了妥善的治疗，但同时很明显，你这学期的学校生活画上了句号。',
        'i 啊，我为什么会阳性？',
        {
			'Conditional': {
				'Condition': function(){
					let {starve_positive} = monogatari.storage('story');
                    let {cat_positive} = monogatari.storage('story');
                    let {leader} = monogatari.storage('player');
					if(starve_positive) {
                        return "starve_positive";
                    } else if (cat_positive) {
                        return "cat";
                    } else if (!starve_positive && leader && !cat_positive) {
                        return "leader";
                    }  else {
                        return 'Other';
                    }
				},
				'starve_positive': 'jump ending-positive-starve',
                'cat': 's 你仔细想了想，莫非是因为自己某天撸了野猫的缘故？虽然撸猫不会百分百中招，但现在说什么都晚了。',
				'leader': 's 你仔细想了想，也许是因为自己担任层长期间，太听老师的话，操劳过度。但现在说什么都晚了。',
                'Other': 's 你仔细想了想，并不是很明白，也许是学习过度？',
			}
		},
        'i 就是苦了舍友们了，封控依旧还在继续……',
        'stop music normal',
        'stop music normal2',
        'play music bad_ending',
        'show message Ending-positive',
        'gallery unlock positive',
        'jump ending-story',
    ],
    'ending-positive-starve':[
        's 你仔细想了想，莫非是因为自己某天晚上偷偷溜到小卖部买东西的缘故？虽然溜出去不会百分百中招，但现在说什么都晚了。',
        'i 唉……不应该乱跑出去的……但也实在没有办法，乱七八糟的调度让人完全陷入恐慌，只能屯点物资或者做点什么放松一下',
        'i 要是能够解决这些问题，待在宿舍里就能精神放松衣食无忧，谁还会冒着风险违反抗疫政策。',
        'i 不遵循政策固然是错的，但遵循一个让人过不好的政策似乎也不合理。',
        'stop music normal',
        'stop music normal2',
        'play music bad_ending',
        'show message Ending-positive',
        'gallery unlock positive',
        'jump ending-story',
    ],
    // 喝茶结局
    'ending-tea':[
        'stop music sad',
        'play music bad_ending',
        'show message Ending-tea',
        'gallery unlock tea',
        'jump ending-story',
    ],
    'ending-fish':[
        's 不出意外地，你考试挂科了',
        'i 唉，疫情真的是完全破坏了我的学习环境。在这种充满焦虑的心态下，我怎么学的进去？',
        'i 不如躺平做条咸鱼',
        'play music bad_ending',
        'show message Ending-exam',
        'gallery unlock fish',
        'jump ending-story',
    ],
    'ending-fast':[
        'stop music normal',
        'stop music normal2',
        'play music good_ending',
        's 尽管你也没完全想清楚怎么回事，你还是火速买了今晚的机票，连夜回到了外地的家中。',
        'show scene #000000 with fadeIn',
        's 经过一路颠簸，你平安回家，见到爸妈时，爸妈觉得你反应过度了。',
        'i 不不不，我的直觉告诉我，这绝对是明智的决定。',
        'show message Ending-fast',
        'end',
    ],
})