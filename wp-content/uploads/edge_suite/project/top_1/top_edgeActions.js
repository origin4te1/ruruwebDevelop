
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.$("openingMask").hide();sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_profile2}","mouseout",function(sym,e){sym.stop("profile");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_profile2}","mouseover",function(sym,e){sym.play("profile");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_doorClose}","mouseover",function(sym,e){sym.play("door");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_doorClose}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_blog}","mouseover",function(sym,e){sym.play("blog");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_blog}","mouseout",function(sym,e){sym.stop("blog");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8695,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_contactRange}","mouseover",function(sym,e){sym.play("contact");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_contactRange}","mouseout",function(sym,e){sym.stop("contact");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_doorClose}","click",function(sym,e){window.open("picture","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_blog}","click",function(sym,e){window.open("blog","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'RURU'
(function(symbolName){})("RURU");
//Edge symbol end:'RURU'
})(jQuery,AdobeEdge,"top");