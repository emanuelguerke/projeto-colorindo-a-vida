export class Criteria extends Phaser.Scene{

    constructor(){
        super("Criteria");
        this.btnVoltar;
        this.posicaoYtexto=150;
        this.posicaoXtexto=50;
        this.colorText='black';
        this.tamanhoFonte='20px';

    }
    preload(){
        
    }
    create(){
        this.add.text(this.posicaoXtexto, this.posicaoYtexto,"Pontos: ",  {fontSize: '30px', fontStyle: 'bold',fill:this.colorText});
        this.add.text(this.posicaoXtexto, this.posicaoYtexto+30,"100 pontos se for rápido 1 min",  {fontSize: this.tamanhoFonte, fontStyle: 'bold',fill:this.colorText});
        this.add.text(this.posicaoXtexto, this.posicaoYtexto+60,"80 pontos entre 1min e 2 min ",  {fontSize: this.tamanhoFonte, fontStyle: 'bold',fill:this.colorText});
        this.add.text(this.posicaoXtexto, this.posicaoYtexto+90,"50 2 min ou mais",  {fontSize: this.tamanhoFonte, fontStyle: 'bold',fill:this.colorText});
        this.add.text(this.posicaoXtexto, this.posicaoYtexto+120,"20 a mais se ele acertar de primeira a cor",  {fontSize: this.tamanhoFonte, fontStyle: 'bold',fill:this.colorText});
        this.add.text(this.posicaoXtexto, this.posicaoYtexto+150,"O bonus de acertar a cor de primeira é dobrado no ultimo nível",  {fontSize: this.tamanhoFonte, fontStyle: 'bold',fill:this.colorText});
        this.add.text(this.posicaoXtexto, this.posicaoYtexto+180,"penalizado em 10 pontos a cada erro",  {fontSize: this.tamanhoFonte, fontStyle: 'bold',fill:this.colorText});
        this.btnVoltar = this.add.image(40,40,"btnVoltar");
        this.btnVoltar.setInteractive({ cursor: 'pointer' });
        this.btnVoltar.on("pointerdown", ()=> this.scene.start('Teacher'));
    }
}