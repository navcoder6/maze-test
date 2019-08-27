import { IMaze } from "src/app/maze-explorer/maze/maze-base";
import { MazeBaseRules } from "src/app/maze-explorer/maze/rule-base";

import * as _ from 'lodash';
import { Coordinate } from "src/app/maze-explorer/maze/coordinate";
import { StartMustExistRule, FinishMustExistRule, AllowedCharacterRule } from "src/app/maze-explorer/maze/maze-rules";
import { Utils } from "src/app/maze-explorer/shared/utils";

/**
 * Maze class that implements IMaze
 */
export class Maze implements IMaze {
    private _mazeAsString: string = '';
    private rules: MazeBaseRules[] = [];
    private _mazeAsArray: string[][] = [];

    public startPointLocation: Coordinate;
    public exitPointLocation: Coordinate;

    /**
     * Constructor for Maze class
     * @param input string input required to create the maze
     */
    constructor(input: string) {
        this._mazeAsString = input.toUpperCase();

        this.addRules();

        this.fillAsArray();

    }

    /**
     * Method to dispose variables that might force memory leak
     */
    dispose() {
        this.rules = [];
        this._mazeAsArray = [];
    }

    /**
     * Method to add constraints for maze to be valid
     */
    private addRules() {
        const startRule = new StartMustExistRule(this._mazeAsString);
        this.rules.push(startRule);

        const finishRule = new FinishMustExistRule(this._mazeAsString);
        this.rules.push(finishRule);

        const allowedCharacterRule = new AllowedCharacterRule(this._mazeAsString);
        this.rules.push(allowedCharacterRule);
    }

    /**
     * Method to transform maze string to 2D array
     */
    private fillAsArray() {
        const rows = this._mazeAsString.split('\n');

        let rowIndex = 0;
        _.forEach(rows, (row) => {
            const startIndex = row.indexOf(Utils.MazeContents.START),
                exitIndex = row.indexOf(Utils.MazeContents.FINISH);
            if (startIndex !== -1) {
                this.startPointLocation = new Coordinate(rowIndex, startIndex);
            }
            if (exitIndex !== -1) {
                this.exitPointLocation = new Coordinate(rowIndex, exitIndex);
            }
            this._mazeAsArray[rowIndex] = row.split('');
            rowIndex++;
        })
    }

    /**
     * Private method to get desired character count
     * @param charToFind character to search
     */
    private getCharacterCount(charToFind: string): number {
        // return this._mazeAsString.split('').filter(char=>char===charToFind).length;
        return this._mazeAsString.split(charToFind).length - 1;
    }

    /**
     * Method to get empty space count in maze
     */
    public getEmptySpaceCount() {
        return this.getCharacterCount(Utils.MazeContents.EMPTY_SPACE);
    }

    /**
     * Method to get value at given coordinate/point
     * @param locationToSearch coordinate point to look for
     */
    public getValueAt(locationToSearch: Coordinate): string {
        try {
            return this._mazeAsArray[locationToSearch.getX()][locationToSearch.getY()];
        } catch (e) {
            return undefined;
        }
    }

    /**
     * Method to get total walls count in the maze
     */
    public getWallsCount() {
        return this.getCharacterCount(Utils.MazeContents.WALL);
    }

    /**
     * Method to find if maze is valid or not
     */
    public isValid() {
        let allRulesFullfilled = true;
        _.forEach(this.rules, (rule) => {
            allRulesFullfilled = rule.isFullfilled();
            return allRulesFullfilled;
        });
        return allRulesFullfilled;
    }
}
