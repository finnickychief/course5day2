(function() {
  'use strict';
  describe('Javascript Exercises', function() {
    describe('vowels', function() {
      it('should expect vowels(`aeiou`) to be 5', function() {
        expect(vowels('aeiou')).to.equal(5);
      });
      it('should expect vowels(`AEIOU`) to be 5', function() {
        expect(vowels(`AEIOU`)).to.equal(5);
      });
      it('should expect vowels(`abcdefghijklmnopqrstuvwxyz`) to be 5', function() {
        expect(vowels(`abcdefghijklmnopqrstuvwxyz`)).to.equal(5);
      });
      it('should expect vowels(`bcdfghjkl`) to be 0', function() {
        expect(vowels(`bcdfghjkl`)).to.equal(0);
      });
      it('should expect vowels(`aabbccddee`) to be 4', function() {
        expect(vowels(`aabbccddee`)).to.equal(4);
      });
    });

    describe('capitalize', function() {
      it('should expect capitalize(`hi there, how is it going?`) to be `Hi There, How Is It Going?`', function() {
        expect(capitalize(`hi there, how is it going?`)).to.equal(
          `Hi There, How Is It Going?`
        );
      });
      it('should expect capitalize(`i love breakfast at bill millers bbq`) to be `I Love Breakfast At Bill Miller Bbq`', function() {
        expect(capitalize(`i love breakfast at bill millers bbq`)).to.equal(
          `I Love Breakfast At Bill Miller Bbq`
        );
      });
      it('should expect capitalize(`this is a Sentence.`) to be `This Is A Sentence.`', function() {
        expect(capitalize(`this is a Sentence.`)).to.equal(
          `This Is A Sentence.`
        );
      });
    });
    describe('anagrams', function() {
      it('should expect anagrams(`hello`, `llohe`) to be true', function() {
        expect(anagrams(`hello`, `llohe`)).to.equal(true);
      });
      it('should expect anagrams(`Whoa! Hi!`, `Hi! Whoa!`) to be true', function() {
        expect(anagrams(`Whoa! Hi!`, `Hi! Whoa!`)).to.equal(true);
      });
      it('should expect anagrams(`One One`, `Two two two`) to be false', function() {
        expect(anagrams(`One One`, `Two two two`)).to.equal(false);
      });
      it('should expect anagrams(`One one`, `One one c`) to be false', function() {
        expect(anagrams(`One one`, `One one c`)).to.equal(false);
      });
      it('should expect anagrams(`A tree, a life, a bench`, `A tree, a fence, a yard`) to be false', function() {
        expect(
          anagrams(`A tree, a life, a bench`, `A tree, a fence, a yard`)
        ).to.equal(false);
      });
    });
    describe('chunk', function() {
      it('should expect chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2) to be [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]', function() {
        expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).to.deep.equal([
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8],
          [9, 10]
        ]);
      });
      it('should expect chunk([1,2,3], 1) to be [[1], [2], [3]]', function() {
        expect(chunk([1, 2, 3], 1)).to.deep.equal([[1], [2], [3]]);
      });
      it('should expect chunk([1,2,3,4,5], 3) to be [[1,2,3], [4,5]]', function() {
        expect(chunk([1, 2, 3, 4, 5], 3)).to.deep.equal([[1, 2, 3], [4, 5]]);
      });
      it('should expect chunk([1,2,3,4,5,6,7,8,9,10,11,12,13], 5) to be [[1,2,3,4,5], [6,7,8,9,10], [11,12,13]]', function() {
        expect(
          chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
        ).to.deep.equal([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
      });
    });
    describe('palindrome', function() {
      it('should expect palindrome(`aba`) to be true', function() {
        expect(palindrome(`aba`)).to.equal(true);
      });
      it('should expect palindrome(` aba`) to be false', function() {
        expect(palindrome(` aba`)).to.equal(false);
      });
      it('should expect palindrome(`aba `) to be false', function() {
        expect(palindrome(`aba `)).to.equal(false);
      });
      it('should expect palindrome(`greetings`) to be false', function() {
        expect(palindrome(`greetings`)).to.equal(false);
      });
      it('should expect palindrome(`1000000001`) to be true', function() {
        expect(palindrome(`1000000001`)).to.equal(true);
      });
      it('should expect palindrome(`pennep`) to be true', function() {
        expect(palindrome(`pennep`)).to.equal(true);
      });
    });
    describe('reverseInt', function() {
      it('should expect reverseInt(5) to be 5', function() {
        expect(reverseInt(5)).to.equal(5);
      });
      it('should expect reverseInt(10) to be 1', function() {
        expect(reverseInt(10)).to.equal(1);
      });
      it('should expect reverseInt(98) to be 89', function() {
        expect(reverseInt(98)).to.equal(89);
      });
      it('should expect reverseInt(52) to be 25', function() {
        expect(reverseInt(52)).to.equal(25);
      });
      it('should expect reverseInt(78) to be 87', function() {
        expect(reverseInt(78)).to.equal(87);
      });
      it('should expect reverseInt(12) to be 21', function() {
        expect(reverseInt(12)).to.equal(21);
      });
      it('should expect reverseInt(11) to be 11', function() {
        expect(reverseInt(17)).to.equal(71);
      });
      it('should expect reverseInt(700) to be 7', function() {
        expect(reverseInt(700)).to.equal(7);
      });
    });
  });
})();
