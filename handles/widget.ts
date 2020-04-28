/** @noSelfInFile **/

import { Handle } from "./handle";

declare interface agent extends handle { __agent: never; }
declare interface widget extends agent { __widget: never; }

declare function GetWidgetLife(whichWidget: widget): number;
declare function SetWidgetLife(whichWidget: widget, newLife: number): void;
declare function GetWidgetX(whichWidget: widget): number;
declare function GetWidgetY(whichWidget: widget): number;
declare function GetTriggerWidget(): widget;

export class Widget extends Handle<widget> {

  public get life() {
    return GetWidgetLife(this.handle);
  }

  public set life(value: number) {
    SetWidgetLife(this.handle, value);
  }

  public get x() {
    return GetWidgetX(this.handle);
  }

  public get y() {
    return GetWidgetY(this.handle);
  }

  public static fromEvent() {
    return this.fromHandle(GetTriggerWidget());
  }

  public static fromHandle(handle: widget): Widget {
    return this.getObject(handle);
  }

}
