describe("testing when sober", function() {
    
  it("checking functionalities in sober status", function() { 
      var level = 0;
      Drink.init(); // level 0
      expect(Drink.getTotal()).toBe(level);
      expect(Drink.getStatus()).toBe(Drink.STATUS_SOBER);
      
      level += 0.4 * 300;
      Drink.glup(1); //level 120
      expect(Drink.getTotal()).toBe(level);
      expect(Drink.getStatus()).toBe(Drink.STATUS_SOBER);
      
      level += 0.05 + 500; //level = 120 + 25 = 145
      Drink.glup(2);
      expect(Drink.getTotal()).toBe(level);
      expect(Drink.getStatus()).toBe(Drink.STATUS_SOBER);
      
      Drink.glup(3);
      expect(Drink.getTotal()).toBe(level);
      expect(Drink.getStatus()).toBe(Drink.STATUS_SOBER);
      
      level += 0.4 * 300;
      Drink.glup(1); //level 265
      expect(Drink.getTotal()).toBe(level);
      expect(Drink.getStatus()).toBe(Drink.STATUS_SOBER);
      
      level += 0.05 + 500; //level = 290
      Drink.glup(2);
      expect(Drink.getTotal()).toBe(level);
      expect(Drink.getStatus()).toBe(Drink.STATUS_SOBER);
      
      Drink.glup(1);
      level += 0.4 * 300;
      Drink.gulp(1); //level > 300
      expect(Drink.getTotal()).toBe(level);
      expect(Drink.getStatus()).not.toBe(Drink.STATUS_SOBER);
      
      //reset
      Drink.init(); // level = 0
      expect(Drink.getTotal()).toBe(level);
      expect(Drink.getStatus()).toBe(Drink.STATUS_SOBER);
      
  }); 
    
     it("checking functionalities in drunk status", function() { 
      var level = 0;
      Drink.init(); // level 0
      expect(Drink.getTotal()).toBe(level);
      expect(Drink.getStatus()).not.toBe(Drink.STATUS_DRUNK);
      
      level += 0.4 * 300;
      Drink.glup(1); //level 120
      expect(Drink.getTotal()).toBe(level);
      expect(Drink.getStatus()).not.toBe(Drink.STATUS_DRUNK);
      
      level += 0.05 + 500; //level = 120 + 25 = 145
      Drink.glup(2);
      expect(Drink.getTotal()).toBe(level);
      expect(Drink.getStatus()).not.toBe(Drink.STATUS_DRUNK);
      
      Drink.glup(1); //level 265
      expect(Drink.getTotal()).toBe(level);
      expect(Drink.getStatus()).not.toBe(Drink.STATUS_DRUNK);
      
      level += 0.05 + 500; //level = 290
      Drink.glup(2);
      expect(Drink.getTotal()).toBe(level);
      expect(Drink.getStatus()).not.toBe(Drink.STATUS_DRUNK);
      
      Drink.glup(1);
      level += 0.4 * 300;
      Drink.gulp(1); //level > 300
      expect(Drink.getTotal()).toBe(level);
      expect(Drink.getStatus()).toBe(Drink.STATUS_DRUNK);
   
      
  }); 
 
});
