var terreno1=0;
var terreno2=0;
var vidas=3;
var menu=0;
var alpha=0;
var salto=0;
var espada=0;

var mainState={
//Aquí declaramos las variables//	
preload:function(){

//cargamos fondo en memoria
this.game.load.image('fondo','assets/fondo.jpg');
this.game.load.image('Menu','assets/MENU.png');
this.game.load.image('IEspada','assets/ESPADA.png');
this.game.load.image('IEspadaS','assets/EspadaS.png');
this.game.load.image('vidas0','assets/0Vidas.png');
this.game.load.image('vidas1','assets/1Vidas.png');
this.game.load.image('vidas2','assets/2Vidas.png');
this.game.load.image('vidas3','assets/3Vidas.png');
this.game.load.image('fondop','assets/FondoPrincipal.png');
this.game.load.image('fondop2','assets/FondoPrincipal2.png');
this.game.load.image('agua1','assets/AGUA1.png');
this.game.load.image('suelo1','assets/SUELO1.png');
this.game.load.image('suelo2','assets/SUELO2.png');
this.game.load.image('arena1','assets/Arena1.png');
this.game.load.image('gameover','assets/GameOver.png');
this.game.load.image('barrera','assets/Barrera.png');
this.game.load.image('e','assets/E.png');
//cargar hoja de imagenes
this.game.load.spritesheet('player1','assets/Sprites.png' ,34,53);

},	
//aqui creamos los recursos
//fisicas, dibujos, sprites animados, etc....	
create:function(){

     //habilitar fisicas
     this.game.physics.startSystem(Phaser.Physics.ARCADE);
     this.game.world.setBounds(0,0,3993,300)

    //mostrar el fondo en pantalla o imagen
    this.Menu=game.add.sprite(0,0, 'Menu');
    this.fondo=game.add.sprite(0,0, 'fondo');
    this.fondo=game.add.sprite(450,0, 'fondo');
    this.fondo=game.add.sprite(800,0, 'fondo');
    this.fondo=game.add.sprite(1200,0, 'fondo');
    this.FondoP=game.add.sprite(0,0, 'fondop');
    this.FondoP2=game.add.sprite(800,0, 'fondop2');
    this.vidas0=game.add.sprite(0,0, 'vidas0');
    this.vidas1=game.add.sprite(0,0, 'vidas1');
    this.vidas2=game.add.sprite(0,0, 'vidas2');
    this.vidas3=game.add.sprite(0,0, 'vidas3');
    this.e=game.add.sprite(0,0, 'e');
    this.agua=game.add.sprite(443,290, 'agua1');
    this.agua2=game.add.sprite(443,290, 'agua1');
    this.agua3=game.add.sprite(443,290, 'agua1');
    this.agua4=game.add.sprite(443,290, 'agua1');

    //mostrar en pantalla a personajes/objetos
    this.player1=game.add.sprite(50,90, 'player1');

    //crear grupo suelo
    this.suelo=game.add.group();
    //añadimos elementos
    this.suelo.create(0,200, 'suelo1');
    this.suelo.create(150,246, 'suelo2');
    this.suelo.create(300,262, 'suelo2');
    this.suelo.create(769,284, 'arena1');
    this.suelo.create(785,284, 'arena1');
    this.suelo.create(785,270, 'arena1');
    this.suelo.create(785,274, 'arena1');
    this.suelo.create(801,274, 'arena1');
    this.suelo.create(817,274, 'arena1');
    this.suelo.create(833,274, 'arena1');
    this.suelo.create(849,274, 'arena1');
    this.suelo.create(865,274, 'arena1');
    this.suelo.create(881,274, 'arena1');
    this.suelo.create(905,248, 'arena1');
    this.suelo.create(921,248, 'arena1');
    this.suelo.create(937,248, 'arena1');
    this.suelo.create(953,248, 'arena1');
    this.suelo.create(969,248, 'arena1');
    this.suelo.create(983,222, 'arena1');
    this.suelo.create(999,222, 'arena1');
    this.suelo.create(1015,222, 'arena1');
    this.suelo.create(1031,222, 'arena1');
    this.suelo.create(1063,248, 'arena1');
    this.suelo.create(1086,274, 'arena1');
    this.suelo.create(1102,274, 'arena1');
    this.suelo.create(1118,274, 'arena1');
    this.suelo.create(1134,274, 'arena1');
    this.suelo.create(1150,274, 'arena1');
    this.suelo.create(1190,248, 'arena1');
    this.suelo.create(1206,248, 'arena1');
    this.suelo.create(1222,248, 'arena1');
    this.suelo.create(1248,222, 'arena1');
    this.suelo.create(1264,222, 'arena1');
    this.suelo.create(1280,222, 'arena1');
    this.suelo.create(1296,222, 'arena1');
    this.suelo.create(1312,222, 'arena1');
    this.suelo.create(1346,248, 'arena1');
    this.suelo.create(1362,248, 'arena1');
    this.suelo.create(1378,248, 'arena1');
    this.suelo.create(1394,248, 'arena1');
    this.suelo.create(1426,222, 'arena1');
    this.suelo.create(1442,222, 'arena1');
    this.suelo.create(1458,222, 'arena1');
    this.suelo.create(1474,222, 'arena1');
    this.suelo.create(1490,222, 'arena1');
    this.suelo.create(1506,222, 'arena1');
    this.suelo.create(1522,222, 'arena1');
    this.suelo.create(1548,222, 'arena1');
    this.suelo.create(1564,222, 'arena1');            
    
    
    
    

    

    //animaciones
    this.player1.animations.add('correr',[1,1,2,2],9,true);
    this.player1.animations.add('parado',[0],8,true);
    this.player1.animations.add('shift',[3],8,true);

    //Aplicar fisicas a X cosa
    this.game.physics.arcade.enable(this.player1);
    this.game.physics.arcade.enable(this.suelo);
    this.game.physics.arcade.enable(this.agua);
    this.game.physics.arcade.enable(this.agua2);
    this.game.physics.arcade.enable(this.agua3);
    this.game.physics.arcade.enable(this.agua4);
    //gravedad
    this.player1.body.gravity.y=300;
    //No caiga pantalla
    this.player1.body.collideWorldBounds = true;

    this.game.camera.follow(this.player1);
    
   

    this.menu=game.add.group();
    this.menu.create(0,0, 'Menu');
    
    this.IEspada=game.add.sprite(230,256, 'IEspada');
    this.IEspadaS=game.add.sprite(230,256, 'IEspadaS');


    this.suelo.setAll('body.immovable',true);
    this.agua.body.immovable=true;
    this.agua2.body.immovable=true;
    this.agua4.body.immovable=true;


    this.gameover=game.add.sprite(0,0, 'gameover');
    this.gameover.alpha=0;

   
    this.barrera=game.add.sprite(1578,0, 'barrera');
    this.barrera1=game.add.sprite(1616,0, 'barrera');
    this.barrera2=game.add.sprite(1654,0, 'barrera');
    this.barrera3=game.add.sprite(1692,0, 'barrera');
    this.barrera4=game.add.sprite(1730,0, 'barrera');
    this.barrera5=game.add.sprite(1768,0, 'barrera');
    this.barrera6=game.add.sprite(1806,0, 'barrera');
    this.barrera7=game.add.sprite(1844,0, 'barrera');
    this.game.physics.arcade.enable(this.barrera);
    this.barrera.body.immovable=true;
    

     ///////////////////////////////////////////
    /////////CONTROLES DEL PERSONAJE//////////
    //////////////////////////////////////////

    this.cursor=this.game.input.keyboard.createCursorKeys();

    //Capturar teclado
    this.game.input.keyboard.addKeyCapture([
        Phaser.Keyboard.LEFT,
        Phaser.Keyboard.RIGHT,
        Phaser.Keyboard.UP,
        Phaser.Keyboard.DOWN,
        Phaser.Keyboard.SPACEBAR
    ])
    ////
    this.player1.anchor.set(0.5);

    //oculto el menu
    this.menu.alpha=0;
    this.IEspada.alpha=0;
    this.IEspadaS.alpha=0;

    //ocultar vidas 2-0 dejando solo el 3

    //Boton Menu
    botonMenu=this.input.keyboard.addKey(Phaser.Keyboard.E);
    botonSalto=this.input.keyboard.addKey(Phaser.Keyboard.UP);
    botonGameOver=this.input.keyboard.addKey(Phaser.Keyboard.R);

},


//actualizar todos los recursos
//es decir dibujar en pantalla
update:function(){

    this.vidas3.x=this.game.camera.x;
    this.vidas2.x=this.game.camera.x;
    this.vidas1.x=this.game.camera.x;
    this.vidas0.x=this.game.camera.x;
    this.menu.x=this.game.camera.x;
    this.e.x=this.game.camera.x;


    if (this.player1.body.x>1199) {
        this.game.camera.follow();   
    }else{
        this.game.camera.follow(this.player1);
    }

    //Seleccionar Espada
    this.IEspada.setInteractive()
    this.IEspadaS.setInteractive()

    this.IEspada.inputEnabled = true;
    this.IEspadaS.inputEnabled = false;


    this.IEspada.events.onInputDown.add(function(IEspada){
        if(espada == 0){
        IEspada.alpha=0;
        this.IEspadaS.alpha=1;
        espada=1;
        }
    });

    console.log('espada' + espada);

    //CONTROL MENU
    if (botonMenu.isUp) {
        menu=0;
    }

    if(botonMenu.isDown && alpha==0 && menu==0){
        alpha=1;
        this.IEspada.alpha=1;
        this.menu.alpha=alpha;
        this.player1.body.velocity.x=0;
        this.player1.body.velocity.y=0;
        this.player1.animations.play('parado');
        menu=1;
    }else if (botonMenu.isDown && alpha==1 && menu==0) {
        alpha=0;
        this.IEspada.alpha=0;
        this.menu.alpha=alpha;
        menu=1;
    }

    
    if (this.menu.alpha==0){
      
        //salto
    if ((this.cursor.up.isDown && this.player1.body.onFloor()) 
    ||(this.cursor.up.isDown && salto==1)) {
        this.player1.body.y-=20;
        this.player1.body.velocity.y=-160;
    
    }else if ((this.cursor.up.isDown && this.player1.body.onFloor())
    ||(this.cursor.up.isDown && salto==0)) {

    }

    salto=0;
    this.game.physics.arcade.collide(this.player1,this.suelo,
        function(player1,suelo)
    {
    salto=1;
        });

    //sistema de vidas

    
    if(this.game.physics.arcade.collide(this.player1,this.agua) && vidas==3) {
        this.player1.body.x=50;
        this.player1.body.y=90;
        this.agua.body.x=-500;
        this.vidas3.alpha=0;
        vidas=2;
    }
    else if(this.game.physics.arcade.collide(this.player1,this.agua2) && vidas==2){
        this.player1.body.x=50;
        this.player1.body.y=90;
        this.agua2.body.x=-500;
        this.vidas2.alpha=0;
        vidas=1;
    }
    else if(this.game.physics.arcade.collide(this.player1,this.agua3) && vidas==1){
        this.player1.body.x=50;
        this.player1.body.y=90;
        this.agua3.body.x=-500;
        this.vidas1.alpha=0;
        vidas=0;
    }
    else if(this.game.physics.arcade.collide(this.player1,this.agua4) && vidas==0){
        this.player1.body.x=50;
        this.player1.body.y=90;
        this.vidas0.alpha=0;
        this.gameover.alpha=1;
    }
     console.log('vidas' + vidas);


    //Pantalla game over

    if (botonGameOver.isDown && this.gameover.alpha==1 && vidas==0 ){
        vidas=3;
        this.gameover.alpha=0;
        this.player1.body.x=50;
        this.player1.body.y=90;
        this.vidas1.alpha=1;
        this.vidas2.alpha=1;
        this.vidas3.alpha=1;
        this.agua3.body.x=443;
        this.agua2.body.x=443;
        this.agua.body.x=443;
        location.href="";
    }

    //Movimiento control hacia derecha
    if(this.cursor.right.isDown){
        this.player1.body.velocity.x=300;
        this.player1.animations.play('correr');
        this.player1.scale.x=1;
    }else if(this.cursor.left.isDown){
        this.player1.body.velocity.x=-100;
        this.player1.scale.x=-1;
        this.player1.animations.play('correr');
    }else if(this.cursor.up.isDown){
        this.player1.body.velocity.y=-160;
        this.player1.animations.play('parado');
    }else if(this.cursor.down.isDown){
        this.player1.body.velocity.y=200;
        this.player1.body.velocity.x=0;
        this.player1.animations.play('shift');
    }else if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
        this.player1.body.velocity.x=0;
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.G)){
        this.player1.body.velocity.x=0;
    }else if(game.input.keyboard.isDown(Phaser.Keyboard.W)){
        this.player1.body.velocity.x=0;
    }else {
        this.player1.body.velocity.x=0;
        this.player1.animations.play('parado');
    } 
    //fin alpha
    }
    //fin movi camera

   

    
        this.game.physics.arcade.collide(this.player1,this.FondoP);
        this.game.physics.arcade.collide(this.player1,this.suelo);
        this.game.physics.arcade.collide(this.player1,this.agua);
        this.game.physics.arcade.collide(this.player1,this.barrera);
        this.game.physics.arcade.collide(this.camera,this.barrera);
        this.suelo.setAll('alpha', 1);
    

}	
};

var game=new Phaser.Game(800,300,Phaser.AUTO,'gameDIV');
game.state.add('main', mainState);
game.state.start('main');
















