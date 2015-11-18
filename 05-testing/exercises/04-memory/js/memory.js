/* Memory main file */

var Memory = {
    _elems : null,
    _pos : -1,
     
    start : function (elems){
        this._elems = elems;
        this._pos = 0;
    },
    
    playit : function(elem) {        
           
        if (!this._elems || this._elems.indexOf(elem)<0){
          return null;
        }
      
        var ok = this._elems[this._pos++] == elem;            
        if (!ok){
          this._elems = null;
        }
        return ok;
    }
     
};