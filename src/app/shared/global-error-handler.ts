import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LoggingService } from './logging.service';
import { NotificationService } from './notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) { }

    handleError(error: Error) {

        const logger = this.injector.get(LoggingService);

        const notifier = this.injector.get(NotificationService);

        const message = error.message ? error.message : error.toString();

        // Display a  message to user in fancy way
        notifier.showError('Sorry your maze has to be destroyed. Please re-create it.');

        // Log the error using logging service
        logger.logError(message, error.stack);
    }
}