export class Tutorial extends Phaser.Scene{

    constructor(){
        super("Tutorial");
        this.tutorial;
        this.continuar;
    }
    preload(){
        
    }
    create(){
        if(game.scene.keys["PlayGame"].faseAtual == 1){
            this.tutorial = this.add.video(400, 360, 'tutorialFase1');
            this.tutorial.play(true);
            this.tutorial.setInteractive({ cursor: 'pointer' });
            this.tutorial.on("pointerdown", ()=> this.scene.start('PlayGame'));
        }else if(game.scene.keys["PlayGame"].faseAtual == 2){
            this.tutorial = this.add.video(400, 360, 'tutorialFase2');
            this.tutorial.play(true);
            this.tutorial.setInteractive({ cursor: 'pointer' });
            this.tutorial.on("pointerdown", ()=> this.scene.start('PlayGame'));
        }

        this.add.text(320, 0,"TUTORIAL",  {fontSize: '30px', fontStyle: 'bold',fill:'yellow'});
        this.continuar = this.add.text(200, 440,"CLIQUE PARA CONTINUAR",  {fontSize: '30px', fontStyle: 'bold',fill:'white'});
        this.continuar.setInteractive({ cursor: 'pointer' });
        this.continuar.on("pointerdown", ()=> this.scene.start('PlayGame'));

    }
}