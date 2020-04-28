/** @noSelfInFile **/

import { Handle } from "./handle";
import { MapPlayer } from "./player";

declare interface agent extends handle { __agent: never; }
declare interface dialog extends agent { __dialog: never; }
declare interface button extends agent { __button: never; }
declare interface player extends agent { __player: never; }

declare function DialogCreate(): dialog;
declare function DialogDestroy(whichDialog: dialog): void;
declare function DialogClear(whichDialog: dialog): void;
declare function DialogSetMessage(whichDialog: dialog, messageText: string): void;
declare function DialogAddButton(whichDialog: dialog, buttonText: string, hotkey: number): button;
declare function DialogAddQuitButton(whichDialog: dialog, doScoreScreen: boolean, buttonText: string, hotkey: number): button;
declare function DialogDisplay(whichPlayer: player, whichDialog: dialog, flag: boolean): void;

export class DialogButton extends Handle<button> {

  constructor(whichDialog: Dialog, text: string, hotkey: number = 0, quit: boolean = false, score: boolean = false) {
    if (Handle.initFromHandle()) {
      super();
    } else if (!quit) {
      super(DialogAddButton(whichDialog.handle, text, hotkey));
    } else {
      super(DialogAddQuitButton(whichDialog.handle, score, text, hotkey));
    }
  }

  public static fromHandle(handle: button): DialogButton {
    return this.getObject(handle);
  }
}

export class Dialog extends Handle<dialog> {

  constructor() {
    super(Handle.initFromHandle() ? undefined : DialogCreate());
  }

  public addButton(text: string, hotkey: number = 0, quit: boolean = false, score: boolean = false) {
    return new DialogButton(this, text, hotkey, quit, score);
  }

  public clear() {
    DialogClear(this.handle);
  }

  public destroy() {
    DialogDestroy(this.handle);
  }

  public display(whichPlayer: MapPlayer, flag: boolean) {
    DialogDisplay(whichPlayer.handle, this.handle, flag);
  }

  public setMessage(whichMessage: string) {
    DialogSetMessage(this.handle, whichMessage);
  }

  public static fromHandle(handle: dialog): Dialog {
    return this.getObject(handle);
  }
}
