var MainMenu = cc.Layer.extend({

  intemTag: 0,
  menubg: null,

  init: function() {

    if (this._super()) {
      this.Rendering();
      this.addMenu();
    }

    return true;

  },

  Rendering: function() {

    this.addPic(P_MENUBG, cc.p(0.5, 0.5), cc.p(WIN_SIZE.width / 2 , WIN_SIZE.height / 2), SCALE_RATE, -1);

    this.addPic(P_LOGO, cc.p(0.5, 0.5), cc.p(WIN_SIZE.width / 2, 3 * WIN_SIZE.height / 4), SCALE_RATE, 20);

  },

  addPic: function(src, anchorPoint, position, scale, zOrder) {

    var sprite = cc.Sprite.create(src);
    sprite.setAnchorPoint(anchorPoint);
    sprite.setPosition(position);
    sprite.setScale(scale);
    this.addChild(sprite, zOrder, this.intemTag);
    this.intemTag++;

  },

  //let the tile to go straight
  goStraight: function() {

    this.runAction(cc.MoveTo.create(this.distance / this.velocity, cc.PointMake(WIN_SIZE.width / 2, -this.height / 2)));

  },

  addMenu: function() {

    var newGameNormal   = cc.Sprite.create(P_MENU, cc.RectMake(0, 0, 200, 50));
    var newGameSelected = cc.Sprite.create(P_MENU, cc.RectMake(0, 50, 200, 50));
    var newGameDisabled = cc.Sprite.create(P_MENU, cc.RectMake(0, 50 * 2, 200, 50));

    var gameSettingsNormal   = cc.Sprite.create(P_MENU, cc.RectMake(200, 0, 200, 50));
    var gameSettingsSelected = cc.Sprite.create(P_MENU, cc.RectMake(200, 50, 200, 50));
    var gameSettingsDisabled = cc.Sprite.create(P_MENU, cc.RectMake(200, 50 * 2, 200, 50));

    var aboutNormal   = cc.Sprite.create(P_MENU, cc.RectMake(400, 0, 200, 50));
    var aboutSelected = cc.Sprite.create(P_MENU, cc.RectMake(400, 50, 200, 50));
    var aboutDisabled = cc.Sprite.create(P_MENU, cc.RectMake(400, 50 * 2, 200, 50));

    var newGame = cc.MenuItemSprite.create(newGameNormal, newGameSelected, newGameDisabled, this.onNewGame, this);
    var gameSettings = cc.MenuItemSprite.create(gameSettingsNormal, gameSettingsSelected, gameSettingsDisabled, this.onSettings, this);
    var about = cc.MenuItemSprite.create(aboutNormal, aboutSelected, aboutDisabled, this.onAbout, this);

    var menu = cc.Menu.create(newGame, gameSettings, about);
    menu.alignItemsVerticallyWithPadding(10);
    menu.setPosition(cc.p(WIN_SIZE.width / 2, WIN_SIZE.height / 2 - 80));
    this.addChild(menu, 600, 2);

  },

  onNewGame: function(pSender) {

    cc.Director.getInstance().replaceScene(new TrackScene());

  },

  onSettings: function(pSender) {

    // var scene = cc.Scene.create();
    // scene.addChild(SettingsLayer.create());
    //  cc.Director.sharedDirector().replaceScene(cc.TransitionFade.create(1.2, scene));

  },

  onAbout: function(pSender) {

    var scene = cc.Scene.create();
    scene.addChild(About.create());
    cc.Director.getInstance().replaceScene(scene);

  },

  onButtonEffect: function() {

    // if (global.sound) {
    //     var s = cc.AudioManager.sharedEngine().playEffect(s_buttonEffect);
    // }

  }

});

var MainMenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainMenu();
        layer.init();
        this.addChild(layer);
    }
});
