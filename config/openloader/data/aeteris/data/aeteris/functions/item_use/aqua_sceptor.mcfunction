
scoreboard players add @s weapon_cooldown 2


execute anchored eyes run summon botania:mana_burst ^ ^ ^ {lensStack: {id: "botania:lens_damage", Count: 1b}, gravity: 0.2f, color: 2236631, Invulnerable: 0b, hasShooter: 1b, startingMana: 240, Motion: [0.0d,0.0d,0.0d], manaLossTick: 4.0f, Rotation: [0.0f,0.0f], minManaLoss: 80, mana: 240, shooterUUID: [I; -1160731486, -362200860, -1607422105, -2029644507], Tags:["aqua_sceptor"]}
execute as @e[type=botania:mana_burst, tag=aqua_sceptor, tag=!fin] run data modify entity @s shooterUUID set from entity @p UUID
execute as @e[type=botania:mana_burst, tag=aqua_sceptor, tag=!fin] store result entity @s Motion[0] double 0.0001 run unit_vector_x @p 2
execute as @e[type=botania:mana_burst, tag=aqua_sceptor, tag=!fin] store result entity @s Motion[1] double 0.0001 run unit_vector_y @p 2
execute as @e[type=botania:mana_burst, tag=aqua_sceptor, tag=!fin] store result entity @s Motion[2] double 0.0001 run unit_vector_z @p 2
execute as @e[type=botania:mana_burst, tag=aqua_sceptor, tag=!fin] run tag @s add fin