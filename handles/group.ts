/** @noSelfInFile **/

import { Handle } from "./handle";
import { MapPlayer } from "./player";
import { Point } from "./point";
import { Rectangle } from "./rect";
import { Unit } from "./unit";
import { Widget } from "./widget";

declare interface agent extends handle { __agent: never; }
declare interface group extends agent { __group: never; }
declare interface player extends agent { __player: never; }
declare interface widget extends agent { __widget: never; }
declare interface unit extends widget { __unit: never; }
declare interface rect extends agent { __rect: never; }
declare interface boolexpr extends agent { __boolexpr: never; }
declare interface location extends agent { __location: never; }

declare function CreateGroup(): group;
declare function DestroyGroup(whichGroup: group): void;
declare function GroupAddUnit(whichGroup: group, whichUnit: unit): boolean;
declare function GroupRemoveUnit(whichGroup: group, whichUnit: unit): boolean;
declare function BlzGroupAddGroupFast(whichGroup: group, addGroup: group): number;
declare function BlzGroupRemoveGroupFast(whichGroup: group, removeGroup: group): number;
declare function GroupClear(whichGroup: group): void;
declare function BlzGroupGetSize(whichGroup: group): number;
declare function BlzGroupUnitAt(whichGroup: group, index: number): unit;
declare function GroupEnumUnitsOfType(whichGroup: group, unitname: string, filter: boolexpr | null): void;
declare function GroupEnumUnitsOfPlayer(whichGroup: group, whichPlayer: player, filter: boolexpr | null): void;
declare function GroupEnumUnitsOfTypeCounted(whichGroup: group, unitname: string, filter: boolexpr | null, countLimit: number): void;
declare function GroupEnumUnitsInRect(whichGroup: group, r: rect, filter: boolexpr | null): void;
declare function GroupEnumUnitsInRectCounted(whichGroup: group, r: rect, filter: boolexpr | null, countLimit: number): void;
declare function GroupEnumUnitsInRange(whichGroup: group, x: number, y: number, radius: number, filter: boolexpr | null): void;
declare function GroupEnumUnitsInRangeOfLoc(whichGroup: group, whichLocation: location, radius: number, filter: boolexpr | null): void;
declare function GroupEnumUnitsInRangeCounted(whichGroup: group, x: number, y: number, radius: number, filter: boolexpr | null, countLimit: number): void;
declare function GroupEnumUnitsInRangeOfLocCounted(whichGroup: group, whichLocation: location, radius: number, filter: boolexpr | null, countLimit: number): void;
declare function GroupEnumUnitsSelected(whichGroup: group, whichPlayer: player, filter: boolexpr | null): void;
declare function GroupImmediateOrder(whichGroup: group, order: string): boolean;
declare function GroupImmediateOrderById(whichGroup: group, order: number): boolean;
declare function GroupPointOrder(whichGroup: group, order: string, x: number, y: number): boolean;
declare function GroupPointOrderLoc(whichGroup: group, order: string, whichLocation: location): boolean;
declare function GroupPointOrderById(whichGroup: group, order: number, x: number, y: number): boolean;
declare function GroupPointOrderByIdLoc(whichGroup: group, order: number, whichLocation: location): boolean;
declare function GroupTargetOrder(whichGroup: group, order: string, targetWidget: widget): boolean;
declare function GroupTargetOrderById(whichGroup: group, order: number, targetWidget: widget): boolean;
declare function ForGroup(whichGroup: group, callback: () => void): void;
declare function FirstOfGroup(whichGroup: group): unit;
declare function IsUnitInGroup(whichUnit: unit, whichGroup: group): boolean;
declare function GetFilterUnit(): unit;
declare function GetEnumUnit(): unit;

export class Group extends Handle<group> {

  constructor() {
    if (Handle.initFromHandle()) {
      super();
    } else {
      super(CreateGroup());
    }
  }

  public addGroupFast(addGroup: Group): number {
    return BlzGroupAddGroupFast(this.handle, addGroup.handle);
  }

  public addUnit(whichUnit: Unit): boolean {
    return GroupAddUnit(this.handle, whichUnit.handle);
  }

  public clear() {
    GroupClear(this.handle);
  }

  public destroy() {
    DestroyGroup(this.handle);
  }

  public enumUnitsInRange(x: number, y: number, radius: number, filter: boolexpr) {
    GroupEnumUnitsInRange(this.handle, x, y, radius, filter);
  }

  public enumUnitsInRangeCounted(x: number, y: number, radius: number, filter: boolexpr, countLimit: number) {
    GroupEnumUnitsInRangeCounted(this.handle, x, y, radius, filter, countLimit);
  }

  public enumUnitsInRangeOfPoint(whichPoint: Point, radius: number, filter: boolexpr) {
    GroupEnumUnitsInRangeOfLoc(this.handle, whichPoint.handle, radius, filter);
  }

  public enumUnitsInRangeOfPointCounted(whichPoint: Point, radius: number, filter: boolexpr, countLimit: number) {
    GroupEnumUnitsInRangeOfLocCounted(this.handle, whichPoint.handle, radius, filter, countLimit);
  }

  public enumUnitsInRect(r: Rectangle, filter: boolexpr) {
    GroupEnumUnitsInRect(this.handle, r.handle, filter);
  }

  public enumUnitsInRectCounted(r: Rectangle, filter: boolexpr, countLimit: number) {
    GroupEnumUnitsInRectCounted(this.handle, r.handle, filter, countLimit);
  }

  public enumUnitsOfPlayer(whichPlayer: MapPlayer, filter: boolexpr) {
    GroupEnumUnitsOfPlayer(this.handle, whichPlayer.handle, filter);
  }

  public enumUnitsOfType(unitName: string, filter: boolexpr) {
    GroupEnumUnitsOfType(this.handle, unitName, filter);
  }

  public enumUnitsOfTypeCounted(unitName: string, filter: boolexpr, countLimit: number) {
    GroupEnumUnitsOfTypeCounted(this.handle, unitName, filter, countLimit);
  }

  public enumUnitsSelected(whichPlayer: MapPlayer, radius: number, filter: boolexpr) {
    GroupEnumUnitsSelected(this.handle, whichPlayer.handle, filter);
  }

  public for(callback: () => void) {
    ForGroup(this.handle, callback);
  }

  public get first() {
    return Unit.fromHandle(FirstOfGroup(this.handle));
  }

  public get size(): number {
    return BlzGroupGetSize(this.handle);
  }

  public getUnitAt(index: number): Unit {
    return Unit.fromHandle(BlzGroupUnitAt(this.handle, index));
  }

  public hasUnit(whichUnit: Unit) {
    return IsUnitInGroup(whichUnit.handle, this.handle);
  }

  public orderCoords(order: string | number, x: number, y: number) {
    if (typeof order === "string") {
      GroupPointOrder(this.handle, order, x, y);
    } else {
      GroupPointOrderById(this.handle, order, x, y);
    }
  }

  public orderImmediate(order: string | number) {
    if (typeof order === "string") {
      GroupImmediateOrder(this.handle, order);
    } else {
      GroupImmediateOrderById(this.handle, order);
    }
  }

  public orderPoint(order: string | number, whichPoint: Point) {
    if (typeof order === "string") {
      GroupPointOrderLoc(this.handle, order, whichPoint.handle);
    } else {
      GroupPointOrderByIdLoc(this.handle, order, whichPoint.handle);
    }
  }

  public orderTarget(order: string | number, targetWidget: Widget | Unit) {
    if (typeof order === "string") {
      GroupTargetOrder(this.handle, order, targetWidget.handle);
    } else {
      GroupTargetOrderById(this.handle, order, targetWidget.handle);
    }
  }

  public removeGroupFast(removeGroup: Group): number {
    return BlzGroupRemoveGroupFast(this.handle, removeGroup.handle);
  }

  public removeUnit(whichUnit: Unit): boolean {
    return GroupRemoveUnit(this.handle, whichUnit.handle);
  }

  public static fromHandle(handle: group): Group {
    return this.getObject(handle);
  }

  public static getEnumUnit(): Unit {
    return Unit.fromHandle(GetEnumUnit());
  }

  public static getFilterUnit(): Unit {
    return Unit.fromHandle(GetFilterUnit());
  }
}
