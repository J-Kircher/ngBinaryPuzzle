export class Logger {

  static log(showLog: boolean = false, msg: string) {
    if (showLog) {
      console.log(msg);
    }
  }
}
