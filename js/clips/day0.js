/**
 * =======================================
 * 主线：返校当日
 * 
 *
 * 如何整合进主线剧情：
 * （1）在主线剧情中使用命令：jump Day0
 * （2）在本文件的Day0-ending中设定支线结束后的回传位置
 * 
 * 注意事项：
 * 由于还不太清楚monogatari的命名空间问题，
 * 建议本文件内所有剧情block的名字都带上Day0-前缀
 * =======================================
 **/


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {
	'badge':'badge.png',
});

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Day0-badge': {
		title: '解锁：东急校徽',
		subtitle: '辅导员送了你一个校徽。',
		body: `
			<p>除了可以在主菜单的“画廊”里查看之外，这个玩意儿没有任何功能。</p>
			<p>但缺少它的话，我想没人会承认我是个东急学子。</p>
			<img src='./assets/gallery/badge.png' width="40">
		`
	},
});

// Define the Characters
monogatari.characters ({
    'fdy': {
		name: '辅导员',
		color: '#00cc33',
	},

});

monogatari.script ({
	// The game starts here.
	'Day0-begin': [
		'nvl <p></p>列位看官：你道此书从何而来？说来荒唐，细按则深有趣味。点击屏幕，待在下说来……',
		'nvl 原是女娲氏炼石补天之时，单剩一块弃于青埂峰之下。谁知此石通了灵性，日夜嗟悼无缘世间繁华。一日，灵石见一仙人远远而来，便求着要去凡间受享。于是那仙人将其化为宝玉，投向凡间。',
		'nvl 殊不知刚过数月，一个道人便在山下遇见一块刻字大石：字迹分明，编述历历，然而尽是痴言妄语，满篇荒唐。',
		'nvl 道人向石头问起故事的来历，石头只说：来自诅咒之地，源于外部势力，邪魔秽语罢了，何必相信？若是气急败坏，只怕做贼心虚。',
		'nvl 道人听如此说，思忖半响，将故事改编为网页游戏，以飨万千网友。',
		'show scene #000000',
		'centered  点击屏幕开始',
		's 我是谁？',
		's 我在哪儿？',
		's 我仿佛做了一个梦……',
		'show scene gate with fadeIn duration 3s',
		'show canvas stats',
		'$ set_stats_size',
		{'Function':{
			'Apply': function(){
				add_food(1);
			},
			'Reverse': function(){
				add_food(-1);
			},
		}},
		'show canvas greys',
		'fdy 同学，同学，别走神了！',
		'fdy 欢迎回到东急大学，首先，同学你叫什么名字呢？',
		{
			'Choice': {
				'Dialog': 'i 同学你叫什么名字呢？',
				'phone': {
					'Text': '我叫……',
					'Do': 'jump Day0-enter-name'
				},
				'out': {
					'Text': '就叫我寄寄吧',
					'Do': 'jump Day0-not-enter-name'
				},
				'report': {
					'Text': '就叫我彩虹糖寄寄吧',
					'Do': 'jump Day0-not-enter-name',
					'Condition': function(){
						const r = check_gallery('rainbow');
						return r;
					}
				},
			}
		},
	],
	'Day0-enter-name':[
		{
			'Input': {
				'Text': '你叫甚么名字?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': '不说？不说你就别想玩!'
			}
		},
		'jump Day0-instruction'
	],

	'Day0-not-enter-name':[
		{'Function':{
			'Apply':function(){
				monogatari.storage({
					player:{
						name: '寄寄'
					}
				});
				return true;
			},
			'Reverse':function(){
				monogatari.storage({
					player:{
						name: ''
					}
				});
			},
		}},
		'jump Day0-instruction'
	],

	'Day0-instruction':[
		'fdy 好的{{player.name}}同学，报到工作已经完成',
		'fdy 我先提醒一下这学期的注意事项哦：',
		'fdy 右上角有一个存档按钮，可以对这学期的生活进行存档',
		'fdy 但由于剧情一直会变动，测试玩家要做好存档混乱的准备',
		'fdy 另外，你有一些个人属性和物品数量，你看一下',
		'show message Day-start',
		'fdy 健康值归零之后可解锁“凉了”结局；精神值归零之后可解锁“破大防”结局；还有很多结局可以探索哦~',
		'fdy 物资则是游戏里的消耗品，可以用来推进剧情或者恢复个人属性~',
		'fdy 最后，你可以在游戏过程中解锁各种“画廊”，解锁后的画廊不仅可以在主菜单中查看，还可以在二刷、三刷游戏的时候带来意想不到的效果哦！',
		'fdy 我先送你第一个画廊吧',
		'show message Day0-badge',
		'gallery unlock badge',
		'fdy 好你可以回寝室啦',
		'i 嗯嗯谢谢老师~',
		'jump Day0-ending'
	]


});