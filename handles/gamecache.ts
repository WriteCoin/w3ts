/** @noSelfInFile **/

import { Handle } from "./handle";
import { MapPlayer } from "./player";

declare interface agent extends handle { __agent: never; }
declare interface widget extends agent { __widget: never; }
declare interface unit extends widget { __unit: never; }
declare interface gamecache extends agent { __gamecache: never; }
declare interface player extends agent { __player: never; }

declare function ReloadGameCachesFromDisk(): boolean;
declare function InitGameCache(campaignFile: string): gamecache;
declare function SaveGameCache(whichCache: gamecache): boolean;
declare function StoreInteger(cache: gamecache, missionKey: string, key: string, value: number): void;
declare function StoreReal(cache: gamecache, missionKey: string, key: string, value: number): void;
declare function StoreBoolean(cache: gamecache, missionKey: string, key: string, value: boolean): void;
declare function StoreUnit(cache: gamecache, missionKey: string, key: string, whichUnit: unit): boolean;
declare function StoreString(cache: gamecache, missionKey: string, key: string, value: string): boolean;
declare function SyncStoredInteger(cache: gamecache, missionKey: string, key: string): void;
declare function SyncStoredReal(cache: gamecache, missionKey: string, key: string): void;
declare function SyncStoredBoolean(cache: gamecache, missionKey: string, key: string): void;
declare function SyncStoredUnit(cache: gamecache, missionKey: string, key: string): void;
declare function SyncStoredString(cache: gamecache, missionKey: string, key: string): void;
declare function HaveStoredInteger(cache: gamecache, missionKey: string, key: string): boolean;
declare function HaveStoredReal(cache: gamecache, missionKey: string, key: string): boolean;
declare function HaveStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean;
declare function HaveStoredUnit(cache: gamecache, missionKey: string, key: string): boolean;
declare function HaveStoredString(cache: gamecache, missionKey: string, key: string): boolean;
declare function FlushGameCache(cache: gamecache): void;
declare function FlushStoredMission(cache: gamecache, missionKey: string): void;
declare function FlushStoredInteger(cache: gamecache, missionKey: string, key: string): void;
declare function FlushStoredReal(cache: gamecache, missionKey: string, key: string): void;
declare function FlushStoredBoolean(cache: gamecache, missionKey: string, key: string): void;
declare function FlushStoredUnit(cache: gamecache, missionKey: string, key: string): void;
declare function FlushStoredString(cache: gamecache, missionKey: string, key: string): void;
declare function GetStoredInteger(cache: gamecache, missionKey: string, key: string): number;
declare function GetStoredReal(cache: gamecache, missionKey: string, key: string): number;
declare function GetStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean;
declare function GetStoredString(cache: gamecache, missionKey: string, key: string): string;
declare function RestoreUnit(cache: gamecache, missionKey: string, key: string, forWhichPlayer: player, x: number, y: number, facing: number): unit;

export class GameCache extends Handle<gamecache> {

  public readonly filename: string;

  constructor(campaignFile: string) {
    if (Handle.initFromHandle()) {
      super();
    } else {
      super(InitGameCache(campaignFile));
    }

    this.filename = campaignFile;
  }

  public flush() {
    FlushGameCache(this.handle);
  }

  public flushBoolean(missionKey: string, key: string) {
    FlushStoredBoolean(this.handle, missionKey, key);
  }

  public flushInteger(missionKey: string, key: string) {
    FlushStoredInteger(this.handle, missionKey, key);
  }

  public flushMission(missionKey: string) {
    FlushStoredMission(this.handle, missionKey);
  }

  public flushNumber(missionKey: string, key: string) {
    FlushStoredInteger(this.handle, missionKey, key);
  }

  public flushString(missionKey: string, key: string) {
    FlushStoredString(this.handle, missionKey, key);
  }

  public flushUnit(missionKey: string, key: string) {
    FlushStoredUnit(this.handle, missionKey, key);
  }

  public getBoolean(missionKey: string, key: string) {
    return GetStoredBoolean(this.handle, missionKey, key);
  }

  public getInteger(missionKey: string, key: string) {
    return GetStoredInteger(this.handle, missionKey, key);
  }

  public getNumber(missionKey: string, key: string) {
    return GetStoredReal(this.handle, missionKey, key);
  }

  public getString(missionKey: string, key: string) {
    return GetStoredString(this.handle, missionKey, key);
  }

  public hasBoolean(missionKey: string, key: string) {
    return HaveStoredBoolean(this.handle, missionKey, key);
  }

  public hasInteger(missionKey: string, key: string) {
    return HaveStoredInteger(this.handle, missionKey, key);
  }

  public hasNumber(missionKey: string, key: string) {
    return HaveStoredReal(this.handle, missionKey, key);
  }

  public hasString(missionKey: string, key: string) {
    return HaveStoredString(this.handle, missionKey, key);
  }

  public restoreUnit(missionKey: string, key: string, forWhichPlayer: MapPlayer, x: number, y: number, face: number) {
    return RestoreUnit(this.handle, missionKey, key, forWhichPlayer.handle, x, y, face);
  }

  public save(): boolean {
    return SaveGameCache(this.handle);
  }

  public store(missionKey: string, key: string, value: number | string | boolean | unit) {
    if (typeof value === "string") {
      StoreString(this.handle, missionKey, key, value);
    } else if (typeof value === "boolean") {
      StoreBoolean(this.handle, missionKey, key, value);
    } else if (typeof value === "number") {
      StoreReal(this.handle, missionKey, key, value);
    } else {
      StoreUnit(this.handle, missionKey, key, value);
    }
  }

  public syncBoolean(missionKey: string, key: string) {
    return SyncStoredBoolean(this.handle, missionKey, key);
  }

  public syncInteger(missionKey: string, key: string) {
    return SyncStoredInteger(this.handle, missionKey, key);
  }

  public syncNumber(missionKey: string, key: string) {
    return SyncStoredReal(this.handle, missionKey, key);
  }

  public syncString(missionKey: string, key: string) {
    return SyncStoredString(this.handle, missionKey, key);
  }

  public syncUnit(missionKey: string, key: string) {
    return SyncStoredUnit(this.handle, missionKey, key);
  }

  public static fromHandle(handle: gamecache): GameCache {
    return this.getObject(handle);
  }

  public static reloadFromDisk() {
    return ReloadGameCachesFromDisk();
  }

}
