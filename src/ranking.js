export class Ranking extends Phaser.Scene{

    constructor(){
        super("Ranking");
        this.btnVoltar;

    }
    preload(){
        
    }
    
    create(){
        const retrievedObject = JSON.parse(localStorage.getItem('scores'));
        const tamanho = Object.keys(retrievedObject || {}).length;
        this.textoPontuacao = this.add.text(300, 80, "PONTUAÇÃO", {fontSize: '50px', fontStyle: 'bold',fill:'white'});
        this.textoPontuacao.setScrollFactor(0);
        this.textoNome = this.add.text(100, 180, "NOME", {fontSize: '30px', fontStyle: 'bold',fill:'black'});
        this.textoFase1 = this.add.text(350, 180, "FASE 1", {fontSize: '30px', fontStyle: 'bold',fill:'black'});
        this.textoFase2 = this.add.text(550, 180, "FASE 2", {fontSize: '30px', fontStyle: 'bold',fill:'black'});
        this.textoFase2 = this.add.text(700, 180, "TOTAL", {fontSize: '30px', fontStyle: 'bold',fill:'black'});
        this.add.rectangle(650, 10, 450, 40, 0xFFFFFF);
        this.limparRanking = this.add.text(450, 10, "CLIQUE AQUI PARA DELETAR TODO RANKING", {fontSize: '15px', fontStyle: 'bold',fill:'black'});
        this.limparRanking.setInteractive({ cursor: 'pointer' });
        this.limparRanking.on("pointerdown", ()=>{
            localStorage.clear();
            this.scene.start('Ranking');
        } );

  
      var space = 30;
      for (let index = 0; index < tamanho; index++) {
         space = space + 30;
         if(index % 2 === 0){
            this.color = 'red';
         }else{
            this.color = 'black'
         }
         this.nome = this.add.text(100, 160 + space, retrievedObject[index].name,{fontSize: '18px', fontStyle: 'bold',fill:this.color});
         this.textoPontuacaoFase1 = this.add.text(380, 160 + space, retrievedObject[index].pontuacaofase1, {fontSize: '18px', fontStyle: 'bold',fill:this.color});
         this.textoPontuacaoFase2 = this.add.text(580, 160 + space, retrievedObject[index].pontuacaofase2, {fontSize: '18px', fontStyle: 'bold',fill:this.color});
         this.total = this.add.text(720, 160 + space, retrievedObject[index].pontuacaofase2+retrievedObject[index].pontuacaofase1, {fontSize: '18px', fontStyle: 'bold',fill:this.color});
      }
        this.btnVoltar = this.add.image(40,40,"btnVoltar");
        this.btnVoltar.setInteractive({ cursor: 'pointer' });
        this.btnVoltar.on("pointerdown", ()=> this.scene.start('Teacher'));
    }
}