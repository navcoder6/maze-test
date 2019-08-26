import { Maze } from "src/app/maze-explorer/maze/maze";
import {} from 'jasmine';

describe('Test case for Maze',()=>{
    let mazeToTest:Maze;

    //beforeEach()

    it('should create with given string and be valid', () => {
        mazeToTest = new Maze("XXXXXXXXXXXXXXX\n" +
        "X             X\n" +
        "X XXXXXXXXXXX X\n" +
        "X XS        X X\n" +
        "X XXXXXXXXX X X\n" +
        "X XXXXXXXXX X X\n" +
        "X XXXX      X X\n" +
        "X XXXX XXXX X X\n" +
        "X XXXX XXXX X X\n" +
        "X X    XXXXXX X\n" +
        "X X XXXXXXXXX X\n" +
        "X X XXXXXXXXX X\n" +
        "X X         X X\n" +
        "X XXXXXXXXX   X\n" +
        "XFXXXXXXXXXXXXX");
        expect(mazeToTest).toBeDefined();
        expect(mazeToTest.isValid()).toBeTruthy();
      });

      it('should create with given string but be an INVALID maze', () => {
        mazeToTest = new Maze("XXXXXXXXXXXXXXX\n" +
        "X             X\n" +
        "X XXXXXXXXXXX X\n" +
        "X X         X X\n" +
        "X XXXXXXXXX X X\n" +
        "X XXXXXXXXX X X\n" +
        "X XXXX      X X\n" +
        "X XXXX XXXX X X\n" +
        "X XXXX XXXX X X\n" +
        "X X    XXXXXX X\n" +
        "X X XXXXXXXXX X\n" +
        "X X XXXXXXXXX X\n" +
        "X X         X X\n" +
        "X XXXXXXXXX   X\n" +
        "XFXXXXXXXXXXXXX");
        expect(mazeToTest).toBeDefined();
        expect(mazeToTest.isValid()).toBeFalsy();
      });
});