/** @noSelfInFile **/

import { Handle } from "./handle";
import { MapPlayer } from "./player";

declare interface agent extends handle { __agent: never; }
declare interface player extends agent { __player: never; }
declare interface leaderboard extends agent { __leaderboard: never; }

declare function CreateLeaderboard(): leaderboard;
declare function DestroyLeaderboard(lb: leaderboard): void;
declare function LeaderboardDisplay(lb: leaderboard, show: boolean): void;
declare function IsLeaderboardDisplayed(lb: leaderboard): boolean;
declare function LeaderboardGetItemCount(lb: leaderboard): number;
declare function LeaderboardSetSizeByItemCount(lb: leaderboard, count: number): void;
declare function LeaderboardAddItem(lb: leaderboard, label: string, value: number, p: player): void;
declare function LeaderboardRemoveItem(lb: leaderboard, index: number): void;
declare function LeaderboardRemovePlayerItem(lb: leaderboard, p: player): void;
declare function LeaderboardClear(lb: leaderboard): void;
declare function LeaderboardSortItemsByValue(lb: leaderboard, ascending: boolean): void;
declare function LeaderboardSortItemsByPlayer(lb: leaderboard, ascending: boolean): void;
declare function LeaderboardSortItemsByLabel(lb: leaderboard, ascending: boolean): void;
declare function LeaderboardHasPlayerItem(lb: leaderboard, p: player): boolean;
declare function LeaderboardGetPlayerIndex(lb: leaderboard, p: player): number;
declare function LeaderboardSetLabel(lb: leaderboard, label: string): void;
declare function LeaderboardGetLabelText(lb: leaderboard): string;
declare function PlayerSetLeaderboard(toPlayer: player, lb: leaderboard): void;
declare function PlayerGetLeaderboard(toPlayer: player): leaderboard;
declare function LeaderboardSetLabelColor(lb: leaderboard, red: number, green: number, blue: number, alpha: number): void;
declare function LeaderboardSetValueColor(lb: leaderboard, red: number, green: number, blue: number, alpha: number): void;
declare function LeaderboardSetStyle(lb: leaderboard, showLabel: boolean, showNames: boolean, showValues: boolean, showIcons: boolean): void;
declare function LeaderboardSetItemValue(lb: leaderboard, whichItem: number, val: number): void;
declare function LeaderboardSetItemLabel(lb: leaderboard, whichItem: number, val: string): void;
declare function LeaderboardSetItemStyle(lb: leaderboard, whichItem: number, showLabel: boolean, showValue: boolean, showIcon: boolean): void;
declare function LeaderboardSetItemLabelColor(lb: leaderboard, whichItem: number, red: number, green: number, blue: number, alpha: number): void;
declare function LeaderboardSetItemValueColor(lb: leaderboard, whichItem: number, red: number, green: number, blue: number, alpha: number): void;

export class Leaderboard extends Handle<leaderboard> {

  constructor() {
    if (Handle.initFromHandle()) {
      super();
    } else {
      super(CreateLeaderboard());
    }
  }

  public addItem(label: string, value: number, p: MapPlayer) {
    LeaderboardAddItem(this.handle, label, value, p.handle);
  }

  public clear() {
    LeaderboardClear(this.handle);
  }

  public destroy() {
    DestroyLeaderboard(this.handle);
  }

  public display(flag: boolean = true) {
    LeaderboardDisplay(this.handle, flag);
  }

  public get displayed() {
    return IsLeaderboardDisplayed(this.handle);
  }

  public get itemCount() {
    return LeaderboardGetItemCount(this.handle);
  }

  public set itemCount(count: number) {
    LeaderboardSetSizeByItemCount(this.handle, count);
  }

  public getPlayerIndex(p: MapPlayer) {
    return LeaderboardGetPlayerIndex(this.handle, p.handle);
  }

  public hasPlayerItem(p: MapPlayer) {
    LeaderboardHasPlayerItem(this.handle, p.handle);
  }

  public removeItem(index: number) {
    LeaderboardRemoveItem(this.handle, index);
  }

  public removePlayerItem(p: MapPlayer) {
    LeaderboardRemovePlayerItem(this.handle, p.handle);
  }

  public setItemLabel(item: number, label: string) {
    LeaderboardSetItemLabel(this.handle, item, label);
  }

  public setItemLabelColor(item: number, red: number, green: number, blue: number, alpha: number) {
    LeaderboardSetItemLabelColor(this.handle, item, red, green, blue, alpha);
  }

  public setItemStyle(item: number, showLabel: boolean = true, showValues: boolean = true, showIcons: boolean = true) {
    LeaderboardSetItemStyle(this.handle, item, showLabel, showValues, showIcons);
  }

  public setItemValue(item: number, value: number) {
    LeaderboardSetItemValue(this.handle, item, value);
  }

  public setItemValueColor(item: number, red: number, green: number, blue: number, alpha: number) {
    LeaderboardSetItemValueColor(this.handle, item, red, green, blue, alpha);
  }

  public setLabelColor(red: number, green: number, blue: number, alpha: number) {
    LeaderboardSetLabelColor(this.handle, red, green, blue, alpha);
  }

  public setPlayerBoard(p: MapPlayer) {
    PlayerSetLeaderboard(p.handle, this.handle);
  }

  public setStyle(showLabel: boolean = true, showNames: boolean = true, showValues: boolean = true, showIcons: boolean = true) {
    LeaderboardSetStyle(this.handle, showLabel, showNames, showValues, showIcons);
  }

  public setValueColor(red: number, green: number, blue: number, alpha: number) {
    LeaderboardSetValueColor(this.handle, red, green, blue, alpha);
  }

  public sortByLabel(asc: boolean = true) {
    LeaderboardSortItemsByLabel(this.handle, asc);
  }

  public sortByPlayer(asc: boolean = true) {
    LeaderboardSortItemsByPlayer(this.handle, asc);
  }

  public sortByValue(asc: boolean = true) {
    LeaderboardSortItemsByValue(this.handle, asc);
  }

  public set label(value: string) {
    LeaderboardSetLabel(this.handle, value);
  }

  public get label() {
    return LeaderboardGetLabelText(this.handle);
  }

  public static fromHandle(handle: leaderboard): Leaderboard {
    return this.getObject(handle);
  }

  public static fromPlayer(p: MapPlayer) {
    return this.fromHandle(PlayerGetLeaderboard(p.handle));
  }
}
