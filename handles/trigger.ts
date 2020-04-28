/** @noSelfInFile **/

import { Dialog, DialogButton } from "./dialog";
import { Frame } from "./frame";
import { Handle } from "./handle";
import { MapPlayer } from "./player";
import { Unit } from "./unit";
import { Widget } from "./widget";

declare interface agent extends handle { __agent: never; }
declare interface trigger extends agent { __trigger: never; }
declare interface triggercondition extends agent { __triggercondition: never; }
declare interface triggeraction extends handle { __triggeraction: never; }
declare interface eventid extends handle { __eventid: never; }
declare interface boolexpr extends agent { __boolexpr: never; }
declare interface widget extends agent { __widget: never; }
declare interface unit extends widget { __unit: never; }
declare interface event extends agent { __event: never; }
declare interface playerunitevent extends eventid { __playerunitevent: never; }
declare interface region extends agent { __region: never; }
declare interface rect extends agent { __rect: never; }
declare interface dialog extends agent { __dialog: never; }
declare interface player extends agent { __player: never; }
declare interface timer extends agent { __timer: never; }
declare interface limitop extends eventid { __limitop: never; }
declare interface trackable extends agent { __trackable: never; }
declare interface gamestate extends handle { __gamestate: never; }
declare interface button extends agent { __button: never; }
declare interface unitevent extends eventid { __unitevent: never; }
declare interface gameevent extends eventid { __gameevent: never; }
declare interface alliancetype extends handle { __alliancetype: never; }
declare interface playerstate extends handle { __playerstate: never; }
declare interface playerevent extends eventid { __playerevent: never; }
declare interface oskeytype extends handle { __oskeytype: never; }
declare interface unitstate extends handle { __unitstate: never; }
declare interface frameeventtype extends handle { __frameeventtype: never; }
declare interface framehandle extends handle { __framehandle: never; }

declare function CreateTrigger(): trigger;
declare function DestroyTrigger(whichTrigger: trigger): void;
declare function ResetTrigger(whichTrigger: trigger): void;
declare function EnableTrigger(whichTrigger: trigger): void;
declare function DisableTrigger(whichTrigger: trigger): void;
declare function IsTriggerEnabled(whichTrigger: trigger): boolean;
declare function TriggerWaitOnSleeps(whichTrigger: trigger, flag: boolean): void;
declare function IsTriggerWaitOnSleeps(whichTrigger: trigger): boolean;
declare function GetTriggeringTrigger(): trigger;
declare function GetTriggerEventId(): eventid;
declare function GetTriggerEvalCount(whichTrigger: trigger): number;
declare function GetTriggerExecCount(whichTrigger: trigger): number;
declare function TriggerRegisterUnitInRange(whichTrigger: trigger, whichUnit: unit, range: number, filter: boolexpr | null): event;
declare function TriggerAddCondition(whichTrigger: trigger, condition: boolexpr | null): triggercondition;
declare function TriggerRemoveCondition(whichTrigger: trigger, whichCondition: triggercondition): void;
declare function TriggerClearConditions(whichTrigger: trigger): void;
declare function TriggerAddAction(whichTrigger: trigger, actionFunc: () => void): triggeraction;
declare function TriggerRemoveAction(whichTrigger: trigger, whichAction: triggeraction): void;
declare function TriggerClearActions(whichTrigger: trigger): void;
declare function TriggerEvaluate(whichTrigger: trigger): boolean;
declare function TriggerExecute(whichTrigger: trigger): void;
declare function TriggerExecuteWait(whichTrigger: trigger): void;
declare function TriggerRegisterTimerEventPeriodic(trig: trigger, timeout: number): event;
declare function TriggerRegisterTimerEventSingle(trig: trigger, timeout: number): event;
declare function TriggerRegisterTimerExpireEventBJ(trig: trigger, t: timer): event;
declare function TriggerRegisterPlayerUnitEventSimple(trig: trigger, whichPlayer: player, whichEvent: playerunitevent): event;
declare function TriggerRegisterAnyUnitEventBJ(trig: trigger, whichEvent: playerunitevent): void;
declare function TriggerRegisterPlayerSelectionEventBJ(trig: trigger, whichPlayer: player, selected: boolean): event;
declare function TriggerRegisterPlayerKeyEventBJ(trig: trigger, whichPlayer: player, keType: number, keKey: number): event;
declare function TriggerRegisterPlayerMouseEventBJ(trig: trigger, whichPlayer: player, meType: number): event;
declare function TriggerRegisterPlayerEventVictory(trig: trigger, whichPlayer: player): event;
declare function TriggerRegisterPlayerEventDefeat(trig: trigger, whichPlayer: player): event;
declare function TriggerRegisterPlayerEventLeave(trig: trigger, whichPlayer: player): event;
declare function TriggerRegisterPlayerEventAllianceChanged(trig: trigger, whichPlayer: player): event;
declare function TriggerRegisterPlayerEventEndCinematic(trig: trigger, whichPlayer: player): event;
declare function TriggerRegisterGameStateEventTimeOfDay(trig: trigger, opcode: limitop, limitval: number): event;
declare function TriggerRegisterEnterRegionSimple(trig: trigger, whichRegion: region): event;
declare function TriggerRegisterLeaveRegionSimple(trig: trigger, whichRegion: region): event;
declare function TriggerRegisterEnterRectSimple(trig: trigger, r: rect): event;
declare function TriggerRegisterLeaveRectSimple(trig: trigger, r: rect): event;
declare function TriggerRegisterDistanceBetweenUnits(trig: trigger, whichUnit: unit, condition: boolexpr | null, range: number): event;
declare function TriggerRegisterUnitInRangeSimple(trig: trigger, range: number, whichUnit: unit): event;
declare function TriggerRegisterUnitLifeEvent(trig: trigger, whichUnit: unit, opcode: limitop, limitval: number): event;
declare function TriggerRegisterUnitManaEvent(trig: trigger, whichUnit: unit, opcode: limitop, limitval: number): event;
declare function TriggerRegisterDialogEventBJ(trig: trigger, whichDialog: dialog): event;
declare function TriggerRegisterShowSkillEventBJ(trig: trigger): event;
declare function TriggerRegisterBuildSubmenuEventBJ(trig: trigger): event;
declare function TriggerRegisterBuildCommandEventBJ(trig: trigger, unitId: number): event;
declare function TriggerRegisterTrainCommandEventBJ(trig: trigger, unitId: number): event;
declare function TriggerRegisterUpgradeCommandEventBJ(trig: trigger, techId: number): event;
declare function TriggerRegisterCommonCommandEventBJ(trig: trigger, order: string): event;
declare function TriggerRegisterGameLoadedEventBJ(trig: trigger): event;
declare function TriggerRegisterGameSavedEventBJ(trig: trigger): event;
declare function RegisterDestDeathInRegionEnum(): void;
declare function TriggerRegisterDestDeathInRegionEvent(trig: trigger, r: rect): void;
declare function TriggerRegisterTrackableHitEvent(whichTrigger: trigger, t: trackable): event;
declare function TriggerRegisterTrackableTrackEvent(whichTrigger: trigger, t: trackable): event;
declare function TriggerRegisterCommandEvent(whichTrigger: trigger, whichAbility: number, order: string): event;
declare function TriggerRegisterUpgradeCommandEvent(whichTrigger: trigger, whichUpgrade: number): event;
declare function TriggerRegisterDeathEvent(whichTrigger: trigger, whichWidget: widget): event;
declare function TriggerRegisterVariableEvent(whichTrigger: trigger, varName: string, opcode: limitop, limitval: number): event;
declare function TriggerRegisterTimerEvent(whichTrigger: trigger, timeout: number, periodic: boolean): event;
declare function TriggerRegisterTimerExpireEvent(whichTrigger: trigger, t: timer): event;
declare function TriggerRegisterGameStateEvent(whichTrigger: trigger, whichState: gamestate, opcode: limitop, limitval: number): event;
declare function TriggerRegisterDialogEvent(whichTrigger: trigger, whichDialog: dialog): event;
declare function TriggerRegisterDialogButtonEvent(whichTrigger: trigger, whichButton: button): event;
declare function TriggerRegisterEnterRegion(whichTrigger: trigger, whichRegion: region, filter: boolexpr | null): event;
declare function TriggerRegisterFilterUnitEvent(whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent, filter: boolexpr | null): event;
declare function TriggerRegisterGameEvent(whichTrigger: trigger, whichGameEvent: gameevent): event;
declare function TriggerRegisterLeaveRegion(whichTrigger: trigger, whichRegion: region, filter: boolexpr | null): event;
declare function TriggerRegisterPlayerAllianceChange(whichTrigger: trigger, whichPlayer: player, whichAlliance: alliancetype): event;
declare function TriggerRegisterPlayerStateEvent(whichTrigger: trigger, whichPlayer: player, whichState: playerstate, opcode: limitop, limitval: number): event;
declare function TriggerRegisterPlayerChatEvent(whichTrigger: trigger, whichPlayer: player, chatMessageToDetect: string, exactMatchOnly: boolean): event;
declare function TriggerRegisterPlayerEvent(whichTrigger: trigger, whichPlayer: player, whichPlayerEvent: playerevent): event;
declare function TriggerRegisterPlayerUnitEvent(whichTrigger: trigger, whichPlayer: player, whichPlayerUnitEvent: playerunitevent, filter: boolexpr | null): event;
declare function BlzTriggerRegisterPlayerKeyEvent(whichTrigger: trigger, whichPlayer: player, key: oskeytype, metaKey: number, keyDown: boolean): event;
declare function BlzTriggerRegisterPlayerSyncEvent(whichTrigger: trigger, whichPlayer: player, prefix: string, fromServer: boolean): event;
declare function TriggerRegisterUnitEvent(whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent): event;
declare function TriggerRegisterUnitStateEvent(whichTrigger: trigger, whichUnit: unit, whichState: unitstate, opcode: limitop, limitval: number): event;
declare function BlzTriggerRegisterFrameEvent(whichTrigger: trigger, frame: framehandle, eventId: frameeventtype): event;

export class Trigger extends Handle<trigger> {

  constructor() {
    if (Handle.initFromHandle()) {
      super();
    } else {
      super(CreateTrigger());
    }
  }

  public set enabled(flag: boolean) {
    if (flag) {
      EnableTrigger(this.handle);
    } else {
      DisableTrigger(this.handle);
    }
  }

  public get enabled() {
    return IsTriggerEnabled(this.handle);
  }

  public get evalCount() {
    return GetTriggerEvalCount(this.handle);
  }

  public static get eventId() {
    return GetTriggerEventId();
  }

  public get execCount() {
    return GetTriggerExecCount(this.handle);
  }

  public set waitOnSleeps(flag: boolean) {
    TriggerWaitOnSleeps(this.handle, flag);
  }

  public get waitOnSleeps() {
    return IsTriggerWaitOnSleeps(this.handle);
  }

  public addAction(actionFunc: () => void) {
    return TriggerAddAction(this.handle, actionFunc);
  }

  public addCondition(condition: boolexpr) {
    return TriggerAddCondition(this.handle, condition);
  }

  public destroy() {
    DestroyTrigger(this.handle);
  }

  public eval() {
    return TriggerEvaluate(this.handle);
  }

  public exec() {
    return TriggerExecute(this.handle);
  }

  public registerAnyUnitEvent(whichPlayerUnitEvent: playerunitevent) {
    return TriggerRegisterAnyUnitEventBJ(this.handle, whichPlayerUnitEvent);
  }

  public registerCommandEvent(whichAbility: number, order: string) {
    return TriggerRegisterCommandEvent(this.handle, whichAbility, order);
  }

  public registerDeathEvent(whichWidget: Widget) {
    return TriggerRegisterDeathEvent(this.handle, whichWidget.handle);
  }

  public registerDialogButtonEvent(whichButton: DialogButton) {
    return TriggerRegisterDialogButtonEvent(this.handle, whichButton.handle);
  }

  public registerDialogEvent(whichDialog: Dialog) {
    return TriggerRegisterDialogEvent(this.handle, whichDialog.handle);
  }

  public registerEnterRegion(whichRegion: region, filter: boolexpr | null) {
    return TriggerRegisterEnterRegion(this.handle, whichRegion, filter);
  }

  public registerFilterUnitEvent(whichUnit: unit, whichEvent: unitevent, filter: boolexpr | null) {
    return TriggerRegisterFilterUnitEvent(this.handle, whichUnit, whichEvent, filter);
  }

  public registerGameEvent(whichGameEvent: gameevent) {
    return TriggerRegisterGameEvent(this.handle, whichGameEvent);
  }

  public registerGameStateEvent(whichState: gamestate, opcode: limitop, limitval: number) {
    return TriggerRegisterGameStateEvent(this.handle, whichState, opcode, limitval);
  }

  public registerLeaveRegion(whichRegion: region, filter: boolexpr | null) {
    return TriggerRegisterLeaveRegion(this.handle, whichRegion, filter);
  }

  public registerPlayerAllianceChange(whichPlayer: MapPlayer, whichAlliance: alliancetype) {
    return TriggerRegisterPlayerAllianceChange(this.handle, whichPlayer.handle, whichAlliance);
  }

  public registerPlayerChatEvent(whichPlayer: MapPlayer, chatMessageToDetect: string, exactMatchOnly: boolean) {
    return TriggerRegisterPlayerChatEvent(this.handle, whichPlayer.handle, chatMessageToDetect, exactMatchOnly);
  }

  public registerPlayerEvent(whichPlayer: MapPlayer, whichPlayerEvent: playerevent) {
    return TriggerRegisterPlayerEvent(this.handle, whichPlayer.handle, whichPlayerEvent);
  }

  public registerPlayerKeyEvent(whichPlayer: MapPlayer, whichKey: oskeytype, metaKey: number, fireOnKeyDown: boolean) {
    return BlzTriggerRegisterPlayerKeyEvent(this.handle, whichPlayer.handle, whichKey, metaKey, fireOnKeyDown);
  }

  public registerPlayerMouseEvent(whichPlayer: MapPlayer, whichMouseEvent: number) {
    return TriggerRegisterPlayerMouseEventBJ(this.handle, whichPlayer.handle, whichMouseEvent);
  }

  public registerPlayerStateEvent(whichPlayer: MapPlayer, whichState: playerstate, opcode: limitop, limitval: number) {
    return TriggerRegisterPlayerStateEvent(this.handle, whichPlayer.handle, whichState, opcode, limitval);
  }

  public registerPlayerSyncEvent(whichPlayer: MapPlayer, prefix: string, fromServer: boolean) {
    return BlzTriggerRegisterPlayerSyncEvent(this.handle, whichPlayer.handle, prefix, fromServer);
  }

  public registerPlayerUnitEvent(whichPlayer: MapPlayer, whichPlayerUnitEvent: playerunitevent, filter: boolexpr | null) {
    return TriggerRegisterPlayerUnitEvent(this.handle, whichPlayer.handle, whichPlayerUnitEvent, filter);
  }

  // Creates it's own timer and triggers when it expires
  public registerTimerEvent(timeout: number, periodic: boolean) {
    return TriggerRegisterTimerEvent(this.handle, timeout, periodic);
  }

  // Triggers when the timer you tell it about expires
  public registerTimerExpireEvent(t: timer) {
    return TriggerRegisterTimerExpireEvent(this.handle, t);
  }

  public registerTrackableHitEvent(whichTrackable: trackable) {
    return TriggerRegisterTrackableHitEvent(this.handle, whichTrackable);
  }

  public registerTrackableTrackEvent(whichTrackable: trackable) {
    return TriggerRegisterTrackableTrackEvent(this.handle, whichTrackable);
  }

  public registerUnitEvent(whichUnit: Unit, whichEvent: unitevent) {
    return TriggerRegisterUnitEvent(this.handle, whichUnit.handle, whichEvent);
  }

  public registerUnitInRage(whichUnit: unit, range: number, filter: boolexpr | null) {
    return TriggerRegisterUnitInRange(this.handle, whichUnit, range, filter);
  }

  public registerUnitStateEvent(whichUnit: Unit, whichState: unitstate, opcode: limitop, limitval: number) {
    return TriggerRegisterUnitStateEvent(this.handle, whichUnit.handle, whichState, opcode, limitval);
  }

  public registerUpgradeCommandEvent(whichUpgrade: number) {
    return TriggerRegisterUpgradeCommandEvent(this.handle, whichUpgrade);
  }

  public registerVariableEvent(varName: string, opcode: limitop, limitval: number) {
    return TriggerRegisterVariableEvent(this.handle, varName, opcode, limitval);
  }

  public removeAction(whichAction: triggeraction) {
    return TriggerRemoveAction(this.handle, whichAction);
  }

  public removeActions() {
    return TriggerClearActions(this.handle);
  }

  public removeCondition(whichCondition: triggercondition) {
    return TriggerRemoveCondition(this.handle, whichCondition);
  }

  public removeConditions() {
    return TriggerClearConditions(this.handle);
  }

  public reset() {
    ResetTrigger(this.handle);
  }

  public triggerRegisterFrameEvent(frame: Frame, eventId: frameeventtype) {
    return BlzTriggerRegisterFrameEvent(this.handle, frame.handle, eventId);
  }

  public static fromEvent() {
    return this.fromHandle(GetTriggeringTrigger());
  }

  public static fromHandle(handle: trigger): Trigger {
    return this.getObject(handle);
  }

}
