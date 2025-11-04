// priority: 2

ServerEvents.recipes(event => {

  function removeMetalRecipesFor(metal, id) {
    var ingot = `${id}:${metal}_ingot`
    var nugget = `${id}:${metal}_nugget`
    var crushed = `create:crushed_raw_${metal}`
    if (metal === 'copper') { nugget = 'create:copper_nugget' }
    if (metal === 'silver') { crushed = 'kubejs:crushed_raw_silver' }
    if (metal === 'cobalt') { crushed = 'kubejs:crushed_raw_cobalt' }

    event.remove({ id: `tconstruct:smeltery/melting/metal/${metal}/raw` })
    event.remove({ id: `tconstruct:smeltery/melting/metal/${metal}/raw_block` })
    event.remove({ input: `create:crushed_raw_${metal}`, output: `${ingot}` })
    event.remove({ input: `${id}:raw_${metal}`, output: `${ingot}` })
    event.remove({ input: `${id}:raw_${metal}`, output: `${ingot}` })
  }
  function addMetalRecipesFor(metal, id) {
    var nugget = `${id}:${metal}_nugget`
    var crushed = `create:crushed_raw_${metal}`
    if (metal === 'copper') { nugget = 'create:copper_nugget' }
    if (metal === 'silver') { crushed = 'kubejs:crushed_raw_silver' }
    if (metal === 'cobalt') { crushed = 'kubejs:crushed_raw_cobalt' }

    if (id === 'minecraft' ) {
      event.smelting(nugget, `fabricaeexnihilo:raw_${metal}_piece`)
    } else {
      event.smelting(nugget, `kubejs:raw_${metal}_piece`)
      event.shapeless(
        Item.of(`${id}:raw_${metal}`),
        [`kubejs:raw_${metal}_piece`, `kubejs:raw_${metal}_piece`, `kubejs:raw_${metal}_piece`, `kubejs:raw_${metal}_piece`]
      )
    }

    event.custom({
      type: 'create:milling',
      ingredients: [ { item: `${id}:raw_${metal}` } ],
      processingTime: 100,
      results: [
        {
          chance: 0.9,
          item: `${crushed}`
        }
      ]
    })
    event.custom({
      type: 'create:crushing',
      ingredients: [ { item: crushed } ],
      processingTime: 400,
      results: [
        {
          count: 2,
          item: `kubejs:${metal}_dust`
        },
        {
          chance: 0.3,
          item: `kubejs:${metal}_dust`
        }
      ]
    })

  }

  addMetalRecipesFor('copper', 'minecraft')
  addMetalRecipesFor('iron', 'minecraft')
  addMetalRecipesFor('gold', 'minecraft')
  addMetalRecipesFor('tin', 'create_dd')
  addMetalRecipesFor('silver', 'iceandfire')
  addMetalRecipesFor('zinc', 'create')
  addMetalRecipesFor('cobalt', 'tconstruct')


  removeMetalRecipesFor('copper', 'minecraft')
  removeMetalRecipesFor('iron', 'minecraft')
  removeMetalRecipesFor('gold', 'minecraft')
  removeMetalRecipesFor('tin', 'create_dd')
  removeMetalRecipesFor('silver', 'iceandfire')
  removeMetalRecipesFor('zinc', 'create')
  removeMetalRecipesFor('cobalt', 'tconstruct')

  
})