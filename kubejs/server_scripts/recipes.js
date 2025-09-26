// priority: 0
const metals = [
  'copper',
  'iron',
  'gold',
  'tin',
  'silver',
  'zinc',
  'cobalt'
]
const mIDs = []
mIDs[0] = 'minecraft'
mIDs[1] = 'minecraft'
mIDs[2] = 'minecraft'
mIDs[3] = 'create_dd'
mIDs[4] = 'iceandfire'
mIDs[5] = 'create'
mIDs[6] = 'tconstruct'

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

  event.remove({ output: 'iceandfire:dragonsteel_ice_ingot', mod: 'iceandfire' })
  event.remove({ output: 'iceandfire:dragonsteel_fire_ingot', mod: 'iceandfire' })
  event.remove({ output: 'iceandfire:dragonsteel_lightning_ingot', mod: 'iceandfire' })

  event.remove({ output: 'create_ironworks:bronze_ingot' })
  event.remove({ output: 'create_ironworks:bronze_nugget' })
  event.remove({ output: 'create_ironworks:steel_ingot' })
  event.remove({ output: 'create_ironworks:tin_ingot' })

  event.remove({ type: 'fabricaeexnihilo:sieve', mod: 'fabricaeexnihilo' })
  event.remove({ type: 'createsifter:sifting', mod: 'createsifter' })
})
console.info('Hello, World! (Loaded server scripts)')