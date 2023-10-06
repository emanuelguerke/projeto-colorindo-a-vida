export class Transition extends Phaser.Scene{

    constructor(){
        super("Transition");
        this.continuar;
        this.correto;

    }
    preload(){
        
    }

    create(){

        this.add.text(50, 100,"VOCE COMPLETOU O NIVEL "+ game.scene.keys["PlayGame"].nivel,  {fontSize: '50px', fontStyle: 'bold',fill:'white'});
        game.scene.keys["PlayGame"].nivel++;
        this.correto =this.add.image(300,200,"correto").setOrigin(0,0);
        this.continuar =this.add.image(250,500,"continuar").setOrigin(0,0);
        this.continuar.setInteractive();

        this.continuar.on("pointerdown", ()=> this.scene.start('PlayGame'));
        this.continuar.on('pointerover',this.passouPorCima);
        this.continuar.on('pointerout', this.saiuDeCima);

       // this.add.rectangle(0, 300, 800, 400, 0xFFFFFF).setOrigin(0,0);
       

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