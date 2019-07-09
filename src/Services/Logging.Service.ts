export class LoggingService{
    moveCount:number = 0;

    LogoMoveCount(){
        console.log(this.moveCount++);
    }
}