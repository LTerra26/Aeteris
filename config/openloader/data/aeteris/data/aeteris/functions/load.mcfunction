scoreboard objectives add max_health dummy
scoreboard objectives add crystal_heart_bonus dummy
scoreboard objectives add weapon_cooldown dummy
execute as @a unless score @s weapon_cooldown matches 0..3000 run scoreboard players set @s weapon_cooldown 0

tellraw @a {"text":"Aeteris Modpack Data loaded!","color":"light_purple"}