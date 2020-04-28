/** @noSelfInFile **/

import { Handle } from "./handle";
import { Widget } from "./widget";

declare interface agent extends handle { __agent: never; }
declare interface widget extends agent { __widget: never; }
declare interface destructable extends widget { __destructable: never; }
declare interface rect extends agent { __rect: never; }
declare interface boolexpr extends agent { __boolexpr: never; }

declare function CreateDestructable(objectid: number, x: number, y: number, face: number, scale: number, variation: number): destructable;
declare function CreateDestructableZ(objectid: number, x: number, y: number, z: number, face: number, scale: number, variation: number): destructable;
declare function CreateDeadDestructable(objectid: number, x: number, y: number, face: number, scale: number, variation: number): destructable;
declare function CreateDeadDestructableZ(objectid: number, x: number, y: number, z: number, face: number, scale: number, variation: number): destructable;
declare function RemoveDestructable(d: destructable): void;
declare function KillDestructable(d: destructable): void;
declare function SetDestructableInvulnerable(d: destructable, flag: boolean): void;
declare function IsDestructableInvulnerable(d: destructable): boolean;
declare function EnumDestructablesInRect(r: rect, filter: boolexpr | null, actionFunc: () => void): void;
declare function GetDestructableTypeId(d: destructable): number;
declare function GetDestructableX(d: destructable): number;
declare function GetDestructableY(d: destructable): number;
declare function SetDestructableLife(d: destructable, life: number): void;
declare function GetDestructableLife(d: destructable): number;
declare function SetDestructableMaxLife(d: destructable, max: number): void;
declare function GetDestructableMaxLife(d: destructable): number;
declare function DestructableRestoreLife(d: destructable, life: number, birth: boolean): void;
declare function QueueDestructableAnimation(d: destructable, whichAnimation: string): void;
declare function SetDestructableAnimation(d: destructable, whichAnimation: string): void;
declare function SetDestructableAnimationSpeed(d: destructable, speedFactor: number): void;
declare function ShowDestructable(d: destructable, flag: boolean): void;
declare function GetDestructableOccluderHeight(d: destructable): number;
declare function SetDestructableOccluderHeight(d: destructable, height: number): void;
declare function GetDestructableName(d: destructable): string;
declare function GetTriggerDestructable(): destructable;


export class Destructable extends Widget {

  public readonly handle!: destructable;

  constructor(objectId: number, x: number, y: number, z: number, face: number, scale: number, varation: number) {
    if (Handle.initFromHandle()) {
      super();
    } else {
      super(CreateDestructableZ(objectId, x, y, z, face, scale, varation));
    }
  }

  public set invulnerable(flag: boolean) {
    SetDestructableInvulnerable(this.handle, flag);
  }

  public get invulnerable() {
    return IsDestructableInvulnerable(this.handle);
  }

  public get life() {
    return GetDestructableLife(this.handle);
  }

  public set life(value: number) {
    SetDestructableLife(this.handle, value);
  }

  public get maxLife() {
    return GetDestructableMaxLife(this.handle);
  }

  public set maxLife(value: number) {
    SetDestructableMaxLife(this.handle, value);
  }

  public get name() {
    return GetDestructableName(this.handle);
  }

  public get occluderHeight() {
    return GetDestructableOccluderHeight(this.handle);
  }

  public set occluderHeight(value: number) {
    SetDestructableOccluderHeight(this.handle, value);
  }

  public get typeId() {
    return GetDestructableTypeId(this.handle);
  }

  public get x() {
    return GetDestructableX(this.handle);
  }

  public get y() {
    return GetDestructableY(this.handle);
  }

  public destroy() {
    RemoveDestructable(this.handle);
  }

  public heal(life: number, birth: boolean) {
    DestructableRestoreLife(this.handle, life, birth);
  }

  public kill() {
    KillDestructable(this.handle);
  }

  public queueAnim(whichAnimation: string) {
    QueueDestructableAnimation(this.handle, whichAnimation);
  }

  public setAnim(whichAnimation: string) {
    SetDestructableAnimation(this.handle, whichAnimation);
  }

  public setAnimSpeed(speedFactor: number) {
    SetDestructableAnimationSpeed(this.handle, speedFactor);
  }

  public show(flag: boolean) {
    ShowDestructable(this.handle, flag);
  }

  public static fromEvent() {
    return this.fromHandle(GetTriggerDestructable());
  }

  public static fromHandle(handle: destructable): Destructable {
    return this.getObject(handle);
  }

}
