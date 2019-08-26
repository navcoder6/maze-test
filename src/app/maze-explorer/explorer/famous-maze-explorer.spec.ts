import { Maze } from "src/app/maze-explorer/maze/maze";
import {} from 'jasmine';
import { MazeExplorer } from "src/app/maze-explorer/explorer/famous-maze-explorer";

describe('Test case for Famous Maze Explorer',()=>{
    let mazeToTest:Maze;
    let mazeExplorer:MazeExplorer;

    beforeEach(()=>{
        mazeExplorer = new MazeExplorer();
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
    })

    it('should create explorer with no starting location', () => {
        expect(mazeToTest).toBeDefined();
        expect(mazeExplorer).toBeDefined();
        expect(mazeExplorer.startPosition).toBeUndefined();
      });

      it('should create explorer with starting location after maze is set', () => {
        expect(mazeToTest).toBeDefined();
        expect(mazeExplorer).toBeDefined();
        expect(mazeExplorer.startPosition).toBeUndefined();

        mazeExplorer.setMaze(mazeToTest);

        expect(mazeExplorer.startPosition).toBeDefined();
        expect(mazeExplorer.startPosition.getX()).toEqual(3);
        expect(mazeExplorer.startPosition.getY()).toEqual(3);
      });
});