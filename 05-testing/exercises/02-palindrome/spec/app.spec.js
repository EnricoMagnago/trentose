describe("testing Palindrome.isWordPalindrome", function() {
    
  it("deve identificare correttamente se una stringa è palindroma", function() { 
      expect(Palindrome.isWordPalindrome("")).toBe(true);
      
      expect(Palindrome.isWordPalindrome("a")).toBe(true);
      expect(Palindrome.isWordPalindrome("D")).toBe(true);
      expect(Palindrome.isWordPalindrome("z")).toBe(true);
      
      expect(Palindrome.isWordPalindrome("aa")).toBe(true);
      expect(Palindrome.isWordPalindrome("SS")).toBe(true);
      expect(Palindrome.isWordPalindrome("kK")).toBe(true);
      expect(Palindrome.isWordPalindrome("Zz")).toBe(true);
      
      expect(Palindrome.isWordPalindrome("ada")).toBe(true);
      expect(Palindrome.isWordPalindrome("Ada")).toBe(true);
      expect(Palindrome.isWordPalindrome("adA")).toBe(true);
      expect(Palindrome.isWordPalindrome("aDa")).toBe(true);      
      
  }); 
    
});

describe("testing Palindrome.isPhrasePalindrome", function() {
    
  it("deve identificare correttamente se una stringa è palindroma", function() { 
      expect(Palindrome.isPhrasePalindrome("")).toBe(true);
      
      expect(Palindrome.isPhrasePalindrome("a")).toBe(true);
      expect(Palindrome.isPhrasePalindrome("D")).toBe(true);
      expect(Palindrome.isPhrasePalindrome("z")).toBe(true);
      
      expect(Palindrome.isPhrasePalindrome("aa")).toBe(true);
      expect(Palindrome.isPhrasePalindrome("SS")).toBe(true);
      expect(Palindrome.isPhrasePalindrome("kK")).toBe(true);
      expect(Palindrome.isPhrasePalindrome("Zz")).toBe(true);
      
      expect(Palindrome.isPhrasePalindrome("ada")).toBe(true);
      expect(Palindrome.isPhrasePalindrome("Ada")).toBe(true);
      expect(Palindrome.isPhrasePalindrome("adA")).toBe(true);
      expect(Palindrome.isPhrasePalindrome"aDa")).toBe(true);      
      
  }); 
    
});

