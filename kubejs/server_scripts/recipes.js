// priority: 0

ServerEvents.recipes(event => {
    event.replaceInput(
    { input: 'createdeco:industrial_iron_ingot' },
    'createdeco:industrial_iron_ingot',
    'create_dd:industrial_iron_ingot'
  )
  event.replaceInput(
    { input: 'createdeco:industrial_iron_sheet' },
    'createdeco:industrial_iron_sheet',
    'create_dd:industrial_iron_sheet'
  )
  event.replaceInput(
    { input: 'createdeco:industrial_iron_nugget' },
    'createdeco:industrial_iron_nugget',
    'create_dd:industrial_iron_nugget'
  )

  event.replaceInput( { mod: 'tacz' },
    'minecraft:copper_ingot',
    'kubejs:copper_gunmetal' )
  event.replaceInput( { mod: 'tacz' },
    'minecraft:gold_ingot',
    'kubejs:electrum_gunparts' )
  event.replaceInput( { mod: 'tacz' },
    'minecraft:iron_ingot',
    'kubejs:steel_gunparts' )
  event.replaceInput( { mod: 'tacz' },
    'minecraft:diamond',
    'kubejs:shadowsteel_gunparts' )
  event.replaceInput( { mod: 'tacz' },
    'minecraft:netherite_ingot',
    'kubejs:nethered_gunparts' )
  event.replaceInput( { mod: 'tacz' },
    'minecraft:blaze_rod',
    'kubejs:bronze_gunparts' )

  event.remove({ output: 'iceandfire:dragonsteel_ice_ingot', mod: 'iceandfire' })
  event.remove({ output: 'iceandfire:dragonsteel_fire_ingot', mod: 'iceandfire' })
  event.remove({ output: 'iceandfire:dragonsteel_lightning_ingot', mod: 'iceandfire' })

  event.remove({ output: 'create_ironworks:bronze_ingot' })
  event.remove({ output: 'create_ironworks:bronze_nugget' })
  event.remove({ output: 'create_ironworks:steel_ingot' })
  event.remove({ output: 'create_ironworks:tin_ingot' })

  event.remove({ type: 'fabricaeexnihilo:sieve', mod: 'fabricaeexnihilo' })
  event.remove({ type: 'createsifter:sifting', mod: 'createsifter' })

  event.remove({ input: 'minecraft:copper_ingot', output: 'iceandfire:armor_copper_metal_boots'})
  event.remove({ input: 'minecraft:copper_ingot', output: 'iceandfire:armor_copper_metal_leggings'})
  event.remove({ input: 'minecraft:copper_ingot', output: 'iceandfire:armor_copper_metal_chestplate'})
  event.remove({ input: 'minecraft:copper_ingot', output: 'iceandfire:armor_copper_metal_helmet'})
  
})


console.info('Hello, World! (Loaded server scripts)')