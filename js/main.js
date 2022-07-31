'use strict';
/* global Monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:


$_ready (() => {
	// 2. Inside the $_ready function:
	
	// 调试用的代码
	// monogatari.debug.level (5);

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:

		// 读取存储进度并再次进入游戏后，如果要回滚到存档点前的游戏状态，就会报错
		// 这个问题从5月3号的版本开始就存在了
		// 实在解决不了，不如禁掉回滚操作吧
		// This will remove the "Back" button from the quick menu
		monogatari.component ('quick-menu').removeButton ('Back');

		// This will disable the left key listener to roll back
		monogatari.unregisterListener ('back');

		// 生成图片编号
		generate_img_label();
		monogatari.assets ('images', {
			'p1': get_img_link(),
			'p2': get_img_link(),
			'p3': get_img_link(),
			'p4': get_img_link(),
			'p5': get_img_link(),
		});

		// 增加UI界面的中文翻译
		monogatari.translation ('简体中文', {
			'Gallery': '画廊',
			'Settings': '游戏设置',
			'Credits': '制作名单',
		});
		
		// 在主界面加入新的页面元素
		monogatari.component ('main-screen').template (() => {
			return `
				<game-logo-container></game-logo-container>
				<main-menu></main-menu>
			`;
		});

		// 随机主界面
		let main_screen_element = document.querySelector("main-screen.animated");
		let screen_num = Math.floor(Math.random() * 2.99)
		let screen_link = [`url("./assets/images/main_menu.png")`, `url("./assets/images/main_menu_2.png")`, `url("./assets/images/main_menu_3.png")`]
		main_screen_element.style.backgroundImage = screen_link[screen_num];

		// 修复credits界面标题不是中文的问题
		const credit_title = document.querySelector ('credits-screen [data-content="title"]');
		credit_title.innerHTML = '<h2 data-string="Credits" data-content="title">制作名单</h2>'

	});
	
	// 加载游戏存档之后
	monogatari.on ('didLoadGame', () => {
		// 调整数值条的缩放
		set_bar_zoom()
	});
});
