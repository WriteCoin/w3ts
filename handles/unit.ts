/** @noSelfInFile **/

import { Destructable } from "./destructable";
import { Force } from "./force";
import { Group } from "./group";
import { Handle } from "./handle";
import { Item } from "./item";
import { MapPlayer } from "./player";
import { Point } from "./point";
import { Sound } from "./sound";
import { Widget } from "./widget";

declare interface agent extends handle { __agent: never; }
declare interface widget extends agent { __widget: never; }
declare interface unit extends widget { __unit: never; }
declare interface player extends agent { __player: never; }
declare interface location extends agent { __location: never; }
declare interface unitstate extends handle { __unitstate: never; }
declare interface playercolor extends handle { __playercolor: never; }
declare interface raritycontrol extends handle { __raritycontrol: never; }
declare interface item extends widget { __item: never; }
declare interface race extends handle { __race: never; }
declare interface destructable extends widget { __destructable: never; }
declare interface force extends agent { __force: never; }
declare interface group extends agent { __group: never; }
declare interface unittype extends handle { __unittype: never; }
declare interface attacktype extends handle { __attacktype: never; }
declare interface damagetype extends handle { __damagetype: never; }
declare interface weapontype extends handle { __weapontype: never; }
declare interface unitrealfield extends handle { __unitrealfield: never; }
declare interface sound extends agent { __sound: never; }
declare interface ability extends agent { __ability: never; }
declare interface unitintegerfield extends handle { __unitintegerfield: never; }
declare interface unitrealfield extends handle { __unitrealfield: never; }
declare interface unitbooleanfield extends handle { __unitbooleanfield: never; }
declare interface unitstringfield extends handle { __unitstringfield: never; }
declare interface unitweaponintegerfield extends handle { __unitweaponintegerfield: never; }
declare interface unitweaponrealfield extends handle { __unitweaponrealfield: never; }
declare interface unitweaponbooleanfield extends handle { __unitweaponbooleanfield: never; }
declare interface unitweaponstringfield extends handle { __unitweaponstringfield: never; }

declare function CreateUnit(id: player, unitid: number, x: number, y: number, face: number): unit;
declare function CreateUnitByName(whichPlayer: player, unitname: string, x: number, y: number, face: number): unit;
declare function CreateUnitAtLoc(id: player, unitid: number, whichLocation: location, face: number): unit;
declare function CreateUnitAtLocByName(id: player, unitname: string, whichLocation: location, face: number): unit;
declare function CreateCorpse(whichPlayer: player, unitid: number, x: number, y: number, face: number): unit;
declare function KillUnit(whichUnit: unit): void;
declare function RemoveUnit(whichUnit: unit): void;
declare function ShowUnit(whichUnit: unit, show: boolean): void;
declare function SetUnitState(whichUnit: unit, whichUnitState: unitstate, newVal: number): void;
declare function SetUnitX(whichUnit: unit, newX: number): void;
declare function SetUnitY(whichUnit: unit, newY: number): void;
declare function SetUnitPosition(whichUnit: unit, newX: number, newY: number): void;
declare function SetUnitPositionLoc(whichUnit: unit, whichLocation: location): void;
declare function SetUnitFacing(whichUnit: unit, facingAngle: number): void;
declare function SetUnitFacingTimed(whichUnit: unit, facingAngle: number, duration: number): void;
declare function SetUnitMoveSpeed(whichUnit: unit, newSpeed: number): void;
declare function SetUnitFlyHeight(whichUnit: unit, newHeight: number, rate: number): void;
declare function SetUnitTurnSpeed(whichUnit: unit, newTurnSpeed: number): void;
declare function SetUnitPropWindow(whichUnit: unit, newPropWindowAngle: number): void;
declare function SetUnitAcquireRange(whichUnit: unit, newAcquireRange: number): void;
declare function SetUnitCreepGuard(whichUnit: unit, creepGuard: boolean): void;
declare function GetUnitAcquireRange(whichUnit: unit): number;
declare function GetUnitTurnSpeed(whichUnit: unit): number;
declare function GetUnitPropWindow(whichUnit: unit): number;
declare function GetUnitFlyHeight(whichUnit: unit): number;
declare function GetUnitDefaultAcquireRange(whichUnit: unit): number;
declare function GetUnitDefaultTurnSpeed(whichUnit: unit): number;
declare function GetUnitDefaultPropWindow(whichUnit: unit): number;
declare function GetUnitDefaultFlyHeight(whichUnit: unit): number;
declare function SetUnitOwner(whichUnit: unit, whichPlayer: player, changeColor: boolean): void;
declare function SetUnitColor(whichUnit: unit, whichColor: playercolor): void;
declare function SetUnitScale(whichUnit: unit, scaleX: number, scaleY: number, scaleZ: number): void;
declare function SetUnitTimeScale(whichUnit: unit, timeScale: number): void;
declare function SetUnitBlendTime(whichUnit: unit, blendTime: number): void;
declare function SetUnitVertexColor(whichUnit: unit, red: number, green: number, blue: number, alpha: number): void;
declare function QueueUnitAnimation(whichUnit: unit, whichAnimation: string): void;
declare function SetUnitAnimation(whichUnit: unit, whichAnimation: string): void;
declare function SetUnitAnimationByIndex(whichUnit: unit, whichAnimation: number): void;
declare function SetUnitAnimationWithRarity(whichUnit: unit, whichAnimation: string, rarity: raritycontrol): void;
declare function AddUnitAnimationProperties(whichUnit: unit, animProperties: string, add: boolean): void;
declare function SetUnitLookAt(whichUnit: unit, whichBone: string, lookAtTarget: unit, offsetX: number, offsetY: number, offsetZ: number): void;
declare function ResetUnitLookAt(whichUnit: unit): void;
declare function SetUnitRescuable(whichUnit: unit, byWhichPlayer: player, flag: boolean): void;
declare function SetUnitRescueRange(whichUnit: unit, range: number): void;
declare function SetHeroStr(whichHero: unit, newStr: number, permanent: boolean): void;
declare function SetHeroAgi(whichHero: unit, newAgi: number, permanent: boolean): void;
declare function SetHeroInt(whichHero: unit, newInt: number, permanent: boolean): void;
declare function GetHeroStr(whichHero: unit, includeBonuses: boolean): number;
declare function GetHeroAgi(whichHero: unit, includeBonuses: boolean): number;
declare function GetHeroInt(whichHero: unit, includeBonuses: boolean): number;
declare function UnitStripHeroLevel(whichHero: unit, howManyLevels: number): boolean;
declare function GetHeroXP(whichHero: unit): number;
declare function SetHeroXP(whichHero: unit, newXpVal: number, showEyeCandy: boolean): void;
declare function GetHeroSkillPoints(whichHero: unit): number;
declare function UnitModifySkillPoints(whichHero: unit, skillPointDelta: number): boolean;
declare function AddHeroXP(whichHero: unit, xpToAdd: number, showEyeCandy: boolean): void;
declare function SetHeroLevel(whichHero: unit, level: number, showEyeCandy: boolean): void;
declare function GetHeroLevel(whichHero: unit): number;
declare function GetUnitLevel(whichUnit: unit): number;
declare function GetHeroProperName(whichHero: unit): string;
declare function SuspendHeroXP(whichHero: unit, flag: boolean): void;
declare function IsSuspendedXP(whichHero: unit): boolean;
declare function SelectHeroSkill(whichHero: unit, abilcode: number): void;
declare function GetUnitAbilityLevel(whichUnit: unit, abilcode: number): number;
declare function DecUnitAbilityLevel(whichUnit: unit, abilcode: number): number;
declare function IncUnitAbilityLevel(whichUnit: unit, abilcode: number): number;
declare function SetUnitAbilityLevel(whichUnit: unit, abilcode: number, level: number): number;
declare function ReviveHero(whichHero: unit, x: number, y: number, doEyecandy: boolean): boolean;
declare function ReviveHeroLoc(whichHero: unit, loc: location, doEyecandy: boolean): boolean;
declare function SetUnitExploded(whichUnit: unit, exploded: boolean): void;
declare function SetUnitInvulnerable(whichUnit: unit, flag: boolean): void;
declare function PauseUnit(whichUnit: unit, flag: boolean): void;
declare function IsUnitPaused(whichHero: unit): boolean;
declare function SetUnitPathing(whichUnit: unit, flag: boolean): void;
declare function ClearSelection(): void;
declare function SelectUnit(whichUnit: unit, flag: boolean): void;
declare function GetUnitPointValue(whichUnit: unit): number;
declare function GetUnitPointValueByType(unitType: number): number;
declare function UnitAddItem(whichUnit: unit, whichItem: item): boolean;
declare function UnitAddItemById(whichUnit: unit, itemId: number): item;
declare function UnitAddItemToSlotById(whichUnit: unit, itemId: number, itemSlot: number): boolean;
declare function UnitRemoveItem(whichUnit: unit, whichItem: item): void;
declare function UnitRemoveItemFromSlot(whichUnit: unit, itemSlot: number): item;
declare function UnitHasItem(whichUnit: unit, whichItem: item): boolean;
declare function UnitItemInSlot(whichUnit: unit, itemSlot: number): item;
declare function UnitInventorySize(whichUnit: unit): number;
declare function UnitDropItemPoint(whichUnit: unit, whichItem: item, x: number, y: number): boolean;
declare function UnitDropItemSlot(whichUnit: unit, whichItem: item, slot: number): boolean;
declare function UnitDropItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean;
declare function UnitUseItem(whichUnit: unit, whichItem: item): boolean;
declare function UnitUseItemPoint(whichUnit: unit, whichItem: item, x: number, y: number): boolean;
declare function UnitUseItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean;
declare function GetUnitX(whichUnit: unit): number;
declare function GetUnitY(whichUnit: unit): number;
declare function GetUnitLoc(whichUnit: unit): location;
declare function GetUnitFacing(whichUnit: unit): number;
declare function GetUnitMoveSpeed(whichUnit: unit): number;
declare function GetUnitDefaultMoveSpeed(whichUnit: unit): number;
declare function GetUnitState(whichUnit: unit, whichUnitState: unitstate): number;
declare function GetOwningPlayer(whichUnit: unit): player;
declare function GetUnitTypeId(whichUnit: unit): number;
declare function GetUnitRace(whichUnit: unit): race;
declare function GetUnitName(whichUnit: unit): string;
declare function GetUnitFoodUsed(whichUnit: unit): number;
declare function GetUnitFoodMade(whichUnit: unit): number;
declare function BlzCreateUnitWithSkin(id: player, unitid: number, x: number, y: number, face: number, skinId: number): unit;
declare function Player(number: number): player;
declare function BlzGetUnitArmor(whichUnit: unit): number;
declare function BlzSetUnitArmor(whichUnit: unit, armorAmount: number): void;
declare function BlzUnitHideAbility(whichUnit: unit, abilId: number, flag: boolean): void;
declare function BlzUnitDisableAbility(whichUnit: unit, abilId: number, flag: boolean, hideUI: boolean): void;
declare function BlzUnitCancelTimedLife(whichUnit: unit): void;
declare function BlzIsUnitSelectable(whichUnit: unit): boolean;
declare function BlzIsUnitInvulnerable(whichUnit: unit): boolean;
declare function BlzUnitInterruptAttack(whichUnit: unit): void;
declare function BlzGetUnitCollisionSize(whichUnit: unit): number;
declare function SetUnitUseFood(whichUnit: unit, useFood: boolean): void;
declare function GetUnitRallyPoint(whichUnit: unit): location;
declare function GetUnitRallyUnit(whichUnit: unit): unit;
declare function GetUnitRallyDestructable(whichUnit: unit): destructable;
declare function IsUnitInGroup(whichUnit: unit, whichGroup: group): boolean;
declare function IsUnitInForce(whichUnit: unit, whichForce: force): boolean;
declare function IsUnitOwnedByPlayer(whichUnit: unit, whichPlayer: player): boolean;
declare function IsUnitAlly(whichUnit: unit, whichPlayer: player): boolean;
declare function IsUnitEnemy(whichUnit: unit, whichPlayer: player): boolean;
declare function IsUnitVisible(whichUnit: unit, whichPlayer: player): boolean;
declare function IsUnitDetected(whichUnit: unit, whichPlayer: player): boolean;
declare function IsUnitInvisible(whichUnit: unit, whichPlayer: player): boolean;
declare function IsUnitFogged(whichUnit: unit, whichPlayer: player): boolean;
declare function IsUnitMasked(whichUnit: unit, whichPlayer: player): boolean;
declare function IsUnitSelected(whichUnit: unit, whichPlayer: player): boolean;
declare function IsUnitRace(whichUnit: unit, whichRace: race): boolean;
declare function IsUnitType(whichUnit: unit, whichUnitType: unittype): boolean;
declare function IsUnit(whichUnit: unit, whichSpecifiedUnit: unit): boolean;
declare function IsUnitInRange(whichUnit: unit, otherUnit: unit, distance: number): boolean;
declare function IsUnitInRangeXY(whichUnit: unit, x: number, y: number, distance: number): boolean;
declare function IsUnitInRangeLoc(whichUnit: unit, whichLocation: location, distance: number): boolean;
declare function IsUnitHidden(whichUnit: unit): boolean;
declare function IsUnitIllusion(whichUnit: unit): boolean;
declare function IsUnitInTransport(whichUnit: unit, whichTransport: unit): boolean;
declare function IsUnitLoaded(whichUnit: unit): boolean;
declare function UnitShareVision(whichUnit: unit, whichPlayer: player, share: boolean): void;
declare function UnitSuspendDecay(whichUnit: unit, suspend: boolean): void;
declare function UnitAddType(whichUnit: unit, whichUnitType: unittype): boolean;
declare function UnitRemoveType(whichUnit: unit, whichUnitType: unittype): boolean;
declare function UnitAddAbility(whichUnit: unit, abilityId: number): boolean;
declare function UnitRemoveAbility(whichUnit: unit, abilityId: number): boolean;
declare function UnitMakeAbilityPermanent(whichUnit: unit, permanent: boolean, abilityId: number): boolean;
declare function UnitRemoveBuffs(whichUnit: unit, removePositive: boolean, removeNegative: boolean): void;
declare function UnitRemoveBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): void;
declare function UnitHasBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): boolean;
declare function UnitCountBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): number;
declare function UnitAddSleep(whichUnit: unit, add: boolean): void;
declare function UnitCanSleep(whichUnit: unit): boolean;
declare function UnitAddSleepPerm(whichUnit: unit, add: boolean): void;
declare function UnitCanSleepPerm(whichUnit: unit): boolean;
declare function UnitIsSleeping(whichUnit: unit): boolean;
declare function UnitWakeUp(whichUnit: unit): void;
declare function UnitApplyTimedLife(whichUnit: unit, buffId: number, duration: number): void;
declare function UnitIgnoreAlarm(whichUnit: unit, flag: boolean): boolean;
declare function UnitIgnoreAlarmToggled(whichUnit: unit): boolean;
declare function UnitResetCooldown(whichUnit: unit): void;
declare function UnitSetConstructionProgress(whichUnit: unit, constructionPercentage: number): void;
declare function UnitSetUpgradeProgress(whichUnit: unit, upgradePercentage: number): void;
declare function UnitPauseTimedLife(whichUnit: unit, flag: boolean): void;
declare function UnitSetUsesAltIcon(whichUnit: unit, flag: boolean): void;
declare function UnitDamagePoint(whichUnit: unit, delay: number, radius: number, x: number, y: number, amount: number, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean;
declare function UnitDamageTarget(whichUnit: unit, target: widget, amount: number, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean;
declare function IssueImmediateOrder(whichUnit: unit, order: string): boolean;
declare function IssueImmediateOrderById(whichUnit: unit, order: number): boolean;
declare function IssuePointOrder(whichUnit: unit, order: string, x: number, y: number): boolean;
declare function IssuePointOrderLoc(whichUnit: unit, order: string, whichLocation: location): boolean;
declare function IssuePointOrderById(whichUnit: unit, order: number, x: number, y: number): boolean;
declare function IssuePointOrderByIdLoc(whichUnit: unit, order: number, whichLocation: location): boolean;
declare function IssueTargetOrder(whichUnit: unit, order: string, targetWidget: widget): boolean;
declare function IssueTargetOrderById(whichUnit: unit, order: number, targetWidget: widget): boolean;
declare function IssueInstantPointOrder(whichUnit: unit, order: string, x: number, y: number, instantTargetWidget: widget): boolean;
declare function IssueInstantPointOrderById(whichUnit: unit, order: number, x: number, y: number, instantTargetWidget: widget): boolean;
declare function IssueInstantTargetOrder(whichUnit: unit, order: string, targetWidget: widget, instantTargetWidget: widget): boolean;
declare function IssueInstantTargetOrderById(whichUnit: unit, order: number, targetWidget: widget, instantTargetWidget: widget): boolean;
declare function IssueBuildOrder(whichPeon: unit, unitToBuild: string, x: number, y: number): boolean;
declare function IssueBuildOrderById(whichPeon: unit, unitId: number, x: number, y: number): boolean;
declare function GetUnitCurrentOrder(whichUnit: unit): number;
declare function SetResourceAmount(whichUnit: unit, amount: number): void;
declare function AddResourceAmount(whichUnit: unit, amount: number): void;
declare function GetResourceAmount(whichUnit: unit): number;
declare function WaygateGetDestinationX(waygate: unit): number;
declare function WaygateGetDestinationY(waygate: unit): number;
declare function WaygateSetDestination(waygate: unit, x: number, y: number): void;
declare function WaygateActivate(waygate: unit, activate: boolean): void;
declare function WaygateIsActive(waygate: unit): boolean;
declare function BlzSetUnitAbilityCooldown(whichUnit: unit, abilId: number, level: number, cooldown: number): void;
declare function BlzGetUnitAbilityCooldown(whichUnit: unit, abilId: number, level: number): number;
declare function BlzGetUnitAbilityCooldownRemaining(whichUnit: unit, abilId: number): number;
declare function BlzEndUnitAbilityCooldown(whichUnit: unit, abilCode: number): void;
declare function BlzStartUnitAbilityCooldown(whichUnit: unit, abilCode: number, cooldown: number): void;
declare function BlzGetUnitAbilityManaCost(whichUnit: unit, abilId: number, level: number): number;
declare function BlzSetUnitAbilityManaCost(whichUnit: unit, abilId: number, level: number, manaCost: number): void;
declare function BlzGetLocalUnitZ(whichUnit: unit): number;
declare const UNIT_STATE_MANA: unitstate;
declare function BlzGetUnitMaxHP(whichUnit: unit): number;
declare function BlzSetUnitMaxHP(whichUnit: unit, hp: number): void;
declare function BlzGetUnitMaxMana(whichUnit: unit): number;
declare function BlzSetUnitMaxMana(whichUnit: unit, mana: number): void;
declare function BlzSetUnitName(whichUnit: unit, name: string): void;
declare function BlzSetHeroProperName(whichUnit: unit, heroProperName: string): void;
declare function BlzGetUnitBaseDamage(whichUnit: unit, weaponIndex: number): number;
declare function BlzSetUnitBaseDamage(whichUnit: unit, baseDamage: number, weaponIndex: number): void;
declare function BlzGetUnitDiceNumber(whichUnit: unit, weaponIndex: number): number;
declare function BlzSetUnitDiceNumber(whichUnit: unit, diceNumber: number, weaponIndex: number): void;
declare function BlzGetUnitDiceSides(whichUnit: unit, weaponIndex: number): number;
declare function BlzSetUnitDiceSides(whichUnit: unit, diceSides: number, weaponIndex: number): void;
declare function BlzGetUnitAttackCooldown(whichUnit: unit, weaponIndex: number): number;
declare function BlzSetUnitAttackCooldown(whichUnit: unit, cooldown: number, weaponIndex: number): void;
declare const UNIT_RF_SELECTION_SCALE: unitrealfield;
declare function BlzGetUnitSkin(whichUnit: unit): number;
declare function BlzSetUnitSkin(whichUnit: unit, skinId: number): void;
declare function SetItemTypeSlots(whichUnit: unit, slots: number): void;
declare function SetUnitTypeSlots(whichUnit: unit, slots: number): void;
declare function GetUnitUserData(whichUnit: unit): number;
declare function SetUnitUserData(whichUnit: unit, data: number): void;
declare function BlzGetUnitZ(whichUnit: unit): number;
declare function UnitAddIndicator(whichUnit: unit, red: number, green: number, blue: number, alpha: number): void;
declare function AddItemToStock(whichUnit: unit, itemId: number, currentStock: number, stockMax: number): void;
declare function AddUnitToStock(whichUnit: unit, unitId: number, currentStock: number, stockMax: number): void;
declare function AttachSoundToUnit(soundHandle: sound, whichUnit: unit): void;
declare function BlzSetUnitAbilityCooldown(whichUnit: unit, abilId: number, level: number, cooldown: number): void;
declare function BlzGetUnitAbilityCooldown(whichUnit: unit, abilId: number, level: number): number;
declare function BlzGetUnitAbilityCooldownRemaining(whichUnit: unit, abilId: number): number;
declare function BlzEndUnitAbilityCooldown(whichUnit: unit, abilCode: number): void;
declare function BlzStartUnitAbilityCooldown(whichUnit: unit, abilCode: number, cooldown: number): void;
declare function BlzGetUnitAbilityManaCost(whichUnit: unit, abilId: number, level: number): number;
declare function BlzSetUnitAbilityManaCost(whichUnit: unit, abilId: number, level: number, manaCost: number): void;
declare function BlzGetLocalUnitZ(whichUnit: unit): number;
declare function BlzGetUnitAbility(whichUnit: unit, abilId: number): ability;
declare function BlzGetUnitAbilityByIndex(whichUnit: unit, index: number): ability;
declare function BlzGetUnitBooleanField(whichUnit: unit, whichField: unitbooleanfield): boolean;
declare function BlzGetUnitIntegerField(whichUnit: unit, whichField: unitintegerfield): number;
declare function BlzGetUnitRealField(whichUnit: unit, whichField: unitrealfield): number;
declare function BlzGetUnitStringField(whichUnit: unit, whichField: unitstringfield): string;
declare function BlzSetUnitBooleanField(whichUnit: unit, whichField: unitbooleanfield, value: boolean): boolean;
declare function BlzSetUnitIntegerField(whichUnit: unit, whichField: unitintegerfield, value: number): boolean;
declare function BlzSetUnitRealField(whichUnit: unit, whichField: unitrealfield, value: number): boolean;
declare function BlzSetUnitStringField(whichUnit: unit, whichField: unitstringfield, value: string): boolean;
declare function BlzGetUnitWeaponBooleanField(whichUnit: unit, whichField: unitweaponbooleanfield, index: number): boolean;
declare function BlzGetUnitWeaponIntegerField(whichUnit: unit, whichField: unitweaponintegerfield, index: number): number;
declare function BlzGetUnitWeaponRealField(whichUnit: unit, whichField: unitweaponrealfield, index: number): number;
declare function BlzGetUnitWeaponStringField(whichUnit: unit, whichField: unitweaponstringfield, index: number): string;
declare function BlzSetUnitWeaponBooleanField(whichUnit: unit, whichField: unitweaponbooleanfield, index: number, value: boolean): boolean;
declare function BlzSetUnitWeaponIntegerField(whichUnit: unit, whichField: unitweaponintegerfield, index: number, value: number): boolean;
declare function BlzSetUnitWeaponRealField(whichUnit: unit, whichField: unitweaponrealfield, index: number, value: number): boolean;
declare function BlzSetUnitWeaponStringField(whichUnit: unit, whichField: unitweaponstringfield, index: number, value: string): boolean;
declare function UnitAlive(id: unit): boolean;
declare function IsHeroUnitId(unitId: number): boolean;
declare function BlzPauseUnitEx(whichUnit: unit, flag: boolean): void;
declare function BlzSetUnitFacingEx(whichUnit: unit, facingAngle: number): void;
declare function RemoveGuardPosition(hUnit: unit): void;
declare function RecycleGuardPosition(hUnit: unit): void;
declare function RemoveItemFromStock(whichUnit: unit, itemId: number): void;
declare function RemoveUnitFromStock(whichUnit: unit, unitId: number): void;
declare function BlzShowUnitTeamGlow(whichUnit: unit, show: boolean): void;
declare function GetFoodUsed(unitId: number): number;
declare function GetFoodMade(unitId: number): number;
declare function GetTriggerUnit(): unit;
declare function IsUnitIdType(unitId: number, whichUnitType: unittype): boolean;

export class Unit extends Widget {

  public readonly handle!: unit;

  constructor(owner: MapPlayer | number, unitId: number, x: number, y: number, face: number, skinId?: number) {
    if (Handle.initFromHandle()) {
      super();
    } else {
      const p = typeof owner === "number" ? Player(owner) : owner.handle;
      super(skinId ? BlzCreateUnitWithSkin(p, unitId, x, y, face, skinId) : CreateUnit(p, unitId, x, y, face));
    }
  }

  public set acquireRange(value: number) {
    SetUnitAcquireRange(this.handle, value);
  }

  public get acquireRange() {
    return GetUnitPropWindow(this.handle);
  }

  public get agility() {
    return GetHeroAgi(this.handle, false);
  }

  public set agility(value: number) {
    SetHeroAgi(this.handle, value, true);
  }

  public get armor() {
    return BlzGetUnitArmor(this.handle);
  }

  public set armor(armorAmount: number) {
    BlzSetUnitArmor(this.handle, armorAmount);
  }

  public set canSleep(flag: boolean) {
    UnitAddSleep(this.handle, flag);
  }

  public get canSleep() {
    return UnitCanSleep(this.handle);
  }

  public get collisionSize() {
    return BlzGetUnitCollisionSize(this.handle);
  }

  public set color(whichColor: playercolor) {
    SetUnitColor(this.handle, whichColor);
  }

  public get currentOrder() {
    return GetUnitCurrentOrder(this.handle);
  }

  public get defaultAcquireRange() {
    return GetUnitDefaultAcquireRange(this.handle);
  }

  public get defaultFlyHeight() {
    return GetUnitDefaultFlyHeight(this.handle);
  }

  public get defaultMoveSpeed() {
    return GetUnitDefaultMoveSpeed(this.handle);
  }

  public get defaultPropWindow() {
    return GetUnitDefaultPropWindow(this.handle);
  }

  public get defaultTurnSpeed() {
    return GetUnitDefaultTurnSpeed(this.handle);
  }

  public get experience() {
    return GetHeroXP(this.handle);
  }

  public set experience(newXpVal: number) {
    SetHeroXP(this.handle, newXpVal, true);
  }

  public set facing(value: number) {
    SetUnitFacing(this.handle, value);
  }

  public get facing() {
    return GetUnitFacing(this.handle);
  }

  public get foodMade() {
    return GetUnitFoodMade(this.handle);
  }

  public get foodUsed() {
    return GetUnitFoodUsed(this.handle);
  }

  public get ignoreAlarmToggled() {
    return UnitIgnoreAlarmToggled(this.handle);
  }

  public get intelligence() {
    return GetHeroInt(this.handle, false);
  }

  public set intelligence(value: number) {
    SetHeroInt(this.handle, value, true);
  }

  public get inventorySize() {
    return UnitInventorySize(this.handle);
  }

  public set invulnerable(flag: boolean) {
    SetUnitInvulnerable(this.handle, flag);
  }

  public get invulnerable() {
    return BlzIsUnitInvulnerable(this.handle);
  }

  public get level() {
    return GetUnitLevel(this.handle);
  }

  public get localZ() {
    return BlzGetLocalUnitZ(this.handle);
  }

  public get mana() {
    return this.getState(UNIT_STATE_MANA);
  }

  public set mana(value: number) {
    this.setState(UNIT_STATE_MANA, value);
  }

  public get maxLife() {
    return BlzGetUnitMaxHP(this.handle);
  }

  public set maxLife(value: number) {
    BlzSetUnitMaxHP(this.handle, value);
  }

  public get maxMana() {
    return BlzGetUnitMaxMana(this.handle);
  }

  public set maxMana(value: number) {
    BlzSetUnitMaxMana(this.handle, value);
  }

  public set moveSpeed(value: number) {
    SetUnitMoveSpeed(this.handle, value);
  }

  public get moveSpeed() {
    return GetUnitMoveSpeed(this.handle);
  }

  get name() {
    return GetUnitName(this.handle);
  }

  set name(value: string) {
    BlzSetUnitName(this.handle, value);
  }

  public set nameProper(value: string) {
    BlzSetHeroProperName(this.handle, value);
  }

  public get nameProper() {
    return GetHeroProperName(this.handle);
  }

  public set owner(whichPlayer: MapPlayer) {
    SetUnitOwner(this.handle, whichPlayer.handle, true);
  }

  public get owner() {
    return MapPlayer.fromHandle(GetOwningPlayer(this.handle));
  }

  public set paused(flag: boolean) {
    PauseUnit(this.handle, flag);
  }

  public get paused() {
    return IsUnitPaused(this.handle);
  }

  public get point() {
    return Point.fromHandle(GetUnitLoc(this.handle));
  }

  public set point(whichPoint: Point) {
    SetUnitPositionLoc(this.handle, whichPoint.handle);
  }

  public get pointValue() {
    return GetUnitPointValue(this.handle);
  }

  public set propWindow(value: number) {
    SetUnitPropWindow(this.handle, value);
  }

  public get propWindow() {
    return GetUnitAcquireRange(this.handle);
  }

  public get race() {
    return GetUnitRace(this.handle);
  }

  public get rallyDestructable() {
    return Destructable.fromHandle(GetUnitRallyDestructable(this.handle));
  }

  public get rallyPoint() {
    return Point.fromHandle(GetUnitRallyPoint(this.handle));
  }

  public get rallyUnit() {
    return Unit.fromHandle(GetUnitRallyUnit(this.handle));
  }

  public set resourceAmount(amount: number) {
    SetResourceAmount(this.handle, amount);
  }

  public get resourceAmount() {
    return GetResourceAmount(this.handle);
  }

  public get selectable() {
    return BlzIsUnitSelectable(this.handle);
  }

  public set selectionScale(scale: number) {
    this.setField(UNIT_RF_SELECTION_SCALE, scale);
  }

  public get selectionScale() {
    const result = this.getField(UNIT_RF_SELECTION_SCALE);
    return typeof result === "number" ? result : 0;
  }

  public set show(flag: boolean) {
    ShowUnit(this.handle, flag);
  }

  public get show() {
    return IsUnitHidden(this.handle);
  }

  public get skin() {
    return BlzGetUnitSkin(this.handle);
  }

  public set skin(skinId: number) {
    BlzSetUnitSkin(this.handle, skinId);
  }

  public get skillPoints() {
    return GetHeroSkillPoints(this.handle);
  }

  public set skillPoints(skillPointDelta: number) {
    UnitModifySkillPoints(this.handle, skillPointDelta);
  }

  public get sleeping() {
    return UnitIsSleeping(this.handle);
  }

  public get strength() {
    return GetHeroStr(this.handle, false);
  }

  public set strength(value: number) {
    SetHeroStr(this.handle, value, true);
  }

  public set turnSpeed(value: number) {
    SetUnitTurnSpeed(this.handle, value);
  }

  public get turnSpeed() {
    return GetUnitTurnSpeed(this.handle);
  }

  public get typeId() {
    return GetUnitTypeId(this.handle);
  }

  public get userData() {
    return GetUnitUserData(this.handle);
  }

  public set userData(value: number) {
    SetUnitUserData(this.handle, value);
  }

  public set waygateActive(flag: boolean) {
    WaygateActivate(this.handle, flag);
  }

  public get waygateActive() {
    return WaygateIsActive(this.handle);
  }

  public get x() {
    return GetUnitX(this.handle);
  }

  public set x(value: number) {
    SetUnitX(this.handle, value);
  }

  public get y() {
    return GetUnitY(this.handle);
  }

  public set y(value: number) {
    SetUnitY(this.handle, value);
  }

  public get z() {
    return BlzGetUnitZ(this.handle);
  }

  public addAbility(abilityId: number) {
    return UnitAddAbility(this.handle, abilityId);
  }

  public addAnimationProps(animProperties: string, add: boolean) {
    AddUnitAnimationProperties(this.handle, animProperties, add);
  }

  public addExperience(xpToAdd: number, showEyeCandy: boolean) {
    AddHeroXP(this.handle, xpToAdd, showEyeCandy);
  }

  public addIndicator(red: number, blue: number, green: number, alpha: number, ) {
    UnitAddIndicator(this.handle, red, blue, green, alpha);
  }

  public addItem(whichItem: Item) {
    return UnitAddItem(this.handle, whichItem.handle);
  }

  public addItemById(itemId: number) {
    return UnitAddItemById(this.handle, itemId);
  }

  public addItemToSlotById(itemId: number, itemSlot: number) {
    return UnitAddItemToSlotById(this.handle, itemId, itemSlot);
  }

  public addItemToStock(itemId: number, currentStock: number, stockMax: number) {
    AddItemToStock(this.handle, itemId, currentStock, stockMax);
  }

  public addResourceAmount(amount: number) {
    AddResourceAmount(this.handle, amount);
  }

  public addSleepPerm(add: boolean) {
    UnitAddSleepPerm(this.handle, add);
  }

  public addType(whichUnitType: unittype) {
    return UnitAddType(this.handle, whichUnitType);
  }

  public addUnitToStock(unitId: number, currentStock: number, stockMax: number) {
    AddUnitToStock(this.handle, unitId, currentStock, stockMax);
  }

  public applyTimedLife(buffId: number, duration: number) {
    UnitApplyTimedLife(this.handle, buffId, duration);
  }

  public attachSound(sound: Sound) {
    AttachSoundToUnit(sound.handle, this.handle);
  }

  public cancelTimedLife() {
    BlzUnitCancelTimedLife(this.handle);
  }

  public canSleepPerm() {
    return UnitCanSleepPerm(this.handle);
  }

  public countBuffs(removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean) {
    return UnitCountBuffsEx(this.handle, removePositive, removeNegative, magic, physical, timedLife, aura, autoDispel);
  }

  public damageAt(delay: number, radius: number, x: number, y: number, amount: number, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype) {
    return UnitDamagePoint(this.handle, delay, radius, x, y, amount, attack, ranged, attackType, damageType, weaponType);
  }

  public damageTarget(target: widget, amount: number, radius: number, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype) {
    return UnitDamageTarget(this.handle, target, amount, attack, ranged, attackType, damageType, weaponType);
  }

  public decAbilityLevel(abilCode: number) {
    return DecUnitAbilityLevel(this.handle, abilCode);
  }

  public destroy() {
    RemoveUnit(this.handle);
  }

  public disableAbility(abilId: number, flag: boolean, hideUI: boolean) {
    BlzUnitHideAbility(this.handle, abilId, flag);
  }

  public dropItem(whichItem: Item, x: number, y: number) {
    return UnitDropItemPoint(this.handle, whichItem.handle, x, y);
  }

  public dropItemFromSlot(whichItem: Item, slot: number) {
    return UnitDropItemSlot(this.handle, whichItem.handle, slot);
  }

  public dropItemTarget(whichItem: Item, target: Widget/* | Unit | Item | Destructable*/) {
    return UnitDropItemTarget(this.handle, whichItem.handle, target.handle);
  }

  public endAbilityCooldown(abilCode: number) {
    BlzEndUnitAbilityCooldown(this.handle, abilCode);
  }

  public getAbility(abilId: number) {
    return BlzGetUnitAbility(this.handle, abilId);
  }

  public getAbilityByIndex(index: number) {
    return BlzGetUnitAbilityByIndex(this.handle, index);
  }

  public getAbilityCooldown(abilId: number, level: number) {
    return BlzGetUnitAbilityCooldown(this.handle, abilId, level);
  }

  public getAbilityCooldownRemaining(abilId: number, level: number) {
    return BlzGetUnitAbilityCooldownRemaining(this.handle, abilId);
  }

  public getAbilityLevel(abilCode: number) {
    return GetUnitAbilityLevel(this.handle, abilCode);
  }

  public getAbilityManaCost(abilId: number, level: number) {
    return BlzGetUnitAbilityManaCost(this.handle, abilId, level);
  }

  public getAgility(includeBonuses: boolean) {
    return GetHeroAgi(this.handle, includeBonuses);
  }

  public getAttackCooldown(weaponIndex: number) {
    return BlzGetUnitAttackCooldown(this.handle, weaponIndex);
  }

  public getBaseDamage(weaponIndex: number) {
    return BlzGetUnitBaseDamage(this.handle, weaponIndex);
  }

  public getDiceNumber(weaponIndex: number) {
    return BlzGetUnitDiceNumber(this.handle, weaponIndex);
  }

  public getDiceSides(weaponIndex: number) {
    return BlzGetUnitDiceSides(this.handle, weaponIndex);
  }

  public getField(field: unitbooleanfield | unitintegerfield | unitrealfield | unitstringfield) {
    const fieldType = field.toString().substr(0, field.toString().indexOf(":"));

    switch (fieldType) {
      case "unitbooleanfield":
        const fieldBool: unitbooleanfield = field as unitbooleanfield;

        return BlzGetUnitBooleanField(this.handle, fieldBool);
      case "unitintegerfield":
        const fieldInt: unitintegerfield = field as unitintegerfield;

        return BlzGetUnitIntegerField(this.handle, fieldInt);
      case "unitrealfield":
        const fieldReal: unitrealfield = field as unitrealfield;

        return BlzGetUnitRealField(this.handle, fieldReal);
      case "unitstringfield":
        const fieldString: unitstringfield = field as unitstringfield;

        return BlzGetUnitStringField(this.handle, fieldString);
      default:
        return 0;
    }
  }

  public getflyHeight() {
    return GetUnitFlyHeight(this.handle);
  }

  public getHeroLevel() {
    return GetHeroLevel(this.handle);
  }

  public getIgnoreAlarm(flag: boolean) {
    return UnitIgnoreAlarm(this.handle, flag);
  }

  public getIntelligence(includeBonuses: boolean) {
    return GetHeroInt(this.handle, includeBonuses);
  }

  public getItemInSlot(slot: number) {
    return UnitItemInSlot(this.handle, slot);
  }

  public getState(whichUnitState: unitstate) {
    return GetUnitState(this.handle, whichUnitState);
  }

  public getStrength(includeBonuses: boolean) {
    return GetHeroStr(this.handle, includeBonuses);
  }

  public hasBuffs(removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean) {
    return UnitHasBuffsEx(this.handle, removePositive, removeNegative, magic, physical, timedLife, aura, autoDispel);
  }

  public hasItem(whichItem: Item) {
    return UnitHasItem(this.handle, whichItem.handle);
  }

  public hideAbility(abilId: number, flag: boolean) {
    BlzUnitHideAbility(this.handle, abilId, flag);
  }

  public incAbilityLevel(abilCode: number) {
    return IncUnitAbilityLevel(this.handle, abilCode);
  }

  public inForce(whichForce: Force) {
    return IsUnitInForce(this.handle, whichForce.handle);
  }

  public inGroup(whichGroup: Group) {
    return IsUnitInGroup(this.handle, whichGroup.handle);
  }

  public inRange(x: number, y: number, distance: number) {
    return IsUnitInRangeXY(this.handle, x, y, distance);
  }

  public inRangeOfPoint(whichPoint: Point, distance: number) {
    return IsUnitInRangeLoc(this.handle, whichPoint.handle, distance);
  }

  public inRangeOfUnit(otherUnit: Unit, distance: number) {
    return IsUnitInRange(this.handle, otherUnit.handle, distance);
  }

  public interruptAttack() {
    BlzUnitInterruptAttack(this.handle);
  }

  public inTransport(whichTransport: Unit) {
    return IsUnitInTransport(this.handle, whichTransport.handle);
  }

  public isAlive(): boolean {
    return UnitAlive(this.handle);
  }

  public isAlly(whichPlayer: MapPlayer) {
    return IsUnitAlly(this.handle, whichPlayer.handle);
  }

  public isEnemy(whichPlayer: MapPlayer) {
    return IsUnitEnemy(this.handle, whichPlayer.handle);
  }

  public isExperienceSuspended() {
    return IsSuspendedXP(this.handle);
  }

  public isFogged(whichPlayer: MapPlayer) {
    return IsUnitFogged(this.handle, whichPlayer.handle);
  }

  public isHero() {
    return IsHeroUnitId(this.typeId);
  }

  public isIllusion() {
    return IsUnitIllusion(this.handle);
  }

  public isLoaded() {
    return IsUnitLoaded(this.handle);
  }

  public isMasked(whichPlayer: MapPlayer) {
    return IsUnitMasked(this.handle, whichPlayer.handle);
  }

  public isSelected(whichPlayer: MapPlayer) {
    return IsUnitSelected(this.handle, whichPlayer.handle);
  }

  public issueBuildOrder(unit: string | number, x: number, y: number) {
    return typeof unit === "string" ? IssueBuildOrder(this.handle, unit, x, y) : IssueBuildOrderById(this.handle, unit, x, y);
  }

  public issueImmediateOrder(order: string | number) {
    return typeof order === "string" ? IssueImmediateOrder(this.handle, order) : IssueImmediateOrderById(this.handle, order);
  }

  public issueInstantOrderAt(order: string | number, x: number, y: number, instantTargetWidget: Widget) {
    return typeof order === "string" ? IssueInstantPointOrder(this.handle, order, x, y, instantTargetWidget.handle) : IssueInstantPointOrderById(this.handle, order, x, y, instantTargetWidget.handle);
  }

  public issueInstantTargetOrder(order: string | number, targetWidget: Widget, instantTargetWidget: Widget) {
    return typeof order === "string" ? IssueInstantTargetOrder(this.handle, order, targetWidget.handle, instantTargetWidget.handle) : IssueInstantTargetOrderById(this.handle, order, targetWidget.handle, instantTargetWidget.handle);
  }

  public issueOrderAt(order: string | number, x: number, y: number) {
    return typeof order === "string" ? IssuePointOrder(this.handle, order, x, y) : IssuePointOrderById(this.handle, order, x, y);
  }

  public issuePointOrder(order: string | number, whichPoint: Point) {
    return typeof order === "string" ? IssuePointOrderLoc(this.handle, order, whichPoint.handle) : IssuePointOrderByIdLoc(this.handle, order, whichPoint.handle);
  }

  public issueTargetOrder(order: string | number, targetWidget: Widget) {
    return typeof order === "string" ? IssueTargetOrder(this.handle, order, targetWidget.handle) : IssueTargetOrderById(this.handle, order, targetWidget.handle);
  }

  public isUnit(whichSpecifiedUnit: Unit) {
    return IsUnit(this.handle, whichSpecifiedUnit.handle);
  }

  public isUnitType(whichUnitType: unittype) {
    return IsUnitType(this.handle, whichUnitType);
  }

  public isVisible(whichPlayer: MapPlayer) {
    return IsUnitVisible(this.handle, whichPlayer.handle);
  }

  public kill() {
    KillUnit(this.handle);
  }

  public lookAt(whichBone: string, lookAtTarget: Unit, offsetX: number, offsetY: number, offsetZ: number) {
    SetUnitLookAt(this.handle, whichBone, lookAtTarget.handle, offsetX, offsetY, offsetZ);
  }

  public makeAbilityPermanent(permanent: boolean, abilityId: number) {
    UnitMakeAbilityPermanent(this.handle, permanent, abilityId);
  }

  public modifySkillPoints(skillPointDelta: number) {
    return UnitModifySkillPoints(this.handle, skillPointDelta);
  }

  public pauseEx(flag: boolean) {
    BlzPauseUnitEx(this.handle, flag);
  }

  public pauseTimedLife(flag: boolean) {
    UnitPauseTimedLife(this.handle, flag);
  }

  public queueAnimation(whichAnimation: string) {
    QueueUnitAnimation(this.handle, whichAnimation);
  }

  public recycleGuardPosition() {
    RecycleGuardPosition(this.handle);
  }

  public removeAbility(abilityId: number) {
    return UnitRemoveAbility(this.handle, abilityId);
  }

  public removeBuffs(removePositive: boolean, removeNegative: boolean) {
    UnitRemoveBuffs(this.handle, removePositive, removeNegative);
  }

  public removeBuffsEx(removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean) {
    UnitRemoveBuffsEx(this.handle, removePositive, removeNegative, magic, physical, timedLife, aura, autoDispel);
  }

  public removeGuardPosition() {
    RemoveGuardPosition(this.handle);
  }

  public removeItem(whichItem: Item) {
    UnitRemoveItem(this.handle, whichItem.handle);
  }

  public removeItemFromSlot(itemSlot: number) {
    return UnitRemoveItemFromSlot(this.handle, itemSlot);
  }

  public removeItemFromStock(itemId: number) {
    RemoveItemFromStock(this.handle, itemId);
  }

  public removeType(whichUnitType: unittype) {
    return UnitAddType(this.handle, whichUnitType);
  }

  public removeUnitFromStock(itemId: number) {
    RemoveUnitFromStock(this.handle, itemId);
  }

  public resetCooldown() {
    UnitResetCooldown(this.handle);
  }

  public resetLookAt() {
    ResetUnitLookAt(this.handle);
  }

  public revive(x: number, y: number, doEyecandy: boolean) {
    return ReviveHero(this.handle, x, y, doEyecandy);
  }

  public reviveAtPoint(whichPoint: Point, doEyecandy: boolean) {
    return ReviveHeroLoc(this.handle, whichPoint.handle, doEyecandy);
  }

  public select(flag: boolean) {
    SelectUnit(this.handle, flag);
  }

  public selectSkill(abilCode: number) {
    SelectHeroSkill(this.handle, abilCode);
  }

  public setAbilityCooldown(abilId: number, level: number, cooldown: number) {
    BlzSetUnitAbilityCooldown(this.handle, abilId, level, cooldown);
  }

  public setAbilityLevel(abilCode: number, level: number) {
    return SetUnitAbilityLevel(this.handle, abilCode, level);
  }

  public setAbilityManaCost(abilId: number, level: number, manaCost: number) {
    BlzSetUnitAbilityManaCost(this.handle, abilId, level, manaCost);
  }

  public setAgility(value: number, permanent: boolean) {
    SetHeroAgi(this.handle, value, permanent);
  }

  public setAnimation(whichAnimation: string | number) {
    if (typeof whichAnimation === "string") {
      SetUnitAnimation(this.handle, whichAnimation);
    } else {
      SetUnitAnimationByIndex(this.handle, whichAnimation);
    }
  }

  public setAnimationWithRarity(whichAnimation: string, rarity: raritycontrol) {
    SetUnitAnimationWithRarity(this.handle, whichAnimation, rarity);
  }

  public setAttackCooldown(cooldown: number, weaponIndex: number) {
    BlzSetUnitAttackCooldown(this.handle, cooldown, weaponIndex);
  }

  public setBaseDamage(baseDamage: number, weaponIndex: number) {
    BlzSetUnitBaseDamage(this.handle, baseDamage, weaponIndex);
  }

  public setBlendTime(timeScale: number) {
    SetUnitBlendTime(this.handle, timeScale);
  }

  public setConstructionProgress(constructionPercentage: number) {
    UnitSetConstructionProgress(this.handle, constructionPercentage);
  }

  public setCreepGuard(creepGuard: boolean) {
    SetUnitCreepGuard(this.handle, creepGuard);
  }

  public setDiceNumber(diceNumber: number, weaponIndex: number) {
    BlzSetUnitDiceNumber(this.handle, diceNumber, weaponIndex);
  }

  public setDiceSides(diceSides: number, weaponIndex: number) {
    BlzSetUnitDiceSides(this.handle, diceSides, weaponIndex);
  }

  public setExperience(newXpVal: number, showEyeCandy: boolean) {
    SetHeroXP(this.handle, newXpVal, showEyeCandy);
  }

  public setExploded(exploded: boolean) {
    SetUnitExploded(this.handle, exploded);
  }

  public setFacingEx(facingAngle: number) {
    BlzSetUnitFacingEx(this.handle, facingAngle);
  }

  public setField(field: unitbooleanfield | unitintegerfield | unitrealfield | unitstringfield, value: boolean | number | string) {
    const fieldType = field.toString().substr(0, field.toString().indexOf(":"));

    if (fieldType === "unitbooleanfield" && typeof value === "boolean") {
      return BlzSetUnitBooleanField(this.handle, field as unitbooleanfield, value);
    } else if (fieldType === "unitintegerfield" && typeof value === "number") {
      return BlzSetUnitIntegerField(this.handle, field as unitintegerfield, value);
    } else if (fieldType === "unitrealfield" && typeof value === "number") {
      return BlzSetUnitRealField(this.handle, field as unitrealfield, value);
    } else if (fieldType === "unitstringfield" && typeof value === "string") {
      return BlzSetUnitStringField(this.handle, field as unitstringfield, value);
    }

    return false;
  }

  public setflyHeight(value: number, rate: number) {
    SetUnitFlyHeight(this.handle, value, rate);
  }

  public setHeroLevel(level: number, showEyeCandy: boolean) {
    SetHeroLevel(this.handle, level, showEyeCandy);
  }

  public setIntelligence(value: number, permanent: boolean) {
    SetHeroInt(this.handle, value, permanent);
  }

  public setItemTypeSlots(slots: number) {
    SetItemTypeSlots(this.handle, slots);
  }

  public setOwner(whichPlayer: MapPlayer, changeColor: boolean) {
    SetUnitOwner(this.handle, whichPlayer.handle, changeColor);
  }

  public setPathing(flag: boolean) {
    SetUnitPathing(this.handle, flag);
  }

  public setPosition(x: number, y: number) {
    SetUnitPosition(this.handle, x, y);
  }

  public setRescuable(byWhichPlayer: MapPlayer, flag: boolean) {
    SetUnitRescuable(this.handle, byWhichPlayer.handle, flag);
  }

  public setRescueRange(range: number) {
    SetUnitRescueRange(this.handle, range);
  }

  public setScale(scaleX: number, scaleY: number, scaleZ: number) {
    SetUnitScale(this.handle, scaleX, scaleY, scaleZ);
  }

  public setState(whichUnitState: unitstate, newVal: number) {
    SetUnitState(this.handle, whichUnitState, newVal);
  }

  public setStrength(value: number, permanent: boolean) {
    SetHeroStr(this.handle, value, permanent);
  }

  public setTimeScale(timeScale: number) {
    SetUnitTimeScale(this.handle, timeScale);
  }

  public setUnitAttackCooldown(cooldown: number, weaponIndex: number) {
    BlzSetUnitAttackCooldown(this.handle, cooldown, weaponIndex);
  }

  public setUnitTypeSlots(slots: number) {
    SetUnitTypeSlots(this.handle, slots);
  }

  public setUpgradeProgress(upgradePercentage: number) {
    UnitSetUpgradeProgress(this.handle, upgradePercentage);
  }

  public setUseAltIcon(flag: boolean) {
    UnitSetUsesAltIcon(this.handle, flag);
  }

  public setUseFood(useFood: boolean) {
    SetUnitUseFood(this.handle, useFood);
  }

  public setVertexColor(red: number, green: number, blue: number, alpha: number) {
    SetUnitVertexColor(this.handle, red, green, blue, alpha);
  }

  public shareVision(whichPlayer: MapPlayer, share: boolean) {
    UnitShareVision(this.handle, whichPlayer.handle, share);
  }

  public showTeamGlow(show: boolean) {
    BlzShowUnitTeamGlow(this.handle, show);
  }

  public startAbilityCooldown(abilCode: number, cooldown: number) {
    BlzStartUnitAbilityCooldown(this.handle, abilCode, cooldown);
  }

  public stripLevels(howManyLevels: number) {
    return UnitStripHeroLevel(this.handle, howManyLevels);
  }

  public suspendDecay(suspend: boolean) {
    UnitSuspendDecay(this.handle, suspend);
  }

  public suspendExperience(flag: boolean) {
    SuspendHeroXP(this.handle, flag);
  }

  public useItem(whichItem: Item) {
    return UnitUseItem(this.handle, whichItem.handle);
  }

  public useItemAt(whichItem: Item, x: number, y: number) {
    return UnitUseItemPoint(this.handle, whichItem.handle, x, y);
  }

  public useItemTarget(whichItem: Item, target: Widget) {
    return UnitUseItemTarget(this.handle, whichItem.handle, target.handle);
  }

  public wakeUp() {
    UnitWakeUp(this.handle);
  }

  public waygateGetDestinationX() {
    return WaygateGetDestinationX(this.handle);
  }

  public waygateGetDestinationY() {
    return WaygateGetDestinationY(this.handle);
  }

  public waygateSetDestination(x: number, y: number) {
    WaygateSetDestination(this.handle, x, y);
  }

  public static foodMadeByType(unitId: number) {
    return GetFoodMade(unitId);
  }

  public static foodUsedByType(unitId: number) {
    return GetFoodUsed(unitId);
  }

  public static fromEvent() {
    return this.fromHandle(GetTriggerUnit());
  }

  public static fromHandle(handle: unit): Unit {
    return this.getObject(handle);
  }

  public static getPointValueByType(unitType: number) {
    return GetUnitPointValueByType(unitType);
  }

  public static isUnitIdHero(unitId: number) {
    return IsHeroUnitId(unitId);
  }

  public static isUnitIdType(unitId: number, whichUnitType: unittype) {
    return IsUnitIdType(unitId, whichUnitType);
  }
}
