/** @noSelfInFile **/

import { Handle } from "./handle";
import { Timer } from "./timer";

declare interface agent extends handle { __agent: never; }
declare interface timer extends agent { __timer: never; }
declare interface timerdialog extends agent { __timerdialog: never; }

declare function CreateTimerDialog(t: timer): timerdialog;
declare function DestroyTimerDialog(whichDialog: timerdialog): void;
declare function TimerDialogSetTitle(whichDialog: timerdialog, title: string): void;
declare function TimerDialogSetTitleColor(whichDialog: timerdialog, red: number, green: number, blue: number, alpha: number): void;
declare function TimerDialogSetTimeColor(whichDialog: timerdialog, red: number, green: number, blue: number, alpha: number): void;
declare function TimerDialogSetSpeed(whichDialog: timerdialog, speedMultFactor: number): void;
declare function TimerDialogDisplay(whichDialog: timerdialog, display: boolean): void;
declare function IsTimerDialogDisplayed(whichDialog: timerdialog): boolean;
declare function TimerDialogSetRealTimeRemaining(whichDialog: timerdialog, timeRemaining: number): void;


export class TimerDialog extends Handle<timerdialog> {

  constructor(t: Timer) {
    if (Handle.initFromHandle()) {
      super();
    } else {
      super(CreateTimerDialog(t.handle));
    }
  }

  public get display() {
    return IsTimerDialogDisplayed(this.handle);
  }

  public set display(display: boolean) {
    TimerDialogDisplay(this.handle, display);
  }

  public destroy() {
    DestroyTimerDialog(this.handle);
  }

  public setSpeed(speedMultFactor: number) {
    TimerDialogSetSpeed(this.handle, speedMultFactor);
  }

  public setTimeRemaining(value: number) {
    TimerDialogSetRealTimeRemaining(this.handle, value);
  }

  public setTitle(title: string) {
    TimerDialogSetTitle(this.handle, title);
  }

  public static fromHandle(handle: timerdialog): TimerDialog {
    return this.getObject(handle);
  }

}
