import Phaser from 'phaser';
import {Menu} from './menu.js';
import {PlayGame} from './playGame.js';

import {Transition} from './transition.js'
import {PhaseComplete} from './phaseComplete.js'
import {Teacher} from './teacher.js'
import {Criteria} from './criteria.js'
import {Ranking} from './ranking.js'
import {Credits} from './credits.js'
import {EndGame} from './endGame.js'



export class StartGame extends Phaser.Scene{
    
    constructor(){
        super("StartGame");
        this.nome;
        this.txtNome;
        this.sprite;
        this.areaDoProfessor;
        this.iniciarJogo;
        this.caixaNome;
        this.nomeJogador;
        this.menuMusic;
        this.game;
        this.logado=false;
    }

    preload(){
        //sound
        //feedback
        this.load.audio("acertouParabens", "src/assets/acertouParabens.mp3");
        //fase1
        this.load.audio("enunciado1Fase1", "src/assets/enunciado1Fase1.mp3");
        this.load.audio("enunciado2Fase1", "src/assets/enunciado2Fase1.mp3");
        this.load.audio("enunciado3Fase1", "src/assets/enunciado3Fase1.mp3");
        this.load.audio("enunciado4Fase1", "src/assets/enunciado4Fase1.mp3");
        //fase2
        this.load.audio("enunciado1Fase2", "src/assets/enunciado1Fase2.mp3");
        this.load.audio("enunciado2Fase2", "src/assets/enunciado2Fase2.mp3");
        this.load.audio("enunciado3Fase2", "src/assets/enunciado3Fase2.mp3");
        this.load.audio("enunciado4Fase2", "src/assets/enunciado4Fase2.mp3");
        //menu
        this.load.image("btnSom", "src/assets/btnSom.png");
        this.load.image("btnFase1", "src/assets/fase1.png");
        this.load.image("btnFase2", "src/assets/fase2.png");
        this.load.image("btnCreditos", "src/assets/creditos.png");
        //transition
        this.load.image("correto", "src/assets/correto.png");
        this.load.image("continuar", "src/assets/continuar.png")
        //teacher
        this.load.image("btnVoltar", "src/assets/btnVoltar.png");
        this.load.image("btnCriterios", "src/assets/criterios.png");
        this.load.image("btnRanking", "src/assets/ranking.png");
        //StartGame  
        this.load.image("logout", "src/assets/logout.png");
        this.load.image("areaDoProfessor", "src/assets/areaDoProfessor.png");
        this.load.image("iniciarJogo", "src/assets/iniciarJogo.png");
        
       
        
        //PlayGame
        this.load.image('coracao', 'src/assets/coracao.png');
        this.load.image('vermelho', 'src/assets/vermelho.png');
        this.load.image('azul', 'src/assets/azul.png');
        this.load.image('amarelo', 'src/assets/amarelo.png');
       
        //fase 1 nivel 1
        this.load.image('quadradoMetadeVermelho', 'src/assets/quadradoMetadeVermelho.png');
        //fase 1 nivel 2
        this.load.image('quadradoBranco', 'src/assets/quadradoBranco.png');
        //fase 1 nivel 3
        this.load.image('maca','src/assets/maca.png');
        this.load.image('macaMetadeBranca','src/assets/macaMetadeBranca.png');
        this.load.image('macaMetadeAzul','src/assets/macaMetadeAzul.png');
        this.load.image('macaMetadeAmarela','src/assets/macaMetadeAmarela.png');
        //fase 1 nivel 4
        this.load.image('banana','src/assets/banana.png');
        this.load.image('bananaBranco','src/assets/bananaBranco.png');
        this.load.image('bananaVermelho','src/assets/bananaVermelho.png');
        this.load.image('bananaAzul','src/assets/bananaAzul.png');

        //fase 2
        this.load.image('questionIcon','src/assets/questionIcon.png');
        this.load.image('ajuda','src/assets/ajuda.png');

        this.load.image('lata', 'src/assets/lata.png');
        this.load.image('lataVermelho', 'src/assets/lataVermelho.png');
        this.load.image('lataAmarelo', 'src/assets/lataAmarelo.png');
        this.load.image('lataAzul', 'src/assets/lataAzul.png');
        this.load.image('lataVerde', 'src/assets/lataVerde.png');
        this.load.image('lataRoxo', 'src/assets/lataRoxo.png');
        this.load.image('lataLaranja', 'src/assets/lataLaranja.png');

        //fase 2 nivel 1
        this.load.image('quadradoMetadeVerde','src/assets/quadradoMetadeVerde.png');
        //fase 2 nivel 2
        this.load.image('pera','src/assets/pera.png');
        this.load.image('peraBranco','src/assets/peraBranco.png');
        this.load.image('peraRoxo','src/assets/peraRoxo.png');
        this.load.image('peraLaranja','src/assets/peraLaranja.png');
        //fase 2 nivel 3
        this.load.image('uva','src/assets/uva.png');
        this.load.image('uvaBranco','src/assets/uvaBranco.png');
        this.load.image('uvaVerde','src/assets/uvaVerde.png');
        this.load.image('uvaLaranja','src/assets/uvaLaranja.png');
        //fase 2 nivel 3
        this.load.image('laranja','src/assets/laranja.png');
        this.load.image('laranjaBranco','src/assets/laranjaBranco.png');
        this.load.image('laranjaVerde','src/assets/laranjaVerde.png');
        this.load.image('laranjaRoxo','src/assets/laranjaRoxo.png');
        //EndGame
    //    this.load.image("btnVoltar", "src/assets/voltar.png");
        //


    }

    create(){
       
   //     this.menuMusic = this.sound.add('menuMusic');
   //     this.menuMusic.play();
        this.add.text(180, 150,"NOME DO JOGADOR",  {fontSize: '50px', fontStyle: 'bold',fill:'white'});
        this.caixaNome = this.add.rectangle(200, 220, 400, 60, 0xFFFFFF).setOrigin(0,0);
      //  var caixaAreaProfessor = this.add.rectangle(400, 10, 390, 100, 0xFFFFFF).setOrigin(0,0);
        
   //     this.nomeJogador = this.add.text(200, 220, '', { font: '30px Courier', fill: 'black' });
      
        this.areaDoProfessor = this.add.image(660,50,"areaDoProfessor").setInteractive({ cursor: 'pointer' });
        
        this.logout = this.add.image(140,50,"logout").setInteractive({ cursor: 'pointer' });

        this.logout.on("pointerdown", ()=> {
            this.logado = false;
            //provisório até colococar algum banco de dados pra administrar a sessão
            game.scene.keys["PlayGame"].fase1Completa= false;
            game.scene.keys["PlayGame"].fase2Completa=false;
            this.scene.start('StartGame');
            //this.nomeJogador.destroy();
        
        });
        this.logout.on('pointerover', this.passouPorCima);
        this.logout.on('pointerout', this.saiuDeCima);

        this.areaDoProfessor.on('pointerover', this.passouPorCima);
        this.areaDoProfessor.on('pointerout', this.saiuDeCima);
        
       
    
        this.areaDoProfessor.on("pointerdown", ()=> this.scene.start('Teacher'));

        this.iniciarJogo = this.add.image(400,400,"iniciarJogo");
        this.iniciarJogo.setInteractive({ cursor: 'pointer' });
        
        this.iniciarJogo.on('pointerover',this.passouPorCima);

        this.iniciarJogo.on('pointerout', this.saiuDeCima);
        if(!this.logado){
            this.nomeJogador = this.add.text(200, 220, '', { font: '30px Courier', fill: 'black' });
            this.input.keyboard.on('keydown', event =>
            {
                
               
    
                if (event.keyCode === 8 && this.nomeJogador.text.length > 0)
                {
                    this.nomeJogador.text = this.nomeJogador.text.substr(0, this.nomeJogador.text.length - 1);
                    this.nome = this.nomeJogador.text;
                }
                else if (event.keyCode === 32  || (event.keyCode >= 48 && event.keyCode < 90 && this.nomeJogador.text.length <20))
                {
                    this.nomeJogador.text += event.key;
                    this.nome = this.nomeJogador.text.toUpperCase();
                    
                }
                if(typeof this.nome != 'undefined' && this.nome.length >=2){
                    this.iniciarJogo.on("pointerdown", ()=> this.scene.start('Menu'));
                    this.logado=true;
                    console.log("pode começar");

                }
             //   console.log(this.nome);
                
            });
           
        }else if(this.logado){
            this.nomeJogador = this.add.text(200, 220, this.nome, { font: '30px Courier', fill: 'black' });
            this.iniciarJogo.on("pointerdown", ()=> this.scene.start('Menu'));
            console.log("pode começar logado");
        }
      
        

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

window.onload = function()
{
    let gameConfig = 
    {
        type: Phaser.WEBGL,
        width:800,
        height:720,
       
        autoCenter:Phaser.Scale.CENTER_BOTH,
           
        backgroundColor: '#d3d3d3',
        scene:[StartGame, Menu, PlayGame, Transition, PhaseComplete, Teacher, Criteria, Ranking, Credits, EndGame]
    };
    this.game = new Phaser.Game(gameConfig);

    window.focus();
}

