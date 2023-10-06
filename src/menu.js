
export class Menu extends Phaser.Scene{

    constructor(){
        super("Menu");
        this.btnFase1;
        this.btnFase2;
        this.btnCreditos;
        this.btnVoltar;

    }
    preload(){
        
    }
    create(){
        
        this.add.text(180, 150,"COLORINDO A VIDA",  {fontSize: '50px', fontStyle: 'bold',fill:'white'});
     //   this.caixaNome = this.add.rectangle(200, 220, 400, 80, 0xFFFFFF).setOrigin(0,0);
        
       this.add.text(400, 20, "BEM VINDO, "+game.scene.keys["StartGame"].nome, { font: '20px Courier', fontStyle: 'bold', fill: 'white' });
       
        this.btnFase1 = this.add.image(400,300,"btnFase1");
        this.btnFase2 = this.add.image(400,400,"btnFase2");
        this.btnCreditos = this.add.image(400,500,"btnCreditos");
        this.btnVoltar = this.add.image(40,40,"btnVoltar");

        this.btnFase1.setInteractive({ cursor: 'pointer' });
        this.btnFase2.setInteractive({ cursor: 'pointer' });
        this.btnCreditos.setInteractive({ cursor: 'pointer' });
        this.btnVoltar.setInteractive({ cursor: 'pointer' });

        this.btnFase1.on("pointerdown", ()=> this.scene.start('PlayGame'));
        this.btnFase1.on('pointerover',this.passouPorCima);
        this.btnFase1.on('pointerout', this.saiuDeCima);

        this.btnFase2.on("pointerdown", ()=> this.scene.start('PlayGame'));
        this.btnFase2.on('pointerover',this.passouPorCima);
        this.btnFase2.on('pointerout', this.saiuDeCima);

        this.btnCreditos.on("pointerdown", ()=> this.scene.start('Credits'));
        this.btnCreditos.on('pointerover',this.passouPorCima);
        this.btnCreditos.on('pointerout', this.saiuDeCima);

        this.btnVoltar.on("pointerdown", ()=> this.scene.start('StartGame'));

        
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