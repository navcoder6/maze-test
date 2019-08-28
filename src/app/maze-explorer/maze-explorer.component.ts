import { Component, OnInit, OnDestroy } from '@angular/core';
import { Maze } from 'src/app/maze-explorer/maze/maze';
import { MazeExplorer } from 'src/app/maze-explorer/explorer/famous-maze-explorer';

@Component({
  selector: 'app-maze-explorer',
  templateUrl: './maze-explorer.component.html',
  styleUrls: ['./maze-explorer.component.css']
})
export class MazeExplorerComponent implements OnInit, OnDestroy {

  mazeToExplore: Maze;
  mazeExplorer: MazeExplorer;
  mazeInput:string;
  isExploring:boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  validateMaze() {
    this.mazeToExplore = new Maze(this.mazeInput);

    if (this.mazeToExplore.isValid()) {
      this.mazeExplorer = new MazeExplorer();
      this.mazeExplorer.setMaze(this.mazeToExplore);
    }
  }

  reset(){
    this.mazeToExplore = null;
    this.mazeExplorer = null;
    this.mazeInput = null;
    this.isExploring = false;
  }

  exploreMaze() {
    this.isExploring = true;
  }

  turnLeft(){
    this.mazeExplorer.turnLeft();
  }

  moveForward(){
    this.mazeExplorer.moveForward();
  }

  turnRight(){
    this.mazeExplorer.turnRight();
  }

  ngOnDestroy() {
    this.mazeToExplore.dispose();
    this.mazeExplorer.dispose();
  }

}
