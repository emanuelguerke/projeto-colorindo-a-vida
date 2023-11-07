export class PlayGame extends Phaser.Scene{
   
    constructor(){
        super("PlayGame");
        this.txtPontos;
        this.txtVidas;
        this.txtNome;
        this.pontos = 0;
        this.vidas = 3;
        this.btnVoltar;
        this.musica;
        this.som;
        this.faseAtual=1;
        this.nivel=1;
        this.txtNivel;
        this.tempo=180;
        this.txtTempo;
        this.contador;
        this.timeoutId;

        this.baseBranca
        this.vermelho;
        this.azul;
        this.amarelo;
        this.lata;

        this.quadradoMetadeVermelho;
        this.quadradoMetadeVerde;
        
        //feedback
        this.acertouParabens;

        //enunciado 
        this.somEnunciado;
        this.btnSom;
        this.txtEnunciado;
        this.enunciadoPosicaoX = 200;
        this.enunciadoPosicaoY = 60;
        this.txtEnunciadoEstiloFonte = 'bold';
        this.enunciadoTamanhoFonte = '20px';
        //mensagem erro ou acerto
        this.txtMensagem;
        this.txtMensagemPosicaoX=270;
        this.txtMensagemPosicaoY=120;
        this.txtMensagemEstiloFonte = 'bold';
        this.txtMensagemTamanhoFonte='30px';

        this.coracao1;
        this.coracao2;
        this.coracao3;

        this.rec;
        this.maca;
        this.bananaFixa;
        this.banana;

        this.fase1Completa = false;
        this.fase2Completa = false;
        
        this.questionIcon;
        this.ajuda;

        this.vermelhoAtivo=false;
        this.amareloAtivo=false;
        this.azulAtivo=false;
        //fase2
        this.vermelhoBaldeAtivo = false; 
        this.azulBaldeAtivo = false; 
        this.amareloBaldeAtivo = false; 

        this.roxoBaldeAtivo = false;
        this.laranjaBaldeAtivo = false;
        this.verdeBaldeAtivo = false;

        this.lataAtivo=false;

        this.peraFixa;
        this.pera;

        this.uvaFixa;
        this.uva;

        this.vermelhoFX;
        this.amareloFX;
        this.azulFX;

        this.lataFX;
       
      
    }

    preload(){
    
        
    }

    create(){
      

        this.vidas=3;
        this.btnVoltar = this.add.image(30,300,"btnVoltar");
        this.btnVoltar.setInteractive({ cursor: 'pointer' });
        this.btnVoltar.on("pointerdown", ()=> this.scene.start('Menu'));

        this.baseBranca = this.add.rectangle(0, 490, 800, 200, 0xFFFFFF).setOrigin(0,0);
        this.vermelho = this.add.image(150, 530, 'vermelho').setOrigin(0,0);
        this.azul = this.add.image(300, 530, 'azul').setOrigin(0,0);
        this.amarelo = this.add.image(450, 530, 'amarelo').setOrigin(0,0);
        this.btnSom = this.add.image(80, 600, 'btnSom');
        this.btnSom.setInteractive({ cursor: 'pointer' });
        this.acertouParabens = this.sound.add('acertouParabens');

        this.vermelhoFX = this.vermelho.preFX.addShine(2,2,5,0);
        this.amareloFX = this.amarelo.preFX.addShine(2,2,5,0);
        this.azulFX = this.azul.preFX.addShine(2,2,5,0);
        this.vermelhoFX.setActive(false);
        this.amareloFX.setActive(false);
        this.azulFX.setActive(false);
        

        this.coracao1 = this.add.image(10,50,"coracao").setOrigin(0,0);
        this.coracao2 =this.add.image(60,50,"coracao").setOrigin(0,0);
        this.coracao3 =this.add.image(110,50,"coracao").setOrigin(0,0);

        this.vermelho.setInteractive({ cursor: 'pointer' });
        this.azul.setInteractive({ cursor: 'pointer' });
        this.amarelo.setInteractive({ cursor: 'pointer' });

       

        //pontos/vidas/nivel
        this.add.text(10, this.baseBranca.y-480, 'NÍVEL: ', {fontSize: '30px', fontStyle: 'bold', fill:'black'});
        this.add.text(320, this.baseBranca.y-480, 'TEMPO: ', {fontSize: '30px', fontStyle: 'bold', fill:'black'});
        this.add.text(520, this.baseBranca.y-480, 'PONTUAÇAO: ', {fontSize: '30px', fontStyle: 'bold', fill:'black'});
   
      
        this.txtNome = this.add.text(5, this.baseBranca.y-380, game.scene.keys["StartGame"].nome, {fontSize: '18px', fontStyle: 'bold', fill:'black'});
        this.txtNivel = this.add.text(120, this.baseBranca.y-480, this.nivel, {fontSize: '30px', fontStyle: 'bold', fill:'red'});
        this.txtPontos = this.add.text(700, this.baseBranca.y-480,this.pontos, {fontSize: '30px', fontStyle: 'bold', fill:'red'});
    
        this.txtTempo = this.add.text(430, this.baseBranca.y-480,this.tempo, {fontSize: '30px', fontStyle: 'bold', fill:'green'});
        
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

    //fase 2
    }else if(this.faseAtual == 2){
        this.lata = this.add.image(600, 500, 'lata').setOrigin(0,0);
        this.lataFX = this.lata.preFX.addGlow(0x000000, 8, 8, true, 0.1, 12);
        this.lataFX.setActive(false);

        this.questionIcon =this.add.image(770,450,"questionIcon");
        this.questionIcon.setInteractive();

        this.questionIcon.on('pointerover', ()=> this.ajuda = this.add.image(0, 0, 'ajuda').setOrigin(0,0));
        this.questionIcon.on('pointerout', ()=> this.ajuda.destroy());
       

        //nivel 1
    if(this.nivel==1){
        this.nivel1Fase2();
    }
       //nivel 2
    if(this.nivel==2){
       this.nivel2Fase2();
    }
      //nivel 3
    if(this.nivel==3){
        this.nivel3Fase2();
    }
    if(this.nivel==4){
        this.nivel4Fase2();
    }
        

    }
       
        
    }
    update(){
        this.txtTempo.text = this.contador.repeatCount;
        if(this.txtTempo.text < 1){
            this.scene.start('EndGame');
        }
        
    }
    lerEnunciado(){
             this.somEnunciado.play();
        this.btnSom.on("pointerdown", ()=> {
             this.somEnunciado.play();
        });
    }
    venceuNivel(){
        this.destruirMensagem();
        this.acertouParabens.play();
        this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ACERTOU!', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'red'});
        this.vermelho.destroy();
        this.azul.destroy();
        this.amarelo.destroy();
        this.contador.paused = !this.contador.paused;
        setTimeout(() => { 
            if(game.scene.isActive("PlayGame")){
                this.atribuirPontosLevel();
                this.scene.start('Transition'); 
            }
        }, 3000);
    }

    venceuUltimoNivel(){
           //acertar o ultimo nivel da fase 1 ou 2 sem errar da +20 pontos extras pra fechar 500
        if(this.vidas == 3){
            this.pontos += 40;
        }

        if(this.txtTempo.text >=120){
            this.pontos += 100;
        }else if(this.txtTempo.text>=60){
            this.pontos+=80;
        }else if(this.txtTempo.text>=1){
            this.pontos+=50;
        }

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

        if(this.txtTempo.text >=120){
            this.pontos += 100;
        }else if(this.txtTempo.text>=60){
            this.pontos+=80;
        }else if(this.txtTempo.text>=1){
            this.pontos+=50;
        }
    }

    destruirMensagem(){
        if(typeof this.txtMensagem != 'undefined'){
            this.txtMensagem.destroy();
            
        }

    }
    //fase2
    desativarBaldes(){
        this.azulBaldeAtivo = false;
        this.vermelhoBaldeAtivo = false;
        this.amareloBaldeAtivo = false;
        this.lataFX.setActive(false); 
    }
    verificaLata(){
        this.lata.on("pointerdown", ()=> {
            if(this.lata.texture.key != 'lata' && this.lata.texture.key != 'lataAzul' && this.lata.texture.key != 'lataVermelho' && this.lata.texture.key != 'lataAmarelo'){
                this.lataAtivo = !this.lataAtivo; 
                this.lataFX.setActive(this.lataAtivo); 
                console.log(this.lataAtivo);
            }else{
                console.log("lata sem cor secundaria ainda");
                this.lataFX.setActive(false); 
            }
             
        });
    }
    //fase1
    desativarCoresBola(){
        this.azulAtivo = false;
        this.vermelhoAtivo = false;
        this.amareloAtivo = false;

    }
    //fase1
    selecionarCor(){
        this.vermelho.on("pointerdown", ()=> {
            if(!this.amareloAtivo && !this.azulAtivo){
                this.vermelhoAtivo = !this.vermelhoAtivo;
                this.vermelhoFX.setActive(this.vermelhoAtivo);
                console.log("Vermelho: "+this.vermelhoAtivo);
            }
        });

        this.amarelo.on("pointerdown", ()=> {
            if(!this.vermelhoAtivo && !this.azulAtivo){
                this.amareloAtivo = !this.amareloAtivo;
                this.amareloFX.setActive(this.amareloAtivo);
                console.log("Amarelo: "+this.amareloAtivo);
            }
        });

        this.azul.on("pointerdown", ()=> {
            if(!this.vermelhoAtivo && !this.amareloAtivo){
                this.azulAtivo = !this.azulAtivo;
                this.azulFX.setActive(this.azulAtivo);
                console.log("Azul: "+this.azulAtivo);
            }
        });
        
    }
    //fase2
    misturarCoresBalde(){
        this.vermelho.on("pointerdown", ()=> {
            if(this.azulBaldeAtivo && !this.amareloBaldeAtivo){
                this.roxoBaldeAtivo = !this.roxoBaldeAtivo;
                this.desativarBaldes();
                
                this.lata = this.add.image(600, 500, 'lataRoxo').setOrigin(0,0);
              ;

            }else if(this.amareloBaldeAtivo && !this.azulBaldeAtivo){
                this.laranjaBaldeAtivo = !this.laranjaBaldeAtivo;
                this.desativarBaldes();
                
                this.lata = this.add.image(600, 500, 'lataLaranja').setOrigin(0,0);
             
            }
            else{

           

            if(!this.vermelhoBaldeAtivo){
                this.lata = this.add.image(600, 500, 'lataVermelho').setOrigin(0,0);
                this.vermelhoBaldeAtivo = !this.vermelhoBaldeAtivo;
                console.log(this.vermelhoBaldeAtivo);
            }else{
                this.lata = this.add.image(600, 500, 'lata').setOrigin(0,0);
                this.vermelhoBaldeAtivo = !this.vermelhoBaldeAtivo;
                console.log(this.vermelhoBaldeAtivo);
            }
        }

        });
        this.azul.on("pointerdown", ()=> {
           if(this.vermelhoBaldeAtivo && !this.amareloBaldeAtivo){
            this.roxoBaldeAtivo = !this.roxoBaldeAtivo;
            this.desativarBaldes();
            this.lata = this.add.image(600, 500, 'lataRoxo').setOrigin(0,0);
           } else if(this.amareloBaldeAtivo && !this.vermelhoBaldeAtivo){
            this.verdeBaldeAtivo = !this.verdeBaldeAtivo;
            this.desativarBaldes();
            this.lata = this.add.image(600, 500, 'lataVerde').setOrigin(0,0);
        }
           else{

          
           if(!this.azulBaldeAtivo){
                this.lata = this.add.image(600, 500, 'lataAzul').setOrigin(0,0);
                this.azulBaldeAtivo = !this.azulBaldeAtivo;
                console.log(this.azulBaldeAtivo);
            }else{
                this.lata = this.add.image(600, 500, 'lata').setOrigin(0,0);
                this.azulBaldeAtivo = !this.azulBaldeAtivo;
                console.log(this.azulBaldeAtivo);
            }

        }
        });
        this.amarelo.on("pointerdown", ()=> {
            if(this.azulBaldeAtivo && !this.vermelhoBaldeAtivo){
                this.verdeBaldeAtivo = !this.verdeBaldeAtivo;
                this.desativarBaldes();
                this.lata = this.add.image(600, 500, 'lataVerde').setOrigin(0,0);
            }else if(this.vermelhoBaldeAtivo && !this.azulBaldeAtivo){
                this.laranjaBaldeAtivo = !this.laranjaBaldeAtivo;
                this.desativarBaldes();
                
                this.lata = this.add.image(600, 500, 'lataLaranja').setOrigin(0,0);
            }
            else{

          
            if(!this.amareloBaldeAtivo){
                this.lata = this.add.image(600, 500, 'lataAmarelo').setOrigin(0,0);
                this.amareloBaldeAtivo = !this.amareloBaldeAtivo;
                console.log(this.amareloBaldeAtivo);
            }else{
                this.lata = this.add.image(600, 500, 'lata').setOrigin(0,0);
                this.amareloBaldeAtivo = !this.amareloBaldeAtivo;
                console.log(this.amareloBaldeAtivo); 
            }
        }
        });
    }

    nivel1(){
        this.somEnunciado = this.sound.add('enunciado1Fase1');
        this.lerEnunciado();
        this.txtEnunciado = this.add.text(this.enunciadoPosicaoX, this.enunciadoPosicaoY, 'PINTE DE VERMELHO A METADE QUE FALTA DO QUADRADO', {fontSize: this.enunciadoTamanhoFonte, fontStyle: this.txtEnunciadoEstiloFonte, fill:'red'});
        this.quadradoMetadeVermelho = this.add.image(400,300,"quadradoMetadeVermelho");
        this.quadradoMetadeVermelho.setInteractive({ cursor: 'pointer' });
        this.desativarCoresBola();
        
        this.selecionarCor();

        this.quadradoMetadeVermelho.on("pointerdown", ()=>{
            if(this.vermelhoAtivo){
                this.rec = this.add.rectangle(340, 300, 130, 250, 0xff0000);
                this.quadradoMetadeVermelho.removeInteractive();
                this.venceuNivel();
            }else if(this.azulAtivo){
                this.rec = this.add.rectangle(340, 300, 130, 250, 0x0f00ff);
                this.destruirMensagem();
                this.destruirVidas();
                this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O AZUL', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'blue'});
                this.pontos = this.pontos-10;
                this.txtPontos.text = this.pontos;
                this.azul.destroy();
                this.azulAtivo=false;
            }else if(this.amareloAtivo){
                this.rec = this.add.rectangle(340, 300, 130, 250, 0xffe400);
                this.destruirMensagem();
                this.destruirVidas();
                this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O AMARELO', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'yellow'});
                this.pontos = this.pontos-10;
                this.txtPontos.text = this.pontos;
                this.amarelo.destroy();
                this.amareloAtivo=false;
            }
        });

      
    }

    nivel2(){
        this.somEnunciado = this.sound.add('enunciado2Fase1');
        this.lerEnunciado();
        this.txtEnunciado = this.add.text(this.enunciadoPosicaoX, this.enunciadoPosicaoY, 'PINTE DE AZUL O QUADRADO', {fontSize: this.enunciadoTamanhoFonte, fontStyle: this.txtEnunciadoEstiloFonte, fill:'blue'});
        this.quadradoMetadeVermelho.destroy();
        this.quadradoBranco = this.add.image(400,300,"quadradoBranco");
        this.quadradoBranco.setInteractive({ cursor: 'pointer' });
        this.desativarCoresBola();
        this.selecionarCor();

        this.quadradoBranco.on("pointerdown", ()=>{
            if(this.vermelhoAtivo){
                this.quadradoBranco.setTintFill(0xff0000);
                this.destruirMensagem();
                this.destruirVidas();
                this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O VERMELHO', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'red'});
                this.pontos = this.pontos-10;
                this.txtPontos.text = this.pontos;
                this.vermelho.destroy();
                this.vermelhoAtivo=false;
            }else if(this.azulAtivo){
                this.quadradoBranco.setTintFill(0x0f00ff);
                this.quadradoBranco.removeInteractive();
                this.venceuNivel();
            }else if(this.amareloAtivo){
                this.quadradoBranco.setTintFill(0xffe400);
                this.destruirMensagem();
                this.destruirVidas();
                this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O AMARELO', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'yellow'});
                this.pontos = this.pontos-10;
                this.txtPontos.text = this.pontos;
                this.amarelo.destroy();
                this.amareloAtivo=false;
            }
        });

    }
    
    nivel3(){
        this.somEnunciado = this.sound.add('enunciado3Fase1');
        this.lerEnunciado();
        this.txtEnunciado = this.add.text(this.enunciadoPosicaoX, this.enunciadoPosicaoY, 'PINTE A OUTRA METADE DA MAÇÃ', {fontSize: this.enunciadoTamanhoFonte, fontStyle: this.txtEnunciadoEstiloFonte,  fill:'red'});
        this.maca = this.add.image(400,300,"macaMetadeBranca");
        this.maca.setInteractive({ cursor: 'pointer' });
        this.desativarCoresBola();
        this.selecionarCor();

        this.maca.on("pointerdown", ()=>{
            if(this.vermelhoAtivo){
                this.vermelhoAtivo=false;
                this.maca = this.add.image(400,300,"maca");
                this.venceuNivel();
                

            }else if(this.azulAtivo){
                this.maca = this.add.image(400,300,"macaMetadeAzul");
                this.destruirMensagem();
                this.destruirVidas();
                this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O AZUL', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtEnunciadoEstiloFonte, fill:'blue'});
                this.pontos = this.pontos-10;
                this.txtPontos.text = this.pontos;
                this.azul.destroy();
                this.azulAtivo=false;
            }else if(this.amareloAtivo){
                this.maca = this.add.image(400,300,"macaMetadeAmarela");
                this.destruirMensagem();
                this.destruirVidas();
                this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O AMARELO', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'yellow'});
                this.pontos = this.pontos-10;
                this.txtPontos.text = this.pontos;
                this.amarelo.destroy();
                this.amareloAtivo=false;
            }
        });
       
    }
    nivel4(){
        this.somEnunciado = this.sound.add('enunciado4Fase1');
        this.lerEnunciado();
        this.txtEnunciado = this.add.text(this.enunciadoPosicaoX, this.enunciadoPosicaoY, 'PINTE A BANANA SEGUINDO A IMAGEM', {fontSize: this.enunciadoTamanhoFonte, fontStyle: this.txtEnunciadoEstiloFonte, fill:'yellow'});
        this.bananaFixa = this.add.image(300,300,"banana");
        this.banana = this.add.image(600,300,"bananaBranco");
        this.banana.setInteractive({ cursor: 'pointer' });
        this.desativarCoresBola();
        this.selecionarCor();

        this.banana.on("pointerdown", ()=>{
            if(this.vermelhoAtivo){
                this.banana = this.add.image(600,300,"bananaVermelho");
                this.destruirMensagem();
                this.destruirVidas();
                this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O VERMELHO', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'red'});
                this.pontos = this.pontos-10;
                this.txtPontos.text = this.pontos;
                this.vermelho.destroy();
                this.vermelhoAtivo=false;
            }else if(this.azulAtivo){
                this.banana = this.add.image(600,300,"bananaAzul");
                this.destruirMensagem();
                this.destruirVidas();
                this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O AZUL', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'blue'});
                this.pontos = this.pontos-10;
                this.txtPontos.text = this.pontos;
                this.azul.destroy();
                this.azulAtivo=false;
            }else if(this.amareloAtivo){
                this.amareloAtivo=false;
                this.banana = this.add.image(600,300,"banana");
                this.destruirMensagem();
                this.vermelho.destroy();
                this.azul.destroy();
                this.amarelo.destroy();
                this.contador.paused = !this.contador.paused;
                this.fase1Completa = true;
                this.acertouParabens.play();
                this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ACERTOU!', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'red'});
                setTimeout(() => { 
                    if(game.scene.isActive("PlayGame")){
                        this.venceuUltimoNivel();
                        this.scene.start('PhaseComplete');  
                    }
                }, 3000);
            }
        });

     
    }
    nivel1Fase2(){
        this.somEnunciado = this.sound.add('enunciado1Fase2');
        this.lerEnunciado();
        this.txtEnunciado = this.add.text(this.enunciadoPosicaoX, this.enunciadoPosicaoY, 'PINTE DE VERDE A METADE DO QUADRADO', {fontSize: this.enunciadoTamanhoFonte, fontStyle: this.txtEnunciadoEstiloFonte, fill:'green'});
        this.quadradoMetadeVerde = this.add.image(400,300,"quadradoMetadeVerde");
        this.quadradoMetadeVerde.setInteractive({ cursor: 'pointer' });
        this.lata.setInteractive({ cursor: 'pointer' });

        this.verificaLata();
        this.misturarCoresBalde();
        this.quadradoMetadeVerde.on("pointerdown", ()=> {
            if(this.lataAtivo){
                if(this.lata.texture.key == "lataVerde"){
                   // this.quadradoMetadeVerde.setTintFill(0x31a21d);
                    this.rec = this.add.rectangle(340, 300, 130, 250, 0x31a21d);
                    this.quadradoMetadeVerde.removeInteractive();
                    this.lataAtivo=false;
                    this.venceuNivel();
                }else{
                    if(this.lata.texture.key == "lataRoxo"){
                     //   this.quadradoMetadeVerde.setTintFill(0Xab19ed);
                        this.rec = this.add.rectangle(340, 300, 130, 250, 0Xab19ed);
                        this.destruirMensagem();
                        this.destruirVidas();
                        this.vermelho.destroy();
                        this.lataAtivo = false;
                        this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O ROXO', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'violet'});
                        this.lata = this.add.image(600, 500, 'lata').setOrigin(0,0);
                        this.pontos = this.pontos-10;
                        this.txtPontos.text = this.pontos;
                        this.lataFX.setActive(false);
                    }else if(this.lata.texture.key == "lataLaranja"){
                      //  this.quadradoMetadeVerde.setTintFill(0xfa590a);
                        this.rec = this.add.rectangle(340, 300, 130, 250, 0xfa590a);
                        this.destruirMensagem();
                        this.destruirVidas();
                        this.vermelho.destroy();
                        this.lataAtivo = false;
                        this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O LARANJA', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'orange'});
                        this.lata = this.add.image(600, 500, 'lata').setOrigin(0,0);
                        this.pontos = this.pontos-10;
                        this.txtPontos.text = this.pontos;
                        this.lataFX.setActive(false);
                    }else{
                        console.log("MISTURE AS CORES ANTES");
                    }

                }
            }
        });

     
    }

    nivel2Fase2(){
        this.somEnunciado = this.sound.add('enunciado2Fase2');
        this.lerEnunciado();
        this.txtEnunciado = this.add.text(this.enunciadoPosicaoX, this.enunciadoPosicaoY, 'PINTE A PERA SEGUINDO A IMAGEM', {fontSize: this.enunciadoTamanhoFonte, fontStyle: this.txtEnunciadoEstiloFonte, fill:'green'});
        this.peraFixa = this.add.image(300,300,"pera");
        this.pera = this.add.image(600,300,"peraBranco");
        this.pera.setInteractive({ cursor: 'pointer' });
        this.lata.setInteractive({ cursor: 'pointer' });
        this.verificaLata();
        this.misturarCoresBalde();

        this.pera.on("pointerdown", ()=> {
            if(this.lataAtivo){
                if(this.lata.texture.key == "lataVerde"){
                    this.pera = this.add.image(600,300,"pera");
                    this.pera.removeInteractive();
                    this.lataAtivo=false;
                    this.venceuNivel();
                }else{
                    if(this.lata.texture.key == "lataRoxo"){
                        this.pera = this.add.image(600,300,"peraRoxo");
                        this.destruirMensagem();
                        this.destruirVidas();
                        this.vermelho.destroy();
                        this.lataAtivo = false;
                        this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O ROXO', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'violet'});
                        this.lata = this.add.image(600, 500, 'lata').setOrigin(0,0);
                        this.pontos = this.pontos-10;
                        this.txtPontos.text = this.pontos;
                        this.lataFX.setActive(false);
                    }else if(this.lata.texture.key == "lataLaranja"){
                        this.pera = this.add.image(600,300,"peraLaranja");
                        this.destruirMensagem();
                        this.destruirVidas();
                        this.vermelho.destroy();
                        this.lataAtivo = false;
                        this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O LARANJA', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'orange'});
                        this.lata = this.add.image(600, 500, 'lata').setOrigin(0,0);
                        this.pontos = this.pontos-10;
                        this.txtPontos.text = this.pontos;
                        this.lataFX.setActive(false);
                    }else{
                        console.log("MISTURE AS CORES ANTES");
                    }

                }
            }
        });


    }
    nivel3Fase2(){
        this.somEnunciado = this.sound.add('enunciado3Fase2');
        this.lerEnunciado();
        this.txtEnunciado = this.add.text(this.enunciadoPosicaoX, this.enunciadoPosicaoY, 'PINTE A UVA SEGUINDO A IMAGEM', {fontSize: this.enunciadoTamanhoFonte, fontStyle: this.txtEnunciadoEstiloFonte, fill:'violet'});
        this.uvaFixa = this.add.image(300,300,"uva");
        this.uva = this.add.image(600,300,"uvaBranco");
        this.uva.setInteractive({ cursor: 'pointer' });

        this.lata.setInteractive({ cursor: 'pointer' });
        this.verificaLata();
        this.misturarCoresBalde();

        this.uva.on("pointerdown", ()=> {
            if(this.lataAtivo){
                if(this.lata.texture.key == "lataVerde"){
                    this.uva = this.add.image(600,300,"uvaVerde");
                    this.destruirMensagem();
                    this.destruirVidas();
                    this.amarelo.destroy();
                    this.lataAtivo = false;
                    this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O VERDE', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'green'});
                    this.lata = this.add.image(600, 500, 'lata').setOrigin(0,0);
                    this.pontos = this.pontos-10;
                    this.txtPontos.text = this.pontos;
                    this.lataFX.setActive(false);
                }else{
                    if(this.lata.texture.key == "lataRoxo"){
                        this.uva = this.add.image(600,300,"uva");
                        this.uva.removeInteractive();
                        this.lataAtivo=false;
                        this.venceuNivel();
                    }else if(this.lata.texture.key == "lataLaranja"){
                        this.uva = this.add.image(600,300,"uvaLaranja");
                        this.destruirMensagem();
                        this.destruirVidas();
                        this.amarelo.destroy();
                        this.lataAtivo = false;
                        this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O LARANJA', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'orange'});
                        this.lata = this.add.image(600, 500, 'lata').setOrigin(0,0);
                        this.pontos = this.pontos-10;
                        this.txtPontos.text = this.pontos;
                        this.lataFX.setActive(false);
                    }else{
                        console.log("MISTURE AS CORES ANTES");
                    }

                }
            }
        });


    }
    nivel4Fase2(){
        this.somEnunciado = this.sound.add('enunciado4Fase2');
        this.lerEnunciado();
        this.txtEnunciado = this.add.text(this.enunciadoPosicaoX, this.enunciadoPosicaoY, 'PINTE A LARANJA SEGUINDO A IMAGEM', {fontSize: this.enunciadoTamanhoFonte, fontStyle: this.txtEnunciadoEstiloFonte, fill:'orange'});
        this.laranjaFixa = this.add.image(300,300,"laranja");
        this.laranja = this.add.image(600,300,"laranjaBranco");
        this.laranja.setInteractive({ cursor: 'pointer' });

        this.lata.setInteractive({ cursor: 'pointer' });
        this.verificaLata();
        this.misturarCoresBalde();

        this.laranja.on("pointerdown", ()=> {
            if(this.lataAtivo){
                if(this.lata.texture.key == "lataVerde"){
                    this.laranja = this.add.image(600,300,"laranjaVerde");
                    this.destruirMensagem();
                    this.destruirVidas();
                    this.azul.destroy();
                    this.lataAtivo = false;
                    this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O VERDE', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'green'});
                    this.lata = this.add.image(600, 500, 'lata').setOrigin(0,0);
                    this.pontos = this.pontos-10;
                    this.txtPontos.text = this.pontos;
                    this.lataFX.setActive(false);
                }else{
                    if(this.lata.texture.key == "lataRoxo"){
                        this.laranja = this.add.image(600,300,"laranjaRoxo");
                        this.destruirMensagem();
                        this.destruirVidas();
                        this.azul.destroy();
                        this.lataAtivo = false;
                        this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ERROU ESSE É O ROXO', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'violet'});
                        this.lata = this.add.image(600, 500, 'lata').setOrigin(0,0);
                        this.pontos = this.pontos-10;
                        this.txtPontos.text = this.pontos;
                        this.lataFX.setActive(false);
                    }else if(this.lata.texture.key == "lataLaranja"){
                        this.laranja = this.add.image(600,300,"laranja");
                        this.laranja.removeInteractive();
                        this.lataAtivo=false;
                        this.destruirMensagem();
                        this.vermelho.destroy();
                        this.azul.destroy();
                        this.amarelo.destroy();
                     //   this.lata.destroy();
                        this.contador.paused = !this.contador.paused;
                        this.fase2Completa =true;
                        this.acertouParabens.play();
                        this.txtMensagem = this.add.text(this.txtMensagemPosicaoX, this.txtMensagemPosicaoY, 'ACERTOU!', {fontSize: this.txtMensagemTamanhoFonte, fontStyle: this.txtMensagemEstiloFonte, fill:'red'});
                        setTimeout(() => { 
                            if(game.scene.isActive("PlayGame")){
                                this.venceuUltimoNivel();
                                this.scene.start('PhaseComplete');  
                            }
                        }, 3000);

                    }else{
                        console.log("MISTURE AS CORES ANTES");
                    }

                }
            }
        });


    }
}