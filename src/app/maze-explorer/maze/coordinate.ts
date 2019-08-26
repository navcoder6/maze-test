/**
 * Class for 2D Coordinate system
 * Can be extended
 */
export class Coordinate {
    constructor(private _x: number, private _y: number) {

    }

    public getX() {
        return this._x;
    }

    public getY() {
        return this._y;
    }

    public setY(yValue: number) {
        this._y = yValue;
    }

    public setX(xValue: number) {
        this._x = xValue;
    }
}