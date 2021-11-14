import { Permissions } from "../permissions/mod.ts";
import { ISO8601, Snowflake } from "../types/mod.ts";
import { User } from "../users/mod.ts";
import { Nullable } from "../_internals/utils.ts";

/**
 * Guild Member Object
 * 
 * The field `user` won't be included in the member object attached to `MESSAGE_CREATE` and `MESSAGE_UPDATE` gateway events.
 * In `GUILD_` events, `pending` will always be included as `true` or `false`.
 * In non `GUILD_` events which can only be triggered by non-`pending` users, `pending` will not be included.
 * 
 * https://discord.com/developers/docs/resources/guild#guild-member-object
 */
export interface GuildMember {
  user?: User;
  nick?: Nullable<string>;
  avatar?: Nullable<string>;
  roles: Snowflake[];
  joined_at: ISO8601;
  premium_since?: Nullable<ISO8601>;
  deaf: boolean;
  mute: boolean;
  /** Whether the user has not yet passed the guild's Membership Screening requirements. */
  pending?: boolean;
  /** Total permissions of the member in the channel, including overwrites - returned when in the interaction object. */
  permissions?: Permissions.Raw;
}