import { MazeExplorerModule } from './maze-explorer.module';

describe('MazeExplorerModule', () => {
  let mazeExplorerModule: MazeExplorerModule;

  beforeEach(() => {
    mazeExplorerModule = new MazeExplorerModule();
  });

  it('should create an instance', () => {
    expect(mazeExplorerModule).toBeTruthy();
  });
});
