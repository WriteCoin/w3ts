/** @noSelfInFile **/

import { Handle } from "./handle";
import { Point } from "./point";

declare interface camerafield extends handle { __camerafield: never; }
declare interface agent extends handle { __agent: never; }
declare interface widget extends agent { __widget: never; }
declare interface unit extends widget { __unit: never; }
declare interface location extends agent { __location: never; }
declare interface camerasetup extends handle { __camerasetup: never; }
declare interface blendmode extends handle { __blendmode: never; }
declare interface texmapflags extends handle { __texmapflags: never; }
declare interface playercolor extends handle { __playercolor: never; }

declare function SetCameraPosition(x: number, y: number): void;
declare function SetCameraQuickPosition(x: number, y: number): void;
declare function SetCameraBounds(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;
declare function StopCamera(): void;
declare function ResetToGameCamera(duration: number): void;
declare function PanCameraTo(x: number, y: number): void;
declare function PanCameraToTimed(x: number, y: number, duration: number): void;
declare function PanCameraToWithZ(x: number, y: number, zOffsetDest: number): void;
declare function PanCameraToTimedWithZ(x: number, y: number, zOffsetDest: number, duration: number): void;
declare function SetCinematicCamera(cameraModelFile: string): void;
declare function SetCameraRotateMode(x: number, y: number, radiansToSweep: number, duration: number): void;
declare function SetCameraField(whichField: camerafield, value: number, duration: number): void;
declare function AdjustCameraField(whichField: camerafield, offset: number, duration: number): void;
declare function SetCameraTargetController(whichUnit: unit, xoffset: number, yoffset: number, inheritOrientation: boolean): void;
declare function SetCameraOrientController(whichUnit: unit, xoffset: number, yoffset: number): void;
declare function CreateCameraSetup(): camerasetup;
declare function CameraSetupSetField(whichSetup: camerasetup, whichField: camerafield, value: number, duration: number): void;
declare function CameraSetupGetField(whichSetup: camerasetup, whichField: camerafield): number;
declare function CameraSetupSetDestPosition(whichSetup: camerasetup, x: number, y: number, duration: number): void;
declare function CameraSetupGetDestPositionLoc(whichSetup: camerasetup): location;
declare function CameraSetupGetDestPositionX(whichSetup: camerasetup): number;
declare function CameraSetupGetDestPositionY(whichSetup: camerasetup): number;
declare function CameraSetupApply(whichSetup: camerasetup, doPan: boolean, panTimed: boolean): void;
declare function CameraSetupApplyWithZ(whichSetup: camerasetup, zDestOffset: number): void;
declare function CameraSetupApplyForceDuration(whichSetup: camerasetup, doPan: boolean, forceDuration: number): void;
declare function CameraSetupApplyForceDurationWithZ(whichSetup: camerasetup, zDestOffset: number, forceDuration: number): void;
declare function BlzCameraSetupSetLabel(whichSetup: camerasetup, label: string): void;
declare function BlzCameraSetupGetLabel(whichSetup: camerasetup): string;
declare function CameraSetTargetNoise(mag: number, velocity: number): void;
declare function CameraSetSourceNoise(mag: number, velocity: number): void;
declare function CameraSetTargetNoiseEx(mag: number, velocity: number, vertOnly: boolean): void;
declare function CameraSetSourceNoiseEx(mag: number, velocity: number, vertOnly: boolean): void;
declare function CameraSetSmoothingFactor(factor: number): void;
declare function CameraSetFocalDistance(distance: number): void;
declare function CameraSetDepthOfFieldScale(scale: number): void;
declare function SetCineFilterTexture(filename: string): void;
declare function SetCineFilterBlendMode(whichMode: blendmode): void;
declare function SetCineFilterTexMapFlags(whichFlags: texmapflags): void;
declare function SetCineFilterStartUV(minu: number, minv: number, maxu: number, maxv: number): void;
declare function SetCineFilterEndUV(minu: number, minv: number, maxu: number, maxv: number): void;
declare function SetCineFilterStartColor(red: number, green: number, blue: number, alpha: number): void;
declare function SetCineFilterEndColor(red: number, green: number, blue: number, alpha: number): void;
declare function SetCineFilterDuration(duration: number): void;
declare function DisplayCineFilter(flag: boolean): void;
declare function IsCineFilterDisplayed(): boolean;
declare function SetCinematicScene(portraitUnitId: number, color: playercolor, speakerTitle: string, text: string, sceneDuration: number, voiceoverDuration: number): void;
declare function EndCinematicScene(): void;
declare function ForceCinematicSubtitles(flag: boolean): void;
declare function SetCinematicAudio(cinematicAudio: boolean): void;
declare function GetCameraMargin(whichMargin: number): number;
declare function GetCameraBoundMinX(): number;
declare function GetCameraBoundMinY(): number;
declare function GetCameraBoundMaxX(): number;
declare function GetCameraBoundMaxY(): number;
declare function GetCameraField(whichField: camerafield): number;
declare function GetCameraTargetPositionX(): number;
declare function GetCameraTargetPositionY(): number;
declare function GetCameraTargetPositionZ(): number;
declare function GetCameraTargetPositionLoc(): location;
declare function GetCameraEyePositionX(): number;
declare function GetCameraEyePositionY(): number;
declare function GetCameraEyePositionZ(): number;
declare function GetCameraEyePositionLoc(): location;
declare function BlzCameraSetupApplyForceDurationSmooth(whichSetup: camerasetup, doPan: boolean, forcedDuration: number, easeInDuration: number, easeOutDuration: number, smoothFactor: number): void;


export class Camera {

  private constructor() { }

  public static set visible(flag: boolean) {
    DisplayCineFilter(flag);
  }

  public static get visible() {
    return IsCineFilterDisplayed();
  }

  public static get boundMinX() {
    return GetCameraBoundMinX();
  }

  public static get boundMinY() {
    return GetCameraBoundMinY();
  }

  public static get boundMaxX() {
    return GetCameraBoundMaxX();
  }

  public static get boundMaxY() {
    return GetCameraBoundMaxY();
  }

  public static get targetX() {
    return GetCameraTargetPositionX();
  }

  public static get targetY() {
    return GetCameraTargetPositionY();
  }

  public static get targetZ() {
    return GetCameraTargetPositionZ();
  }

  public static get eyeX() {
    return GetCameraEyePositionX();
  }

  public static get eyeY() {
    return GetCameraEyePositionY();
  }

  public static get eyeZ() {
    return GetCameraEyePositionZ();
  }

  public static get eyePoint() {
    return GetCameraEyePositionLoc();
  }

  public static get targetPoint() {
    return Point.fromHandle(GetCameraTargetPositionLoc());
  }

  public static adjustField(whichField: camerafield, offset: number, duration: number) {
    AdjustCameraField(whichField, offset, duration);
  }

  public static endCinematicScene() {
    EndCinematicScene();
  }

  public static forceCinematicSubtitles(flag: boolean) {
    ForceCinematicSubtitles(flag);
  }

  public static getMargin(whichMargin: number) {
    return GetCameraMargin(whichMargin);
  }

  public static pan(x: number, y: number, zOffsetDest: number | undefined) {
    if (!zOffsetDest) {
      PanCameraTo(x, y);
    } else {
      PanCameraToWithZ(x, y, zOffsetDest);
    }
  }

  public static panTimed(x: number, y: number, duration: number, zOffsetDest: number | undefined) {
    if (!zOffsetDest) {
      PanCameraToTimed(x, y, duration);
    } else {
      PanCameraToTimedWithZ(x, y, zOffsetDest, duration);
    }
  }

  public static reset(duration: number) {
    ResetToGameCamera(duration);
  }

  public static setBounds(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number) {
    SetCameraBounds(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  public static setCameraOrientController(whichUnit: unit, xOffset: number, yOffset: number) {
    SetCameraOrientController(whichUnit, xOffset, yOffset);
  }

  public static setCineFilterBlendMode(whichMode: blendmode) {
    SetCineFilterBlendMode(whichMode);
  }

  public static setCineFilterDuration(duration: number) {
    SetCineFilterDuration(duration);
  }

  public static setCineFilterEndColor(red: number, green: number, blue: number, alpha: number) {
    SetCineFilterEndColor(red, green, blue, alpha);
  }

  public static setCineFilterEndUV(minU: number, minV: number, maxU: number, maxV: number) {
    SetCineFilterEndUV(minU, minV, maxU, maxV);
  }

  public static setCineFilterStartColor(red: number, green: number, blue: number, alpha: number) {
    SetCineFilterStartColor(red, green, blue, alpha);
  }

  public static setCineFilterStartUV(minU: number, minV: number, maxU: number, maxV: number) {
    SetCineFilterStartUV(minU, minV, maxU, maxV);
  }

  public static setCineFilterTexMapFlags(whichFlags: texmapflags) {
    SetCineFilterTexMapFlags(whichFlags);
  }

  public static setCineFilterTexture(fileName: string) {
    SetCineFilterTexture(fileName);
  }

  public static setCinematicAudio(cinematicAudio: boolean) {
    SetCinematicAudio(cinematicAudio);
  }

  public static setCinematicCamera(cameraModelFile: string) {
    SetCinematicCamera(cameraModelFile);
  }

  public static SetCinematicScene(portraitUnitId: number, color: playercolor, speakerTitle: string, text: string, sceneDuration: number, voiceoverDuration: number) {
    SetCinematicScene(portraitUnitId, color, speakerTitle, text, sceneDuration, voiceoverDuration);
  }

  public static setDepthOfFieldScale(scale: number) {
    CameraSetDepthOfFieldScale(scale);
  }

  public static setField(whichField: camerafield, value: number, duration: number) {
    SetCameraField(whichField, value, duration);
  }

  public static setFocalDistance(distance: number) {
    CameraSetFocalDistance(distance);
  }

  public static setPos(x: number, y: number) {
    SetCameraPosition(x, y);
  }

  public static setRotateMode(x: number, y: number, radiansToSweep: number, duration: number) {
    SetCameraRotateMode(x, y, radiansToSweep, duration);
  }

  public static setSmoothingFactor(factor: number) {
    CameraSetSmoothingFactor(factor);
  }

  public static setSourceNoise(mag: number, velocity: number, vertOnly = false) {
    CameraSetSourceNoiseEx(mag, velocity, vertOnly);
  }

  public static setTargetController(whichUnit: unit, xOffset: number, yOffset: number, inheritOrientation: boolean) {
    SetCameraTargetController(whichUnit, xOffset, yOffset, inheritOrientation);
  }

  public static setTargetNoise(mag: number, velocity: number, vertOnly = false) {
    CameraSetTargetNoiseEx(mag, velocity, vertOnly);
  }

  public static stop() {
    StopCamera();
  }

}

export class CameraSetup extends Handle<camerasetup> {

  constructor() {
    super(Handle.initFromHandle() ? undefined : CreateCameraSetup());
  }

  public get destPoint() {
    return CameraSetupGetDestPositionLoc(this.handle);
  }

  public get destX() {
    return CameraSetupGetDestPositionX(this.handle);
  }

  public set destX(x: number) {
    CameraSetupSetDestPosition(this.handle, x, this.destY, 0);
  }

  public get destY() {
    return CameraSetupGetDestPositionY(this.handle);
  }

  public set destY(y: number) {
    CameraSetupSetDestPosition(this.handle, this.destX, y, 0);
  }

  public set label(label: string) {
    BlzCameraSetupSetLabel(this.handle, label);
  }

  public get label() {
    return BlzCameraSetupGetLabel(this.handle);
  }

  public apply(doPan: boolean, panTimed: boolean) {
    CameraSetupApply(this.handle, doPan, panTimed);
  }

  public applyForceDuration(doPan: boolean, forceDuration: number) {
    CameraSetupApplyForceDuration(this.handle, doPan, forceDuration);
  }

  public applyForceDurationSmooth(doPan: boolean, forcedDuration: number, easeInDuration: number, easeOutDuration: number, smoothFactor: number) {
    BlzCameraSetupApplyForceDurationSmooth(this.handle, doPan, forcedDuration, easeInDuration, easeOutDuration, smoothFactor);

  }

  public applyForceDurationZ(zDestOffset: number, forceDuration: number) {
    CameraSetupApplyForceDurationWithZ(this.handle, zDestOffset, forceDuration);
  }

  public applyZ(zDestOffset: number) {
    CameraSetupApplyWithZ(this.handle, zDestOffset);
  }

  public getField(whichField: camerafield) {
    return CameraSetupGetField(this.handle, whichField);
  }

  public setDestPos(x: number, y: number, duration: number) {
    CameraSetupSetDestPosition(this.handle, x, y, duration);
  }

  public setField(whichField: camerafield, value: number, duration: number) {
    CameraSetupSetField(this.handle, whichField, value, duration);
  }

  public static fromHandle(handle: camerasetup): camerasetup {
    return this.getObject(handle);
  }

}
