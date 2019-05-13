'use strict';

module.exports = { 
  printLoginMsg: printLoginMsg,
  createNewVar: createNewVar,
  rewriteUrl: rewriteUrl,
  checkGlobal: checkGlobal,

  setJSONBody: setJSONBody
};

function setJSONBody_idcollab_null(requestParams, context, ee, done) { 
    console.log('# Create Demande Conge (setJSONBody)');
    var setDemandeConge = {idcollab: 0, iddemandeconge: null, datedebut: new Date(), datefin: null, motifrefus: "", debutmatin: null, duree: null, finaprem: null, typedemandeconge: null, statusconge: 'attCds'};
    
    //setDemandeConge.idcollab = 6;
    setDemandeConge.datedebut = JSON.stringify(new Date());
    setDemandeConge.datefin = JSON.stringify(new Date());
    setDemandeConge.motifrefus = "Motif refus indeterminé";
    setDemandeConge.debutmatin = true;
    setDemandeConge.duree = 1;
    setDemandeConge.finaprem = true;
    setDemandeConge.typedemandeconge = "RTT"
    setDemandeConge.statusconge = 'attCds';
    setDemandeConge.iddemandeconge = 13;

    requestParams.json =  Object.assign(requestParams.json, setDemandeConge); //Remplace dans requestParams.json, les value ayant la même key que dans setDemandeConge

    //console.log("REQUEST PARAMS: ", requestParams,  "\n end");
  return done();
}


function printLoginMsg(req, ctx, events, done) {
  console.log('# Login');
  return done();
}


// Ref: https://github.com/shoreditch-ops/artillery/issues/184
// See hello.json - testing that scenario-level beforeRequest is handled
// correctly.
function doNothing(req, ctx, events, done) {
  return done();
}

// this function is called in a loop
function createNewVar(ctx, events, done) {
  ctx.vars.newVar = ctx.vars.$loopCount;
  console.log(`createNewVar: ${ctx.vars.$loopCount}`);
  return done();
}

function rewriteUrl(req, ctx, events, done) {
  req.url = '/';
  return done();
}

function checkGlobal(ctx, events, done) {
  if (!global.artillery) {
    return done(new Error('global artillery object not found'));
  } else {
    console.log(`[${process.pid}] artillery.version: ${artillery.version}`);
    return done();
  }
};