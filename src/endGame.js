export class EndGame extends Phaser.Scene{

    constructor(){
        super("EndGame");
        this.mensagem;
    }
    
    create(){
       
        game.scene.keys["PlayGame"].fase=1;
      

        this.add.image(0,0,"fundo").setOrigin(0,0);
        if(this.mensagem == "PRAISE THE SUN"){
            
            this.add.text(200, 50,"tempo restante: "+  game.scene.keys["PlayGame"].tempo,  {fontSize: '50px', fill:'orange', backgroundColor:'black'});
            
            if(localStorage.getItem("recorde") < game.scene.keys["PlayGame"].tempo){
                localStorage.setItem("recorde",  game.scene.keys["PlayGame"].tempo);
                this.add.text(0, 0,"PARABENS VC TEM O NOVO RECORDE DO JOGO: "+  game.scene.keys["PlayGame"].tempo,  {fontSize: '50px', fill:'orange', backgroundColor:'black'});
            }


        }else{
            this.add.text(0, 0,this.mensagem,  {fontSize: '50px', fill:'orange', backgroundColor:'black'});
        }
        
      //  this.add.text(200, 150,"PERDEU MANÉ FAZ O L ",  {fontSize: '50px', fill:'orange', backgroundColor:'black'});
        let btnPlay = this.add.image(135, 200, "btnPlay").setOrigin(0,0);
        btnPlay.setInteractive();

        let btnHome = this.add.image(135, 400, "btnVoltar").setOrigin(0,0);
        btnHome.setInteractive();

        this.add.image(320,230,"dudecapa").setOrigin(0,0);
        game.scene.keys["PlayGame"].tempo=90;
        //add clique do botao
        btnPlay.on("pointerdown", ()=> this.scene.start('PlayGame'));
        btnHome.on("pointerdown", ()=> this.scene.start('HomeGame'));
    }
}