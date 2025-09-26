LootJS.modifiers((event) => {

    event
        .addBlockLootModifier('kubejs:ashen_crop')
        .customCondition({
            block : "kubejs:ashen_crop",
            condition : "minecraft:block_state_property",
            properties : {
                age : "7"
            }
        })
        .pool((pool) => {
            pool
                .rolls(1)
                .addWeightedLoot([
                    LootEntry.of("botania:black_mystical_flower"),
                    LootEntry.of("botania:gray_mystical_flower"),
                    LootEntry.of("botania:light_gray_mystical_flower")
                ])
        })
    event
        .addBlockLootModifier('kubejs:orchid_crop')
        .customCondition({
            block : "kubejs:orchid_crop",
            condition : "minecraft:block_state_property",
            properties : {
                age : "7"
            }
        })
        .pool((pool) => {
            pool
                .rolls(1)
                .addWeightedLoot([
                    LootEntry.of("botania:purple_mystical_flower"),
                    LootEntry.of("botania:pink_mystical_flower"),
                    LootEntry.of("botania:magenta_mystical_flower")
                ])
        })
    event
        .addBlockLootModifier('kubejs:crimtane_crop')
        .customCondition({
            block : "kubejs:crimtane_crop",
            condition : "minecraft:block_state_property",
            properties : {
                age : "7"
            }
        })
        .pool((pool) => {
            pool
                .rolls(1)
                .addWeightedLoot([
                    LootEntry.of("botania:red_mystical_flower"),
                    LootEntry.of("botania:orange_mystical_flower"),
                    LootEntry.of("botania:brown_mystical_flower")
                ])
        })
    event
        .addBlockLootModifier('kubejs:azure_crop')
        .customCondition({
            block : "kubejs:azure_crop",
            condition : "minecraft:block_state_property",
            properties : {
                age : "7"
            }
        })
        .pool((pool) => {
            pool
                .rolls(1)
                .addWeightedLoot([
                    LootEntry.of("botania:blue_mystical_flower"),
                    LootEntry.of("botania:light_blue_mystical_flower"),
                    LootEntry.of("botania:cyan_mystical_flower")
                ])
        })
    event
        .addBlockLootModifier('kubejs:spring_crop')
        .customCondition({
            block : "kubejs:spring_crop",
            condition : "minecraft:block_state_property",
            properties : {
                age : "7"
            }
        })
        .pool((pool) => {
            pool
                .rolls(1)
                .addWeightedLoot([
                    LootEntry.of("botania:green_mystical_flower"),
                    LootEntry.of("botania:lime_mystical_flower"),
                    LootEntry.of("botania:yellow_mystical_flower")
                ])
        })
})