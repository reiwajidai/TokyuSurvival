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
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {
    'pdf':'pdf.PNG',
    'positive':'positive.png',
});


// Define the Characters
monogatari.characters ({
    'lsx': {
        name: 'X老师',
        color: '#00cc33',
    },

});


monogatari.script ({
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

        'show message Ending-pdf',
        'gallery unlock pdf',

        'end',
    ],
    'ending-positive':[
        's 不幸的是，你的核酸结果复核为阳性',
        'show scene #000000 with fadeIn',
        's 由于你的情况实属令大家担忧，你被迅速地转移到附近的隔离医院。在医院，你得到了妥善的治疗，但同时很明显，你这学期的学校生活画上了句号。',
        
        'show message Ending-positive',
        'gallery unlock positive',

        'end',
    ],
})