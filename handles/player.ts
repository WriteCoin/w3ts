/** @noSelfInFile **/

import { Force } from "./force";
import { Handle } from "./handle";
import { Point } from "./point";

declare interface agent extends handle { __agent: never; }
declare interface player extends agent { __player: never; }
declare interface location extends agent { __location: never; }
declare interface race extends handle { __race: never; }
declare interface playerstate extends handle { __playerstate: never; }
declare interface force extends agent { __force: never; }
declare interface playerscore extends handle { __playerscore: never; }
declare interface alliancetype extends handle { __alliancetype: never; }
declare interface playergameresult extends handle { __playergameresult: never; }
declare interface playercolor extends handle { __playercolor: never; }
declare interface mapcontrol extends handle { __mapcontrol: never; }
declare interface racepreference extends handle { __racepreference: never; }
declare interface playerslotstate extends handle { __playerslotstate: never; }

declare function Player(number: number): player;
declare function GetLocalPlayer(): player;
declare function IsPlayerAlly(whichPlayer: player, otherPlayer: player): boolean;
declare function IsPlayerEnemy(whichPlayer: player, otherPlayer: player): boolean;
declare function IsPlayerInForce(whichPlayer: player, whichForce: force): boolean;
declare function IsPlayerObserver(whichPlayer: player): boolean;
declare function IsVisibleToPlayer(x: number, y: number, whichPlayer: player): boolean;
declare function IsLocationVisibleToPlayer(whichLocation: location, whichPlayer: player): boolean;
declare function IsFoggedToPlayer(x: number, y: number, whichPlayer: player): boolean;
declare function IsLocationFoggedToPlayer(whichLocation: location, whichPlayer: player): boolean;
declare function IsMaskedToPlayer(x: number, y: number, whichPlayer: player): boolean;
declare function IsLocationMaskedToPlayer(whichLocation: location, whichPlayer: player): boolean;
declare function GetPlayerRace(whichPlayer: player): race;
declare function GetPlayerId(whichPlayer: player): number;
declare function GetPlayerUnitCount(whichPlayer: player, includeIncomplete: boolean): number;
declare function GetPlayerTypedUnitCount(whichPlayer: player, unitName: string, includeIncomplete: boolean, includeUpgrades: boolean): number;
declare function GetPlayerStructureCount(whichPlayer: player, includeIncomplete: boolean): number;
declare function GetPlayerState(whichPlayer: player, whichPlayerState: playerstate): number;
declare function GetPlayerScore(whichPlayer: player, whichPlayerScore: playerscore): number;
declare function GetPlayerAlliance(sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype): boolean;
declare function GetPlayerHandicap(whichPlayer: player): number;
declare function GetPlayerHandicapXP(whichPlayer: player): number;
declare function GetPlayerHandicapReviveTime(whichPlayer: player): number;
declare function GetPlayerHandicapDamage(whichPlayer: player): number;
declare function SetPlayerHandicap(whichPlayer: player, handicap: number): void;
declare function SetPlayerHandicapXP(whichPlayer: player, handicap: number): void;
declare function SetPlayerHandicapReviveTime(whichPlayer: player, handicap: number): void;
declare function SetPlayerHandicapDamage(whichPlayer: player, handicap: number): void;
declare function SetPlayerTechMaxAllowed(whichPlayer: player, techid: number, maximum: number): void;
declare function GetPlayerTechMaxAllowed(whichPlayer: player, techid: number): number;
declare function AddPlayerTechResearched(whichPlayer: player, techid: number, levels: number): void;
declare function SetPlayerTechResearched(whichPlayer: player, techid: number, setToLevel: number): void;
declare function GetPlayerTechResearched(whichPlayer: player, techid: number, specificonly: boolean): boolean;
declare function GetPlayerTechCount(whichPlayer: player, techid: number, specificonly: boolean): number;
declare function SetPlayerUnitsOwner(whichPlayer: player, newOwner: number): void;
declare function CripplePlayer(whichPlayer: player, toWhichPlayers: force, flag: boolean): void;
declare function SetPlayerAbilityAvailable(whichPlayer: player, abilid: number, avail: boolean): void;
declare function SetPlayerState(whichPlayer: player, whichPlayerState: playerstate, value: number): void;
declare function RemovePlayer(whichPlayer: player, gameResult: playergameresult): void;
declare function CachePlayerHeroData(whichPlayer: player): void;
declare function SetPlayerColor(whichPlayer: player, color: playercolor): void;
declare function SetPlayerAlliance(sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype, value: boolean): void;
declare function SetPlayerTaxRate(sourcePlayer: player, otherPlayer: player, whichResource: playerstate, rate: number): void;
declare function SetPlayerRacePreference(whichPlayer: player, whichRacePreference: racepreference): void;
declare function SetPlayerRaceSelectable(whichPlayer: player, value: boolean): void;
declare function SetPlayerController(whichPlayer: player, controlType: mapcontrol): void;
declare function SetPlayerName(whichPlayer: player, name: string): void;
declare function SetPlayerOnScoreScreen(whichPlayer: player, flag: boolean): void;
declare function GetPlayerTeam(whichPlayer: player): number;
declare function GetPlayerStartLocation(whichPlayer: player): number;
declare function GetPlayerColor(whichPlayer: player): playercolor;
declare function GetPlayerSelectable(whichPlayer: player): boolean;
declare function GetPlayerController(whichPlayer: player): mapcontrol;
declare function GetPlayerSlotState(whichPlayer: player): playerslotstate;
declare function GetPlayerTaxRate(sourcePlayer: player, otherPlayer: player, whichResource: playerstate): number;
declare function IsPlayerRacePrefSet(whichPlayer: player, pref: racepreference): boolean;
declare function GetPlayerName(whichPlayer: player): string;
declare function GetStartLocationX(whichStartLocation: number): number;
declare function GetStartLocationY(whichStartLocation: number): number;
declare function GetStartLocationLoc(whichStartLocation: number): location;
declare function BlzGetPlayerTownHallCount(whichPlayer: player): number;
declare function BlzDecPlayerTechResearched(whichPlayer: player, techid: number, levels: number): void;
declare function RemoveAllGuardPositions(num: player): void;
declare function GetFilterPlayer(): player;
declare function GetEnumPlayer(): player;
declare function GetTriggerPlayer(): player;

export class MapPlayer extends Handle<player> {

  private constructor(index: number) {
    if (Handle.initFromHandle()) {
      super();
    } else {
      super(Player(index));
    }
  }

  public set color(color: playercolor) {
    SetPlayerColor(this.handle, color);
  }

  public get color() {
    return GetPlayerColor(this.handle);
  }

  public get controller() {
    return GetPlayerController(this.handle);
  }

  public get handicap() {
    return GetPlayerHandicap(this.handle);
  }

  public set handicap(handicap: number) {
    SetPlayerHandicap(this.handle, handicap);
  }

  public get handicapXp() {
    return GetPlayerHandicapXP(this.handle);
  }

  public set handicapXp(handicap: number) {
    SetPlayerHandicapXP(this.handle, handicap);
  }

  public get id() {
    return GetPlayerId(this.handle);
  }

  public get name() {
    return GetPlayerName(this.handle);
  }

  public set name(value: string) {
    SetPlayerName(this.handle, value);
  }

  public get race() {
    return GetPlayerRace(this.handle);
  }

  public get slotState() {
    return GetPlayerSlotState(this.handle);
  }

  public get startLocation() {
    return GetPlayerStartLocation(this.handle);
  }

  public get startLocationX() {
    return GetStartLocationX(this.startLocation);
  }

  public get startLocationY() {
    return GetStartLocationY(this.startLocation);
  }

  public get startLocationPoint() {
    return GetStartLocationLoc(this.startLocation);
  }

  public get team() {
    return GetPlayerTeam(this.handle);
  }

  public get townHallCount() {
    return BlzGetPlayerTownHallCount(this.handle);
  }

  public addTechResearched(techId: number, levels: number) {
    AddPlayerTechResearched(this.handle, techId, levels);
  }

  public decTechResearched(techId: number, levels: number) {
    BlzDecPlayerTechResearched(this.handle, techId, levels);
  }

  // Used to store hero level data for the scorescreen
  // before units are moved to neutral passive in melee games
  public cacheHeroData() {
    CachePlayerHeroData(this.handle);
  }

  public compareAlliance(otherPlayer: MapPlayer, whichAllianceSetting: alliancetype) {
    return GetPlayerAlliance(this.handle, otherPlayer.handle, whichAllianceSetting);
  }

  public coordsFogged(x: number, y: number) {
    return IsFoggedToPlayer(x, y, this.handle);
  }

  public coordsMasked(x: number, y: number) {
    return IsMaskedToPlayer(x, y, this.handle);
  }

  public coordsVisible(x: number, y: number) {
    return IsVisibleToPlayer(x, y, this.handle);
  }

  public cripple(toWhichPlayers: Force, flag: boolean) {
    CripplePlayer(this.handle, toWhichPlayers.handle, flag);
  }

  public getScore(whichPlayerScore: playerscore) {
    return GetPlayerScore(this.handle, whichPlayerScore);
  }

  public getState(whichPlayerState: playerstate) {
    return GetPlayerState(this.handle, whichPlayerState);
  }

  public getStructureCount(includeIncomplete: boolean) {
    return GetPlayerStructureCount(this.handle, includeIncomplete);
  }

  public getTaxRate(otherPlayer: player, whichResource: playerstate) {
    return GetPlayerTaxRate(this.handle, otherPlayer, whichResource);
  }

  public getTechCount(techId: number, specificonly: boolean) {
    return GetPlayerTechCount(this.handle, techId, specificonly);
  }

  public getTechMaxAllowed(techId: number) {
    return GetPlayerTechMaxAllowed(this.handle, techId);
  }

  public getTechResearched(techId: number, specificonly: boolean) {
    return GetPlayerTechResearched(this.handle, techId, specificonly);
  }

  public getUnitCount(includeIncomplete: boolean) {
    return GetPlayerUnitCount(this.handle, includeIncomplete);
  }

  public getUnitCountByType(unitName: string, includeIncomplete: boolean, includeUpgrades: boolean) {
    return GetPlayerTypedUnitCount(this.handle, unitName, includeIncomplete, includeUpgrades);
  }

  public inForce(whichForce: Force) {
    return IsPlayerInForce(this.handle, whichForce.handle);
  }

  public isObserver() {
    return IsPlayerObserver(this.handle);
  }

  public isPlayerAlly(otherPlayer: MapPlayer) {
    return IsPlayerAlly(this.handle, otherPlayer.handle);
  }

  public isPlayerEnemy(otherPlayer: MapPlayer) {
    return IsPlayerEnemy(this.handle, otherPlayer.handle);
  }

  public isRacePrefSet(pref: racepreference) {
    return IsPlayerRacePrefSet(this.handle, pref);
  }

  public isSelectable() {
    return GetPlayerSelectable(this.handle);
  }

  public pointFogged(whichPoint: Point) {
    return IsLocationFoggedToPlayer(whichPoint.handle, this.handle);
  }

  public pointMasked(whichPoint: Point) {
    return IsLocationMaskedToPlayer(whichPoint.handle, this.handle);
  }

  public pointVisible(whichPoint: Point) {
    return IsLocationVisibleToPlayer(whichPoint.handle, this.handle);
  }

  public remove(gameResult: playergameresult) {
    RemovePlayer(this.handle, gameResult);
  }

  public removeAllGuardPositions() {
    RemoveAllGuardPositions(this.handle);
  }

  public setAbilityAvailable(abilId: number, avail: boolean) {
    SetPlayerAbilityAvailable(this.handle, abilId, avail);
  }

  public setAlliance(otherPlayer: MapPlayer, whichAllianceSetting: alliancetype, value: boolean) {
    SetPlayerAlliance(this.handle, otherPlayer.handle, whichAllianceSetting, value);
  }

  public setOnScoreScreen(flag: boolean) {
    SetPlayerOnScoreScreen(this.handle, flag);
  }

  public setState(whichPlayerState: playerstate, value: number) {
    SetPlayerState(this.handle, whichPlayerState, value);
  }

  public setTaxRate(otherPlayer: MapPlayer, whichResource: playerstate, rate: number) {
    SetPlayerTaxRate(this.handle, otherPlayer.handle, whichResource, rate);
  }

  public setTechMaxAllowed(techId: number, maximum: number) {
    SetPlayerTechMaxAllowed(this.handle, techId, maximum);
  }

  public setTechResearched(techId: number, setToLevel: number) {
    SetPlayerTechResearched(this.handle, techId, setToLevel);
  }

  public setUnitsOwner(newOwner: number) {
    SetPlayerUnitsOwner(this.handle, newOwner);
  }

  public static fromEnum() {
    return MapPlayer.fromHandle(GetEnumPlayer());
  }

  public static fromEvent() {
    return MapPlayer.fromHandle(GetTriggerPlayer());
  }

  public static fromFilter() {
    return MapPlayer.fromHandle(GetFilterPlayer());
  }

  public static fromHandle(handle: player): MapPlayer {
    return this.getObject(handle);
  }

  public static fromIndex(index: number) {
    return this.fromHandle(Player(index));
  }

  public static fromLocal() {
    return this.fromHandle(GetLocalPlayer());
  }

}
