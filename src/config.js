var game;

window.onload = function()
{
    let gameConfig = 
    {
        type: Phaser.WEBGL,
        width:800,
        height:720,
       
        autoCenter:Phaser.Scale.CENTER_BOTH,
           
        backgroundColor: '#d3d3d3',
        scene:[StartGame, Menu, PlayGame, Transition,Teacher, Criteria, Ranking, Credits, EndGame]
    };
    game = new Phaser.Game(gameConfig);

    window.focus();
}
