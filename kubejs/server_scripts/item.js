let weapon_use = (event, id, func, mana_cost) => {
    let player = event.player;
    let item = event.item;
    let username = player.username;

    let cooldown = event.server.runCommand(`/scoreboard players get ${username} weapon_cooldown`);
    // Tribute item check
    if (item.id !== id) return;
    if (cooldown > 0) return;

    if (mana_cost) {
        // Mana check
        if (!ManaHandler.requestManaExactForTool(item, player, mana_cost, false)) return;
        ManaHandler.requestManaExactForTool(item, player, mana_cost, true)
    }

    event.server.runCommand(`/execute as ${username} at @s run function ${func}`)
}

ItemEvents.rightClicked(event => {
    if (event.hand !== 'MAIN_HAND') return;
    
    weapon_use(event, 'kubejs:sapphire_staff', 'aeteris:item_use/sapphire_staff', 2000)
    weapon_use(event, 'kubejs:water_bolt', 'aeteris:item_use/water_bolt', 3000)
    weapon_use(event, 'kubejs:aqua_sceptor', 'aeteris:item_use/aqua_sceptor', 2000)
})
