export class PhaseComplete extends Phaser.Scene{

    constructor(){
        super("PhaseComplete");
        this.continuar;
        this.lata;
        this.btnVoltar;
        this.pontuacaoFase1;
        this.pontuacaoFase2;

    }
    preload(){
        
    }

    create(){

        if(game.scene.keys["PlayGame"].faseAtual == 1){
            this.pontuacaoFase1 =  game.scene.keys["PlayGame"].pontos;
        }
        else if(game.scene.keys["PlayGame"].faseAtual == 2){
            this.pontuacaoFase2 =  game.scene.keys["PlayGame"].pontos;
        }
        
        this.add.text(50, 100,"PARABENS",  {fontSize: '50px', fontStyle: 'bold',fill:'white'});
        this.add.text(50, 200,"VOCE COMPLETOU A FASE ",  {fontSize: '50px', fontStyle: 'bold',fill:'white'});
        this.add.text(50, 250, game.scene.keys["PlayGame"].pontos+"PONTOS",  {fontSize: '50px', fontStyle: 'bold',fill:'white'});
        
       // game.scene.keys["StartGame"].fase1Completa = true;
      //  game.scene.keys["PlayGame"].nivel++;
        this.lata =this.add.image(300,300,"lata").setOrigin(0,0);
        this.continuar =this.add.image(250,500,"continuar").setOrigin(0,0);
        this.continuar.setInteractive();

        this.continuar.on("pointerdown", ()=> {
            if(game.scene.keys["PlayGame"].faseAtual == 1){
                game.scene.keys["PlayGame"].faseAtual =2;
                game.scene.keys["PlayGame"].nivel = 1;
                game.scene.keys["PlayGame"].pontos = 0;
                this.scene.start('Tutorial');
            }else if(game.scene.keys["PlayGame"].faseAtual == 2){
                const score = {name: game.scene.keys["StartGame"].nome,  pontuacaofase1:  this.pontuacaoFase1, pontuacaofase2:  this.pontuacaoFase2};
                const scores = JSON.parse(localStorage.getItem("scores")) || [];
                scores.push(score);
                localStorage.setItem("scores", JSON.stringify(scores));
                this.scene.start('Menu');
            }
            
        });
        
        this.continuar.on('pointerover',this.passouPorCima);
        this.continuar.on('pointerout', this.saiuDeCima);
        
        this.btnVoltar = this.add.image(40,40,"btnVoltar");
        this.btnVoltar.setInteractive({ cursor: 'pointer' });
        this.btnVoltar.on("pointerdown", ()=> this.scene.start('Menu'));

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