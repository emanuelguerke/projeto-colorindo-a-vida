export class PhaseComplete extends Phaser.Scene{

    constructor(){
        super("PhaseComplete");
        this.continuar;
        this.lata;

    }
    preload(){
        
    }

    create(){

        this.add.text(50, 100,"PARABENS",  {fontSize: '50px', fontStyle: 'bold',fill:'white'});
        this.add.text(50, 200,"VOCE COMPLETOU A FASE ",  {fontSize: '50px', fontStyle: 'bold',fill:'white'});
      //  game.scene.keys["PlayGame"].nivel++;
        this.lata =this.add.image(300,300,"lata").setOrigin(0,0);
        this.continuar =this.add.image(250,500,"continuar").setOrigin(0,0);
        this.continuar.setInteractive();

     //   this.continuar.on("pointerdown", ()=> this.scene.start('PlayGame'));
        this.continuar.on('pointerover',this.passouPorCima);
        this.continuar.on('pointerout', this.saiuDeCima);
       

    }
    passouPorCima(event){
        console.log("passou por cima")
        this.setTint(0xff0000);
    }
    saiuDeCima(){
        console.log("saiu de cima")
        this.clearTint();
    }

}