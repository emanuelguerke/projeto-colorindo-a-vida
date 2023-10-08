export class PlayGame extends Phaser.Scene{
   
    constructor(){
        super("PlayGame");
        this.txtPontos;
        this.txtVidas;
        this.txtNome;
        this.pontos = 100;
        this.vidas = 3;

        this.musica;
        this.som;
        this.faseAtual;
        this.nivel=1;
        this.txtNivel;
        this.tempo=120;
        this.txtTempo;
        this.contador;

        this.baseBranca
        this.vermelho;
        this.azul;
        this.amarelo;
        this.lata;

        this.quadradoMetadeVermelho;
        this.txtMensagem;
        this.txtEnunciado;

        this.coracao1;
        this.coracao2;
        this.coracao3;

        this.rec;
        this.maca;
        this.bananaFixa;
        this.banana;

        this.fase1Completa = false;
        

    }

    preload(){
      
        
    }

    create(){
        this.vidas=3;
          
        this.baseBranca = this.add.rectangle(0, 490, 800, 200, 0xFFFFFF).setOrigin(0,0);
        this.vermelho = this.add.image(150, 530, 'vermelho').setOrigin(0,0);
        this.azul = this.add.image(300, 530, 'azul').setOrigin(0,0);
        this.amarelo = this.add.image(450, 530, 'amarelo').setOrigin(0,0);
      //  this.lata = this.add.image(600, 500, 'lata').setOrigin(0,0);

        this.coracao1 = this.add.image(10,50,"coracao").setOrigin(0,0);
        this.coracao2 =this.add.image(60,50,"coracao").setOrigin(0,0);
        this.coracao3 =this.add.image(110,50,"coracao").setOrigin(0,0);

        this.vermelho.setInteractive();
        this.azul.setInteractive();
        this.amarelo.setInteractive();

       

        //pontos/vidas/nivel
        this.add.text(10, this.baseBranca.y-480, 'NÍVEL: ', {fontSize: '30px', fill:'black'});
        this.add.text(320, this.baseBranca.y-480, 'TEMPO: ', {fontSize: '30px', fill:'black'});
        this.add.text(520, this.baseBranca.y-480, 'PONTUAÇAO: ', {fontSize: '30px', fill:'black'});
   
      
        this.txtNome = this.add.text(5, this.baseBranca.y-380, game.scene.keys["StartGame"].nome, {fontSize: '30px', fill:'red'});
        this.txtNivel = this.add.text(120, this.baseBranca.y-480, this.nivel, {fontSize: '30px', fill:'red'});
        this.txtPontos = this.add.text(700, this.baseBranca.y-480,this.pontos, {fontSize: '30px', fill:'red'});
    
        this.txtTempo = this.add.text(430, this.baseBranca.y-480,this.tempo, {fontSize: '30px', fill:'green'});
        
        this.contador = this.time.addEvent({delay:1000, repeat: this.tempo});

     //fase 1   
    if(this.faseAtual == 1){

        
       //nivel 1
       if(this.nivel==1){
        this.nivel1();
       }
       //nivel 2
       if(this.nivel==2){
        this.nivel2();
       }
      //nivel 3
      if(this.nivel==3){
        this.nivel3();
       }
       if(this.nivel==4){
        this.nivel4();
       }
    }
       

        //não sei se o active é realmente necessario...
      //  this.amarelo.active = false;
      //  this.amarelo.visible = false;
     //   this.azul.visible = false

       
        
    }
    update(){
        this.txtTempo.text = this.contador.repeatCount;
        
        
    }

    venceuNivel(){
        this.destruirMensagem();
        this.atribuirPontosLevel();
        this.txtMensagem = this.add.text(250, 140, 'ACERTOU MIZERAVI!', {fontSize: '30px', fill:'red'});
        this.vermelho.destroy();
        this.azul.destroy();
        this.amarelo.destroy();
        this.contador.paused = !this.contador.paused;
        setTimeout(() => { this.scene.start('Transition'); }, 3000);
    }

    destruirVidas(){
        if(this.vidas == 3){
            this.coracao3.destroy();
        }
        else if(this.vidas ==2){
            this.coracao2.destroy();
        }
        else if(this.vidas == 1){
            this.coracao1.destroy();
        }
        this.vidas--;
    }
    atribuirPontosLevel(){
        if(this.vidas == 3){
            this.pontos += 20;
        }

        if(this.txtTempo.text >100){
            this.pontos += 100;
        }else if(this.txtTempo.text>60){
            this.pontos+=80;
        }else if(this.txtTempo.text>10){
            this.pontos+=50;
        }
    }

    destruirMensagem(){
        if(typeof this.txtMensagem != 'undefined'){
            this.txtMensagem.destroy();
            
        }

    }

    nivel1(){
        this.txtEnunciado = this.add.text(200, 40, 'PINTE DE VERMELHO A METADE FALTANTE DO QUADRADO', {fontSize: '20px', fill:'red'});
        this.quadradoMetadeVermelho = this.add.image(400,300,"quadradoMetadeVermelho");
        this.vermelho.on("pointerdown", ()=> {
            this.rec = this.add.rectangle(340, 300, 130, 250, 0xff0000);
           this.venceuNivel();


        });
        this.azul.on("pointerdown", ()=> {
           // this.quadradoMetadeVermelho.setTintFill(0x0f00ff);
            this.rec = this.add.rectangle(340, 300, 130, 250, 0x0f00ff);
            this.destruirMensagem();
            this.destruirVidas();
            this.txtMensagem = this.add.text(250, 140, 'ERROU ESSE É O AZUL', {fontSize: '30px', fill:'blue'});
            this.pontos = this.pontos-10;
            this.txtPontos.text = this.pontos;
            this.azul.destroy();
            
            
        });
        //this.amarelo.on("pointerdown", ()=> this.scene.start('PlayGame'));
        this.amarelo.on("pointerdown", ()=> {
         //   this.quadradoMetadeVermelho.setTintFill(0xffe400);
            this.rec = this.add.rectangle(340, 300, 130, 250, 0xffe400);
            this.destruirMensagem();
            this.destruirVidas();
            this.txtMensagem = this.add.text(250, 140, 'ERROU ESSE É O AMARELO', {fontSize: '30px', fill:'yellow'});
            this.pontos = this.pontos-10;
            this.txtPontos.text = this.pontos;
            this.amarelo.destroy();
            

        });
    }

    nivel2(){
        this.txtEnunciado = this.add.text(200, 40, 'PINTE DE AZUL O QUADRADO', {fontSize: '20px', fill:'blue'});
        this.quadradoMetadeVermelho.destroy();
        this.quadradoBranco = this.add.image(400,300,"quadradoBranco");
        this.vermelho.on("pointerdown", ()=> {
            this.quadradoBranco.setTintFill(0xff0000);
            
            this.destruirMensagem();
            this.destruirVidas();
            
            this.txtMensagem = this.add.text(250, 140, 'ERROU ESSE É O VERMELHO', {fontSize: '30px', fill:'red'});
            this.pontos = this.pontos-10;
            this.txtPontos.text = this.pontos;
            this.vermelho.destroy();


        });
        this.azul.on("pointerdown", ()=> {
            this.quadradoBranco.setTintFill(0x0f00ff);
            this.venceuNivel();
            
            
        });
        //this.amarelo.on("pointerdown", ()=> this.scene.start('PlayGame'));
        this.amarelo.on("pointerdown", ()=> {
            this.quadradoBranco.setTintFill(0xffe400);
            this.destruirMensagem();
            this.destruirVidas();
            this.txtMensagem = this.add.text(250, 140, 'ERROU ESSE É O AMARELO', {fontSize: '30px', fill:'yellow'});
            this.pontos = this.pontos-10;
            this.txtPontos.text = this.pontos;
            this.amarelo.destroy();
            

        });
    }
    
    nivel3(){
        this.txtEnunciado = this.add.text(200, 40, 'PINTE DE VERMELHO A METADE FALTANTE DA MAÇA', {fontSize: '20px', fill:'red'});
        this.maca = this.add.image(400,300,"macaMetadeBranca");
        this.vermelho.on("pointerdown", ()=> {
         //   this.quadradoMetadeVermelho.setTintFill(0xff0000);
         this.maca = this.add.image(400,300,"maca");
         this.venceuNivel();
          

        });
        this.azul.on("pointerdown", ()=> {
           // this.quadradoMetadeVermelho.setTintFill(0x0f00ff);
           // this.rec = this.add.rectangle(340, 300, 130, 250, 0x0f00ff);
           this.maca = this.add.image(400,300,"macaMetadeAzul");
            this.destruirMensagem();
            this.destruirVidas();
            this.txtMensagem = this.add.text(250, 140, 'ERROU ESSE É O AZUL', {fontSize: '30px', fill:'blue'});
            this.pontos = this.pontos-10;
            this.txtPontos.text = this.pontos;
            this.azul.destroy();
            
            
        });
        //this.amarelo.on("pointerdown", ()=> this.scene.start('PlayGame'));
        this.amarelo.on("pointerdown", ()=> {
         //   this.quadradoMetadeVermelho.setTintFill(0xffe400);
         //   this.rec = this.add.rectangle(340, 300, 130, 250, 0xffe400);
            this.maca = this.add.image(400,300,"macaMetadeAmarela");
            this.destruirMensagem();
            this.destruirVidas();
            this.txtMensagem = this.add.text(250, 140, 'ERROU ESSE É O AMARELO', {fontSize: '30px', fill:'yellow'});
            this.pontos = this.pontos-10;
            this.txtPontos.text = this.pontos;
            this.amarelo.destroy();
            

        });
    }
    nivel4(){
        this.txtEnunciado = this.add.text(200, 40, 'PINTE A BANANA CONFORME A IMAGEM', {fontSize: '20px', fill:'yellow'});
        this.bananaFixa = this.add.image(300,300,"banana");
        this.banana = this.add.image(600,300,"bananaBranco");

        this.vermelho.on("pointerdown", ()=> {
            this.banana = this.add.image(600,300,"bananaVermelho");
            this.destruirMensagem();
            this.destruirVidas();
            this.txtMensagem = this.add.text(250, 140, 'ERROU ESSE É O VERMELHO', {fontSize: '30px', fill:'red'});
            this.pontos = this.pontos-10;
            this.txtPontos.text = this.pontos;
            this.vermelho.destroy();
          


        });
        this.azul.on("pointerdown", ()=> {
    
            this.banana = this.add.image(600,300,"bananaAzul");
            this.destruirMensagem();
            this.destruirVidas();
            this.txtMensagem = this.add.text(250, 140, 'ERROU ESSE É O AZUL', {fontSize: '30px', fill:'blue'});
            this.pontos = this.pontos-10;
            this.txtPontos.text = this.pontos;
            this.azul.destroy();
    
            
        });
        this.amarelo.on("pointerdown", ()=> {
            this.banana = this.add.image(600,300,"banana");
            this.destruirMensagem();
            this.vermelho.destroy();
            this.azul.destroy();
            this.amarelo.destroy();
            this.contador.paused = !this.contador.paused;
            this.txtMensagem = this.add.text(250, 140, 'ACERTOU MIZERAVI!', {fontSize: '30px', fill:'red'});
            setTimeout(() => { this.scene.start('PhaseComplete'); }, 3000);
            

        });
    }

}