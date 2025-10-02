// priority: 0

// Visit the wiki for more info - https://kubejs.com/

StartupEvents.registry('item', event => {
    event.create('test_item').maxStackSize(32)
    event.create('fire_compound')
    event.create('ice_compound')
    event.create('lightning_compound')
    event.create('growing_crystal_heart').maxStackSize(1)
    event.create('heart_fragment')
        .maxStackSize(32)
        .food(food => {
            food.hunger(0)
            food.saturation(2)
            food.fastToEat(true)
            food.alwaysEdible(true)
        })
    event.create('sapphire_staff')
        .unstackable()
        .tooltip('Simple Magic Weapon')
    event.create('aqua_sceptor')
        .unstackable()
        .tooltip('Simple Magic Weapon')
    event.create('water_bolt')
        .unstackable()
        .tooltip('Simple Magic Weapon')
    
    event.create('iron_dust').tag('forge:dusts/iron')
    event.create('gold_dust').tag('forge:dusts/gold')
    event.create('copper_dust').tag('forge:dusts/copper')
    event.create('tin_dust').tag('forge:dusts/tin')
    event.create('silver_dust').tag('forge:dusts/silver')    
    event.create('zinc_dust').tag('forge:dusts/zinc')
    event.create('cobalt_dust').tag('forge:dusts/cobalt')

    event.create('raw_cobalt_piece').tag('forge:raw_materials/cobalt')
    event.create('raw_silver_piece').tag('forge:raw_materials/silver')
    event.create('raw_zinc_piece').tag('forge:raw_materials/zinc')
    event.create('raw_tin_piece').tag('forge:raw_materials/tin')

    event.create('crushed_raw_silver').tag('forge:raw_materials/silver')
    event.create('crushed_raw_cobalt').tag('forge:raw_materials/cobalt')

    event.create('nethered_ingot')
    event.create('infused_netherite_ingot')
    event.create('dragonbone_powder')

    event.create('incomplete_shadowsteel_mesh')
    event.create('incomplete_nethered_mesh')
    event.create('incomplete_mithril_mesh')

    event.create('end_portal_frame_hull')
    event.create('lens_holder')
    event.create('strange_paste')
    event.create('quartz_powder').tag('forge:dusts/quartz')
    event.create('snow_powder')
    event.create('void_dust')

})

ItemEvents.modification(event => {
    event.modify('artifacts:crystal_heart', item => {
        item.maxStackSize = 8
        item.foodProperties = food => {
            food.hunger(0)
            food.saturation(4)
            food.fastToEat(true)
            food.alwaysEdible(true)
        }
    })
})


console.info('Trives : Loaded item scripts!')

