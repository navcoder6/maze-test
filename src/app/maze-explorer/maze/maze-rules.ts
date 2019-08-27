import { IRules, MazeBaseRules } from "src/app/maze-explorer/maze/rule-base";
import { Utils } from "src/app/maze-explorer/shared/utils";

import * as _ from 'lodash';

/**
 * StartMustExistRule class for validating Start character rule
 */
export class StartMustExistRule extends MazeBaseRules {

    /**
     * Constructor to create maze StartMustExistRule
     * @param structureToVerify string input for the maze
     */
    constructor(structureToVerify) {
        super(structureToVerify)
    }

    /**
     * Method to verify if the rule is followed or not
     */
    public isFullfilled() {
        return this.structureToVerify.split(Utils.MazeContents.START).length === 2;
    }
}

export class FinishMustExistRule extends MazeBaseRules {

    /**
     * Constructor to create maze FinishMustExistRule
     * @param structureToVerify string input for the maze
     */
    constructor(structureToVerify) {
        super(structureToVerify)
    }
    
    /**
     * Method to verify if the rule is followed or not
     */
    public isFullfilled() {
        return this.structureToVerify.split(Utils.MazeContents.FINISH).length === 2;
    }
}

export class AllowedCharacterRule extends MazeBaseRules {
    
        // private allowedCharacterExpression = /[^ XSF]/;
        private allowedCharacterExpression: RegExp;

        /**
         * Constructor to create maze AllowedCharacterRule
         * @param structureToVerify string input for the maze
         */
        constructor(structureToVerify) {
            super(structureToVerify)
            const allowedCharacter = _.values(Utils.MazeContents).join("");
            this.allowedCharacterExpression = new RegExp('[^'+allowedCharacter+'\\n]');
        }
        
        /**
         * Method to verify if the rule is followed or not
         */
        public isFullfilled() {
            return this.structureToVerify.match(this.allowedCharacterExpression) === null;
        }
}