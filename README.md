# BpMazeTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## About App
Maze Test

This coding example will form the basis of your interview with BP (should you progress), you should be ready to explain any and all of the choices you have made when writing the code.
There is no stated time limit but we would not envisage it would take longer than a couple of hours.
The code must be representative of what you would produce 'on the job', by that we mean it must be clear, maintainable bug free and efficient.
The zipped project provided uses maven; you should feel free to use any other tools you are more comfortable with.  
There are 2 classes in it and you should feel free to change these in any way you see fit, including deleting them and starting again.

The test is based on exploring any arbitrary maze (one is provided).

User Story 1

As a world famous explorer of Mazes I would like a maze to exist
So that I can explore it

Acceptance Criteria

* A Maze (as defined in ExampleMaze.txt consists of walls 'X', Empty spaces ' ', one and only one Start point 'S' and one and only one exit 'F'
* After a maze has been created the number of walls and empty spaces should be available to me
* After a maze has been created I should be able to put in a coordinate and know what exists at that point

User Story 2

As a world famous explorer of Mazes I would like to exist in a maze and be able to navigate it so that I can explore it

Acceptance Criteria

* Given a maze the explorer should be able to drop in to the Start point
* An explorer on a maze must be able to:
    Move forward
    Turn left and right
    Understand what is in front of them
    Understand all movement options from their given location
    Have a record of where they have been
* An explorer must be able to traverse and exit a maze, and on exit they must be able to state the route they took in an understandable fashion

