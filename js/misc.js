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

				// For debug and Testing
                ctx.fillText("第"+day+"天 健康值="+health+"，精神值="+sanity+"，物资="+food+" h"+school+" g"+care,10* p_ratio,60* p_ratio);
				// For publish
				// ctx.fillText("第"+day+"天 健康值="+health+"，精神值="+sanity+"，物资="+food, 10* p_ratio, 60* p_ratio);

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