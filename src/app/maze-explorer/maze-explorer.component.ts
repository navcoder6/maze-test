import { Component, OnInit } from '@angular/core';
import { Maze } from 'src/app/maze-explorer/maze/maze';
import { MazeExplorer } from 'src/app/maze-explorer/explorer/famous-maze-explorer';

@Component({
  selector: 'app-maze-explorer',
  templateUrl: './maze-explorer.component.html',
  styleUrls: ['./maze-explorer.component.css']
})
export class MazeExplorerComponent implements OnInit {

  mazeToTest:Maze;
  constructor() {
  }

  ngOnInit() {
  }

  validateMaze(mazeInput) {
    this.mazeToTest = new Maze(mazeInput);

    if(this.mazeToTest.isValid()){
      const mazeExplorerToTest = new MazeExplorer();
      mazeExplorerToTest.setMaze(this.mazeToTest);
    }
  }

}
