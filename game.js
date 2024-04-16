const gameState = {}
function preload() {
  this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png')
  this.load.image('ground', 'https://th.bing.com/th?id=OIP.nivfpsSMJCqUoJYmxKWG1AHaEd&w=322&h=194&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2')
}
function create() {
  gameState.codey = this.physics.add.sprite(this.sys.game.config.width/2,50,"codey");
  gameState.groundX = this.sys.game.config.width/2;
  gameState.groundY = this.sys.game.config.height*.95;
  gameState.ground = this.physics.add.sprite(gameState.groundX,gameState.groundY,"ground");
  this.physics.add.collider(gameState.codey,gameState.ground);
  gameState.ground.setImmovable();
  gameState.cursors = this.input.keyboard.createCursorKeys()
  this.keyboard = this.input.keyboard;

    // Create key objects for specific keys
  this.wKey = this.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  this.tKey = this.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
}
function update() {

gameState.codey.setGravityY(100);
if (gameState.cursors.down.isDown) {
    gameState.codey.y += 1;
}
if (gameState.cursors.up.isDown) {
  gameState.codey.y -= 3;
}
if (gameState.cursors.right.isDown) {
  gameState.codey.x += 1;
}
if (gameState.cursors.left.isDown) {
  gameState.codey.x -= 1;
}
}
const config = {
  width: 900,
  height: 500,
  backgroundColor: 0xdda0dd,
  scene: {
    preload,
    create,
    update,
  },
  parent: 'phaser-game',
  physics:{
    default:'arcade',
    arcade:{debug:false}
  }
};
const game = new Phaser.Game(config)