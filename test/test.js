
let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

    describe("#palindrome", function() {

        it("should return false for a non-palindrome", function() {
            let nonPlaindrome = new Phrase("apple");
            assert(!nonPlaindrome.palindrome());
        });

        it("should return true for a plaindrome", function() {
            let plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome());
        });

        it("should return true for a mixed-case palindrome", function() {
            let mixedCase = new Phrase("RaceCar");
            assert(mixedCase.palindrome());
        });

        it("should return true for a palindrome with punctuation", function() {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert(punctuatedPalindrome.palindrome());
        });

        describe("#letters", function() {
            it("should return only letters", function() {
                let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
                assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
            });
        });
    });

});