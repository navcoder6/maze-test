import { Coordinate } from "src/app/maze-explorer/maze/coordinate";

export interface IMaze {

    // getStartPoint():void;
    // getFinishPoint():void;
    getEmptySpaceCount(): number;
    getWallsCount(): number;
    getValueAt(locationToSearch: Coordinate): string;
    isValid(): boolean;
}