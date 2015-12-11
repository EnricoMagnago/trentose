describe("testing Water.getStatus()", function() {
     it("deve ritornare null se < -273", function() {
      expect(Water.getStatus(-274)).toBe(null);
         expect(Water.getStatus(-300)).toBe(null);
      
  }); 
    
    it("deve identificare correttamente lo stato solido", function() {
      expect(Water.getStatus(-273)).toBe("ice");
      expect(Water.getStatus(-100)).toBe("ice");
      expect(Water.getStatus(-50.2)).toBe("ice");
      expect(Water.getStatus(-0.1)).toBe("ice");
      expect(Water.getStatus(0)).toBe("ice");
      expect(Water.getStatus(1)).not.toBe("ice");
  }); 

    it("deve identificare correttamente lo stato liquido", function() {
        var state = "liquid";
        expect(Water.getStatus(0)).not.toBe(state);
        expect(Water.getStatus(10.2)).toBe(state);
        expect(Water.getStatus(50)).not.toBe(state);
        expect(Water.getStatus(99)).not.toBe(state);
        expect(Water.getStatus(100)).not.toBe(state);
  }); 
    it("deve identificare correttamente lo stato aeriforme", function() {
        var state = "vapor";
        expect(Water.getStatus(99)).not.toBe(state);
        expect(Water.getStatus(100)).toBe(state);
        expect(Water.getStatus(120.2)).toBe(state);
        expect(Water.getStatus(1000000000000000)).toBe(state);
  }); 
    
    if("deve lanciare un eccezione se input non valido", function(){
        expect(Water.getStatus()).toThrow();
        expect(Water.getStatus("abc")).toThrow();
    });
 
});
