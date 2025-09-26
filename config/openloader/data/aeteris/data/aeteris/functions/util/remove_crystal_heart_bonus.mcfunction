execute if score @s crystal_heart_bonus matches 0 run tellraw @a {"text":"No Heartcrystal Bonus","color":"red"}
execute unless score @s crystal_heart_bonus matches 0 run damage @s 2

execute if score @s crystal_heart_bonus matches 1 run function aeteris:util/heart/heart1
execute if score @s crystal_heart_bonus matches 2 run function aeteris:util/heart/heart2
execute if score @s crystal_heart_bonus matches 3 run function aeteris:util/heart/heart3
execute if score @s crystal_heart_bonus matches 4 run function aeteris:util/heart/heart4
execute if score @s crystal_heart_bonus matches 5 run function aeteris:util/heart/heart5
execute if score @s crystal_heart_bonus matches 6 run function aeteris:util/heart/heart6
execute if score @s crystal_heart_bonus matches 7 run function aeteris:util/heart/heart7
execute if score @s crystal_heart_bonus matches 8 run function aeteris:util/heart/heart8
execute if score @s crystal_heart_bonus matches 9 run function aeteris:util/heart/heart9
execute if score @s crystal_heart_bonus matches 10 run function aeteris:util/heart/heart10
execute if score @s crystal_heart_bonus matches 11 run function aeteris:util/heart/heart10

execute unless score @s crystal_heart_bonus matches 0 run scoreboard players remove @s crystal_heart_bonus 1