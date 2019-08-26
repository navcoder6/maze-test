import { Coordinate } from 'src/app/maze-explorer/maze/coordinate';

export namespace Utils {
    export enum MazeExplorerMovement {
        LEFT = 'LEFT',
        RIGHT = 'RIGHT',
        FORWARD = 'FORWARD'
    }

    export enum MazeExplorerDirection {
        EAST = 'EAST',
        WEST = 'WEST',
        NORTH = 'NORTH',
        SOUTH = 'SOUTH'
    }

    export interface IFrontItemInfo {
        item: string,
        location: Coordinate
    }

    export enum MazeContents {
        WALL = 'X',
        START = 'S',
        FINISH = 'F',
        EMPTY_SPACE = ' '
    }
}