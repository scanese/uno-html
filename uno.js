class Card {
    constructor(color, cardType, image, number=null){
        this.color = color;
        this.cardType = cardType;
        this.image = image;
        this.number = number;
    }
}

class Deck {
    constructor(){
        this.cards = [];
        const colorArray = ['y', 'g', 'r', 'b'];
        colorArray.forEach(color => {
            this.cards.push(new Card(color, 'regular', color+'_0.png', 0));
            for(let i=1; i<10; i++){
                this.cards.push(new Card(color, 'regular', color+'_' + i.toString() + '.png', i));
            }
            this.cards.push(new Card(color, 'draw', color + '_draw.png'));
            this.cards.push(new Card(color, 'reverse', color + '_reverse.png'));
            this.cards.push(new Card(color, 'skip', color + '_skip.png'));
        });        
        for(let i=0; i<4; i++){
            this.cards.push(new Card(null, 'draw_four', 'draw_four.png'));
            this.cards.push(new Card(null, 'colorchooser', 'colorchooser.png'));
        }
    }

    count(){
        return this.cards.length;
    }

    shuffle(){
        Phaser.Utils.Array.Shuffle(this.cards);
    }

    print(){
        this.cards.forEach(element => {
            console.log(element.color, element.cardType, element.image, element.number);
            
        });
    }


}