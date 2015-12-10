/* Water file */

Water = {
    /* Constants */
    STATUS_VAPOR    : "vapor",
    STATUS_LIQUID   : "liquid",
    STATUS_ICE      : "ice",
    
    TEMP_ZERO_ABSOLUTE   : -273,
    TEMP_MELTING_POINT   : 0,
    TEMP_BOILING_POINT   : 100,

    
    /* Checks if the sides a, b, c belong to a valid rectangle */
    getStatus : function(temp){        
        if (temp > Water.TEMP_BOILING_POINT) {
            return Water.STATUS_VAPOR;
        } else if (temp >= Water.TEMP_MELTING_POINT){
            return Water.STATUS_LIQUID;
        } else if (temp >= Water.TEMP_ZERO_ABSOLUTE){
            return Water.STATUS_ICE;
        } else {
            return null;
        }
        
    }
};