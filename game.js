
var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 2048,
    height: 1800,
    backgroundColor: '#ffffff',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    
    this.load.atlas('cards', 'assets/uno-half.png', 'assets/uno-half.json');
}

function create ()
{
    //  Create a stack of random cards
    var frames = this.textures.get('cards').getFrameNames();
    var deck = new Deck();
    deck.print();
    deck.shuffle();
    deck.print();
    var x = 100;
    var y = 100;

    console.log(frames);
    deck.cards.forEach(card => {
        var image = this.add.image(x, y, 'cards', card.image).setInteractive();
        this.input.setDraggable(image);
        x += 4;
        y += 4;
    });
    this.input.on('dragstart', function (pointer, gameObject) {

        this.children.bringToTop(gameObject);
        this.origin_x = gameObject.x;
        this.origin_y = gameObject.y;

    }, this);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    this.input.on('dragend', function(pointer, gameObject, dragX, dragY){
        console.log(this.origin_x, this.origin_y);

        gameObject.x = this.origin_x;
        gameObject.y = this.origin_y;

    }, this);
}
