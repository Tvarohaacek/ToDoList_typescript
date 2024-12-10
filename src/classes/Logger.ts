export class Singleton {
    private static instance: Singleton;

    
    private MessageLog: string[];
    private constructor(MessageLog: string[]) {
      this.MessageLog = MessageLog;
    };

    

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
          Singleton.instance = new Singleton([]);
        }
        return Singleton.instance;
      }
      
      public logMessage(message: string):void{
        message = "zpráva";
        console.log(message);
        this.MessageLog.push(message);
      }
      public getLogs():void {
        this.MessageLog.forEach(e => {
          console.log(e);
            
        });
    
}}