export class EndGame extends Phaser.Scene{

    constructor(){
        super("EndGame");
        this.btnVoltar;
        this.btnSair;
        this.retanguloBotaoVoltar;
        this.retanguloBotaoSair;

    }
    
    create(){
        this.add.text(20, 20,"ACABOU O TEMPO",  {fontSize: '90px', fontStyle: 'bold',fill:'white'});

        this.retanguloBotaoVoltar = this.add.rectangle(370, 340, 700, 100, 0xFFFFFF);
        this.retanguloBotaoSair = this.add.rectangle(370, 540, 700, 100, 0xFFFFFF);


        this.btnVoltar = this.add.text(20, 300,"VOLTAR A FASE",  {fontSize: '90px', fontStyle: 'bold',fill:'black'});
        this.btnVoltar.setInteractive({ cursor: 'pointer' });
        this.btnVoltar.on("pointerdown", ()=> { this.scene.start('PlayGame'); });
        this.btnSair = this.add.text(50, 500,"SAIR DO JOGO",  {fontSize: '90px', fontStyle: 'bold',fill:'black'});
        this.btnSair.setInteractive({ cursor: 'pointer' });
        this.btnSair.on("pointerdown", ()=> { 
            if (confirm("Fechar Janela?")) {
              close();
            }
           });
    }
}