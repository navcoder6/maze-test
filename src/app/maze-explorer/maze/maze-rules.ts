import { IRules, MazeBaseRules } from "src/app/maze-explorer/maze/rule-base";
import { Utils } from "src/app/maze-explorer/shared/utils";

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
