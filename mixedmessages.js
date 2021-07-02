const messageGenerator={
    _motivational:[],
    
    selector(array){
        const randomIdentifier = Math.floor(Math.random()*array.lenght);
        return array[randomIdentifier];
    },
    get motivational(){
        return this.selector(this._motivational)
    },
    
    addMotivation(...params){
        for(let i=0; i<params.length;i++){
            this._motivational.push(params[i])
        };
    },
    
}
messageGenerator.addMotivational('All our dreams can come true, if we have the courage to pursue them.','The secret of getting ahead is getting started.')