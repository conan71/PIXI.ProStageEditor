
// TOAST METHOD FOR EDITOR
// ┌------------------------------------------------------------------------------------------------┐
// iziToast Builder See=>pixiMapEditor_HTML.js   http://izitoast.marcelodolce.com/
//└------------------------------------------------------------------------------------------------┘



_PME.prototype.izit_loading1 = function() { // load all sprites dependency for editor gui only
    return{
        transitionOut: 'fadeOutUp',
        id:'izit_loading1',
        timeout:4600,
        theme: 'dark',
        icon: 'icon-person',
        title: 'PLEASE WAIT:',
        message: `Converting Engine for Editor:`,
        position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: 'rgb(0, 255, 184)',
        backgroundColor: '#3f3f3f',
        progressBarColor:'#f44242',
    };
};
    
    // open the scene stage editor
_PME.prototype.mapSetupEditor = function() {
    // get BG list "only on a Scene editor" , all maps use rmmv editor 
    let listBG = [];
    for (const key in this.Data2) {
        const data = this.Data2[key];
        data.dirArray.contains("BG") && listBG.push(key);
    };
    let message = html_mapSetupEditor(listBG);
    return{
        title: '',
        message: message,
        id:'dataEditor',
        layout: 2,
        transitionIn: 'flipInX', // bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight or flipInX.
        transitionOut:	'fadeOut', // fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
        messageSize: 14,
        maxWidth: false,
        theme: 'dark',
        position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        backgroundColor: 'rgba(38, 38, 38, 0.8)',
        close: false,
        progressBar: false,
        timeout:false,
        icon:false,
        drag: false,
    };
};

// open the tileEditor
_PME.prototype.tileSetupEditor = function(InMapObj){
    let message = htlm_tileSetupEditor(InMapObj);
    return{
        title: '',
        message: message,
        id:'dataEditor',
        layout: 2,
        transitionIn: 'flipInX', // bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight or flipInX.
        transitionOut:	'fadeOut', // fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
        messageSize: 14,
        maxWidth: false,
        theme: 'dark',
        position: 'topLeft', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        backgroundColor: 'rgba(38, 38, 38, 0.99)',
        close: false,
        progressBar: false,
        timeout:false,
        icon:false,
        drag: false,
    };
};

_PME.prototype.savedComplette = function(){
    return{
        transitionOut: 'fadeOutUp',
        id:'izit_loading1',
        timeout:1000,
        theme: 'dark',
        icon: 'icon-person',
        title: 'SAVED JSON:',
        message: `COMPLETTE`,
        position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: 'rgb(0, 255, 184)',
        backgroundColor: '#3f3f3f',
        progressBarColor:'#f44242',
    };
};

_PME.prototype.removeSprite = function(InMapObj,index){
    return{
        transitionOut: 'fadeOutUp',
        id:'izit_loading1',
        layout: 2,
        timeout:2500,
        theme: 'dark',
        icon: 'icon-person',
        title: `DELETE: ${InMapObj.name}`,
        message: `Aat index: ${index}`,
        position: 'topLeft', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBar:false,
        backgroundColor: '#3f3f3f',
        titleSize: '11',
        messageSize: '10',
    };
};








const iziT = iziToast;
iziT.libs_loading = function(arg){
    return{
        transitionOut: 'fadeOutUp',
        id:'libs_loading',
        timeout:4600,
        theme: 'dark',
        icon: 'icon-person',
        title: 'LOADING LIBRARY',
        message: `'Please wait' perform scan in:${$SLL.libraryPath}`,
        position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: 'rgb(0, 255, 184)',
        backgroundColor: '#3f3f3f',
        progressBarColor:'#f44242',
    };
};
iziT.libs_loaded = function(arg){
    return{
        id:'libs_loaded',
        timeout:2500,
        theme: 'dark',
        title: 'LOADING COMPLETTE',
        message:  `Loaded Complet: with ${Object.keys($SLL.resource).length} elements loaded.`,
        position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: 'rgb(0, 255, 184)',
        backgroundColor: '#2d7c0d',
        transitionOut:'fadeOutUp',
        progressBar:false,
    };
};
iziT.helpBox = function(inObject,rightMode){
    let [title,message] = html_helpBox_slot(inObject);
    return{
        id:'helpBox',
        layout: 2,
        icon:'ico-info2',
        transitionIn: 'bounceInDown', // fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
        iconColor: '#000',
        maxWidth: '350px',
        timeout:false,
        theme: 'dark',
        titleColor: '#000',
        title: title,
        messageColor: '#2a465b',
        message: message,
        position: 'topLeft', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        backgroundColor: 'rgba(200, 200, 240, 0.9)',
        balloon: true,
        balloonPos: rightMode && 'right' || 'left',
        close: false,
        progressBar: false,
    };
};
iziT.infoBox = function(inObject){
    let [title,message] = html_infoBox_slot(inObject);
    return{
        id:'infoBox',
        layout: 2,
        transitionIn: 'bounceInDown', // bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight or flipInX.
        transitionOut:	'fadeOut', // fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
        maxWidth: '500px',
        theme: 'dark',
        title: title,
        message: message,
        position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        backgroundColor: 'rgba(38, 38, 38, 0.99)',
        close: false,
        progressBar: false,
        timeout:false,
        icon:false,
    };
};
iziT.libs_saveProgress = function(arg){
    return{
        transitionOut: 'fadeOutUp',
        id:'saveProgress',
        timeout:5000,
        theme: 'dark',
        icon: 'icon-person',
        title: 'SAVE PROGRESS',
        message: `'Please wait' computing data`,
        position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: 'rgb(0, 255, 50)',
        backgroundColor: '#f44242',
    };
};

iziT.dataEditor = function(inObject){
    let message = html_DataEditor2(inObject);
    return{
        title: '',
        message: message,
        id:'dataEditor',
        layout: 2,
        transitionIn: 'flipInX', // bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight or flipInX.
        transitionOut:	'fadeOut', // fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
        messageSize: 14,
        maxWidth: false,
        theme: 'dark',
        position: 'topLeft', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        backgroundColor: 'rgba(38, 38, 38, 0.99)',
        close: false,
        progressBar: false,
        timeout:false,
        icon:false,
        drag: false,
    };
};
iziT.dataEditor_light = function(){
    let message = html_lightEditor_p();
    return{
        title: '',
        message: message,
        id:'dataEditor',
        layout: 2,
        transitionIn: 'flipInX', // bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight or flipInX.
        transitionOut:	'fadeOut', // fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
        messageSize: 14,
        maxWidth: false,
        theme: 'dark',
        position: 'topLeft', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        backgroundColor: 'rgba(38, 38, 38, 0.99)',
        close: false,
        progressBar: false,
        timeout:false,
        icon:false,
        drag: false,
    };
};
iziT.dataEditor_save = function(){
    let message = html_saveEditor();
    return{
        title: '',
        message: message,
        id:'dataEditor',
        layout: 2,
        transitionIn: 'flipInX', // bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight or flipInX.
        transitionOut:	'fadeOut', // fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
        messageSize: 14,
        maxWidth: false,
        theme: 'dark',
        position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        backgroundColor: 'rgba(42, 42, 42, 0.99)',
        close: false,
        progressBar: false,
        timeout:false,
        icon:false,
        drag: false,
    };
};
iziT.notifier_ADD = function(objSprite){
    let [title,message] = notifier_ADD(objSprite);
    return{
        theme: 'dark',
        layout: 2,
        id:'notifier_ADD',
        title: title,
        titleColor: '#000',
        message: message,
        backgroundColor: 'rgba(53, 53, 53, 0.95)',
        icon:'ico-add',
        iconColor: '#000000',
        position: 'topLeft',// bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        transitionIn: 'bounceInDown', // bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight or flipInX.
        maxWidth: '300',
        progressBarColor: '#009b14',
        titleSize: '11',
        messageSize: '10',
        timeout:2500,
    };
};

