export class Tutorial extends Phaser.Scene{

    constructor(){
        super("Tutorial");
        this.tutorial;
        this.continuar;
        this.cliqueParaJogar;
        this.tempoDeEsperaTutorial;
    }
    preload(){
        
    }
    create(){
        if(game.scene.keys["PlayGame"].faseAtual == 1){
            this.tempoDeEsperaTutorial = 8000;
            this.tutorial = this.add.video(400, 360, 'tutorialFase1');
            this.tutorial.play(true);
         //   this.tutorial.setInteractive({ cursor: 'pointer' });
         //   this.tutorial.on("pointerdown", ()=> this.scene.start('PlayGame'));
        }else if(game.scene.keys["PlayGame"].faseAtual == 2){
            this.tempoDeEsperaTutorial = 12000;
            this.tutorial = this.add.video(400, 360, 'tutorialFase2');
            this.tutorial.play(true);
        //    this.tutorial.setInteractive({ cursor: 'pointer' });
        //    this.tutorial.on("pointerdown", ()=> this.scene.start('PlayGame'));
        }

        this.add.text(320, 0,"TUTORIAL",  {fontSize: '30px', fontStyle: 'bold',fill:'yellow'});
        setTimeout(() => {  this.continuar = this.add.text(200, 440,"CLIQUE PARA JOGAR",  {fontSize: '30px', fontStyle: 'bold',fill:'red'});
            this.tutorial.setInteractive({ cursor: 'pointer' });
            this.tutorial.on("pointerdown", ()=> this.scene.start('PlayGame'));
            this.continuar.setInteractive({ cursor: 'pointer' });
            this.continuar.on("pointerdown", ()=> this.scene.start('PlayGame')); 
            this.tutorial.setInteractive({ cursor: 'pointer' });
            this.cliqueParaJogar = this.sound.add('cliqueParaJogar');
            this.cliqueParaJogar.play();
         }, this.tempoDeEsperaTutorial);
        
       

    }
}