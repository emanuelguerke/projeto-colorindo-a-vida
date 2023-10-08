export class Credits extends Phaser.Scene{

    constructor(){
        super("Credits");
        this.btnVoltar;

    }
    preload(){
        
    }

    create(){

        this.btnVoltar = this.add.image(30,60,"btnVoltar");
        this.btnVoltar.setInteractive({ cursor: 'pointer' });
        this.btnVoltar.on("pointerdown", ()=> this.scene.start('Teacher'));

        this.add.text(50, 100,"PROJETO COLORINDO A VIDA",  {fontSize: '50px', fontStyle: 'bold',fill:'white'});
        this.add.text(50, 140,"ENGENHARIA DE SOFTWARE",  {fontSize: '50px', fontStyle: 'bold',fill:'white'});
        this.add.text(50, 180,"UTFPR - 2023/2",  {fontSize: '50px', fontStyle: 'bold',fill:'white'});
        this.add.text(50, 0,"PROFESSORA ISHIKAWA",  {fontSize: '50px', fontStyle: 'bold',fill:'white'});



        this.add.rectangle(0, 300, 800, 400, 0xFFFFFF).setOrigin(0,0);

        this.add.text(50, 250,"ALUNOS",  {fontSize: '50px', fontStyle: 'bold',fill:'black'});
        this.add.text(50, 320,"DAVI",  {fontSize: '30px', fontStyle: 'bold',fill:'black'});
        this.add.text(50, 360,"EDUARDO",  {fontSize: '30px', fontStyle: 'bold',fill:'black'});
        this.add.text(50, 400,"EMANUEL",  {fontSize: '30px', fontStyle: 'bold',fill:'black'});
        this.add.text(50, 440,"LUIS",  {fontSize: '30px', fontStyle: 'bold',fill:'black'});
        this.add.text(50, 480,"JOÃO",  {fontSize: '30px', fontStyle: 'bold',fill:'black'});

    }


}