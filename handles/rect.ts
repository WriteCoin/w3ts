/** @noSelfInFile **/

import { Handle } from "./handle";
import { Point } from "./point";

declare interface agent extends handle { __agent: never; }
declare interface rect extends agent { __rect: never; }
declare interface location extends agent { __location: never; }
declare interface boolexpr extends agent { __boolexpr: never; }

declare function Rect(minx: number, miny: number, maxx: number, maxy: number): rect;
declare function RectFromLoc(min: location, max: location): rect;
declare function RemoveRect(whichRect: rect): void;
declare function SetRect(whichRect: rect, minx: number, miny: number, maxx: number, maxy: number): void;
declare function SetRectFromLoc(whichRect: rect, min: location, max: location): void;
declare function MoveRectTo(whichRect: rect, newCenterX: number, newCenterY: number): void;
declare function MoveRectToLoc(whichRect: rect, newCenterLoc: location): void;
declare function GetRectCenterX(whichRect: rect): number;
declare function GetRectCenterY(whichRect: rect): number;
declare function GetRectMinX(whichRect: rect): number;
declare function GetRectMinY(whichRect: rect): number;
declare function GetRectMaxX(whichRect: rect): number;
declare function GetRectMaxY(whichRect: rect): number;
declare function EnumDestructablesInRect(r: rect, filter: boolexpr | null, actionFunc: () => void): void;
declare function EnumItemsInRect(r: rect, filter: boolexpr | null, actionFunc: () => void): void;
declare function GetWorldBounds(): rect;

export class Rectangle extends Handle<rect> {

  constructor(minX: number, minY: number, maxX: number, maxY: number) {
    if (Handle.initFromHandle()) {
      super();
    } else {
      super(Rect(minX, minY, maxX, maxY));
    }
  }

  public get centerX() {
    return GetRectCenterX(this.handle);
  }

  public get centerY() {
    return GetRectCenterY(this.handle);
  }

  public get maxX() {
    return GetRectMaxX(this.handle);
  }

  public get maxY() {
    return GetRectMaxY(this.handle);
  }

  public get minX() {
    return GetRectMinX(this.handle);
  }

  public get minY() {
    return GetRectMinY(this.handle);
  }

  public destroy() {
    RemoveRect(this.handle);
  }

  public enumDestructables(filter: boolexpr, actionFunc: () => void) {
    EnumDestructablesInRect(this.handle, filter, actionFunc);
  }

  public enumItems(filter: boolexpr, actionFunc: () => void) {
    EnumItemsInRect(this.handle, filter, actionFunc);
  }

  public move(newCenterX: number, newCenterY: number) {
    MoveRectTo(this.handle, newCenterX, newCenterY);
  }

  public movePoint(newCenterPoint: Point) {
    MoveRectToLoc(this.handle, newCenterPoint.handle);
  }

  public setRect(minX: number, minY: number, maxX: number, maxY: number) {
    SetRect(this.handle, minX, minY, maxX, maxY);
  }

  public setRectFromPoint(min: Point, max: Point) {
    SetRectFromLoc(this.handle, min.handle, max.handle);
  }

  public static fromHandle(handle: rect): Rectangle {
    return this.getObject(handle);
  }

  public static fromPoint(min: Point, max: Point) {
    return this.fromHandle(RectFromLoc(min.handle, max.handle));
  }

  // Returns full map bounds, including unplayable borders, in world coordinates
  public static getWorldBounds() {
    return Rectangle.fromHandle(GetWorldBounds());
  }

}
