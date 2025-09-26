summon experience_orb ~ ~ ~ {Value:36}
playsound botania:terrasteel_craft player @s

effect give @s minecraft:regeneration 10 0
effect give @s minecraft:resistance 30 0

attribute @s minecraft:generic.max_health modifier add a-a-a-a-a crystal_heart_bonus 2 add

execute if score @s crystal_heart_bonus matches 1 run attribute @s minecraft:generic.max_health modifier add a1-a-a-a-a crystal_heart_bonus 2 add
execute if score @s crystal_heart_bonus matches 2 run attribute @s minecraft:generic.max_health modifier add a2-a-a-a-a crystal_heart_bonus 2 add
execute if score @s crystal_heart_bonus matches 3 run attribute @s minecraft:generic.max_health modifier add a3-a-a-a-a crystal_heart_bonus 2 add
execute if score @s crystal_heart_bonus matches 4 run attribute @s minecraft:generic.max_health modifier add a4-a-a-a-a crystal_heart_bonus 2 add
execute if score @s crystal_heart_bonus matches 5 run attribute @s minecraft:generic.max_health modifier add a5-a-a-a-a crystal_heart_bonus 2 add
execute if score @s crystal_heart_bonus matches 6 run attribute @s minecraft:generic.max_health modifier add a6-a-a-a-a crystal_heart_bonus 2 add
execute if score @s crystal_heart_bonus matches 7 run attribute @s minecraft:generic.max_health modifier add a7-a-a-a-a crystal_heart_bonus 2 add
execute if score @s crystal_heart_bonus matches 8 run attribute @s minecraft:generic.max_health modifier add a8-a-a-a-a crystal_heart_bonus 2 add
execute if score @s crystal_heart_bonus matches 9 run attribute @s minecraft:generic.max_health modifier add a9-a-a-a-a crystal_heart_bonus 2 add

execute if score @s crystal_heart_bonus matches ..10 run scoreboard players add @s crystal_heart_bonus 1

execute if score @s crystal_heart_bonus matches 11.. run effect give @s minecraft:absorption 100 2
execute if score @s crystal_heart_bonus matches 11.. run effect give @s minecraft:regeneration 10 2
advancement revoke @s only aeteris:aeteris/consume_heart