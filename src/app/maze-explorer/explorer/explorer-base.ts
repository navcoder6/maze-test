export interface IExplorer {
    setMaze(mazeToExplore);
    moveForward();
    turnLeft();
    turnRight();
    getInFrontItem(directionToLook);
    getAllMovementOptions();
    getTraversedRecords();
    getRouteDetails();
}