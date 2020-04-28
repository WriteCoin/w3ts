/** @noSelfInFile **/

import { Handle } from "./handle";

declare interface ubersplat extends handle { __ubersplat: never; }

declare function CreateUbersplat(x: number, y: number, name: string, red: number, green: number, blue: number, alpha: number, forcePaused: boolean, noBirthTime: boolean): ubersplat;
declare function DestroyUbersplat(whichSplat: ubersplat): void;
declare function ResetUbersplat(whichSplat: ubersplat): void;
declare function FinishUbersplat(whichSplat: ubersplat): void;
declare function ShowUbersplat(whichSplat: ubersplat, flag: boolean): void;
declare function SetUbersplatRender(whichSplat: ubersplat, flag: boolean): void;
declare function SetUbersplatRenderAlways(whichSplat: ubersplat, flag: boolean): void;

export class Ubersplat extends Handle<ubersplat> {

  constructor(x: number, y: number, name: string, red: number, green: number, blue: number, alpha: number, forcePaused: boolean, noBirthTime: boolean) {
    if (Handle.initFromHandle()) {
      super();
    } else {
      super(CreateUbersplat(x, y, name, red, green, blue, alpha, forcePaused, noBirthTime));
    }
  }

  public destroy() {
    DestroyUbersplat(this.handle);
  }

  public finish() {
    FinishUbersplat(this.handle);
  }

  public render(flag: boolean, always = false) {
    if (always) {
      SetUbersplatRenderAlways(this.handle, flag);
    } else {
      SetUbersplatRender(this.handle, flag);
    }
  }

  public reset() {
    ResetUbersplat(this.handle);
  }

  public show(flag: boolean) {
    ShowUbersplat(this.handle, flag);
  }

  public static fromHandle(handle: ubersplat): Ubersplat {
    return this.getObject(handle);
  }

}
