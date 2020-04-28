/** @noSelfInFile **/

import { Handle } from "./handle";
import { Point } from "./point";
import { Rectangle } from "./rect";
import { Unit } from "./unit";

declare interface agent extends handle { __agent: never; }
declare interface region extends agent { __region: never; }
declare interface rect extends agent { __rect: never; }
declare interface location extends agent { __location: never; }
declare interface widget extends agent { __widget: never; }
declare interface unit extends widget { __unit: never; }

declare function CreateRegion(): region;
declare function RemoveRegion(whichRegion: region): void;
declare function RegionAddRect(whichRegion: region, r: rect): void;
declare function RegionClearRect(whichRegion: region, r: rect): void;
declare function RegionAddCell(whichRegion: region, x: number, y: number): void;
declare function RegionAddCellAtLoc(whichRegion: region, whichLocation: location): void;
declare function RegionClearCell(whichRegion: region, x: number, y: number): void;
declare function RegionClearCellAtLoc(whichRegion: region, whichLocation: location): void;
declare function IsUnitInRegion(whichRegion: region, whichUnit: unit): boolean;
declare function IsPointInRegion(whichRegion: region, x: number, y: number): boolean;
declare function IsLocationInRegion(whichRegion: region, whichLocation: location): boolean;

export class Region extends Handle<region> {

  constructor() {
    if (Handle.initFromHandle()) {
      super();
    } else {
      super(CreateRegion());
    }
  }

  public addCell(x: number, y: number) {
    RegionAddCell(this.handle, x, y);
  }

  public addCellPoint(whichPoint: Point) {
    RegionAddCellAtLoc(this.handle, whichPoint.handle);
  }

  public addRect(r: Rectangle) {
    RegionAddRect(this.handle, r.handle);
  }

  public clearCell(x: number, y: number) {
    RegionClearCell(this.handle, x, y);
  }

  public clearCellPoint(whichPoint: Point) {
    RegionClearCellAtLoc(this.handle, whichPoint.handle);
  }

  public clearRect(r: Rectangle) {
    RegionClearRect(this.handle, r.handle);
  }

  public containsCoords(x: number, y: number) {
    return IsPointInRegion(this.handle, x, y);
  }

  public containsPoint(whichPoint: Point) {
    IsLocationInRegion(this.handle, whichPoint.handle);
  }

  public containsUnit(whichUnit: Unit) {
    return IsUnitInRegion(this.handle, whichUnit.handle);
  }

  public destroy() {
    RemoveRegion(this.handle);
  }

  public static fromHandle(handle: region): Region {
    return this.getObject(handle);
  }

}
