var musica=0;

var menuState={
	
preload:function(){
    this.game.load.image('fondo','assets/PantalaPrincipal.png');
    this.game.load.image('comenzar','assets/COMENZAR.png');
    this.game.load.image('personaje','assets/PERSONAJES.png');

    //precargar audio
    this.load.audio('musica', 'assets/Wending_160k.mp3');


},	

create:function(){
    this.fondo=game.add.sprite(0,0, 'fondo');
    this.comenzar=game.add.sprite(210,130, 'comenzar');
    this.personaje=game.add.sprite(220,190, 'personaje');

    //cargar audio
    this.musicap = this.sound.add('musica');
    this.musicap.volume=0.05;


},


update:function(){
    
     //Comenzar nivel
     this.comenzar.setInteractive()
     this.personaje.setInteractive()
     
 
     this.comenzar.inputEnabled = true;
     this.personaje.inputEnabled = true;

 
 
     this.comenzar.events.onInputDown.add(function(){
        this.musicap.volume=0;
        game.state.start('nivelUno')
        }, this);

    this.personaje.events.onInputDown.add(function(){
        this.musicap.volume=0;
        game.state.start('nivelTres')
        }, this);
        
    //reproducir musica
    
    if(musica==0){
        this.musicap.play();
    } else {
    }


}	
};

var game=new Phaser.Game(800,300,Phaser.AUTO,'gameDIV');
game.state.add('menu', menuState);
game.state.start('menu');















