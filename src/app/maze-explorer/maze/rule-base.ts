/**
 * Interface to be implmented by all rules
 */
export interface IRules {
    isFullfilled(): boolean;
}

/**
 * Base class for Maze Rules
 */
export class MazeBaseRules implements IRules {

    /**
     * Constructor to create maze base rule
     * @param structureToVerify string input for the maze
     */
    constructor(protected structureToVerify: string) {

    }

    /**
     * Method to verify if the rule is followed or not
     */
    public isFullfilled() {
        return true;
    }
}