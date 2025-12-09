execute as @e[type=minecraft:marker,tag=lich_spawn,tag=!triggerd,limit=1,sort=nearest, distance=..5] at @s run summon iceandfire:dread_lich
execute as @e[type=minecraft:marker,tag=lich_spawn,tag=!triggerd,limit=1,sort=nearest, distance=..5] at @s run tag @s add triggerd

advancement revoke @s only aeteris:aeteris/open_lich_chest