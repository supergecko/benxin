
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/active/active","pages/main/main","pages/login/login","pages/reg/reg","pages/pwd/pwd","pages/user/user","pages/shop/shop","pages/message/message"],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#ff8831","backgroundColor":"#fbf9fe"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"本心数易","compilerVersion":"2.9.8","entryPagePath":"pages/active/active","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/active/active","meta":{"isQuit":true},"window":{"navigationBarTitleText":"首页测算","navigationStyle":"custom","titleNView":false}},{"path":"/pages/main/main","meta":{},"window":{"navigationBarTitleText":"登录模板"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/reg/reg","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/pwd/pwd","meta":{},"window":{"navigationBarTitleText":"找回密码"}},{"path":"/pages/user/user","meta":{},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/shop/shop","meta":{},"window":{"navigationBarTitleText":"商城"}},{"path":"/pages/message/message","meta":{},"window":{"navigationBarTitleText":"数易测算","navigationBarBackgroundColor":"transparent","navigationBarTextStyle":"black","titleNView":{"type":"float","titleText":"数易测算","buttons":[{"text":"保存图片","float":"right","fontSize":"24upx","width":"140upx"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
