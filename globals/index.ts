import { MapPlayer } from "../handles/player";


declare interface agent extends handle { __agent: never; }
declare interface player extends agent { __player: never; }
declare const bj_MAX_PLAYER_SLOTS: number;
declare function Player(number: number): player;

export const AllPlayers: MapPlayer[] = [];

for (let i = 0; i < bj_MAX_PLAYER_SLOTS; i++) {
  AllPlayers[i] = MapPlayer.fromHandle(Player(i));
}