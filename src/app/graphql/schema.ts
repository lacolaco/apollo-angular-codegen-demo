export interface FileFilter {
  /** Logical AND on all given filters. */
  AND?: FileFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: FileFilter[] | null;

  contentType?: string | null;
  /** All values that are not equal to given value. */
  contentType_not?: string | null;
  /** All values that are contained in given list. */
  contentType_in?: string[] | null;
  /** All values that are not contained in given list. */
  contentType_not_in?: string[] | null;
  /** All values less than the given value. */
  contentType_lt?: string | null;
  /** All values less than or equal the given value. */
  contentType_lte?: string | null;
  /** All values greater than the given value. */
  contentType_gt?: string | null;
  /** All values greater than or equal the given value. */
  contentType_gte?: string | null;
  /** All values containing the given string. */
  contentType_contains?: string | null;
  /** All values not containing the given string. */
  contentType_not_contains?: string | null;
  /** All values starting with the given string. */
  contentType_starts_with?: string | null;
  /** All values not starting with the given string. */
  contentType_not_starts_with?: string | null;
  /** All values ending with the given string. */
  contentType_ends_with?: string | null;
  /** All values not ending with the given string. */
  contentType_not_ends_with?: string | null;

  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  name?: string | null;
  /** All values that are not equal to given value. */
  name_not?: string | null;
  /** All values that are contained in given list. */
  name_in?: string[] | null;
  /** All values that are not contained in given list. */
  name_not_in?: string[] | null;
  /** All values less than the given value. */
  name_lt?: string | null;
  /** All values less than or equal the given value. */
  name_lte?: string | null;
  /** All values greater than the given value. */
  name_gt?: string | null;
  /** All values greater than or equal the given value. */
  name_gte?: string | null;
  /** All values containing the given string. */
  name_contains?: string | null;
  /** All values not containing the given string. */
  name_not_contains?: string | null;
  /** All values starting with the given string. */
  name_starts_with?: string | null;
  /** All values not starting with the given string. */
  name_not_starts_with?: string | null;
  /** All values ending with the given string. */
  name_ends_with?: string | null;
  /** All values not ending with the given string. */
  name_not_ends_with?: string | null;

  secret?: string | null;
  /** All values that are not equal to given value. */
  secret_not?: string | null;
  /** All values that are contained in given list. */
  secret_in?: string[] | null;
  /** All values that are not contained in given list. */
  secret_not_in?: string[] | null;
  /** All values less than the given value. */
  secret_lt?: string | null;
  /** All values less than or equal the given value. */
  secret_lte?: string | null;
  /** All values greater than the given value. */
  secret_gt?: string | null;
  /** All values greater than or equal the given value. */
  secret_gte?: string | null;
  /** All values containing the given string. */
  secret_contains?: string | null;
  /** All values not containing the given string. */
  secret_not_contains?: string | null;
  /** All values starting with the given string. */
  secret_starts_with?: string | null;
  /** All values not starting with the given string. */
  secret_not_starts_with?: string | null;
  /** All values ending with the given string. */
  secret_ends_with?: string | null;
  /** All values not ending with the given string. */
  secret_not_ends_with?: string | null;

  size?: number | null;
  /** All values that are not equal to given value. */
  size_not?: number | null;
  /** All values that are contained in given list. */
  size_in?: number[] | null;
  /** All values that are not contained in given list. */
  size_not_in?: number[] | null;
  /** All values less than the given value. */
  size_lt?: number | null;
  /** All values less than or equal the given value. */
  size_lte?: number | null;
  /** All values greater than the given value. */
  size_gt?: number | null;
  /** All values greater than or equal the given value. */
  size_gte?: number | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;

  url?: string | null;
  /** All values that are not equal to given value. */
  url_not?: string | null;
  /** All values that are contained in given list. */
  url_in?: string[] | null;
  /** All values that are not contained in given list. */
  url_not_in?: string[] | null;
  /** All values less than the given value. */
  url_lt?: string | null;
  /** All values less than or equal the given value. */
  url_lte?: string | null;
  /** All values greater than the given value. */
  url_gt?: string | null;
  /** All values greater than or equal the given value. */
  url_gte?: string | null;
  /** All values containing the given string. */
  url_contains?: string | null;
  /** All values not containing the given string. */
  url_not_contains?: string | null;
  /** All values starting with the given string. */
  url_starts_with?: string | null;
  /** All values not starting with the given string. */
  url_not_starts_with?: string | null;
  /** All values ending with the given string. */
  url_ends_with?: string | null;
  /** All values not ending with the given string. */
  url_not_ends_with?: string | null;
}

export interface UserFilter {
  /** Logical AND on all given filters. */
  AND?: UserFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: UserFilter[] | null;

  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  name?: string | null;
  /** All values that are not equal to given value. */
  name_not?: string | null;
  /** All values that are contained in given list. */
  name_in?: string[] | null;
  /** All values that are not contained in given list. */
  name_not_in?: string[] | null;
  /** All values less than the given value. */
  name_lt?: string | null;
  /** All values less than or equal the given value. */
  name_lte?: string | null;
  /** All values greater than the given value. */
  name_gt?: string | null;
  /** All values greater than or equal the given value. */
  name_gte?: string | null;
  /** All values containing the given string. */
  name_contains?: string | null;
  /** All values not containing the given string. */
  name_not_contains?: string | null;
  /** All values starting with the given string. */
  name_starts_with?: string | null;
  /** All values not starting with the given string. */
  name_not_starts_with?: string | null;
  /** All values ending with the given string. */
  name_ends_with?: string | null;
  /** All values not ending with the given string. */
  name_not_ends_with?: string | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;
}

export interface UpdateFile {
  id: string;

  name?: string | null;
}

export interface CreateFile {
  name: string;
}

export interface UpdateUser {
  id: string;

  name?: string | null;
}

export interface CreateUser {
  name: string;
}

export interface InvokeFunctionInput {
  name: string;

  input: string;

  clientMutationId?: string | null;
}

export interface FileSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: FileSubscriptionFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: FileSubscriptionFilter[] | null;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: _ModelMutationType[] | null;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: string | null;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: string[] | null;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: string[] | null;

  node?: FileSubscriptionFilterNode | null;
}

export interface FileSubscriptionFilterNode {
  contentType?: string | null;
  /** All values that are not equal to given value. */
  contentType_not?: string | null;
  /** All values that are contained in given list. */
  contentType_in?: string[] | null;
  /** All values that are not contained in given list. */
  contentType_not_in?: string[] | null;
  /** All values less than the given value. */
  contentType_lt?: string | null;
  /** All values less than or equal the given value. */
  contentType_lte?: string | null;
  /** All values greater than the given value. */
  contentType_gt?: string | null;
  /** All values greater than or equal the given value. */
  contentType_gte?: string | null;
  /** All values containing the given string. */
  contentType_contains?: string | null;
  /** All values not containing the given string. */
  contentType_not_contains?: string | null;
  /** All values starting with the given string. */
  contentType_starts_with?: string | null;
  /** All values not starting with the given string. */
  contentType_not_starts_with?: string | null;
  /** All values ending with the given string. */
  contentType_ends_with?: string | null;
  /** All values not ending with the given string. */
  contentType_not_ends_with?: string | null;

  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  name?: string | null;
  /** All values that are not equal to given value. */
  name_not?: string | null;
  /** All values that are contained in given list. */
  name_in?: string[] | null;
  /** All values that are not contained in given list. */
  name_not_in?: string[] | null;
  /** All values less than the given value. */
  name_lt?: string | null;
  /** All values less than or equal the given value. */
  name_lte?: string | null;
  /** All values greater than the given value. */
  name_gt?: string | null;
  /** All values greater than or equal the given value. */
  name_gte?: string | null;
  /** All values containing the given string. */
  name_contains?: string | null;
  /** All values not containing the given string. */
  name_not_contains?: string | null;
  /** All values starting with the given string. */
  name_starts_with?: string | null;
  /** All values not starting with the given string. */
  name_not_starts_with?: string | null;
  /** All values ending with the given string. */
  name_ends_with?: string | null;
  /** All values not ending with the given string. */
  name_not_ends_with?: string | null;

  secret?: string | null;
  /** All values that are not equal to given value. */
  secret_not?: string | null;
  /** All values that are contained in given list. */
  secret_in?: string[] | null;
  /** All values that are not contained in given list. */
  secret_not_in?: string[] | null;
  /** All values less than the given value. */
  secret_lt?: string | null;
  /** All values less than or equal the given value. */
  secret_lte?: string | null;
  /** All values greater than the given value. */
  secret_gt?: string | null;
  /** All values greater than or equal the given value. */
  secret_gte?: string | null;
  /** All values containing the given string. */
  secret_contains?: string | null;
  /** All values not containing the given string. */
  secret_not_contains?: string | null;
  /** All values starting with the given string. */
  secret_starts_with?: string | null;
  /** All values not starting with the given string. */
  secret_not_starts_with?: string | null;
  /** All values ending with the given string. */
  secret_ends_with?: string | null;
  /** All values not ending with the given string. */
  secret_not_ends_with?: string | null;

  size?: number | null;
  /** All values that are not equal to given value. */
  size_not?: number | null;
  /** All values that are contained in given list. */
  size_in?: number[] | null;
  /** All values that are not contained in given list. */
  size_not_in?: number[] | null;
  /** All values less than the given value. */
  size_lt?: number | null;
  /** All values less than or equal the given value. */
  size_lte?: number | null;
  /** All values greater than the given value. */
  size_gt?: number | null;
  /** All values greater than or equal the given value. */
  size_gte?: number | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;

  url?: string | null;
  /** All values that are not equal to given value. */
  url_not?: string | null;
  /** All values that are contained in given list. */
  url_in?: string[] | null;
  /** All values that are not contained in given list. */
  url_not_in?: string[] | null;
  /** All values less than the given value. */
  url_lt?: string | null;
  /** All values less than or equal the given value. */
  url_lte?: string | null;
  /** All values greater than the given value. */
  url_gt?: string | null;
  /** All values greater than or equal the given value. */
  url_gte?: string | null;
  /** All values containing the given string. */
  url_contains?: string | null;
  /** All values not containing the given string. */
  url_not_contains?: string | null;
  /** All values starting with the given string. */
  url_starts_with?: string | null;
  /** All values not starting with the given string. */
  url_not_starts_with?: string | null;
  /** All values ending with the given string. */
  url_ends_with?: string | null;
  /** All values not ending with the given string. */
  url_not_ends_with?: string | null;
}

export interface UserSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: UserSubscriptionFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: UserSubscriptionFilter[] | null;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: _ModelMutationType[] | null;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: string | null;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: string[] | null;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: string[] | null;

  node?: UserSubscriptionFilterNode | null;
}

export interface UserSubscriptionFilterNode {
  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  name?: string | null;
  /** All values that are not equal to given value. */
  name_not?: string | null;
  /** All values that are contained in given list. */
  name_in?: string[] | null;
  /** All values that are not contained in given list. */
  name_not_in?: string[] | null;
  /** All values less than the given value. */
  name_lt?: string | null;
  /** All values less than or equal the given value. */
  name_lte?: string | null;
  /** All values greater than the given value. */
  name_gt?: string | null;
  /** All values greater than or equal the given value. */
  name_gte?: string | null;
  /** All values containing the given string. */
  name_contains?: string | null;
  /** All values not containing the given string. */
  name_not_contains?: string | null;
  /** All values starting with the given string. */
  name_starts_with?: string | null;
  /** All values not starting with the given string. */
  name_not_starts_with?: string | null;
  /** All values ending with the given string. */
  name_ends_with?: string | null;
  /** All values not ending with the given string. */
  name_not_ends_with?: string | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;
}

export enum FileOrderBy {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SecretAsc = "secret_ASC",
  SecretDesc = "secret_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC"
}

export enum UserOrderBy {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

export enum _ModelMutationType {
  Created = "CREATED",
  Updated = "UPDATED",
  Deleted = "DELETED"
}

export type DateTime = any;

// ====================================================
// Documents
// ====================================================

export namespace AllUsers {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    allUsers: AllUsers[];
  };

  export type AllUsers = {
    __typename?: "User";

    id: string;

    name: string;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

import gql from "graphql-tag";

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: "root"
})
export class AllUsersGQL extends Apollo.Query<
  AllUsers.Query,
  AllUsers.Variables
> {
  document: any = gql`
    query AllUsers {
      allUsers {
        id
        name
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
