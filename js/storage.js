/* global monogatari */

/**
 * =======================================
 * 
 * 显性属性及其初值：
	* 健康值=5
		身体健康程度
		健康=1时，每天精神-1
		归零后解锁结局：凉了		
	* 精神值=5
		精神=1时，每天健康-1
		归零后解锁结局：破大防
	* 食物与水=1
		每次加餐的时候会-1
		每天可以用1点食物拿来回复1点健康值
		健康值回满之后，每天可以用2点食物拿来回复1点精神值
		每天最多使用2点食物
 * 隐性属性及其初值：
	* 护校值=3
		护校、精神同时小于等于1的话，
		吐槽、理论、被训斥时有50%的概率言论过激，
		从而被训斥（关怀+1）
	* 学校的关怀值=0
		超过5后解锁结局：喝茶
	* 层长=false
		层长角色会触发不一样的剧情
 * 
 * =======================================
 **/

'use strict'
// Persistent Storage Variable
monogatari.storage ({
	player: {
		name: '',
		health:5,
		sanity:5,
		school:3,
		care:0,
		food:1,
		leader:false,
		day:1,
        study:3,
	},
	story:{
        informant:false,
        tea_tatakai:false,
        tea_opinion:false,
		rainbow_help: false,
		rainbow_glue: false,
		exodus_help: 0,
        balcony_forward:false,
		patrol_obey: false,
        patrol_blame_escape:false, // 竖中指逃脱概率：80%
		starve_positive: false,
        starve_escape:false, // 小卖部逃脱概率：50%
        cat_positive: false,
        cat_escape:false, // 撸猫逃脱概率：60%
        antigen_call: false,
        monopoly_bankrupt_escape: false, // 大富翁破产的逃脱概率：60%
        // 综合运气王概率：14.4%
	},
});

var audio_stats_up = new Audio('assets/sounds/stats_up.mp3');
var audio_stats_down = new Audio('assets/sounds/stats_down.mp3');

// 查询对应的画廊是否解锁
function check_gallery(field){
    const game_name = monogatari._settings.Name;
    const game_version = monogatari._settings.Version;
    const gallery = localStorage.getItem(game_name + '::GameData::'+ game_version + '_gallery');
    const r = gallery.indexOf(field);
    return r != -1;
}

// 基础数值的更改

function add_sanity(value){
    const {sanity} = monogatari.storage('player');
    monogatari.storage({
        player:{
            sanity: sanity + value
        }
    });
    monogatari._actions[0]._configuration.objects.stats.props.drawText();
    monogatari._actions[0]._configuration.objects.greys.props.draw();
    if (value>=0){
        audio_stats_up.play()
    }else{
        audio_stats_down.play()
    }
}

function add_food(value){
    const {food} = monogatari.storage('player');
    monogatari.storage({
        player:{
            food: food + value
        }
    });
    monogatari._actions[0]._configuration.objects.stats.props.drawText();
    if (value>=0){
        audio_stats_up.play()
    }else{
        audio_stats_down.play()
    }
}

function add_study(value){
    const {study} = monogatari.storage('player');
    monogatari.storage({
        player:{
            study: study + value
        }
    });
    monogatari._actions[0]._configuration.objects.stats.props.drawText();
    if (value>=0){
        audio_stats_up.play()
    }else{
        audio_stats_down.play()
    }
}

function add_school(value){
    const {school} = monogatari.storage('player');
    monogatari.storage({
        player:{
            school: school + value
        }
    });
    monogatari._actions[0]._configuration.objects.stats.props.drawText();
}

function add_care(value){
    const {care} = monogatari.storage('player');
    monogatari.storage({
        player:{
            care: care + value
        }
    });
    monogatari._actions[0]._configuration.objects.stats.props.drawText();
}

function add_health(value){
    const {health} = monogatari.storage('player');
    monogatari.storage({
        player:{
            health: health + value
        }
    });
    monogatari._actions[0]._configuration.objects.stats.props.drawText();
    if (value>=0){
        audio_stats_up.play()
    }else{
        audio_stats_down.play()
    }
}