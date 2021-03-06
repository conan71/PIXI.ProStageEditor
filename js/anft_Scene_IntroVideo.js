/*:
// PLUGIN □────────────────────────────────□ Scene_IntroVideo □─────────────────────────────────────────┐
* @author □ Jonathan Lepage (dimisterjon),(jonforum) 
* @plugindesc Scene_Boot
* V.1.0
* License:© M.I.T

└───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
NOTE AND HELP:

*/
/**
 * The Superclass of all scene within the game.
 * 
 * @class Scene_IntroVideo
 * @constructor 
 * @extends PIXI.Container
 */
class Scene_IntroVideo extends PIXI.Container {
    constructor(nextSceneClass, options) {
        super();
        //TODO: FAIRE UN SCENEBASE ?
        this.visible = false;
        this.renderable = false;
    };

    start(){
        this.visible = true;
        this.renderable = true;
        this.create_IntroVideo();
    };

    update(delta){

    };

    end(){
        this.visible = false;
        this.renderable = false;
    };


    create_IntroVideo () {
        const dataVideo = $Loader.Data2['vidA1'].dataVideo;
        const texture = PIXI.Texture.fromVideo( dataVideo, 1, void 0, false );
        const videoSprite = new PIXI.Sprite(texture);
        const videoControler = texture.baseTexture.source;
    
        videoSprite.width = 1920;
        videoSprite.height = 1080;
    
        videoControler.currentTime = 12.2;
        videoControler.onended = () => {
            //this.nextVideo();
           $stage.goto('Scene_Title');
           
        }

        this.addChild(videoSprite);
        this.videoControler = videoControler;
        videoControler.play();
    };


};

