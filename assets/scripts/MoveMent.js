// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        isLeft:false,
        isRight:false,
        isUp:false,
        isDown:false,
        //
        playerOne:{
            default:null,
            type:cc.Node,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.initKeyboard()
        this.initMouse()
    },

    update (dt) {
        
    },
    /**
     * 初始化键盘响应
     *  */
    initKeyboard(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,function(e){
            console.log("key down " + e.keyCode)
            switch(e.keyCode){
                case cc.macro.KEY.a:
                isLeft = true;
                break;
                case cc.macro.KEY.d:
                isRight = true;
                break;
                case cc.macro.KEY.w:
                isUp = true;
                break;
                case cc.macro.KEY.s:
                isDown = true;
                break;
            }
        },this);

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,function(e){
            console.log("key down " + e.keyCode)
            switch(e.keyCode){
                case cc.macro.KEY.a:
                isLeft = false;
                break;
                case cc.macro.KEY.d:
                isRight = false;
                break;
                case cc.macro.KEY.w:
                isUp = false;
                break;
                case cc.macro.KEY.s:
                isDown = false;
                break;
            }
        },this);
    },
    /**
     * 初始化触摸响应
     */
    initTouch(){
        this.node.on(cc.Node.EventType.TOUCH_START, function(e){
            console.log("touch clicked!")
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END,function(e){
            console.log("touch end")
        },this)
    },
    /**
     * 初始化鼠标
     */
    initMouse(){
        var scene = cc.director.getScene()
        this.node.on(cc.Node.EventType.MOUSE_DOWN,function(e){
            console.log("mouse Down!")
        },scene)
        this.node.on(cc.Node.EventType.MOUSE_UP,function(e){
            console.log("mouse Up!")
        },scene)
    }
});
