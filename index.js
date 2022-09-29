function dimeloPapi(){
    return function whatIamListeningTo(){
        return "downtown train by tom waits"
    }
}

function receivesAFunction(dimeloPapi){

    return  dimeloPapi()

}

function returnsANamedFunction(){
    return dimeloPapi()
}

function returnsAnAnonymousFunction(){
    return function(){
        return "take this"
    }
}