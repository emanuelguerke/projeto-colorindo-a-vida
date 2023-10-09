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

        this.add.text(100, 50,"PROJETO: COLORINDO A VIDA",  {fontSize: '30px', fontStyle: 'bold',fill:'white'});
        this.add.text(100, 80,"ENGENHARIA DE SOFTWARE | UTFPR - 2023/2",  {fontSize: '25px', fontStyle: 'bold',fill:'white'});

        this.add.rectangle(380, 200, 620, 60, 0xFFFFFF);

        this.add.text(300, 140,"PROFESSORA",  {fontSize: '30px', fontStyle: 'bold',fill:'white'});
        this.add.text(250, 180,"ELIANA ISHIKAWA",  {fontSize: '30px', fontStyle: 'bold',fill:'black'});
 

        this.add.rectangle(380, 400, 620, 300, 0xFFFFFF);
       

        this.add.text(300, 250,"ALUNOS",  {fontSize: '50px', fontStyle: 'bold',fill:'black'});
        this.add.text(100, 320,"DAVI SILVA BÜHER - RA:2374102",  {fontSize: '25px', fontStyle: 'bold',fill:'black'});
        this.add.text(100, 360,"EDUARDO GOMES DOS SANTOS - RA:2164418",  {fontSize: '25px', fontStyle: 'bold',fill:'black'});
        this.add.text(100, 400,"EMANUEL MAINARDES GUERKE - RA:1297333",  {fontSize: '25px', fontStyle: 'bold',fill:'black'});
        this.add.text(100, 440,"LUIZ FELIPE HAGY - RA:2488035",  {fontSize: '25px', fontStyle: 'bold',fill:'black'});
        this.add.text(100, 480,"JOÃO VITOR SANTOS - RA:2473615",  {fontSize: '25px', fontStyle: 'bold',fill:'black'});

    }


}