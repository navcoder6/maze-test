import { Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class NotificationService {
    
    constructor() { }

    showError(message: string): void {
        // A more fancy way to display message to user can be used here for now using simple alert
        alert(message);
    }
}