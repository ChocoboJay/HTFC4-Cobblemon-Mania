// priority: 10
ServerEvents.recipes(event => {
    // === remove mod =====================================================
    //event.remove({output: ['#forge:dyes'], mod: 'tfc'})
    // ====replace item on crafting =======================================
	event.replaceInput({mod: 'firmalife'}, 'minecraft:glass', '#forge:2panes')
	//
    event.remove({output: [
		//'#tfc:lumber',
		//'#tfc:foods/dough',
		'#tfc:colored_carpet',
		'#tfc:colored_terracotta',
		'#tfc:colored_bed',
		'#tfc:colored_shulker_boxes',
		'#tfc:colored_concrete_powder',
	], type: 'minecraft:crafting_shapeless'})
    event.remove({output: [
		'#tfc:colored_bed',
		'#tfc:colored_carpet',
		'#tfc:colored_terracotta',
		'#tfc:colored_stained_glass_pane'
	], type: 'minecraft:crafting_shaped'})
    // ====remove  id recipe ==============================================
    event.remove([
		{id: 'alekiships:crafting/anchor'},
		{id: 'alekiships:crafting/cannon_ball'},
		{id: 'alekiships:crafting/cleat'},
		{id: 'alekiships:crafting/oarlock'},
		//
        {id: 'artisanal:barrel/candle'},
        {id: 'artisanal:crafting/barley_dough'},
        {id: 'artisanal:crafting/maize_dough'},
        {id: 'artisanal:crafting/rice_dough'},
        {id: 'artisanal:crafting/rye_dough'},
        {id: 'artisanal:crafting/oat_dough'},
        {id: 'artisanal:crafting/wheat_dough'},
        {id: 'artisanal:crafting/pumpkin_pie'},
        {id: 'artisanal:crafting/metal/ingot/high_carbon_steel'},
        {id: 'artisanal:crafting/metal/ingot/high_carbon_black_steel'},
        {id: 'artisanal:crafting/metal/ingot/high_carbon_blue_steel'},
        {id: 'artisanal:crafting/metal/ingot/high_carbon_red_steel'},
		//
		{id: 'firmalife:pot/beet_sugar'},
		{id: 'firmalife:crafting/empty_jar'},
		//
		{id: /^tfc:quern\/.+_cut$/}, // Matching for 'tfc:quern/***_cut'
		{id: 'tfc:crafting/dough/barley_dough_8'},
		{id: 'tfc:crafting/dough/barley_dough_7'},
		{id: 'tfc:crafting/dough/barley_dough_6'},
		{id: 'tfc:crafting/dough/barley_dough_5'},
		{id: 'tfc:crafting/dough/barley_dough_4'},
		{id: 'tfc:crafting/dough/barley_dough_3'},
		{id: 'tfc:crafting/dough/barley_dough_2'},
		{id: 'tfc:crafting/dough/barley_dough_1'},
		{id: 'tfc:crafting/dough/maize_dough_8'},
		{id: 'tfc:crafting/dough/maize_dough_7'},
		{id: 'tfc:crafting/dough/maize_dough_6'},
		{id: 'tfc:crafting/dough/maize_dough_5'},
		{id: 'tfc:crafting/dough/maize_dough_4'},
		{id: 'tfc:crafting/dough/maize_dough_3'},
		{id: 'tfc:crafting/dough/maize_dough_2'},
		{id: 'tfc:crafting/dough/maize_dough_1'},
		{id: 'tfc:crafting/dough/oat_dough_8'},
		{id: 'tfc:crafting/dough/oat_dough_7'},
		{id: 'tfc:crafting/dough/oat_dough_6'},
		{id: 'tfc:crafting/dough/oat_dough_5'},
		{id: 'tfc:crafting/dough/oat_dough_4'},
		{id: 'tfc:crafting/dough/oat_dough_3'},
		{id: 'tfc:crafting/dough/oat_dough_2'},
		{id: 'tfc:crafting/dough/oat_dough_1'},
		{id: 'tfc:crafting/dough/rye_dough_8'},
		{id: 'tfc:crafting/dough/rye_dough_7'},
		{id: 'tfc:crafting/dough/rye_dough_6'},
		{id: 'tfc:crafting/dough/rye_dough_5'},
		{id: 'tfc:crafting/dough/rye_dough_4'},
		{id: 'tfc:crafting/dough/rye_dough_3'},
		{id: 'tfc:crafting/dough/rye_dough_2'},
		{id: 'tfc:crafting/dough/rye_dough_1'},
		{id: 'tfc:crafting/dough/rice_dough_8'},
		{id: 'tfc:crafting/dough/rice_dough_7'},
		{id: 'tfc:crafting/dough/rice_dough_6'},
		{id: 'tfc:crafting/dough/rice_dough_5'},
		{id: 'tfc:crafting/dough/rice_dough_4'},
		{id: 'tfc:crafting/dough/rice_dough_3'},
		{id: 'tfc:crafting/dough/rice_dough_2'},
		{id: 'tfc:crafting/dough/rice_dough_1'},
		{id: 'tfc:crafting/dough/wheat_dough_8'},
		{id: 'tfc:crafting/dough/wheat_dough_7'},
		{id: 'tfc:crafting/dough/wheat_dough_6'},
		{id: 'tfc:crafting/dough/wheat_dough_5'},
		{id: 'tfc:crafting/dough/wheat_dough_4'},
		{id: 'tfc:crafting/dough/wheat_dough_3'},
		{id: 'tfc:crafting/dough/wheat_dough_2'},
		{id: 'tfc:crafting/dough/wheat_dough_1'},
		{id: 'tfc:crafting/vanilla/redstone/steel_hopper'},
		{id: 'tfc:crafting/paper'},
		{id: 'tfc:crafting/stick_from_bundle'},
		{id: 'tfc:crafting/wood/acacia_slab_undo'},
        {id: 'tfc:crafting/wood/acacia_stairs_undo'},
        {id: 'tfc:crafting/wood/acacia_lumber_planks'},
        {id: 'tfc:crafting/wood/ash_slab_undo'},
        {id: 'tfc:crafting/wood/ash_stairs_undo'},
        {id: 'tfc:crafting/wood/ash_lumber_planks'},
        {id: 'tfc:crafting/wood/aspen_slab_undo'},
        {id: 'tfc:crafting/wood/aspen_stairs_undo'},
        {id: 'tfc:crafting/wood/aspen_lumber_planks'},
        {id: 'tfc:crafting/wood/birch_slab_undo'},
        {id: 'tfc:crafting/wood/birch_stairs_undo'},
        {id: 'tfc:crafting/wood/birch_lumber_planks'},
        {id: 'tfc:crafting/wood/blackwood_slab_undo'},
        {id: 'tfc:crafting/wood/blackwood_stairs_undo'},
        {id: 'tfc:crafting/wood/blackwood_lumber_planks'},
        {id: 'tfc:crafting/wood/chestnut_slab_undo'},
        {id: 'tfc:crafting/wood/chestnut_stairs_undo'},
        {id: 'tfc:crafting/wood/chestnut_lumber_planks'},
        {id: 'tfc:crafting/wood/douglas_fir_slab_undo'},
        {id: 'tfc:crafting/wood/douglas_fir_stairs_undo'},
        {id: 'tfc:crafting/wood/douglas_fir_lumber_planks'},
        {id: 'tfc:crafting/wood/hickory_slab_undo'},
        {id: 'tfc:crafting/wood/hickory_stairs_undo'},
        {id: 'tfc:crafting/wood/hickory_lumber_planks'},
        {id: 'tfc:crafting/wood/kapok_slab_undo'},
        {id: 'tfc:crafting/wood/kapok_stairs_undo'},
        {id: 'tfc:crafting/wood/kapok_lumber_planks'},
        {id: 'tfc:crafting/wood/mangrove_slab_undo'},
        {id: 'tfc:crafting/wood/mangrove_stairs_undo'},
        {id: 'tfc:crafting/wood/mangrove_lumber_planks'},
        {id: 'tfc:crafting/wood/maple_slab_undo'},
        {id: 'tfc:crafting/wood/maple_stairs_undo'},
        {id: 'tfc:crafting/wood/maple_lumber_planks'},
        {id: 'tfc:crafting/wood/oak_slab_undo'},
        {id: 'tfc:crafting/wood/oak_stairs_undo'},
        {id: 'tfc:crafting/wood/oak_lumber_planks'},
        {id: 'tfc:crafting/wood/palm_slab_undo'},
        {id: 'tfc:crafting/wood/palm_mosaic_slab_undo'},
        {id: 'tfc:crafting/wood/palm_stairs_undo'},
        {id: 'tfc:crafting/wood/palm_mosaic_stairs_undo'},
        {id: 'tfc:crafting/wood/palm_lumber_planks'},
        {id: 'tfc:crafting/wood/pine_slab_undo'},
        {id: 'tfc:crafting/wood/pine_stairs_undo'},
        {id: 'tfc:crafting/wood/pine_lumber_planks'},
        {id: 'tfc:crafting/wood/rosewood_slab_undo'},
        {id: 'tfc:crafting/wood/rosewood_stairs_undo'},
        {id: 'tfc:crafting/wood/rosewood_lumber_planks'},
        {id: 'tfc:crafting/wood/sequoia_slab_undo'},
        {id: 'tfc:crafting/wood/sequoia_stairs_undo'},
        {id: 'tfc:crafting/wood/sequoia_lumber_planks'},
        {id: 'tfc:crafting/wood/spruce_slab_undo'},
        {id: 'tfc:crafting/wood/spruce_stairs_undo'},
        {id: 'tfc:crafting/wood/spruce_lumber_planks'},
        {id: 'tfc:crafting/wood/sycamore_slab_undo'},
        {id: 'tfc:crafting/wood/sycamore_stairs_undo'},
        {id: 'tfc:crafting/wood/sycamore_lumber_planks'},
        {id: 'tfc:crafting/wood/white_cedar_slab_undo'},
        {id: 'tfc:crafting/wood/white_cedar_stairs_undo'},
        {id: 'tfc:crafting/wood/white_cedar_lumber_planks'},
        {id: 'tfc:crafting/wood/willow_slab_undo'},
        {id: 'tfc:crafting/wood/willow_stairs_undo'},
        {id: 'tfc:crafting/wood/willow_lumber_planks'},
        {id: 'tfc:crafting/vanilla/compass'},
        {id: 'tfc:crafting/vanilla/redstone/steel_hopper'},
		{id: 'tfc:crafting/vanilla/redstone/hopper'},
		//        
		{id: 'tfc:heating/torch_from_stick_bunch'},
		//
		{id: 'tfc:leather_knapping/boots'},
		{id: 'tfc:leather_knapping/horse_armor'},
		{id: 'tfc:leather_knapping/chestplate'},
		{id: 'tfc:leather_knapping/helmet'},
		{id: 'tfc:leather_knapping/leggings'},
		{id: 'tfc:leather_knapping/saddle'},
		//
		{id: 'tfc_items:anvil/aluminum_wire'},
		{id: 'tfc_items:anvil/bronze_wire'},
		{id: 'tfc_items:anvil/brass_wire'},
		{id: 'tfc_items:anvil/copper_wire'},
		{id: 'tfc_items:anvil/nickel_wire'},
		{id: 'tfc_items:anvil/wrought_iron_wire'},
		{id: 'tfc_items:anvil/cast_iron_wire'},
		{id: 'tfc_items:anvil/gold_wire'},
		{id: 'tfc_items:anvil/rose_gold_wire'},
		{id: 'tfc_items:anvil/electrum_wire'},
		{id: 'tfc_items:anvil/constantan_wire'},
		{id: 'tfc_items:anvil/lead_wire'},
		{id: 'tfc_items:anvil/uranium_wire'},
		{id: 'tfc_items:anvil/tin_wire'},
		{id: 'tfc_items:anvil/zinc_wire'},
		{id: 'tfc_items:crafting/leather_sheet'},
		{id: 'tfc_items:crafting/leather_strip'},
		{id: 'tfc_items:crafting/plant_string'},
		
		//
		{id: 'tfcloot:crafting/diamond_polished'},
		{id: 'tfcloot:crafting/emerald_polished'},
		{id: 'tfcloot:crafting/lapis_lazuli_polished'},
		//
		{id: 'tfc_ie_addon:anvil/empty_casing'},
		{id: 'tfc_ie_addon:anvil/toolupgrade_revolver_bayonet'},
		{id: 'tfc_ie_addon:blueprint/mold_sheet'},
		{id: 'tfc_ie_addon:blueprint/mold_block'},
		{id: 'tfc_ie_addon:arc_furnace/steel'},
		{id: 'tfc_ie_addon:arc_furnace/insulating_glass_limonite'},
		{id: 'tfc_ie_addon:arc_furnace/insulating_glass_hematite'},
		{id: 'tfc_ie_addon:barrel/redstone_acid'},
		{id: 'tfc_ie_addon:cokeoven/bituminous_coal'},
		{id: 'tfc_ie_addon:cokeoven/lignite'},
		
		{id: 'tfc_ie_addon:crafting/aluminum_sheet_to_plate'},
		{id: 'tfc_ie_addon:crafting/electrum_sheet_to_plate'},
		{id: 'tfc_ie_addon:crafting/constantan_sheet_to_plate'},
		{id: 'tfc_ie_addon:crafting/lead_sheet_to_plate'},
		{id: 'tfc_ie_addon:crafting/uranium_sheet_to_plate'},
		{id: 'tfc_ie_addon:crafting/wrought_iron_sheet_to_plate'},
		{id: 'tfc_ie_addon:crafting/sheetmetal_steel'},
		{id: 'tfc_ie_addon:crafting/ersatz_leather_firmalife'},

		{id: 'tfc_ie_addon:crusher/salt'},
		{id: 'tfc_ie_addon:crusher/sandstone/cut_black'},
		{id: 'tfc_ie_addon:crusher/sandstone/raw_black'},
		{id: 'tfc_ie_addon:crusher/sandstone/smooth_black'},
		{id: 'tfc_ie_addon:crusher/sandstone/cut_brown'},
		{id: 'tfc_ie_addon:crusher/sandstone/raw_brown'},
		{id: 'tfc_ie_addon:crusher/sandstone/smooth_brown'},
		{id: 'tfc_ie_addon:crusher/sandstone/cut_green'},
		{id: 'tfc_ie_addon:crusher/sandstone/raw_green'},
		{id: 'tfc_ie_addon:crusher/sandstone/smooth_green'},
		{id: 'tfc_ie_addon:crusher/sandstone/cut_pink'},
		{id: 'tfc_ie_addon:crusher/sandstone/raw_pink'},
		{id: 'tfc_ie_addon:crusher/sandstone/smooth_pink'},
		{id: 'tfc_ie_addon:crusher/sandstone/cut_red'},
		{id: 'tfc_ie_addon:crusher/sandstone/raw_red'},
		{id: 'tfc_ie_addon:crusher/sandstone/smooth_red'},
		{id: 'tfc_ie_addon:crusher/sandstone/cut_white'},
		{id: 'tfc_ie_addon:crusher/sandstone/raw_white'},
		{id: 'tfc_ie_addon:crusher/sandstone/smooth_white'},
		{id: 'tfc_ie_addon:crusher/sandstone/cut_yellow'},
		{id: 'tfc_ie_addon:crusher/sandstone/raw_yellow'},
		{id: 'tfc_ie_addon:crusher/sandstone/smooth_yellow'},

		{id: 'tfc_ie_addon:heating/hop_graphite_ingot'},

		{id: 'tfc_ie_addon:metalpress/steel_block'},
		{id: 'tfc_ie_addon:metalpress/uranium_block'},
		{id: 'tfc_ie_addon:metalpress/plate_wrought_iron'},

		{id: 'tfc_ie_addon:mixer/herbicide_tetrahedrite'},
		{id: 'tfc_ie_addon:mixer/herbicide_malachite'},
		{id: 'tfc_ie_addon:mixer/limewater'},

		{id: 'tfc_ie_addon:refinery/milk_vinegar'},

		{id: 'tfc_ie_addon:mold_sheet'},
		{id: 'tfc_ie_addon:mold_block'},

		{id: 'tfc_ie_addon:sawmill/acacia_log'},
		{id: 'tfc_ie_addon:sawmill/acacia_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/acacia_wood'},
		{id: 'tfc_ie_addon:sawmill/acacia_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/ash_log'},
		{id: 'tfc_ie_addon:sawmill/ash_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/ash_wood'},
		{id: 'tfc_ie_addon:sawmill/ash_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/aspen_log'},
		{id: 'tfc_ie_addon:sawmill/aspen_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/aspen_wood'},
		{id: 'tfc_ie_addon:sawmill/aspen_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/birch_log'},
		{id: 'tfc_ie_addon:sawmill/birch_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/birch_wood'},
		{id: 'tfc_ie_addon:sawmill/birch_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/blackwood_log'},
		{id: 'tfc_ie_addon:sawmill/blackwood_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/blackwood_wood'},
		{id: 'tfc_ie_addon:sawmill/blackwood_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/chestnut_log'},
		{id: 'tfc_ie_addon:sawmill/chestnut_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/chestnut_wood'},
		{id: 'tfc_ie_addon:sawmill/chestnut_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/douglas_fir_log'},
		{id: 'tfc_ie_addon:sawmill/douglas_fir_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/douglas_fir_wood'},
		{id: 'tfc_ie_addon:sawmill/douglas_fir_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/hickory_log'},
		{id: 'tfc_ie_addon:sawmill/hickory_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/hickory_wood'},
		{id: 'tfc_ie_addon:sawmill/hickory_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/kapok_log'},
		{id: 'tfc_ie_addon:sawmill/kapok_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/kapok_wood'},
		{id: 'tfc_ie_addon:sawmill/kapok_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/maple_log'},
		{id: 'tfc_ie_addon:sawmill/maple_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/maple_wood'},
		{id: 'tfc_ie_addon:sawmill/maple_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/oak_log'},
		{id: 'tfc_ie_addon:sawmill/oak_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/oak_wood'},
		{id: 'tfc_ie_addon:sawmill/oak_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/palm_log'},
		{id: 'tfc_ie_addon:sawmill/palm_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/palm_wood'},
		{id: 'tfc_ie_addon:sawmill/palm_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/pine_log'},
		{id: 'tfc_ie_addon:sawmill/pine_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/pine_wood'},
		{id: 'tfc_ie_addon:sawmill/pine_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/rosewood_log'},
		{id: 'tfc_ie_addon:sawmill/rosewood_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/rosewood_wood'},
		{id: 'tfc_ie_addon:sawmill/rosewood_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/sequoia_log'},
		{id: 'tfc_ie_addon:sawmill/sequoia_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/sequoia_wood'},
		{id: 'tfc_ie_addon:sawmill/sequoia_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/spruce_log'},
		{id: 'tfc_ie_addon:sawmill/spruce_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/spruce_wood'},
		{id: 'tfc_ie_addon:sawmill/spruce_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/sycamore_log'},
		{id: 'tfc_ie_addon:sawmill/sycamore_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/sycamore_wood'},
		{id: 'tfc_ie_addon:sawmill/sycamore_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/white_cedar_log'},
		{id: 'tfc_ie_addon:sawmill/white_cedar_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/white_cedar_wood'},
		{id: 'tfc_ie_addon:sawmill/white_cedar_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/willow_log'},
		{id: 'tfc_ie_addon:sawmill/willow_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/willow_wood'},
		{id: 'tfc_ie_addon:sawmill/willow_stripped_wood'},

		{id: 'tfc_ie_addon:squeezer/carrot'},		
		{id: 'tfc_ie_addon:squeezer/cabbage'},
		{id: 'tfc_ie_addon:crusher/olive'},		
		{id: 'tfc_ie_addon:squeezer/tomato'},		
		{id: 'tfc_ie_addon:squeezer/sugarcane'},		
		{id: 'tfc_ie_addon:squeezer/rice'},		
		{id: 'tfc_ie_addon:squeezer/rye'},		
		{id: 'tfc_ie_addon:squeezer/squash'},		
		{id: 'tfc_ie_addon:squeezer/beet'},		
		{id: 'tfc_ie_addon:squeezer/soybean'},		
		{id: 'tfc_ie_addon:squeezer/green_bean'},		
		{id: 'tfc_ie_addon:squeezer/barley'},		
		{id: 'tfc_ie_addon:squeezer/oat'},		
		{id: 'tfc_ie_addon:squeezer/garlic'},		
		{id: 'tfc_ie_addon:squeezer/maize'},		
		{id: 'tfc_ie_addon:squeezer/wheat'},		
		{id: 'tfc_ie_addon:squeezer/jute'},		
		{id: 'tfc_ie_addon:squeezer/potato'},		
		{id: 'tfc_ie_addon:squeezer/onion'},
		{id: 'tfc_ie_addon:squeezer/onion'},
		{id: 'tfc_ie_addon:squeezer/olive'},
		//
		{id: 'tfchotornot:heating/wood_tongs_torch'},
		//{id: 'tfc_metal_items:seq_pressing/double_sheets/constantan'}
	])
    // ==== remove all ===================================================
    event.remove({output: [
    //    '--------------',
    ]})
})