/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Meta } from './Meta';
import { Reference } from './Reference';
import { User } from './User';

/**
 * Password change request for the 'forgot password' flow.
 */
export interface PasswordChangeRequest {

  /**
   * This is a PasswordChangeRequest resource
   */
  readonly resourceType: 'PasswordChangeRequest';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  readonly id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  readonly meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  readonly implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  readonly language?: string;

  /**
   * The user requesting the password change.
   */
  readonly user?: Reference<User>;

  /**
   * Secret string used to verify the identity of the user.
   */
  readonly secret?: string;

  /**
   * Whether this request has been used, and is therefore no longer valid.
   */
  readonly used?: boolean;

  /**
   * Redirect URI used when redirecting a client back to the client
   * application.
   */
  readonly redirectUri?: string;
}