
var escenaDos={
	
preload:function(){
    this.game.load.image('fondo','assets/FINAL.png');
    this.game.load.image('comenzar','assets/REINICIAR.png');
    this.game.load.image('bp','assets/BP.png');
    this.game.load.image('bn2','assets/BN2.png');

    //precargar audio
    this.load.audio('musica', 'assets/Wending_160k.mp3');


},	

create:function(){
    this.fondo=game.add.sprite(0,0, 'fondo');
    this.comenzar=game.add.sprite(190,155, 'comenzar');
    this.bp=game.add.sprite(10,250, 'bp');
    this.bn2=game.add.sprite(620,250, 'bn2');

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
        game.state.start('nivelUno')
        }, this);
    
    this.bp.events.onInputDown.add(function(){
        this.musicap.volume=0;
        location.href="";
        }, this);

    this.bn2.events.onInputDown.add(function(){
         this.musicap.volume=0;
         alert('Dificil hacer el nivel 2 si solo una persona programa y diseña');
         }, this);
        
    //reproducir musica
    
    if(musica==0){
        this.musicap.play();
    } else {
    }


}	
};

game.state.add('nivelDos', escenaDos);















