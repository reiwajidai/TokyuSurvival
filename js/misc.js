/**
 * =======================================
 * 
 * 基于Canvas的状态栏
 * 
 * =======================================
**/

var stats_bar = null;
var grey_shade = null;
const p_ratio = window.devicePixelRatio;
//const p_ratio = 2;

monogatari.action ('Canvas').objects ({
	stats: {
		layers: ['bar'],
		props: {
			drawText: (bar) => {
				bar = stats_bar;
				bar.getContext('2d').clearRect (0, 0, bar.width, bar.height);
                const ctx = bar.getContext('2d');

                ctx.fillStyle="#FFFFFF";
                ctx.fillRect(0, 40 * p_ratio, bar.width, 30 * p_ratio);

                ctx.fillStyle="#000000";
                ctx.lineWidth=1 * p_ratio;
                ctx.strokeRect(0, 40 * p_ratio, bar.width, 30 * p_ratio); 

                ctx.fillStyle="#000000";
				ctx.font= 1*p_ratio + "rem Arial";

				const {day} = monogatari.storage('player');
                const {health} = monogatari.storage('player');
                const {food} = monogatari.storage('player');
                const {sanity} = monogatari.storage('player');
				const {school} = monogatari.storage('player');
				const {care} = monogatari.storage('player');
				const {study} = monogatari.storage('player');

                ctx.fillText("第"+day+"天 健康="+health+"，精神="+sanity+"，物资="+food+"，学业="+ study,10* p_ratio,60* p_ratio);

				// For debug and Testing
				let debug_text = 's=' + school+" c="+care;
				let remaining = 11 - day;
				let additional_text = '';
				if (remaining >= 0){
					if (remaining > 0){
						additional_text = '离考试还有' + remaining +'天'
					} else {
						additional_text = '今天考试！'
					}
					ctx.fillStyle="#333333";
					ctx.fillRect(0, 70 * p_ratio, bar.width*0.4, 30 * p_ratio);
					ctx.fillStyle="#FFFFFF";
					ctx.font= 1*p_ratio + "rem Arial";
					ctx.fillText(additional_text ,10* p_ratio, 90* p_ratio);
				}
			},
		},
		start: function ({ bar }, props, state, container) {
            stats_bar = bar;
			bar.width = this.width () * p_ratio;
			bar.height = this.height () * p_ratio;
			props.drawText (bar);
			return Promise.resolve ();
		},
		stop: ({ bar }, props, state, container) => {
            // 在给定的矩形内清除指定的像素。
			bar.getContext('2d').clearRect (0, 0, bar.width, bar.height);
		},
		resize: function ({ bar }, props, state, container) {
			bar.getContext('2d').clearRect (0, 0, bar.width, bar.height);
			bar.width = this.width () * p_ratio;
			bar.height = this.height () * p_ratio;
			props.drawText (bar);
			return Promise.resolve ();
		},
    },

	greys: {
		layers: ['greys'],
		props: {
			draw: () => {
				greys = grey_shade;
                const ctx = greys.getContext('2d');

				ctx.clearRect (0, 0, greys.width, greys.height);
				const {sanity} = monogatari.storage('player');
				var alpha = 0.7 / (sanity+1);
				if(sanity < 5){
					ctx.fillStyle='rgba(0, 0, 0, '+alpha+')';
                	ctx.fillRect(0, 0, greys.width, greys.height);
				}
			},
		},
		start: function ({ greys }, props, state, container) {
			grey_shade = greys;
			greys.width = this.width ();
			greys.height = this.height ();
			props.draw();
			return Promise.resolve ();
		},
		stop: ({ greys }, props, state, container) => {
            // 在给定的矩形内清除指定的像素。
			greys.getContext('2d').clearRect (0, 0, greys.width, greys.height);
		},
    },
});

function set_bar_zoom(){
	let b = document.getElementsByTagName("canvas-container")[0].getElementsByTagName("canvas")[0]
	b.style.zoom = 1/p_ratio;
	b.style.cssText += '; -moz-transform: scale('+ 1/p_ratio +'); -moz-transform-origin: top';
}

monogatari.$('set_stats_size', {
	'Function':{
        'Apply':function(){
            set_bar_zoom();
        },
        'Reverse':function(){
            return null
        },
	}
});