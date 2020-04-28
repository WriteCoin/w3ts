/** @noSelfInFile **/

import { Handle } from "./handle";
import { MapPlayer } from "./player";
import { Point } from "./point";
import { Widget } from "./widget";

declare interface agent extends handle { __agent: never; }
declare interface widget extends agent { __widget: never; }
declare interface item extends widget { __item: never; }
declare interface player extends agent { __player: never; }
declare interface rect extends agent { __rect: never; }
declare interface boolexpr extends agent { __boolexpr: never; }
declare interface itemtype extends handle { __itemtype: never; }
declare interface itemintegerfield extends handle { __itemintegerfield: never; }
declare interface itemrealfield extends handle { __itemrealfield: never; }
declare interface itembooleanfield extends handle { __itembooleanfield: never; }
declare interface itemstringfield extends handle { __itemstringfield: never; }
declare interface ability extends agent { __ability: never; }

declare function BlzCreateItemWithSkin(itemid: number, x: number, y: number, skinId: number): item;
declare function CreateItem(itemid: number, x: number, y: number): item;
declare function RemoveItem(whichItem: item): void;
declare function GetItemPlayer(whichItem: item): player;
declare function GetItemTypeId(i: item): number;
declare function GetItemX(i: item): number;
declare function GetItemY(i: item): number;
declare function SetItemPosition(i: item, x: number, y: number): void;
declare function SetItemDropOnDeath(whichItem: item, flag: boolean): void;
declare function SetItemDroppable(i: item, flag: boolean): void;
declare function SetItemPawnable(i: item, flag: boolean): void;
declare function SetItemPlayer(whichItem: item, whichPlayer: player, changeColor: boolean): void;
declare function SetItemInvulnerable(whichItem: item, flag: boolean): void;
declare function IsItemInvulnerable(whichItem: item): boolean;
declare function SetItemVisible(whichItem: item, show: boolean): void;
declare function IsItemVisible(whichItem: item): boolean;
declare function IsItemOwned(whichItem: item): boolean;
declare function IsItemPowerup(whichItem: item): boolean;
declare function IsItemSellable(whichItem: item): boolean;
declare function IsItemPawnable(whichItem: item): boolean;
declare function IsItemIdPowerup(itemId: number): boolean;
declare function IsItemIdSellable(itemId: number): boolean;
declare function IsItemIdPawnable(itemId: number): boolean;
declare function EnumItemsInRect(r: rect, filter: boolexpr | null, actionFunc: () => void): void;
declare function GetItemLevel(whichItem: item): number;
declare function GetItemType(whichItem: item): itemtype;
declare function SetItemDropID(whichItem: item, unitId: number): void;
declare function GetItemName(whichItem: item): string;
declare function GetItemCharges(whichItem: item): number;
declare function SetItemCharges(whichItem: item, charges: number): void;
declare function GetItemUserData(whichItem: item): number;
declare function SetItemUserData(whichItem: item, data: number): void;
declare function BlzSetItemName(whichItem: item, name: string): void;
declare function BlzGetItemSkin(whichItem: item): number;
declare function BlzSetItemSkin(whichItem: item, skinId: number): void;
declare function BlzGetItemAbilityByIndex(whichItem: item, index: number): ability;
declare function BlzGetItemAbility(whichItem: item, abilCode: number): ability;
declare function BlzItemAddAbility(whichItem: item, abilCode: number): boolean;
declare function BlzGetItemBooleanField(whichItem: item, whichField: itembooleanfield): boolean;
declare function BlzGetItemIntegerField(whichItem: item, whichField: itemintegerfield): number;
declare function BlzGetItemRealField(whichItem: item, whichField: itemrealfield): number;
declare function BlzGetItemStringField(whichItem: item, whichField: itemstringfield): string;
declare function BlzSetItemBooleanField(whichItem: item, whichField: itembooleanfield, value: boolean): boolean;
declare function BlzSetItemIntegerField(whichItem: item, whichField: itemintegerfield, value: number): boolean;
declare function BlzSetItemRealField(whichItem: item, whichField: itemrealfield, value: number): boolean;
declare function BlzSetItemStringField(whichItem: item, whichField: itemstringfield, value: string): boolean;
declare function BlzItemRemoveAbility(whichItem: item, abilCode: number): boolean;

export class Item extends Widget {

  public readonly handle!: item;

  constructor(itemId: number, x: number, y: number, skinId?: number) {
    if (Handle.initFromHandle()) {
      super();
    } else {
      super(skinId ? BlzCreateItemWithSkin(itemId, x, y, skinId) : CreateItem(itemId, x, y));
    }
  }

  public get charges() {
    return GetItemCharges(this.handle);
  }

  public set charges(value: number) {
    SetItemCharges(this.handle, value);
  }

  public set invulnerable(flag: boolean) {
    SetItemInvulnerable(this.handle, true);
  }

  public get invulnerable() {
    return IsItemInvulnerable(this.handle);
  }

  public get level() {
    return GetItemLevel(this.handle);
  }

  get name() {
    return GetItemName(this.handle);
  }

  set name(value: string) {
    BlzSetItemName(this.handle, value);
  }

  public get pawnable() {
    return IsItemPawnable(this.handle);
  }

  public set pawnable(flag: boolean) {
    SetItemPawnable(this.handle, flag);
  }

  public get player() {
    return GetItemPlayer(this.handle);
  }

  public get type() {
    return GetItemType(this.handle);
  }

  public get typeId() {
    return GetItemTypeId(this.handle);
  }

  public get userData() {
    return GetItemUserData(this.handle);
  }

  public set userData(value: number) {
    SetItemUserData(this.handle, value);
  }

  public get visible() {
    return IsItemVisible(this.handle);
  }

  public set visible(flag: boolean) {
    SetItemVisible(this.handle, flag);
  }

  public get skin() {
    return BlzGetItemSkin(this.handle);
  }

  public set skin(skinId: number) {
    BlzSetItemSkin(this.handle, skinId);
  }

  public get x() {
    return GetItemX(this.handle);
  }

  public set x(value: number) {
    SetItemPosition(this.handle, value, this.y);
  }

  public get y() {
    return GetItemY(this.handle);
  }

  public set y(value: number) {
    SetItemPosition(this.handle, this.x, value);
  }

  public destroy() {
    RemoveItem(this.handle);
  }

  public getField(field: itembooleanfield | itemintegerfield | itemrealfield | itemstringfield) {
    const fieldType = field.toString().substr(0, field.toString().indexOf(":"));

    switch (fieldType) {
      case "unitbooleanfield":
        return BlzGetItemBooleanField(this.handle, field as itembooleanfield);
      case "unitintegerfield":
        return BlzGetItemIntegerField(this.handle, field as itemintegerfield);
      case "unitrealfield":
        return BlzGetItemRealField(this.handle, field as itemrealfield);
      case "unitstringfield":
        return BlzGetItemStringField(this.handle, field as itemstringfield);
      default:
        return 0;
    }
  }

  public isOwned() {
    return IsItemOwned(this.handle);
  }

  public isPawnable() {
    return IsItemPawnable(this.handle);
  }

  public isPowerup() {
    return IsItemPowerup(this.handle);
  }

  public isSellable() {
    return IsItemSellable(this.handle);
  }

  public setDropId(unitId: number) {
    SetItemDropID(this.handle, unitId);
  }

  public setDropOnDeath(flag: boolean) {
    SetItemDropOnDeath(this.handle, flag);
  }

  public setDroppable(flag: boolean) {
    SetItemDroppable(this.handle, flag);
  }

  public setField(field: itembooleanfield | itemintegerfield | itemrealfield | itemstringfield, value: boolean | number | string) {
    const fieldType = field.toString().substr(0, field.toString().indexOf(":"));

    if (fieldType === "unitbooleanfield" && typeof value === "boolean") {
      return BlzSetItemBooleanField(this.handle, field as itembooleanfield, value);
    } else if (fieldType === "unitintegerfield" && typeof value === "number") {
      return BlzSetItemIntegerField(this.handle, field as itemintegerfield, value);
    } else if (fieldType === "unitrealfield" && typeof value === "number") {
      return BlzSetItemRealField(this.handle, field as itemrealfield, value);
    } else if (fieldType === "unitstringfield" && typeof value === "string") {
      return BlzSetItemStringField(this.handle, field as itemstringfield, value);
    }

    return false;
  }

  public setOwner(whichPlayer: MapPlayer, changeColor: boolean) {
    SetItemPlayer(this.handle, whichPlayer.handle, changeColor);
  }

  public setPoint(whichPoint: Point) {
    SetItemPosition(this.handle, whichPoint.x, whichPoint.y);
  }

  public setPosition(x: number, y: number) {
    SetItemPosition(this.handle, x, y);
  }

  public static fromHandle(handle: item): Item {
    return this.getObject(handle);
  }

  public static isIdPawnable(itemId: number) {
    return IsItemIdPawnable(itemId);
  }

  public static isIdPowerup(itemId: number) {
    return IsItemIdPowerup(itemId);
  }

  public static isIdSellable(itemId: number) {
    return IsItemIdSellable(itemId);
  }

}
