const w = 1536;
const h = window.outerHeight;

const game = new Phaser.Game(w, h, Phaser.AUTO, 'frame', { preload: preload, create: create, update: update, render: render });

var intro_text1, intro_text2;

var intro = function(){
    this.Group = game.add.group();
    
    this.intro = game.add.sprite(0,(h-708)/2,'intro1');
    this.current = 1;
    
    this.left = game.add.button(0,(h-218)/2, 'button_left', this.prev, this);    
    this.right = game.add.button(w-101,(h-218)/2, 'button_right', this.next, this);    
    
    this.header1 = game.add.sprite(180,255,'header1');
    this.header2 = game.add.sprite(180,425,'header2');
        
    this.banner_up = game.add.sprite(0,0,'intro_up');
    this.banner_down = game.add.sprite(0,h-70,'intro_down');
};

intro.prototype.next = function(){
    if(this.current != 4) this.current += 1;
    else this.current = 1;
        
    this.intro.loadTexture('intro' + this.current.toString());
};
intro.prototype.prev = function(){
    if(this.current != 1) this.current -= 1;
    else this.current = 4;
        
    this.intro.loadTexture('intro' + this.current.toString());
};



var main = function(){
    this.Group = game.add.group();
    this.poster = game.add.sprite(0,(h-499)/2, 'main_poster');    
    
    this.banner_up = game.add.sprite(0,0,'main_up');
    this.banner_down = game.add.sprite(0,h-96,'main_down');
    /*
    this.icon = [];
    for(var i=1; i < 6; i++){
        this.icon.push(game.add.sprite(0,0, 'icon'+ i.toString() ));
    }   
    */
};

var sections = [];


function preload(){
    game.load.spritesheet('intro1', 'assets/images/intro1.jpg');
    game.load.spritesheet('intro2', 'assets/images/intro2.jpg');
    game.load.spritesheet('intro3', 'assets/images/intro3.jpg');
    game.load.spritesheet('intro4', 'assets/images/intro4.jpg');
    game.load.spritesheet('intro_up', 'assets/images/intro_up.png');
    game.load.spritesheet('intro_down', 'assets/images/intro_down.png');
    game.load.spritesheet('button_right', 'assets/images/button_right.png');    
    game.load.spritesheet('button_left', 'assets/images/button_left.png');
    game.load.spritesheet('header1', 'assets/images/header1.png');    
    game.load.spritesheet('header2', 'assets/images/header2.png');
    
    game.load.spritesheet('main_up', 'assets/images/main_up.png');
    game.load.spritesheet('main_down', 'assets/images/main_down.png');    
    game.load.spritesheet('main_poster', 'assets/images/main_poster.png');
    
    game.load.spritesheet('icon1', 'assets/images/ICON_01.png');
    game.load.spritesheet('icon2', 'assets/images/ICON_02.png');
    game.load.spritesheet('icon3', 'assets/images/ICON_03.png');
    game.load.spritesheet('icon4', 'assets/images/ICON_04.png');
    game.load.spritesheet('icon5', 'assets/images/ICON_05.png');
    
    game.load.image('background','assets/images/background.png');
}


function create(){
    game.add.tileSprite(0, 0, w, h, 'background');
    
    sections.push(new intro);
    
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
}

function update(){

}

function render(){
    game.debug.text('h = '+h,32,32);
}