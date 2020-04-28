/** @noSelfInFile **/

import { Handle } from "./handle";
import { MapPlayer } from "./player";
import { Point } from "./point";
import { Widget } from "./widget";

declare interface agent extends handle { __agent: never; }
declare interface widget extends agent { __widget: never; }
declare interface player extends agent { __player: never; }
declare interface location extends agent { __location: never; }
declare interface effect extends agent { __effect: never; }
declare interface animtype extends handle { __animtype: never; }
declare interface subanimtype extends handle { __subanimtype: never; }

declare function AddSpecialEffect(modelName: string, x: number, y: number): effect;
declare function AddSpecialEffectLoc(modelName: string, where: location): effect;
declare function AddSpecialEffectTarget(modelName: string, targetWidget: widget, attachPointName: string): effect;
declare function DestroyEffect(whichEffect: effect): void;
declare function BlzGetSpecialEffectScale(whichEffect: effect): number;
declare function BlzSetSpecialEffectMatrixScale(whichEffect: effect, x: number, y: number, z: number): void;
declare function BlzResetSpecialEffectMatrix(whichEffect: effect): void;
declare function BlzSetSpecialEffectColorByPlayer(whichEffect: effect, whichPlayer: player): void;
declare function BlzSetSpecialEffectColor(whichEffect: effect, r: number, g: number, b: number): void;
declare function BlzSetSpecialEffectAlpha(whichEffect: effect, alpha: number): void;
declare function BlzSetSpecialEffectScale(whichEffect: effect, scale: number): void;
declare function BlzSetSpecialEffectPosition(whichEffect: effect, x: number, y: number, z: number): void;
declare function BlzSetSpecialEffectHeight(whichEffect: effect, height: number): void;
declare function BlzSetSpecialEffectTimeScale(whichEffect: effect, timeScale: number): void;
declare function BlzSetSpecialEffectTime(whichEffect: effect, time: number): void;
declare function BlzSetSpecialEffectOrientation(whichEffect: effect, yaw: number, pitch: number, roll: number): void;
declare function BlzSetSpecialEffectYaw(whichEffect: effect, yaw: number): void;
declare function BlzSetSpecialEffectPitch(whichEffect: effect, pitch: number): void;
declare function BlzSetSpecialEffectRoll(whichEffect: effect, roll: number): void;
declare function BlzSetSpecialEffectX(whichEffect: effect, x: number): void;
declare function BlzSetSpecialEffectY(whichEffect: effect, y: number): void;
declare function BlzSetSpecialEffectZ(whichEffect: effect, z: number): void;
declare function BlzSetSpecialEffectPositionLoc(whichEffect: effect, loc: location): void;
declare function BlzGetLocalSpecialEffectX(whichEffect: effect): number;
declare function BlzGetLocalSpecialEffectY(whichEffect: effect): number;
declare function BlzGetLocalSpecialEffectZ(whichEffect: effect): number;
declare function BlzSpecialEffectClearSubAnimations(whichEffect: effect): void;
declare function BlzSpecialEffectRemoveSubAnimation(whichEffect: effect, whichSubAnim: subanimtype): void;
declare function BlzSpecialEffectAddSubAnimation(whichEffect: effect, whichSubAnim: subanimtype): void;
declare function BlzPlaySpecialEffect(whichEffect: effect, whichAnim: animtype): void;
declare function BlzPlaySpecialEffectWithTimeScale(whichEffect: effect, whichAnim: animtype, timeScale: number): void;


export class Effect extends Handle<effect> {

  constructor(modelName: string, x: number, y: number);
  constructor(modelName: string, targetWidget: Widget, attachPointName: string);
  constructor(modelName: string, a: number | Widget, b: number | string) {
    if (Handle.initFromHandle()) {
      super();
    } else if (typeof a === "number" && typeof b === "number") {
      super(AddSpecialEffect(modelName, a, b));
    } else if (typeof a !== "number" && typeof b === "string") {
      super(AddSpecialEffectTarget(modelName, a.handle as widget, b));
    }
  }

  public get scale() {
    return BlzGetSpecialEffectScale(this.handle);
  }

  public set scale(scale: number) {
    BlzSetSpecialEffectScale(this.handle, scale);
  }

  /**
   * Warning: asynchronous
   */
  public get x() {
    return BlzGetLocalSpecialEffectX(this.handle);
  }

  public set x(x: number) {
    BlzSetSpecialEffectX(this.handle, x);
  }

  /**
   * Warning: asynchronous
   */
  public get y() {
    return BlzGetLocalSpecialEffectY(this.handle);
  }

  public set y(y: number) {
    BlzSetSpecialEffectY(this.handle, y);
  }

  /**
   * Warning: asynchronous
   */
  public get z() {
    return BlzGetLocalSpecialEffectZ(this.handle);
  }

  public set z(z: number) {
    BlzSetSpecialEffectZ(this.handle, z);
  }

  public addSubAnimation(subAnim: subanimtype) {
    BlzSpecialEffectAddSubAnimation(this.handle, subAnim);
  }

  public clearSubAnimations() {
    BlzSpecialEffectClearSubAnimations(this.handle);
  }

  public destroy() {
    DestroyEffect(this.handle);
  }

  public playAnimation(animType: animtype) {
    BlzPlaySpecialEffect(this.handle, animType);
  }

  public playWithTimeScale(animType: animtype, timeScale: number) {
    BlzPlaySpecialEffectWithTimeScale(this.handle, animType, timeScale);
  }

  public removeSubAnimation(subAnim: subanimtype) {
    BlzSpecialEffectRemoveSubAnimation(this.handle, subAnim);
  }

  public resetScaleMatrix() {
    BlzResetSpecialEffectMatrix(this.handle);
  }

  public setAlpha(alpha: number) {
    BlzSetSpecialEffectAlpha(this.handle, alpha);
  }

  public setColor(red: number, green: number, blue: number) {
    BlzSetSpecialEffectColor(this.handle, red, green, blue);
  }

  public setColorByPlayer(whichPlayer: MapPlayer) {
    BlzSetSpecialEffectColorByPlayer(this.handle, whichPlayer.handle);
  }

  public setHeight(height: number) {
    BlzSetSpecialEffectHeight(this.handle, height);
  }

  public setOrientation(yaw: number, pitch: number, roll: number) {
    BlzSetSpecialEffectOrientation(this.handle, yaw, pitch, roll);
  }

  public setPitch(pitch: number) {
    BlzSetSpecialEffectPitch(this.handle, pitch);
  }

  public setPoint(p: Point) {
    BlzSetSpecialEffectPositionLoc(this.handle, p.handle);
  }

  public setPosition(x: number, y: number, z: number) {
    BlzSetSpecialEffectPosition(this.handle, x, y, z);
  }

  public setRoll(roll: number) {
    BlzSetSpecialEffectRoll(this.handle, roll);
  }

  public setScaleMatrix(x: number, y: number, z: number) {
    BlzSetSpecialEffectMatrixScale(this.handle, x, y, z);
  }

  public setTime(value: number) {
    BlzSetSpecialEffectTime(this.handle, value);
  }

  public setTimeScale(timeScale: number) {
    BlzSetSpecialEffectTimeScale(this.handle, timeScale);
  }

  public setYaw(y: number) {
    BlzSetSpecialEffectYaw(this.handle, y);
  }

  public static fromHandle(handle: effect): Effect {
    return this.getObject(handle);
  }
}
