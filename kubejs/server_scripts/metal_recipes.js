ServerEvents.recipes(event => {
  var j

  function removeMetalRecipes(metal) {
    var ingot = `${mIDs[j]}:${metal}_ingot`
    var nugget = `${mIDs[j]}:${metal}_nugget`
    var crushed = `create:crushed_raw_${metal}`
    if (metal === 'copper') { nugget = 'create:copper_nugget' }
    if (metal === 'silver') { crushed = 'kubejs:crushed_raw_silver' }
    if (metal === 'cobalt') { crushed = 'kubejs:crushed_raw_cobalt' }

    event.remove({ id: `tconstruct:smeltery/melting/metal/${metal}/raw` })
    event.remove({ id: `tconstruct:smeltery/melting/metal/${metal}/raw_block` })
    event.remove({ input: `create:crushed_raw_${metal}`, output: `${ingot}` })
    event.remove({ input: `${mIDs[j]}:raw_${metal}`, output: `${ingot}` })
    event.remove({ input: `${mIDs[j]}:raw_${metal}`, output: `${ingot}` })

    j += 1
  }
  function addMetalRecipes(metal) {
    var ingot = `${mIDs[j]}:${metal}_ingot`
    var nugget = `${mIDs[j]}:${metal}_nugget`
    var crushed = `create:crushed_raw_${metal}`
    if (metal === 'copper') { nugget = 'create:copper_nugget' }
    if (metal === 'silver') { crushed = 'kubejs:crushed_raw_silver' }
    if (metal === 'cobalt') { crushed = 'kubejs:crushed_raw_cobalt' }

    if (mIDs[j] === 'minecraft' ) {
      event.smelting(nugget, `fabricaeexnihilo:raw_${metal}_piece`)
    } else {
      event.smelting(nugget, `kubejs:raw_${metal}_piece`)
      event.shapeless(
        Item.of(`${mIDs[j]}:raw_${metal}`),
        [`kubejs:raw_${metal}_piece`, `kubejs:raw_${metal}_piece`, `kubejs:raw_${metal}_piece`, `kubejs:raw_${metal}_piece`]
      )
    }

    event.custom({
      type: 'create:milling',
      ingredients: [ { item: `${mIDs[j]}:raw_${metal}` } ],
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

    j+= 1
  }

  j = 0
  metals.forEach(removeMetalRecipes)
  j = 0
  metals.forEach(addMetalRecipes)
})

console.info('Hello, World! (Loaded server scripts)')