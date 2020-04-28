/** @noSelfInFile **/

import { Handle } from "./handle";

declare interface agent extends handle { __agent: never; }
declare interface sound extends agent { __sound: never; }
declare interface widget extends agent { __widget: never; }
declare interface unit extends widget { __unit: never; }

declare function CreateSound(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number, eaxSetting: string): sound;
declare function CreateSoundFilenameWithLabel(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number, SLKEntryName: string): sound;
declare function CreateSoundFromLabel(soundLabel: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number): sound;
declare function CreateMIDISound(soundLabel: string, fadeInRate: number, fadeOutRate: number): sound;
declare function SetSoundParamsFromLabel(soundHandle: sound, soundLabel: string): void;
declare function SetSoundDistanceCutoff(soundHandle: sound, cutoff: number): void;
declare function SetSoundChannel(soundHandle: sound, channel: number): void;
declare function SetSoundVolume(soundHandle: sound, volume: number): void;
declare function SetSoundPitch(soundHandle: sound, pitch: number): void;
declare function SetSoundPlayPosition(soundHandle: sound, millisecs: number): void;
declare function SetSoundDistances(soundHandle: sound, minDist: number, maxDist: number): void;
declare function SetSoundConeAngles(soundHandle: sound, inside: number, outside: number, outsideVolume: number): void;
declare function SetSoundConeOrientation(soundHandle: sound, x: number, y: number, z: number): void;
declare function SetSoundPosition(soundHandle: sound, x: number, y: number, z: number): void;
declare function SetSoundVelocity(soundHandle: sound, x: number, y: number, z: number): void;
declare function AttachSoundToUnit(soundHandle: sound, whichUnit: unit): void;
declare function StartSound(soundHandle: sound): void;
declare function StopSound(soundHandle: sound, killWhenDone: boolean, fadeOut: boolean): void;
declare function KillSoundWhenDone(soundHandle: sound): void;
declare function GetSoundIsPlaying(soundHandle: sound): boolean;
declare function GetSoundIsLoading(soundHandle: sound): boolean;
declare function RegisterStackedSound(soundHandle: sound, byPosition: boolean, rectwidth: number, rectheight: number): void;
declare function UnregisterStackedSound(soundHandle: sound, byPosition: boolean, rectwidth: number, rectheight: number): void;
declare function SetSoundFacialAnimationLabel(soundHandle: sound, animationLabel: string): boolean;
declare function SetSoundFacialAnimationGroupLabel(soundHandle: sound, groupLabel: string): boolean;
declare function SetSoundFacialAnimationSetFilepath(soundHandle: sound, animationSetFilepath: string): boolean;
declare function SetDialogueSpeakerNameKey(soundHandle: sound, speakerName: string): boolean;
declare function GetDialogueSpeakerNameKey(soundHandle: sound): string;
declare function SetDialogueTextKey(soundHandle: sound, dialogueText: string): boolean;
declare function GetDialogueTextKey(soundHandle: sound): string;
declare function SetSoundDuration(soundHandle: sound, duration: number): void;
declare function GetSoundDuration(soundHandle: sound): number;
declare function GetSoundFileDuration(musicFileName: string): number;

export class Sound extends Handle<sound> {

  constructor(fileName: string, looping: boolean, is3D: boolean, stopWhenOutOfRange: boolean, fadeInRate: number, fadeOutRate: number, eaxSetting: string) {
    if (Handle.initFromHandle()) {
      super();
    } else {
      super(CreateSound(fileName, looping, is3D, stopWhenOutOfRange, fadeInRate, fadeOutRate, eaxSetting));
    }
  }

  public get dialogueSpeakerNameKey() {
    return GetDialogueSpeakerNameKey(this.handle);
  }

  public set dialogueSpeakerNameKey(speakerName: string) {
    SetDialogueSpeakerNameKey(this.handle, speakerName);
  }

  public get dialogueTextKey() {
    return GetDialogueTextKey(this.handle);
  }

  public set dialogueTextKey(dialogueText: string) {
    SetDialogueTextKey(this.handle, dialogueText);
  }

  public get duration() {
    return GetSoundDuration(this.handle);
  }

  public set duration(duration: number) {
    SetSoundDuration(this.handle, duration);
  }

  public get loading() {
    return GetSoundIsLoading(this.handle);
  }

  public get playing() {
    return GetSoundIsPlaying(this.handle);
  }

  public killWhenDone() {
    KillSoundWhenDone(this.handle);
  }

  public registerStacked(byPosition: boolean, rectWidth: number, rectHeight: number) {
    RegisterStackedSound(this.handle, byPosition, rectWidth, rectHeight);
  }

  public setChannel(channel: number) {
    SetSoundDistanceCutoff(this.handle, channel);
  }

  public setConeAngles(inside: number, outside: number, outsideVolume: number) {
    SetSoundConeAngles(this.handle, inside, outside, outsideVolume);
  }

  public setConeOrientation(x: number, y: number, z: number) {
    SetSoundConeOrientation(this.handle, x, y, z);
  }

  public setDistanceCutoff(cutoff: number) {
    SetSoundDistanceCutoff(this.handle, cutoff);
  }

  public setDistances(minDist: number, maxDist: number) {
    SetSoundDistances(this.handle, minDist, maxDist);
  }

  public setFacialAnimationFilepath(animationSetFilepath: string) {
    SetSoundFacialAnimationSetFilepath(this.handle, animationSetFilepath);
  }

  public setFacialAnimationGroupLabel(groupLabel: string) {
    SetSoundFacialAnimationGroupLabel(this.handle, groupLabel);
  }

  public setFacialAnimationLabel(animationLabel: string) {
    SetSoundFacialAnimationLabel(this.handle, animationLabel);
  }

  public setParamsFromLabel(soundLabel: string) {
    SetSoundParamsFromLabel(this.handle, soundLabel);
  }

  public setPitch(pitch: number) {
    SetSoundPitch(this.handle, pitch);
  }

  /**
   * Must be called immediately after starting the sound
   * @param millisecs
   */
  public setPlayPosition(millisecs: number) {
    SetSoundPlayPosition(this.handle, millisecs);
  }

  public setPosition(x: number, y: number, z: number) {
    SetSoundPosition(this.handle, x, y, z);
  }

  public setVelocity(x: number, y: number, z: number) {
    SetSoundVelocity(this.handle, x, y, z);
  }

  public setVolume(volume: number) {
    SetSoundVolume(this.handle, volume);
  }

  public start() {
    StartSound(this.handle);
  }

  public stop(killWhenDone: boolean, fadeOut: boolean) {
    StopSound(this.handle, killWhenDone, fadeOut);
  }

  public unregisterStacked(byPosition: boolean, rectWidth: number, rectHeight: number) {
    UnregisterStackedSound(this.handle, byPosition, rectWidth, rectHeight);
  }

  public static fromHandle(handle: sound): Sound {
    return this.getObject(handle);
  }

  public static getFileDuration(fileName: string) {
    return GetSoundFileDuration(fileName);
  }

}
