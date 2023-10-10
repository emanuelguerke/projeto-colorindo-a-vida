export class Teacher extends Phaser.Scene{

    constructor(){
        super("Teacher");
        this.btnCriterios;
        this.btnRanking;
        this.btnCreditos;
        this.btnVoltar;

    }
    preload(){
        
    }
    create(){
        
        this.add.text(180, 150,"ÁREA DO PROFESSOR",  {fontSize: '50px', fontStyle: 'bold',fill:'white'});
     //   this.caixaNome = this.add.rectangle(200, 220, 400, 80, 0xFFFFFF).setOrigin(0,0);
        
      // this.add.text(400, 20, "BEM VINDO, "+game.scene.keys["StartGame"].nome, { font: '20px Courier', fontStyle: 'bold', fill: 'white' });
       
        this.btnRanking = this.add.image(400,300,"btnRanking");
        this.btnCriterios = this.add.image(400,400,"btnCriterios");
        this.btnCreditos = this.add.image(400,500,"btnCreditos");
        this.btnVoltar = this.add.image(40,40,"btnVoltar");

        this.btnRanking.setInteractive({ cursor: 'pointer' });
        this.btnCriterios.setInteractive({ cursor: 'pointer' });
        this.btnCreditos.setInteractive({ cursor: 'pointer' });
        this.btnVoltar.setInteractive({ cursor: 'pointer' });
    
        this.btnRanking.on("pointerdown", ()=> this.scene.start('Ranking'));
        this.btnRanking.on('pointerover',this.passouPorCima);
        this.btnRanking.on('pointerout', this.saiuDeCima);

        this.btnCriterios.on("pointerdown", ()=> this.scene.start('Criteria'));
        this.btnCriterios.on('pointerover',this.passouPorCima);
        this.btnCriterios.on('pointerout', this.saiuDeCima);

        this.btnCreditos.on("pointerdown", ()=> {
            game.scene.keys["Credits"].voltarOnde = "teacher";
            this.scene.start('Credits');
        });
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