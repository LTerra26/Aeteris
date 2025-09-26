let CustomCommand = function(event, name){
    this.event = event
    const { commands: Commands, arguments: Arguments } = event
    this.Cmds = Commands
    this.Args = Arguments
    this.name = name
    this.execWithoutArg = null
    this.argSeq = []
    this.execSeq = []
}

CustomCommand.prototype.addArg = function(key, type){
    this.argSeq.push([key, type])
}

CustomCommand.prototype.addExec = function(exec) {
    if(this.argSeq.length) this.execSeq[this.argSeq.length - 1] = exec;
    else this.execWithoutArg = exec
}

CustomCommand.prototype.assembleArgSeq = function() {
    const {event, Cmds} = this
    const argSeq = Array.from(this.argSeq).reverse()
    const execSeq = Array.from(this.execSeq).reverse()
    const initial = Cmds.argument(argSeq[0][0], argSeq[0][1].create(event)).executes(c => execSeq[0](c))
    if(argSeq.length === 1) return initial;
    argSeq[0] = initial
    return argSeq.reduce((args, [key, type], index) => {
        if(execSeq[index]){
            return Cmds.argument(key, type.create(event))
            .executes(c => execSeq[index](c))
            .then(args)
        } 
        return Cmds.argument(key, type.create(event)).then(args)
    })
}

CustomCommand.prototype.assemble = function() {
    const {Cmds, name, execWithoutArg, argSeq} = this
    let cmd = Cmds.literal(name)
    if(execWithoutArg) cmd = cmd.executes(c => execWithoutArg(c))
    if(argSeq.length) cmd = cmd.then(this.assembleArgSeq())
    return cmd
}

CustomCommand.prototype.register = function() {
    this.event.register(this.assemble())
}

CustomCommand.prototype.get = function(c, arg){
    const [key, type] = this.argSeq.find(c => c[0] == arg)
    return type.getResult(c, key)
}
CustomCommand.prototype.getKeysAndValues = function(c, args){
    const kvMap = {}
    args.forEach(arg => kvMap[arg] = this.get(c, arg))
    return kvMap
}


ServerEvents.commandRegistry(event=>{

    let say = (x) => {Utils.server.tell(x); return 1 } //return 1 is to tell the game the function is executed successfully
    let customCmd1 = new CustomCommand(event, "say_something")
    customCmd1.addExec(c => say("you got nothing to say."))
    customCmd1.addArg("arg1", customCmd1.Args.STRING)
    customCmd1.addExec(c => say(`you say ${customCmd1.get(c, "arg1")}`))
    customCmd1.addArg("arg2", customCmd1.Args.STRING)
    customCmd1.addExec(c => {
        let kvMap = customCmd1.getKeysAndValues(c, ["arg1", "arg2"])
        return say(`you say ${kvMap.arg1} and ${kvMap.arg2}`)
    })
    customCmd1.addArg("arg3", customCmd1.Args.STRING)
    customCmd1.addExec(c => {
        let kvMap = customCmd1.getKeysAndValues(c, ["arg1", "arg2", "arg3"])
        return say(`you say ${kvMap.arg1}, ${kvMap.arg2} and ${kvMap.arg3}`)
    })
    customCmd1.register()

    let customCmd2 = new CustomCommand(event, "another_cmd")
    customCmd2.addExec(c => say("nothing happens"))
    customCmd2.register()
    
    let calc = (type, entity, multiplier) => {
        let pitch = entity.pitch * 3.14159265/180
        let yaw = entity.yaw * 3.14159265/180
        if(type == "x"){
            return -Math.cos(pitch) * Math.sin(yaw) * 10000 * multiplier
        }
        if(type == "y"){
            return -Math.sin(pitch) * 10000 * multiplier
        }
        if(type == "z"){
            return Math.cos(pitch) * Math.cos(yaw) * 10000 * multiplier
        }
    }

    let cmd_u_vect_x = new CustomCommand(event, "unit_vector_x")
    cmd_u_vect_x.addArg("target", cmd_u_vect_x.Args.ENTITY)
    cmd_u_vect_x.addArg("multiplier", cmd_u_vect_x.Args.DOUBLE)
    cmd_u_vect_x.addExec(c => {
        let kvMap = cmd_u_vect_x.getKeysAndValues(c, ["target", "multiplier"])

        return calc("x", kvMap.target, kvMap.multiplier)
    })
    cmd_u_vect_x.register()

    let cmd_u_vect_y = new CustomCommand(event, "unit_vector_y")
    cmd_u_vect_y.addArg("target", cmd_u_vect_y.Args.ENTITY)
    cmd_u_vect_y.addArg("multiplier", cmd_u_vect_x.Args.DOUBLE)
    cmd_u_vect_y.addExec(c => {
        let kvMap = cmd_u_vect_y.getKeysAndValues(c, ["target", "multiplier"])

        return calc("y", kvMap.target, kvMap.multiplier)
    })
    cmd_u_vect_y.register()

    let cmd_u_vect_z = new CustomCommand(event, "unit_vector_z")
    cmd_u_vect_z.addArg("target", cmd_u_vect_z.Args.ENTITY)
    cmd_u_vect_z.addArg("multiplier", cmd_u_vect_x.Args.DOUBLE)
    cmd_u_vect_z.addExec(c => {
        let kvMap = cmd_u_vect_z.getKeysAndValues(c, ["target", "multiplier"])

        return calc("z", kvMap.target, kvMap.multiplier)
    })
    cmd_u_vect_z.register()

})