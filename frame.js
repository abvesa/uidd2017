const w = 1536;
const h = window.outerHeight;

const game = new Phaser.Game(w, h, Phaser.AUTO, 'frame', { preload: preload, create: create, update: update, render: render });



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
    
    // add things to group
    this.Group.add(this.intro);
    this.Group.add(this.left);
    this.Group.add(this.right);
    this.Group.add(this.header1);
    this.Group.add(this.header2);
    this.Group.add(this.banner_up);
    this.Group.add(this.banner_down);
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
    
    this.back = game.add.sprite(0,0, 'background');   
    this.poster = game.add.sprite((w-1153)/2,(h-374)/3, 'main_poster');    
    
    this.banner_up = game.add.sprite(0,0,'main_up');
    this.banner_down = game.add.sprite(0,h-96,'main_down');
    
    this.icon = [];
    this.icon_x = (w - 509)/2;
    this.icon_y = 600;
    
    for(var i=1; i < 6; i++){
        var width = game.cache.getImage('icon'+ i.toString()).width;
        this.icon.push(game.add.sprite(this.icon_x,this.icon_y, 'icon'+ i.toString() ));
        
        this.icon_x += (30 + width);
    }  
    
    // add things to group
    this.Group.add(this.back);
    this.Group.add(this.poster);
    this.Group.add(this.banner_up);
    this.Group.add(this.banner_down);    
    for(var i=0; i<this.icon.length; i++){
        this.Group.add(this.icon[i]);
    }
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
    game.load.image('test_button', 'assets/images/test_button.png');
}

var currPage;

function changePage(){
    if(currPage === 'intro'){
        currPage = 'main';
        game.world.bringToTop(sections[1].Group);
    }
    else{
        currPage = 'intro';
        game.world.bringToTop(sections[0].Group);
    }
}


function create(){
    game.add.tileSprite(0, 0, w, h, 'background');
    
    sections.push(new main);
    sections.push(new intro);
    currPage = 'intro';
    
    game.add.button(0,0,'test_button', changePage, this);
    
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
}

function update(){

}

function render(){
    //game.debug.text('h = '+h,32,32);
}