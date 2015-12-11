describe("Water", function() {

  
  it("should properly identify the water state", function() { 
      var status = Water.STATUS_LIQUID;
      
      expect(Water.getStatus(20)).toBe(status);
      expect(Water.getStatus(0)).toBe(status);
      expect(Water.getStatus(100)).toBe(status);
      
  }); 
  
  it("should properly identify the ice state", function() { 
      var status = Water.STATUS_ICE;
      
      expect(Water.getStatus(-10)).toBe(status);
      expect(Water.getStatus(-1)).toBe(status);
      expect(Water.getStatus(-273)).toBe(status);
      
  });
  
  it("should properly identify the vapor state", function() { 
      var status = Water.STATUS_VAPOR;
      
      expect(Water.getStatus(101)).toBe(status);
      expect(Water.getStatus(120)).toBe(status);
      expect(Water.getStatus(100000000)).toBe(status);

  });  
  
  it("should properly handle invalid temperatures", function() { 
      expect(Water.getStatus(-274)).toBe(null);
      expect(Water.getStatus(-10000)).toBe(null);
      
  });    
 
});
