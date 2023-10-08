export class Ranking extends Phaser.Scene{

    constructor(){
        super("Ranking");
        this.btnVoltar;

    }
    preload(){
        
    }
    create(){
        this.add.text(180, 150,"RANKING **Em contrução**",  {fontSize: '30px', fontStyle: 'bold',fill:'white'});

        this.btnVoltar = this.add.image(40,40,"btnVoltar");
        this.btnVoltar.setInteractive({ cursor: 'pointer' });
        this.btnVoltar.on("pointerdown", ()=> this.scene.start('Teacher'));
    }
}