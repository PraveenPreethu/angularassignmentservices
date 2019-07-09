import { LoggingService } from './Logging.Service';
import { Injectable } from '@angular/core';

@Injectable()
export class userService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private LoggingService:LoggingService) {
    
    }

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.LoggingService.LogoMoveCount();
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.LoggingService.LogoMoveCount();
    }
}