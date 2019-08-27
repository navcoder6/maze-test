import { IExplorer } from "src/app/maze-explorer/explorer/explorer-base";
import { Maze } from "src/app/maze-explorer/maze/maze";
import { Coordinate } from "src/app/maze-explorer/maze/coordinate";

import * as _ from 'lodash';
import { Utils } from "src/app/maze-explorer/shared/utils";

/**
 * Class for MazeExplorer that can explore a Maze
 */
export class MazeExplorer implements IExplorer {
    public mazeToExplore:Maze;
    public startPosition: Coordinate;
    public currentLocation: Coordinate;
    public currentDirection: Utils.MazeExplorerDirection;
    private _routeDetail: Utils.MazeExplorerMovement[] = [];
    private _traversedTrail: string[] = [];

    /**
     * Constructor for Maze Explorer
     */
    constructor() {
    }

    /**
     * Method to dispose variables that might force memory leak
     */
    dispose() {
        this._routeDetail =[];
    }

    /**
     * Method to reset last used Maze data
     */
    reset(){
        this._routeDetail = [];
        this._traversedTrail = [];
    }

    /**
     * Method to set the maze which needs to be explored
     * @param maze maze to explore
     */
    public setMaze(maze:Maze){
        this.mazeToExplore = maze;
        this.startPosition = this.mazeToExplore.startPointLocation;
        this.currentLocation = this.startPosition;
        this.currentDirection = Utils.MazeExplorerDirection.EAST;
        this._traversedTrail.push(this.getCurrentPositionItem());
    }

    /**
     * Method to move forward depending upon current direction
     */
    public moveForward() {
        // Before moving forward chk if wall is not present
        const forwardItemInfo = this.getInFrontItemBasedOnDirection(this.currentDirection);
        if (forwardItemInfo.item !== Utils.MazeContents.WALL) {
            this.currentLocation = forwardItemInfo.location;

            // Log the  movement and the item travered by explorer
            this._routeDetail.push(Utils.MazeExplorerMovement.FORWARD);
            this._traversedTrail.push(this.getCurrentPositionItem());
        }
    }

    /**
     * Method to get the understandable format for route taken so far
     */
    public getRouteDetails() {
        // Can apply any formatting PO wants
        return this._routeDetail;
    }

    /**
     * Method to get the characters traversed so far
     */
    public getTraversedRecords() {
        // Can apply any formatting PO wants
        return this._traversedTrail;
    }

    /**
     * Method to change direction of explorer to Right
     * Actual direction will vary depending upon current direction
     */
    public turnLeft() {
        switch (this.currentDirection) {
            case Utils.MazeExplorerDirection.EAST:
                this.currentDirection = Utils.MazeExplorerDirection.NORTH;
                break;
            case Utils.MazeExplorerDirection.NORTH:
                this.currentDirection = Utils.MazeExplorerDirection.WEST;
                break;
            case Utils.MazeExplorerDirection.WEST:
                this.currentDirection = Utils.MazeExplorerDirection.SOUTH;
                break;
            case Utils.MazeExplorerDirection.SOUTH:
                this.currentDirection = Utils.MazeExplorerDirection.EAST;
                break;
        }
        this._routeDetail.push(Utils.MazeExplorerMovement.LEFT);
    }

    /**
     * Method to change direction of explorer to Right
     * Actual direction will vary depending upon current direction
     */
    public turnRight() {
        switch (this.currentDirection) {
            case Utils.MazeExplorerDirection.EAST:
                this.currentDirection = Utils.MazeExplorerDirection.SOUTH;
                break;
            case Utils.MazeExplorerDirection.SOUTH:
                this.currentDirection = Utils.MazeExplorerDirection.WEST;
                break;
            case Utils.MazeExplorerDirection.WEST:
                this.currentDirection = Utils.MazeExplorerDirection.NORTH;
                break;
            case Utils.MazeExplorerDirection.NORTH:
                this.currentDirection = Utils.MazeExplorerDirection.EAST;
                break;
        }
        this._routeDetail.push(Utils.MazeExplorerMovement.RIGHT);
    }

    /**
     * Method to get the item in front depending upon current direction
     */
    public getInFrontItem() {
        const item = this.getInFrontItemBasedOnDirection(this.currentDirection).item;
        return _.findKey(Utils.MazeContents,(content)=>content === item);
    }

    /**
     * Method to get the item in front depending upon the direction asked
     */
    private getInFrontItemBasedOnDirection(directionToLook: Utils.MazeExplorerDirection): Utils.IFrontItemInfo {
        let frontPosition: Coordinate;
        let frontItem: string;

        frontPosition = _.clone(this.currentLocation);

        switch (directionToLook) {
            case Utils.MazeExplorerDirection.EAST:

                frontPosition.setY(frontPosition.getY() + 1)
                frontItem = this.mazeToExplore.getValueAt(frontPosition);

                break;
            case Utils.MazeExplorerDirection.SOUTH:

                frontPosition.setX(frontPosition.getX() + 1)
                frontItem = this.mazeToExplore.getValueAt(frontPosition);

                break;
            case Utils.MazeExplorerDirection.WEST:

                frontPosition.setY(frontPosition.getY() - 1)
                frontItem = this.mazeToExplore.getValueAt(frontPosition);

                break;
            case Utils.MazeExplorerDirection.NORTH:

                frontPosition.setX(frontPosition.getX() - 1)
                frontItem = this.mazeToExplore.getValueAt(frontPosition);

                break;
        }

        return {
            item: frontItem,
            location: frontPosition
        };
    }

    /**
     * Method to get the item at current location of explorer
     */
    private getCurrentPositionItem() {
        return this.mazeToExplore.getValueAt(this.currentLocation);
    }

    /**
     * Method to get the possible movement options based on current location of explorer
     */
    public getAllMovementOptions() {
        let possibleOptions: Utils.MazeExplorerDirection[] = [];
        _.forIn(Utils.MazeExplorerDirection, (direction) => {
            const itemInFront = this.getInFrontItemBasedOnDirection(direction).item;
            if ( itemInFront && (itemInFront!== Utils.MazeContents.WALL)) {
                possibleOptions.push(direction);
            }
        });

        return possibleOptions;
    }
}
