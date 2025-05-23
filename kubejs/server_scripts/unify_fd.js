// priority: 10
ServerEvents.tags('block', event => {
	event.add('farmersdelight:tray_heat_sources', [
		'minecraft:smoker',
		'minecraft:blast_furnace',
		'tfc:firepit'
	])
}),
//================================================================================================
ServerEvents.recipes(event => {
    event.replaceInput({mod: 'farmersdelight'}, 'minecraft:dirt', '#forge:dirt')
    event.replaceInput({mod: 'farmersdelight'}, 'minecraft:carrot', 'tfc:food/carrot')
    event.replaceInput({mod: 'farmersdelight'}, 'minecraft:potato', 'tfc:food/potato')
    event.replaceInput({mod: 'farmersdelight'}, 'minecraft:beetroot', 'tfc:food/beet')
	event.replaceInput({mod: 'farmersdelight'}, 'farmersdelight:cabbage', 'tfc:food/cabbage')
    event.replaceInput({mod: 'farmersdelight'}, 'farmersdelight:tomato', 'tfc:food/tomato')
	event.replaceInput({mod: 'farmersdelight'}, 'farmersdelight:onion', 'tfc:food/onion')
	event.replaceInput({mod: 'farmersdelight'}, 'farmersdelight:rice', 'tfc:food/rice_grain')
	event.replaceInput({mod: 'farmersdelight'}, 'farmersdelight:straw', 'tfc:straw')
//=================================================================================================
	//event.remove({output: ['#forge:dyes'], mod: 'farmersdelight'})
	//event.remove({output: ['#forge:leather'], mod: 'farmersdelight'})
//=================================================================================================
    event.remove({output: ['#forge:dyes'], type: 'farmersdelight:cutting'})
//=================================================================================================
	event.remove([
		//{id: 'coffee_delight:coffee_beans_cooked_smoking'},
		//{id: 'coffee_delight:cuccumela_top'},
		//{id: 'coffee_delight:cuccumela_bottom'},
		//{id: 'coffee_delight:cuccumela_pot'},
		//{id: 'coffee_delight:moka_top'},
		//{id: 'coffee_delight:moka_bottom'},
		//{id: 'coffee_delight:moka_pot'},
		//{id: 'coffee_delight:balacing_siphon'},
		//{id: 'coffee_delight:mr_clever'},
		//{id: 'coffee_delight:turkey_handel'},
		//{id: 'coffee_delight:turkey_pot_part'},
		//{id: 'coffee_delight:turkey_pot'},
		//{id: 'coffee_delight:coffee_mag'},
		//{id: 'coffee_delight:wafer'},
		//{id: 'coffee_delight:coffee_wafer'},
		//{id: 'coffee_delight:berries_wafer'},
		//{id: 'coffee_delight:mag_black_coffee'},
		//{id: 'coffee_delight:mag_double_espresso_coffee'},
		//{id: 'coffee_delight:mag_arabic_coffee'},
		//{id: 'coffee_delight:mag_turkey_coffee'},
		//{id: 'coffee_delight:mag_latte_coffee'},
		//{id: 'coffee_delight:mag_moka_coffee'},
		//{id: 'coffee_delight:mag_cappuccino'},
		//{id: 'coffee_delight:mag_usa_coffee'},
		//{id: 'coffee_delight:mag_macchiato'},
		//{id: 'coffee_delight:mag_milk_coffee'},
		//{id: 'coffee_delight:mag_iced_lattee_coffee'},
		//{id: 'coffee_delight:mag_iced_moka'},
		//{id: 'coffee_delight:mag_iced_cappuccino'},
		//{id: 'coffee_delight:mag_iced_usa_coffee'},
		//{id: 'coffee_delight:mag_iced_macchiato'},
		//{id: 'coffee_delight:mag_coco'},
		//{id: 'coffee_delight:mag_iced_coco'},
		//{id: 'coffee_delight:mag_fail_coffee'},
		//{id: 'farmersrespite:nether_wart_sourdough'},
		{id: 'farmersdelight:book_from_canvas'},
		{id: 'farmersdelight:cooking/turtle_soup'},
		{id: 'farmersdelight:cutting/chicken'},
		{id: 'farmersdelight:cutting/cooked_chicken'},
		{id: 'farmersdelight:cutting/acacia_log'},
		{id: 'farmersdelight:cutting/acacia_wood'},
		{id: 'farmersdelight:cutting/jungle_log'},
		{id: 'farmersdelight:cutting/jungle_wood'},
		{id: 'farmersdelight:cutting/dark_oak_log'},
		{id: 'farmersdelight:cutting/dark_oak_wood'},
		{id: 'farmersdelight:cutting/spruce_log'},
		{id: 'farmersdelight:cutting/spruce_wood'},
		{id: 'farmersdelight:cutting/oak_log'},
		{id: 'farmersdelight:cutting/oak_wood'},
		{id: 'farmersdelight:cutting/birch_log'},
		{id: 'farmersdelight:cutting/birch_wood'},
		{id: 'farmersdelight:cutting/mangrove_log'},
		{id: 'farmersdelight:cutting/mangrove_wood'},
		{id: 'farmersdelight:cutting/cherry_log'},
		{id: 'farmersdelight:cutting/cherry_wood'},
		{id: 'farmersdelight:cutting/crimson_hyphae'},
		{id: 'farmersdelight:cutting/crimson_stem'},
		{id: 'farmersdelight:cutting/warped_hyphae'},
		{id: 'farmersdelight:cutting/warped_stem'},
		{id: 'farmersdelight:cutting/nether_bricks'},
		{id: 'farmersdelight:cutting/bricks'},
		{id: 'farmersdelight:cutting/leather_from_hide'},
		{id: 'farmersdelight:cutting/wild_beetroots'},
		{id: 'farmersdelight:cutting/wild_potatoes'},
		{id: 'farmersdelight:cutting/wild_carrots'},
		{id: 'farmersdelight:cutting/stone'},
		{id: 'farmersdelight:cutting/deepslate'},
		{id: 'farmersdelight:pumpkin_from_slices'},
		{id: 'farmersdelight:pumpkin_seeds_from_slice'},
		{id: 'farmersdelight:integration/create/mixing/pie_crust_from_mixing'},
		{id: 'farmersdelight:integration/create/mixing/cabbage_slice_from_mixing'},
		{id: 'farmersdelight:integration/immersiveengineering/fermenter/tomato'},
		{id: 'farmersdelight:pie_crust_with_pie_dough'},
		//{id: 'twilightdelight:cutting/cooked_chicken'},
		//{id: 'twilightdelight:cutting/cooked_venison'},
		//{id: 'twilightdelight:cutting/cooked_meef'},
		//{id: 'twilightdelight:fiery_knife'},
		{id: 'farmersdelight:integration/immersiveengineering/squeezer/tomato_seeds'},		
		{id: 'farmersdelight:integration/immersiveengineering/squeezer/cabbage_seeds'},
		{id: 'farmersdelight:integration/immersiveengineering/squeezer/tomato_seeds'},
		{id: 'farmersdelight:integration/immersiveengineering/squeezer/cabbage_seeds'}
	])
//=============================================================================================================
	event.remove({output: [
		//'twilightdelight:ironwood_knife',
		//'twilightdelight:knightmetal_knife',
		//'twilightdelight:steeleaf_knife',
		'farmersdelight:flint_knife',
		'farmersdelight:iron_knife',
		'farmersdelight:diamond_knife',
		'farmersdelight:netherite_knife',
		'farmersdelight:golden_knife',
		'farmersdelight:chicken_cuts',
		'farmersdelight:cooked_chicken_cuts',
		//'coffee_delight:cutting/coffee_beans',
		'farmersdelight:tomato_sauce',
		'farmersdelight:canvas_sign',
		'farmersdelight:white_canvas_sign',
		'farmersdelight:orange_canvas_sign',
		'farmersdelight:magenta_canvas_sign',
		'farmersdelight:light_blue_canvas_sign',
		'farmersdelight:yellow_canvas_sign',
		'farmersdelight:lime_canvas_sign',
		'farmersdelight:pink_canvas_sign',
		'farmersdelight:gray_canvas_sign',
		'farmersdelight:light_gray_canvas_sign',
		'farmersdelight:cyan_canvas_sign',
		'farmersdelight:purple_canvas_sign',
		'farmersdelight:blue_canvas_sign',
		'farmersdelight:brown_canvas_sign',
		'farmersdelight:green_canvas_sign',
		'farmersdelight:red_canvas_sign',
		'farmersdelight:black_canvas_sign',
		'farmersdelight:wheat_dough',
		'farmersdelight:straw_bale',
		'farmersdelight:straw',
		'farmersdelight:cabbage',
		'farmersdelight:cabbage_seeds',
		'farmersdelight:tomato',
		'farmersdelight:tomato_seeds',
		'farmersdelight:onion',
		'farmersdelight:rice_panicle',
		'farmersdelight:rice',
		'farmersdelight:stove',
		'farmersdelight:birch_cabinet',
		'farmersdelight:spruce_cabinet',
		'farmersdelight:jungle_cabinet',
		'farmersdelight:acacia_cabinet',
		'farmersdelight:dark_oak_cabinet',
		'farmersdelight:crimson_cabinet',
		'farmersdelight:warped_cabinet',
		'farmersdelight:oak_cabinet',
		'farmersdelight:mangrove_cabinet',
		'farmersdelight:cherry_cabinet',
		'farmersdelight:bamboo_cabinet',
		'farmersdelight:rotten_tomato',
		'farmersdelight:fried_egg',
		'farmersdelight:skillet',
		'farmersdelight:chicken_cuts',
		'farmersdelight:cooked_chicken_cuts',
		//'farmersdelight:hot_cocoa',
		//'farmersdelight:apple_cider',
		//'farmersdelight:melon_juice',
		//'farmersdelight:fruid_salad',
		//'farmersdelight:mixed_salad',
		//'farmersdelight:nether_salad',
		//'farmersdelight:pumpkin_soup',
		//'farmersdelight:pumpkin_soup',
		//'farmersdelight:baked_cod_stew'
	]})
})