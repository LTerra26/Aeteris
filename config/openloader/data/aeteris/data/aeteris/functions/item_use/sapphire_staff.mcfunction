
scoreboard players add @s weapon_cooldown 12


execute anchored eyes run summon botania:mana_burst ^ ^ ^ {lensStack: {id: "botania:lens_damage", Count: 1b}, color: 6009087, Invulnerable: 0b, hasShooter: 1b, startingMana: 240, Motion: [0.0d,0.0d,0.0d], manaLossTick: 4.0f, Rotation: [0.0f,0.0f], minManaLoss: 80, mana: 240, shooterUUID: [I; -1160731486, -362200860, -1607422105, -2029644507], Tags:["sapphire_staff"]}
execute as @e[type=botania:mana_burst, tag=sapphire_staff, tag=!fin] run data modify entity @s shooterUUID set from entity @p UUID

execute as @e[type=botania:mana_burst, tag=sapphire_staff, tag=!fin] store result entity @s Motion[0] double 0.0001 run unit_vector_x @p 1
execute as @e[type=botania:mana_burst, tag=sapphire_staff, tag=!fin] store result entity @s Motion[1] double 0.0001 run unit_vector_y @p 1
execute as @e[type=botania:mana_burst, tag=sapphire_staff, tag=!fin] store result entity @s Motion[2] double 0.0001 run unit_vector_z @p 1

execute as @e[type=botania:mana_burst, tag=sapphire_staff, tag=!fin] run tag @s add fin