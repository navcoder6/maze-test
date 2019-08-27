import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggingService {
    logError(message: string, stack: string) {
        // Can use an http service to log errors to a centralized server
        console.error('Maze Test Error==> ' + message);
    }

    logInfo(message: string, stack: string) {
        // Can use an http service to log execution info to a centralized server for debugging
        console.log('Maze Test Info==> ' + message);
    }
}