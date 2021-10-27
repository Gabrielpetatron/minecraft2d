var jugador=1;

var escenaTres={
	
preload:function(){
    this.game.load.image('fondo','assets/SelectorPersonaje.png');
    this.game.load.image('comenzar','assets/Volver.png');
    this.game.load.image('bp','assets/Player1N.png');
    this.game.load.image('bn2','assets/Player2.png');
    this.game.load.image('luzv','assets/luzverde.png');

    //precargar audio
    this.load.audio('musica', 'assets/Wending_160k.mp3');


},	

create:function(){
    this.fondo=game.add.sprite(0,0, 'fondo');
    this.comenzar=game.add.sprite(325,250, 'comenzar');
    this.bp=game.add.sprite(120,52, 'bp');
    this.bn2=game.add.sprite(445,51, 'bn2');
    this.luzv=game.add.sprite(548,215, 'luzv');
    this.luzv2=game.add.sprite(225,215, 'luzv');

    //cargar audio
    this.musicap = this.sound.add('musica');
    this.musicap.volume=0.05;


},


update:function(){
    
     //Comenzar nivel
     this.comenzar.setInteractive()
     this.bn2.setInteractive()
     this.bp.setInteractive()
     
 
     this.comenzar.inputEnabled = true;
     this.bp.inputEnabled = true;
     this.bn2.inputEnabled = true;
     
 
 
     this.comenzar.events.onInputDown.add(function(){
        this.musicap.volume=0;
        game.state.start('menu')
        }, this);
    
    this.bp.events.onInputDown.add(function(){
        this.musicap.volume=0;
        jugador=1;
        
        }, this);

    this.bn2.events.onInputDown.add(function(){
         this.musicap.volume=0;
        jugador=2;
         }, this);
        
    //reproducir musica
    
    if(musica==0){
        this.musicap.play();
    } else {
    }

    if(jugador==1){
        this.luzv.alpha=0;
        this.luzv2.alpha=1;
    }else if (jugador==2){
        this.luzv.alpha=1;
        this.luzv2.alpha=0;
    }

    console.log('final'+ jugador);

}	
};

game.state.add('nivelTres', escenaTres);















