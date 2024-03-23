<div align="left">

[![Visit Discourse](./header.png)](https://discourse.org)

# [Discourse](https://discourse.org)<a id="discourse"></a>

This page contains the documentation on how to use Discourse through API calls.

> Note: For any endpoints not listed you can follow the
[reverse engineer the Discourse API](https://meta.discourse.org/t/-/20576)
guide to figure out how to use an API endpoint.

### Request Content-Type<a id="request-content-type"></a>

The Content-Type for POST and PUT requests can be set to `application/x-www-form-urlencoded`,
`multipart/form-data`, or `application/json`.

### Endpoint Names and Response Content-Type<a id="endpoint-names-and-response-content-type"></a>

Most API endpoints provide the same content as their HTML counterparts. For example
the URL `/categories` serves a list of categories, the `/categories.json` API provides the
same information in JSON format.

Instead of sending API requests to `/categories.json` you may also send them to `/categories`
and add an `Accept: application/json` header to the request to get the JSON response.
Sending requests with the `Accept` header is necessary if you want to use URLs
for related endpoints returned by the API, such as pagination URLs.
These URLs are returned without the `.json` prefix so you need to add the header in
order to get the correct response format.

### Authentication<a id="authentication"></a>

Some endpoints do not require any authentication, pretty much anything else will
require you to be authenticated.

To become authenticated you will need to create an API Key from the admin panel.

Once you have your API Key you can pass it in along with your API Username
as an HTTP header like this:

```
curl -X GET "http://127.0.0.1:3000/admin/users/list/active.json" \
-H "Api-Key: 714552c6148e1617aeab526d0606184b94a80ec048fc09894ff1a72b740c5f19" \
-H "Api-Username: system"
```

and this is how POST requests will look:

```
curl -X POST "http://127.0.0.1:3000/categories" \
-H "Content-Type: multipart/form-data;" \
-H "Api-Key: 714552c6148e1617aeab526d0606184b94a80ec048fc09894ff1a72b740c5f19" \
-H "Api-Username: system" \
-F "name=89853c20-4409-e91a-a8ea-f6cdff96aaaa" \
-F "color=49d9e9" \
-F "text_color=f0fcfd"
```

### Boolean values<a id="boolean-values"></a>

If an endpoint accepts a boolean be sure to specify it as a lowercase
`true` or `false` value unless noted otherwise.


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`discourse.admin.activateUser`](#discourseadminactivateuser)
  * [`discourse.admin.anonymizeByIdJson`](#discourseadminanonymizebyidjson)
  * [`discourse.admin.deactivateUser`](#discourseadmindeactivateuser)
  * [`discourse.admin.deleteUserByIdJson`](#discourseadmindeleteuserbyidjson)
  * [`discourse.admin.getListOfUsers`](#discourseadmingetlistofusers)
  * [`discourse.admin.getUserByIdJson`](#discourseadmingetuserbyidjson)
  * [`discourse.admin.logOutUserAction`](#discourseadminlogoutuseraction)
  * [`discourse.admin.refreshGravatarPost`](#discourseadminrefreshgravatarpost)
  * [`discourse.admin.silenceById`](#discourseadminsilencebyid)
  * [`discourse.admin.suspendByIdJson`](#discourseadminsuspendbyidjson)
  * [`discourse.backups.createBackupRequest`](#discoursebackupscreatebackuprequest)
  * [`discourse.backups.downloadBackup`](#discoursebackupsdownloadbackup)
  * [`discourse.backups.list`](#discoursebackupslist)
  * [`discourse.backups.sendDownloadBackupEmail`](#discoursebackupssenddownloadbackupemail)
  * [`discourse.badges.createBadge`](#discoursebadgescreatebadge)
  * [`discourse.badges.deleteByIdJson`](#discoursebadgesdeletebyidjson)
  * [`discourse.badges.list`](#discoursebadgeslist)
  * [`discourse.badges.listUserBadges`](#discoursebadgeslistuserbadges)
  * [`discourse.badges.updateBadgeByIdJson`](#discoursebadgesupdatebadgebyidjson)
  * [`discourse.categories.createCategoryRequest`](#discoursecategoriescreatecategoryrequest)
  * [`discourse.categories.getCategoriesAndSubcategories`](#discoursecategoriesgetcategoriesandsubcategories)
  * [`discourse.categories.getCategoryByIdJson`](#discoursecategoriesgetcategorybyidjson)
  * [`discourse.categories.list`](#discoursecategorieslist)
  * [`discourse.categories.listTopics`](#discoursecategorieslisttopics)
  * [`discourse.categories.updateCategoryByIdJson`](#discoursecategoriesupdatecategorybyidjson)
  * [`discourse.groups.addMembersToGroup`](#discoursegroupsaddmemberstogroup)
  * [`discourse.groups.createNewGroup`](#discoursegroupscreatenewgroup)
  * [`discourse.groups.deleteGroupByIdJson`](#discoursegroupsdeletegroupbyidjson)
  * [`discourse.groups.getGroupById`](#discoursegroupsgetgroupbyid)
  * [`discourse.groups.list`](#discoursegroupslist)
  * [`discourse.groups.listMembersJson`](#discoursegroupslistmembersjson)
  * [`discourse.groups.removeMembers`](#discoursegroupsremovemembers)
  * [`discourse.groups.updateGroupByIdJson`](#discoursegroupsupdategroupbyidjson)
  * [`discourse.invites.createInvite`](#discourseinvitescreateinvite)
  * [`discourse.invites.createMultipleInvites`](#discourseinvitescreatemultipleinvites)
  * [`discourse.invites.sendInviteToTopic`](#discourseinvitessendinvitetotopic)
  * [`discourse.notifications.getUserNotifications`](#discoursenotificationsgetusernotifications)
  * [`discourse.notifications.markAsRead`](#discoursenotificationsmarkasread)
  * [`discourse.posts.createTopicPostMessage`](#discoursepostscreatetopicpostmessage)
  * [`discourse.posts.deleteSinglePost`](#discoursepostsdeletesinglepost)
  * [`discourse.posts.getSinglePostLikes`](#discoursepostsgetsinglepostlikes)
  * [`discourse.posts.likePostAction`](#discoursepostslikepostaction)
  * [`discourse.posts.listLatestPostsAcrossTopics`](#discoursepostslistlatestpostsacrosstopics)
  * [`discourse.posts.listRepliesToPost`](#discoursepostslistrepliestopost)
  * [`discourse.posts.lockPostAction`](#discoursepostslockpostaction)
  * [`discourse.posts.updateSinglePostJson`](#discoursepostsupdatesinglepostjson)
  * [`discourse.privateMessages.createTopicPostMessage`](#discourseprivatemessagescreatetopicpostmessage)
  * [`discourse.privateMessages.listForUser`](#discourseprivatemessageslistforuser)
  * [`discourse.privateMessages.listSentForUser`](#discourseprivatemessageslistsentforuser)
  * [`discourse.search.termResults`](#discoursesearchtermresults)
  * [`discourse.site.getCategoriesAndSubcategories`](#discoursesitegetcategoriesandsubcategories)
  * [`discourse.tags.createTagGroup`](#discoursetagscreatetaggroup)
  * [`discourse.tags.getSingleTagGroup`](#discoursetagsgetsingletaggroup)
  * [`discourse.tags.getSpecificTag`](#discoursetagsgetspecifictag)
  * [`discourse.tags.getTagGroups`](#discoursetagsgettaggroups)
  * [`discourse.tags.list`](#discoursetagslist)
  * [`discourse.tags.updateTagGroup`](#discoursetagsupdatetaggroup)
  * [`discourse.topics.createTopicPostMessage`](#discoursetopicscreatetopicpostmessage)
  * [`discourse.topics.createTopicTimer`](#discoursetopicscreatetopictimer)
  * [`discourse.topics.getByExternalId`](#discoursetopicsgetbyexternalid)
  * [`discourse.topics.getLatestTopics`](#discoursetopicsgetlatesttopics)
  * [`discourse.topics.getSingleTopic`](#discoursetopicsgetsingletopic)
  * [`discourse.topics.getSpecificPosts`](#discoursetopicsgetspecificposts)
  * [`discourse.topics.getTopTopicsByPeriod`](#discoursetopicsgettoptopicsbyperiod)
  * [`discourse.topics.removeTopicById`](#discoursetopicsremovetopicbyid)
  * [`discourse.topics.sendInviteToTopic`](#discoursetopicssendinvitetotopic)
  * [`discourse.topics.setNotificationLevel`](#discoursetopicssetnotificationlevel)
  * [`discourse.topics.updateBookmark`](#discoursetopicsupdatebookmark)
  * [`discourse.topics.updateStatusOfTopic`](#discoursetopicsupdatestatusoftopic)
  * [`discourse.topics.updateTimestampJson`](#discoursetopicsupdatetimestampjson)
  * [`discourse.topics.updateTopicByIdJson`](#discoursetopicsupdatetopicbyidjson)
  * [`discourse.uploads.abortMultipartUpload`](#discourseuploadsabortmultipartupload)
  * [`discourse.uploads.completeExternalUpload`](#discourseuploadscompleteexternalupload)
  * [`discourse.uploads.completeMultipartUpload`](#discourseuploadscompletemultipartupload)
  * [`discourse.uploads.createMultipartExternalUpload`](#discourseuploadscreatemultipartexternalupload)
  * [`discourse.uploads.createNewUpload`](#discourseuploadscreatenewupload)
  * [`discourse.uploads.generatePresignedUrlsForMultipartParts`](#discourseuploadsgeneratepresignedurlsformultipartparts)
  * [`discourse.uploads.initiateDirectExternalUpload`](#discourseuploadsinitiatedirectexternalupload)
  * [`discourse.users.activateUser`](#discourseusersactivateuser)
  * [`discourse.users.anonymizeByIdJson`](#discourseusersanonymizebyidjson)
  * [`discourse.users.changePasswordAction`](#discourseuserschangepasswordaction)
  * [`discourse.users.createUser`](#discourseuserscreateuser)
  * [`discourse.users.deactivateUser`](#discourseusersdeactivateuser)
  * [`discourse.users.deleteUserByIdJson`](#discourseusersdeleteuserbyidjson)
  * [`discourse.users.getEmails`](#discourseusersgetemails)
  * [`discourse.users.getIdentityProviderExternalId`](#discourseusersgetidentityproviderexternalid)
  * [`discourse.users.getListOfUsers`](#discourseusersgetlistofusers)
  * [`discourse.users.getUserByExternalId`](#discourseusersgetuserbyexternalid)
  * [`discourse.users.getUserByIdJson`](#discourseusersgetuserbyidjson)
  * [`discourse.users.getUserByUsername`](#discourseusersgetuserbyusername)
  * [`discourse.users.listPublicUser`](#discourseuserslistpublicuser)
  * [`discourse.users.listUserActions`](#discourseuserslistuseractions)
  * [`discourse.users.listUserBadges`](#discourseuserslistuserbadges)
  * [`discourse.users.logOutUserAction`](#discourseuserslogoutuseraction)
  * [`discourse.users.refreshGravatarPost`](#discourseusersrefreshgravatarpost)
  * [`discourse.users.sendPasswordResetEmail`](#discourseuserssendpasswordresetemail)
  * [`discourse.users.silenceById`](#discourseuserssilencebyid)
  * [`discourse.users.suspendByIdJson`](#discourseuserssuspendbyidjson)
  * [`discourse.users.updateAvatar`](#discourseusersupdateavatar)
  * [`discourse.users.updateEmailPreferences`](#discourseusersupdateemailpreferences)
  * [`discourse.users.updatePreferencesJson`](#discourseusersupdatepreferencesjson)
  * [`discourse.users.updateUserDetails`](#discourseusersupdateuserdetails)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Discourse&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Discourse } from "discourse-typescript-sdk";

const discourse = new Discourse({
  // Defining the base path is optional and defaults to https://discourse.example.com
  // basePath: "https://discourse.example.com",
});

const activateUserResponse = await discourse.admin.activateUser({
  id: 1,
});

console.log(activateUserResponse);
```

## Reference<a id="reference"></a>


### `discourse.admin.activateUser`<a id="discourseadminactivateuser"></a>

Activate a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const activateUserResponse = await discourse.admin.activateUser({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersActivateUserResponse](./models/users-activate-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}/activate.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.admin.anonymizeByIdJson`<a id="discourseadminanonymizebyidjson"></a>

Anonymize a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const anonymizeByIdJsonResponse = await discourse.admin.anonymizeByIdJson({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersAnonymizeByIdJsonResponse](./models/users-anonymize-by-id-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}/anonymize.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.admin.deactivateUser`<a id="discourseadmindeactivateuser"></a>

Deactivate a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deactivateUserResponse = await discourse.admin.deactivateUser({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersDeactivateUserResponse](./models/users-deactivate-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}/deactivate.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.admin.deleteUserByIdJson`<a id="discourseadmindeleteuserbyidjson"></a>

Delete a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserByIdJsonResponse = await discourse.admin.deleteUserByIdJson({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### delete_posts: `boolean`<a id="delete_posts-boolean"></a>

##### block_email: `boolean`<a id="block_email-boolean"></a>

##### block_urls: `boolean`<a id="block_urls-boolean"></a>

##### block_ip: `boolean`<a id="block_ip-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersDeleteUserByIdJsonResponse](./models/users-delete-user-by-id-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}.json` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.admin.getListOfUsers`<a id="discourseadmingetlistofusers"></a>

Get a list of users

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListOfUsersResponse = await discourse.admin.getListOfUsers({
  flag: "active",
  order: "created",
  asc: "true",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### flag: `'active' | 'new' | 'staff' | 'suspended' | 'blocked' | 'suspect'`<a id="flag-active--new--staff--suspended--blocked--suspect"></a>

##### order: `'created' | 'last_emailed' | 'seen' | 'username' | 'email' | 'trust_level' | 'days_visited' | 'posts_read' | 'topics_viewed' | 'posts' | 'read_time'`<a id="order-created--last_emailed--seen--username--email--trust_level--days_visited--posts_read--topics_viewed--posts--read_time"></a>

##### asc: `'true'`<a id="asc-true"></a>

##### page: `number`<a id="page-number"></a>

##### showEmails: `boolean`<a id="showemails-boolean"></a>

Include user email addresses in response. These requests will be logged in the staff action logs.

##### stats: `boolean`<a id="stats-boolean"></a>

Include user stats information

##### email: `string`<a id="email-string"></a>

Filter to the user with this email address

##### ip: `string`<a id="ip-string"></a>

Filter to users with this IP address

#### 🔄 Return<a id="🔄-return"></a>

[UsersGetListOfUsersResponseInner](./models/users-get-list-of-users-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/list/{flag}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.admin.getUserByIdJson`<a id="discourseadmingetuserbyidjson"></a>

Get a user by id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserByIdJsonResponse = await discourse.admin.getUserByIdJson({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersGetUserByIdJsonResponse](./models/users-get-user-by-id-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.admin.logOutUserAction`<a id="discourseadminlogoutuseraction"></a>

Log a user out

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const logOutUserActionResponse = await discourse.admin.logOutUserAction({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersLogOutUserActionResponse](./models/users-log-out-user-action-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}/log_out.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.admin.refreshGravatarPost`<a id="discourseadminrefreshgravatarpost"></a>

Refresh gravatar

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const refreshGravatarPostResponse = await discourse.admin.refreshGravatarPost({
  username: "username_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersRefreshGravatarPostResponse](./models/users-refresh-gravatar-post-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user_avatar/{username}/refresh_gravatar.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.admin.silenceById`<a id="discourseadminsilencebyid"></a>

Silence a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const silenceByIdResponse = await discourse.admin.silenceById({
  id: 1,
  silenced_till: "2022-06-01T08:00:00.000Z",
  post_action: "delete",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### silenced_till: `string`<a id="silenced_till-string"></a>

##### reason: `string`<a id="reason-string"></a>

##### message: `string`<a id="message-string"></a>

Will send an email with this message when present

##### post_action: `string`<a id="post_action-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersSilenceByIdResponse](./models/users-silence-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}/silence.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.admin.suspendByIdJson`<a id="discourseadminsuspendbyidjson"></a>

Suspend a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const suspendByIdJsonResponse = await discourse.admin.suspendByIdJson({
  id: 1,
  suspend_until: "2121-02-22",
  reason: "reason_example",
  post_action: "delete",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### suspend_until: `string`<a id="suspend_until-string"></a>

##### reason: `string`<a id="reason-string"></a>

##### id: `number`<a id="id-number"></a>

##### message: `string`<a id="message-string"></a>

Will send an email with this message when present

##### post_action: `string`<a id="post_action-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersSuspendByIdJsonResponse](./models/users-suspend-by-id-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}/suspend.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.backups.createBackupRequest`<a id="discoursebackupscreatebackuprequest"></a>

Create backup

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBackupRequestResponse = await discourse.backups.createBackupRequest(
  {
    with_uploads: true,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### with_uploads: `boolean`<a id="with_uploads-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BackupsCreateBackupRequestResponse](./models/backups-create-backup-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/backups.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.backups.downloadBackup`<a id="discoursebackupsdownloadbackup"></a>

Download backup

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadBackupResponse = await discourse.backups.downloadBackup({
  filename: "filename_example",
  token: "token_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filename: `string`<a id="filename-string"></a>

##### token: `string`<a id="token-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/backups/{filename}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.backups.list`<a id="discoursebackupslist"></a>

List backups

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await discourse.backups.list();
```

#### 🔄 Return<a id="🔄-return"></a>

[BackupsListResponseInner](./models/backups-list-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/backups.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.backups.sendDownloadBackupEmail`<a id="discoursebackupssenddownloadbackupemail"></a>

Send download backup email

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendDownloadBackupEmailResponse =
  await discourse.backups.sendDownloadBackupEmail({
    filename: "filename_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filename: `string`<a id="filename-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/backups/{filename}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.badges.createBadge`<a id="discoursebadgescreatebadge"></a>

Create badge

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBadgeResponse = await discourse.badges.createBadge({
  name: "name_example",
  badge_type_id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name for the new badge.

##### badge_type_id: `number`<a id="badge_type_id-number"></a>

The ID for the badge type. 1 for Gold, 2 for Silver, 3 for Bronze.

#### 🔄 Return<a id="🔄-return"></a>

[BadgesCreateBadgeResponse](./models/badges-create-badge-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/badges.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.badges.deleteByIdJson`<a id="discoursebadgesdeletebyidjson"></a>

Delete badge

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdJsonResponse = await discourse.badges.deleteByIdJson({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/badges/{id}.json` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.badges.list`<a id="discoursebadgeslist"></a>

List badges

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await discourse.badges.list();
```

#### 🔄 Return<a id="🔄-return"></a>

[BadgesListResponse](./models/badges-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/badges.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.badges.listUserBadges`<a id="discoursebadgeslistuserbadges"></a>

List badges for a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserBadgesResponse = await discourse.badges.listUserBadges({
  username: "username_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BadgesListUserBadgesResponse](./models/badges-list-user-badges-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user-badges/{username}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.badges.updateBadgeByIdJson`<a id="discoursebadgesupdatebadgebyidjson"></a>

Update badge

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBadgeByIdJsonResponse = await discourse.badges.updateBadgeByIdJson({
  id: 1,
  name: "name_example",
  badge_type_id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name for the new badge.

##### badge_type_id: `number`<a id="badge_type_id-number"></a>

The ID for the badge type. 1 for Gold, 2 for Silver, 3 for Bronze.

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BadgesUpdateBadgeByIdJsonResponse](./models/badges-update-badge-by-id-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/badges/{id}.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.categories.createCategoryRequest`<a id="discoursecategoriescreatecategoryrequest"></a>

Creates a category

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCategoryRequestResponse =
  await discourse.categories.createCategoryRequest({
    name: "name_example",
    color: "49d9e9",
    text_color: "f0fcfd",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### color: `string`<a id="color-string"></a>

##### text_color: `string`<a id="text_color-string"></a>

##### parent_category_id: `number`<a id="parent_category_id-number"></a>

##### allow_badges: `boolean`<a id="allow_badges-boolean"></a>

##### slug: `string`<a id="slug-string"></a>

##### topic_featured_links_allowed: `boolean`<a id="topic_featured_links_allowed-boolean"></a>

##### permissions: [`CategoriesCreateCategoryRequestRequestPermissions`](./models/categories-create-category-request-request-permissions.ts)<a id="permissions-categoriescreatecategoryrequestrequestpermissionsmodelscategories-create-category-request-request-permissionsts"></a>

##### search_priority: `number`<a id="search_priority-number"></a>

##### form_template_ids: `any`<a id="form_template_ids-any"></a>
                         `any`[]

#### 🔄 Return<a id="🔄-return"></a>

[CategoriesCreateCategoryRequestResponse](./models/categories-create-category-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/categories.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.categories.getCategoriesAndSubcategories`<a id="discoursecategoriesgetcategoriesandsubcategories"></a>

Can be used to fetch all categories and subcategories

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCategoriesAndSubcategoriesResponse =
  await discourse.categories.getCategoriesAndSubcategories();
```

#### 🔄 Return<a id="🔄-return"></a>

[SiteGetCategoriesAndSubcategoriesResponse](./models/site-get-categories-and-subcategories-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/site.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.categories.getCategoryByIdJson`<a id="discoursecategoriesgetcategorybyidjson"></a>

Show category

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCategoryByIdJsonResponse =
  await discourse.categories.getCategoryByIdJson({
    id: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CategoriesGetCategoryByIdJsonResponse](./models/categories-get-category-by-id-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/c/{id}/show.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.categories.list`<a id="discoursecategorieslist"></a>

Retrieves a list of categories

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await discourse.categories.list({
  includeSubcategories: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### includeSubcategories: `boolean`<a id="includesubcategories-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CategoriesListResponse](./models/categories-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/categories.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.categories.listTopics`<a id="discoursecategorieslisttopics"></a>

List topics

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTopicsResponse = await discourse.categories.listTopics({
  slug: "slug_example",
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### slug: `string`<a id="slug-string"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CategoriesListTopicsResponse](./models/categories-list-topics-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/c/{slug}/{id}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.categories.updateCategoryByIdJson`<a id="discoursecategoriesupdatecategorybyidjson"></a>

Updates a category

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCategoryByIdJsonResponse =
  await discourse.categories.updateCategoryByIdJson({
    id: 1,
    name: "name_example",
    color: "49d9e9",
    text_color: "f0fcfd",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### id: `number`<a id="id-number"></a>

##### color: `string`<a id="color-string"></a>

##### text_color: `string`<a id="text_color-string"></a>

##### parent_category_id: `number`<a id="parent_category_id-number"></a>

##### allow_badges: `boolean`<a id="allow_badges-boolean"></a>

##### slug: `string`<a id="slug-string"></a>

##### topic_featured_links_allowed: `boolean`<a id="topic_featured_links_allowed-boolean"></a>

##### permissions: [`CategoriesUpdateCategoryByIdJsonRequestPermissions`](./models/categories-update-category-by-id-json-request-permissions.ts)<a id="permissions-categoriesupdatecategorybyidjsonrequestpermissionsmodelscategories-update-category-by-id-json-request-permissionsts"></a>

##### search_priority: `number`<a id="search_priority-number"></a>

##### form_template_ids: `any`<a id="form_template_ids-any"></a>
                         `any`[]

#### 🔄 Return<a id="🔄-return"></a>

[CategoriesUpdateCategoryByIdJsonResponse](./models/categories-update-category-by-id-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/categories/{id}.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.groups.addMembersToGroup`<a id="discoursegroupsaddmemberstogroup"></a>

Add group members

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMembersToGroupResponse = await discourse.groups.addMembersToGroup({
  id: 1,
  usernames: "username1,username2",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### usernames: `string`<a id="usernames-string"></a>

comma separated list

#### 🔄 Return<a id="🔄-return"></a>

[GroupsAddMembersToGroupResponse](./models/groups-add-members-to-group-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{id}/members.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.groups.createNewGroup`<a id="discoursegroupscreatenewgroup"></a>

Create a group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewGroupResponse = await discourse.groups.createNewGroup({
  group: {
    name: "name_example",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### group: [`GroupsCreateNewGroupRequestGroup`](./models/groups-create-new-group-request-group.ts)<a id="group-groupscreatenewgrouprequestgroupmodelsgroups-create-new-group-request-groupts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GroupsCreateNewGroupResponse](./models/groups-create-new-group-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/groups.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.groups.deleteGroupByIdJson`<a id="discoursegroupsdeletegroupbyidjson"></a>

Delete a group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteGroupByIdJsonResponse = await discourse.groups.deleteGroupByIdJson({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GroupsDeleteGroupByIdJsonResponse](./models/groups-delete-group-by-id-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/groups/{id}.json` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.groups.getGroupById`<a id="discoursegroupsgetgroupbyid"></a>

Get a group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGroupByIdResponse = await discourse.groups.getGroupById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Use group name instead of id

#### 🔄 Return<a id="🔄-return"></a>

[GroupsGetGroupByIdResponse](./models/groups-get-group-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{id}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.groups.list`<a id="discoursegroupslist"></a>

List groups

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await discourse.groups.list();
```

#### 🔄 Return<a id="🔄-return"></a>

[GroupsListResponse](./models/groups-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.groups.listMembersJson`<a id="discoursegroupslistmembersjson"></a>

List group members

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMembersJsonResponse = await discourse.groups.listMembersJson({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Use group name instead of id

#### 🔄 Return<a id="🔄-return"></a>

[GroupsListMembersJsonResponse](./models/groups-list-members-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{id}/members.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.groups.removeMembers`<a id="discoursegroupsremovemembers"></a>

Remove group members

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMembersResponse = await discourse.groups.removeMembers({
  id: 1,
  usernames: "username1,username2",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### usernames: `string`<a id="usernames-string"></a>

comma separated list

#### 🔄 Return<a id="🔄-return"></a>

[GroupsRemoveMembersResponse](./models/groups-remove-members-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{id}/members.json` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.groups.updateGroupByIdJson`<a id="discoursegroupsupdategroupbyidjson"></a>

Update a group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateGroupByIdJsonResponse = await discourse.groups.updateGroupByIdJson({
  id: 1,
  group: {
    name: "name_example",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### group: [`GroupsCreateNewGroupRequestGroup`](./models/groups-create-new-group-request-group.ts)<a id="group-groupscreatenewgrouprequestgroupmodelsgroups-create-new-group-request-groupts"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GroupsUpdateGroupByIdJsonResponse](./models/groups-update-group-by-id-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{id}.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.invites.createInvite`<a id="discourseinvitescreateinvite"></a>

Create an invite

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createInviteResponse = await discourse.invites.createInvite({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  email: "not-a-user-yet@example.com",
  skip_email: false,
  max_redemptions_allowed: 5,
  group_ids: "42,43",
  group_names: "foo,bar",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### email: `string`<a id="email-string"></a>

required for email invites only

##### skip_email: `boolean`<a id="skip_email-boolean"></a>

##### custom_message: `string`<a id="custom_message-string"></a>

optional, for email invites

##### max_redemptions_allowed: `number`<a id="max_redemptions_allowed-number"></a>

optional, for link invites

##### topic_id: `number`<a id="topic_id-number"></a>

##### group_ids: `string`<a id="group_ids-string"></a>

Optional, either this or `group_names`. Comma separated list for multiple ids.

##### group_names: `string`<a id="group_names-string"></a>

Optional, either this or `group_ids`. Comma separated list for multiple names.

##### expires_at: `string`<a id="expires_at-string"></a>

optional, if not supplied, the invite_expiry_days site setting is used

#### 🔄 Return<a id="🔄-return"></a>

[InvitesCreateInviteResponse](./models/invites-create-invite-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/invites.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.invites.createMultipleInvites`<a id="discourseinvitescreatemultipleinvites"></a>

Create multiple invites

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMultipleInvitesResponse =
  await discourse.invites.createMultipleInvites({
    ApiKey: "ApiKey_example",
    ApiUsername: "ApiUsername_example",
    email: "[not-a-user-yet-1@example.com, not-a-user-yet-2@example.com]",
    skip_email: false,
    max_redemptions_allowed: 5,
    group_ids: "42,43",
    group_names: "foo,bar",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### email: `string`<a id="email-string"></a>

pass 1 email per invite to be generated. other properties will be shared by each invite.

##### skip_email: `boolean`<a id="skip_email-boolean"></a>

##### custom_message: `string`<a id="custom_message-string"></a>

optional, for email invites

##### max_redemptions_allowed: `number`<a id="max_redemptions_allowed-number"></a>

optional, for link invites

##### topic_id: `number`<a id="topic_id-number"></a>

##### group_ids: `string`<a id="group_ids-string"></a>

Optional, either this or `group_names`. Comma separated list for multiple ids.

##### group_names: `string`<a id="group_names-string"></a>

Optional, either this or `group_ids`. Comma separated list for multiple names.

##### expires_at: `string`<a id="expires_at-string"></a>

optional, if not supplied, the invite_expiry_days site setting is used

#### 🔄 Return<a id="🔄-return"></a>

[InvitesCreateMultipleInvitesResponse](./models/invites-create-multiple-invites-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/invites/create-multiple.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.invites.sendInviteToTopic`<a id="discourseinvitessendinvitetotopic"></a>

Invite to topic

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendInviteToTopicResponse = await discourse.invites.sendInviteToTopic({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### id: `string`<a id="id-string"></a>

##### user: `string`<a id="user-string"></a>

##### email: `string`<a id="email-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TopicsSendInviteToTopicResponse](./models/topics-send-invite-to-topic-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/t/{id}/invite.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.notifications.getUserNotifications`<a id="discoursenotificationsgetusernotifications"></a>

Get the notifications that belong to the current user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserNotificationsResponse =
  await discourse.notifications.getUserNotifications();
```

#### 🔄 Return<a id="🔄-return"></a>

[NotificationsGetUserNotificationsResponse](./models/notifications-get-user-notifications-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.notifications.markAsRead`<a id="discoursenotificationsmarkasread"></a>

Mark notifications as read

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const markAsReadResponse = await discourse.notifications.markAsRead({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

(optional) Leave off to mark all notifications as read

#### 🔄 Return<a id="🔄-return"></a>

[NotificationsMarkAsReadResponse](./models/notifications-mark-as-read-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/notifications/mark-read.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.posts.createTopicPostMessage`<a id="discoursepostscreatetopicpostmessage"></a>

Creates a new topic, a new post, or a private message

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTopicPostMessageResponse =
  await discourse.posts.createTopicPostMessage({
    raw: "raw_example",
    target_recipients: "blake,sam",
    archetype: "private_message",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### raw: `string`<a id="raw-string"></a>

##### title: `string`<a id="title-string"></a>

Required if creating a new topic or new private message.

##### topic_id: `number`<a id="topic_id-number"></a>

Required if creating a new post.

##### category: `number`<a id="category-number"></a>

Optional if creating a new topic, and ignored if creating a new post.

##### target_recipients: `string`<a id="target_recipients-string"></a>

Required for private message, comma separated.

##### target_usernames: `string`<a id="target_usernames-string"></a>

Deprecated. Use target_recipients instead.

##### archetype: `string`<a id="archetype-string"></a>

Required for new private message.

##### created_at: `string`<a id="created_at-string"></a>

##### reply_to_post_number: `number`<a id="reply_to_post_number-number"></a>

Optional, the post number to reply to inside a topic.

##### embed_url: `string`<a id="embed_url-string"></a>

Provide a URL from a remote system to associate a forum topic with that URL, typically for using Discourse as a comments system for an external blog.

##### external_id: `string`<a id="external_id-string"></a>

Provide an external_id from a remote system to associate a forum topic with that id.

#### 🔄 Return<a id="🔄-return"></a>

[PostsCreateTopicPostMessageResponse](./models/posts-create-topic-post-message-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/posts.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.posts.deleteSinglePost`<a id="discoursepostsdeletesinglepost"></a>

delete a single post

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSinglePostResponse = await discourse.posts.deleteSinglePost({
  id: 1,
  force_destroy: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### force_destroy: `boolean`<a id="force_destroy-boolean"></a>

The `SiteSetting.can_permanently_delete` needs to be enabled first before this param can be used. Also this endpoint needs to be called first without `force_destroy` and then followed up with a second call 5 minutes later with `force_destroy` to permanently delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/posts/{id}.json` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.posts.getSinglePostLikes`<a id="discoursepostsgetsinglepostlikes"></a>

This endpoint can be used to get the number of likes on a post using the
`actions_summary` property in the response. `actions_summary` responses
with the id of `2` signify a `like`. If there are no `actions_summary`
items with the id of `2`, that means there are 0 likes. Other ids likely
refer to various different flag types.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSinglePostLikesResponse = await discourse.posts.getSinglePostLikes({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PostsGetSinglePostLikesResponse](./models/posts-get-single-post-likes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/posts/{id}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.posts.likePostAction`<a id="discoursepostslikepostaction"></a>

Like a post and other actions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const likePostActionResponse = await discourse.posts.likePostAction({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  id: 1,
  post_action_type_id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### post_action_type_id: `number`<a id="post_action_type_id-number"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### flag_topic: `boolean`<a id="flag_topic-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PostsLikePostActionResponse](./models/posts-like-post-action-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/post_actions.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.posts.listLatestPostsAcrossTopics`<a id="discoursepostslistlatestpostsacrosstopics"></a>

List latest posts across topics

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLatestPostsAcrossTopicsResponse =
  await discourse.posts.listLatestPostsAcrossTopics({
    ApiKey: "ApiKey_example",
    ApiUsername: "ApiUsername_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### before: `string`<a id="before-string"></a>

Load posts with an id lower than this value. Useful for pagination.

#### 🔄 Return<a id="🔄-return"></a>

[PostsListLatestPostsAcrossTopicsResponse](./models/posts-list-latest-posts-across-topics-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/posts.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.posts.listRepliesToPost`<a id="discoursepostslistrepliestopost"></a>

List replies to a post

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRepliesToPostResponse = await discourse.posts.listRepliesToPost({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PostsListRepliesToPostResponseInner](./models/posts-list-replies-to-post-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/posts/{id}/replies.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.posts.lockPostAction`<a id="discoursepostslockpostaction"></a>

Lock a post from being edited

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const lockPostActionResponse = await discourse.posts.lockPostAction({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  id: "id_example",
  locked: "locked_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### locked: `string`<a id="locked-string"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PostsLockPostActionResponse](./models/posts-lock-post-action-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/posts/{id}/locked.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.posts.updateSinglePostJson`<a id="discoursepostsupdatesinglepostjson"></a>

Update a single post

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSinglePostJsonResponse = await discourse.posts.updateSinglePostJson(
  {
    id: "id_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### post: [`PostsUpdateSinglePostJsonRequestPost`](./models/posts-update-single-post-json-request-post.ts)<a id="post-postsupdatesinglepostjsonrequestpostmodelsposts-update-single-post-json-request-postts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PostsUpdateSinglePostJsonResponse](./models/posts-update-single-post-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/posts/{id}.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.privateMessages.createTopicPostMessage`<a id="discourseprivatemessagescreatetopicpostmessage"></a>

Creates a new topic, a new post, or a private message

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTopicPostMessageResponse =
  await discourse.privateMessages.createTopicPostMessage({
    raw: "raw_example",
    target_recipients: "blake,sam",
    archetype: "private_message",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### raw: `string`<a id="raw-string"></a>

##### title: `string`<a id="title-string"></a>

Required if creating a new topic or new private message.

##### topic_id: `number`<a id="topic_id-number"></a>

Required if creating a new post.

##### category: `number`<a id="category-number"></a>

Optional if creating a new topic, and ignored if creating a new post.

##### target_recipients: `string`<a id="target_recipients-string"></a>

Required for private message, comma separated.

##### target_usernames: `string`<a id="target_usernames-string"></a>

Deprecated. Use target_recipients instead.

##### archetype: `string`<a id="archetype-string"></a>

Required for new private message.

##### created_at: `string`<a id="created_at-string"></a>

##### reply_to_post_number: `number`<a id="reply_to_post_number-number"></a>

Optional, the post number to reply to inside a topic.

##### embed_url: `string`<a id="embed_url-string"></a>

Provide a URL from a remote system to associate a forum topic with that URL, typically for using Discourse as a comments system for an external blog.

##### external_id: `string`<a id="external_id-string"></a>

Provide an external_id from a remote system to associate a forum topic with that id.

#### 🔄 Return<a id="🔄-return"></a>

[PostsCreateTopicPostMessageResponse](./models/posts-create-topic-post-message-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/posts.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.privateMessages.listForUser`<a id="discourseprivatemessageslistforuser"></a>

Get a list of private messages for a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listForUserResponse = await discourse.privateMessages.listForUser({
  username: "username_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PrivateMessagesListForUserResponse](./models/private-messages-list-for-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/topics/private-messages/{username}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.privateMessages.listSentForUser`<a id="discourseprivatemessageslistsentforuser"></a>

Get a list of private messages sent for a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSentForUserResponse = await discourse.privateMessages.listSentForUser(
  {
    username: "username_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PrivateMessagesListSentForUserResponse](./models/private-messages-list-sent-for-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/topics/private-messages-sent/{username}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.search.termResults`<a id="discoursesearchtermresults"></a>

Search for a term

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const termResultsResponse = await discourse.search.termResults({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

The query string needs to be url encoded and is made up of the following options: - Search term. This is just a string. Usually it would be the first item in the query. - `@<username>`: Use the `@` followed by the username to specify posts by this user. - `#<category>`: Use the `#` followed by the category slug to search within this category. - `tags:`: `api,solved` or for posts that have all the specified tags `api+solved`. - `before:`: `yyyy-mm-dd` - `after:`: `yyyy-mm-dd` - `order:`: `latest`, `likes`, `views`, `latest_topic` - `assigned:`: username (without `@`) - `in:`: `title`, `likes`, `personal`, `messages`, `seen`, `unseen`, `posted`, `created`, `watching`, `tracking`, `bookmarks`, `assigned`, `unassigned`, `first`, `pinned`, `wiki` - `with:`: `images` - `status:`: `open`, `closed`, `public`, `archived`, `noreplies`, `single_user`, `solved`, `unsolved` - `group:`: group_name or group_id - `group_messages:`: group_name or group_id - `min_posts:`: 1 - `max_posts:`: 10 - `min_views:`: 1 - `max_views:`: 10  If you are using cURL you can use the `-G` and the `--data-urlencode` flags to encode the query:  ``` curl -i -sS -X GET -G \"http://localhost:4200/search.json\" \\ --data-urlencode \'q=wordpress @scossar #fun after:2020-01-01\' ``` 

##### page: `number`<a id="page-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SearchTermResultsResponse](./models/search-term-results-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/search.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.site.getCategoriesAndSubcategories`<a id="discoursesitegetcategoriesandsubcategories"></a>

Can be used to fetch all categories and subcategories

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCategoriesAndSubcategoriesResponse =
  await discourse.site.getCategoriesAndSubcategories();
```

#### 🔄 Return<a id="🔄-return"></a>

[SiteGetCategoriesAndSubcategoriesResponse](./models/site-get-categories-and-subcategories-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/site.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.tags.createTagGroup`<a id="discoursetagscreatetaggroup"></a>

Creates a tag group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTagGroupResponse = await discourse.tags.createTagGroup({
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TagsCreateTagGroupResponse](./models/tags-create-tag-group-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tag_groups.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.tags.getSingleTagGroup`<a id="discoursetagsgetsingletaggroup"></a>

Get a single tag group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleTagGroupResponse = await discourse.tags.getSingleTagGroup({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TagsGetSingleTagGroupResponse](./models/tags-get-single-tag-group-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tag_groups/{id}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.tags.getSpecificTag`<a id="discoursetagsgetspecifictag"></a>

Get a specific tag

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificTagResponse = await discourse.tags.getSpecificTag({
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TagsGetSpecificTagResponse](./models/tags-get-specific-tag-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tag/{name}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.tags.getTagGroups`<a id="discoursetagsgettaggroups"></a>

Get a list of tag groups

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTagGroupsResponse = await discourse.tags.getTagGroups();
```

#### 🔄 Return<a id="🔄-return"></a>

[TagsGetTagGroupsResponse](./models/tags-get-tag-groups-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tag_groups.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.tags.list`<a id="discoursetagslist"></a>

Get a list of tags

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await discourse.tags.list();
```

#### 🔄 Return<a id="🔄-return"></a>

[TagsListResponse](./models/tags-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.tags.updateTagGroup`<a id="discoursetagsupdatetaggroup"></a>

Update tag group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTagGroupResponse = await discourse.tags.updateTagGroup({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### name: `string`<a id="name-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TagsUpdateTagGroupResponse](./models/tags-update-tag-group-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tag_groups/{id}.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.topics.createTopicPostMessage`<a id="discoursetopicscreatetopicpostmessage"></a>

Creates a new topic, a new post, or a private message

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTopicPostMessageResponse =
  await discourse.topics.createTopicPostMessage({
    raw: "raw_example",
    target_recipients: "blake,sam",
    archetype: "private_message",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### raw: `string`<a id="raw-string"></a>

##### title: `string`<a id="title-string"></a>

Required if creating a new topic or new private message.

##### topic_id: `number`<a id="topic_id-number"></a>

Required if creating a new post.

##### category: `number`<a id="category-number"></a>

Optional if creating a new topic, and ignored if creating a new post.

##### target_recipients: `string`<a id="target_recipients-string"></a>

Required for private message, comma separated.

##### target_usernames: `string`<a id="target_usernames-string"></a>

Deprecated. Use target_recipients instead.

##### archetype: `string`<a id="archetype-string"></a>

Required for new private message.

##### created_at: `string`<a id="created_at-string"></a>

##### reply_to_post_number: `number`<a id="reply_to_post_number-number"></a>

Optional, the post number to reply to inside a topic.

##### embed_url: `string`<a id="embed_url-string"></a>

Provide a URL from a remote system to associate a forum topic with that URL, typically for using Discourse as a comments system for an external blog.

##### external_id: `string`<a id="external_id-string"></a>

Provide an external_id from a remote system to associate a forum topic with that id.

#### 🔄 Return<a id="🔄-return"></a>

[PostsCreateTopicPostMessageResponse](./models/posts-create-topic-post-message-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/posts.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.topics.createTopicTimer`<a id="discoursetopicscreatetopictimer"></a>

Create topic timer

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTopicTimerResponse = await discourse.topics.createTopicTimer({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  id: "id_example",
  time: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### id: `string`<a id="id-string"></a>

##### time: `string`<a id="time-string"></a>

##### status_type: `string`<a id="status_type-string"></a>

##### based_on_last_post: `boolean`<a id="based_on_last_post-boolean"></a>

##### category_id: `number`<a id="category_id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TopicsCreateTopicTimerResponse](./models/topics-create-topic-timer-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/t/{id}/timer.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.topics.getByExternalId`<a id="discoursetopicsgetbyexternalid"></a>

Get topic by external_id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByExternalIdResponse = await discourse.topics.getByExternalId({
  externalId: "externalId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### externalId: `string`<a id="externalid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/t/external_id/{external_id}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.topics.getLatestTopics`<a id="discoursetopicsgetlatesttopics"></a>

Get the latest topics

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLatestTopicsResponse = await discourse.topics.getLatestTopics({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### order: `string`<a id="order-string"></a>

Enum: `default`, `created`, `activity`, `views`, `posts`, `category`, `likes`, `op_likes`, `posters`

##### ascending: `string`<a id="ascending-string"></a>

Defaults to `desc`, add `ascending=true` to sort asc

#### 🔄 Return<a id="🔄-return"></a>

[TopicsGetLatestTopicsResponse](./models/topics-get-latest-topics-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/latest.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.topics.getSingleTopic`<a id="discoursetopicsgetsingletopic"></a>

Get a single topic

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleTopicResponse = await discourse.topics.getSingleTopic({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TopicsGetSingleTopicResponse](./models/topics-get-single-topic-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/t/{id}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.topics.getSpecificPosts`<a id="discoursetopicsgetspecificposts"></a>

Get specific posts from a topic

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificPostsResponse = await discourse.topics.getSpecificPosts({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  id: "id_example",
  post_ids_: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### post_ids[]: `number`<a id="post_ids-number"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TopicsGetSpecificPostsResponse](./models/topics-get-specific-posts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/t/{id}/posts.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.topics.getTopTopicsByPeriod`<a id="discoursetopicsgettoptopicsbyperiod"></a>

Get the top topics filtered by period

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTopTopicsByPeriodResponse =
  await discourse.topics.getTopTopicsByPeriod({
    ApiKey: "ApiKey_example",
    ApiUsername: "ApiUsername_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### period: `string`<a id="period-string"></a>

Enum: `all`, `yearly`, `quarterly`, `monthly`, `weekly`, `daily`

#### 🔄 Return<a id="🔄-return"></a>

[TopicsGetTopTopicsByPeriodResponse](./models/topics-get-top-topics-by-period-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/top.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.topics.removeTopicById`<a id="discoursetopicsremovetopicbyid"></a>

Remove a topic

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTopicByIdResponse = await discourse.topics.removeTopicById({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### id: `string`<a id="id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/t/{id}.json` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.topics.sendInviteToTopic`<a id="discoursetopicssendinvitetotopic"></a>

Invite to topic

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendInviteToTopicResponse = await discourse.topics.sendInviteToTopic({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### id: `string`<a id="id-string"></a>

##### user: `string`<a id="user-string"></a>

##### email: `string`<a id="email-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TopicsSendInviteToTopicResponse](./models/topics-send-invite-to-topic-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/t/{id}/invite.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.topics.setNotificationLevel`<a id="discoursetopicssetnotificationlevel"></a>

Set notification level

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setNotificationLevelResponse =
  await discourse.topics.setNotificationLevel({
    ApiKey: "ApiKey_example",
    ApiUsername: "ApiUsername_example",
    id: "id_example",
    notification_level: "0",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### notification_level: `string`<a id="notification_level-string"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TopicsSetNotificationLevelResponse](./models/topics-set-notification-level-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/t/{id}/notifications.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.topics.updateBookmark`<a id="discoursetopicsupdatebookmark"></a>

Bookmark topic

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBookmarkResponse = await discourse.topics.updateBookmark({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### id: `string`<a id="id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/t/{id}/bookmark.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.topics.updateStatusOfTopic`<a id="discoursetopicsupdatestatusoftopic"></a>

Update the status of a topic

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStatusOfTopicResponse = await discourse.topics.updateStatusOfTopic({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  id: "id_example",
  status: "closed",
  enabled: "true",
  until: "2030-12-31",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `string`<a id="status-string"></a>

##### enabled: `string`<a id="enabled-string"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### id: `string`<a id="id-string"></a>

##### until: `string`<a id="until-string"></a>

Only required for `pinned` and `pinned_globally`

#### 🔄 Return<a id="🔄-return"></a>

[TopicsUpdateStatusOfTopicResponse](./models/topics-update-status-of-topic-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/t/{id}/status.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.topics.updateTimestampJson`<a id="discoursetopicsupdatetimestampjson"></a>

Update topic timestamp

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTimestampJsonResponse = await discourse.topics.updateTimestampJson({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  id: "id_example",
  timestamp: "1594291380",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timestamp: `string`<a id="timestamp-string"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TopicsUpdateTimestampJsonResponse](./models/topics-update-timestamp-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/t/{id}/change-timestamp.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.topics.updateTopicByIdJson`<a id="discoursetopicsupdatetopicbyidjson"></a>

Update a topic

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTopicByIdJsonResponse = await discourse.topics.updateTopicByIdJson({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### id: `string`<a id="id-string"></a>

##### topic: [`TopicsUpdateTopicByIdJsonRequestTopic`](./models/topics-update-topic-by-id-json-request-topic.ts)<a id="topic-topicsupdatetopicbyidjsonrequesttopicmodelstopics-update-topic-by-id-json-request-topicts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TopicsUpdateTopicByIdJsonResponse](./models/topics-update-topic-by-id-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/t/-/{id}.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.uploads.abortMultipartUpload`<a id="discourseuploadsabortmultipartupload"></a>

This endpoint aborts the multipart upload initiated with /create-multipart.
This should be used when cancelling the upload. It does not matter if parts
were already uploaded into the external storage provider.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const abortMultipartUploadResponse =
  await discourse.uploads.abortMultipartUpload({
    external_upload_identifier:
      "84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### external_upload_identifier: `string`<a id="external_upload_identifier-string"></a>

The identifier of the multipart upload in the external storage provider. This is the multipart upload_id in AWS S3.

#### 🔄 Return<a id="🔄-return"></a>

[UploadsAbortMultipartUploadResponse](./models/uploads-abort-multipart-upload-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/uploads/abort-multipart.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.uploads.completeExternalUpload`<a id="discourseuploadscompleteexternalupload"></a>

Completes an external upload initialized with /get-presigned-put. The
file will be moved from its temporary location in external storage to
a final destination in the S3 bucket. An Upload record will also be
created in the database in most cases.

If a sha1-checksum was provided in the initial request it will also
be compared with the uploaded file in storage to make sure the same
file was uploaded. The file size will be compared for the same reason.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const completeExternalUploadResponse =
  await discourse.uploads.completeExternalUpload({
    unique_identifier: "66e86218-80d9-4bda-b4d5-2b6def968705",
    for_private_message: "true",
    for_site_setting: "true",
    pasted: "true",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### unique_identifier: `string`<a id="unique_identifier-string"></a>

The unique identifier returned in the original /generate-presigned-put request.

##### for_private_message: `string`<a id="for_private_message-string"></a>

Optionally set this to true if the upload is for a private message.

##### for_site_setting: `string`<a id="for_site_setting-string"></a>

Optionally set this to true if the upload is for a site setting.

##### pasted: `string`<a id="pasted-string"></a>

Optionally set this to true if the upload was pasted into the upload area. This will convert PNG files to JPEG.

#### 🔄 Return<a id="🔄-return"></a>

[UploadsCompleteExternalUploadResponse](./models/uploads-complete-external-upload-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/uploads/complete-external-upload.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.uploads.completeMultipartUpload`<a id="discourseuploadscompletemultipartupload"></a>

Completes the multipart upload in the external store, and copies the
file from its temporary location to its final location in the store.
All of the parts must have been uploaded to the external storage provider.
An Upload record will be completed in most cases once the file is copied
to its final location.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const completeMultipartUploadResponse =
  await discourse.uploads.completeMultipartUpload({
    unique_identifier: "66e86218-80d9-4bda-b4d5-2b6def968705",
    parts: [null, null],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### unique_identifier: `string`<a id="unique_identifier-string"></a>

The unique identifier returned in the original /create-multipart request.

##### parts: `any`<a id="parts-any"></a>
             `any`[]

All of the part numbers and their corresponding ETags that have been uploaded must be provided.

#### 🔄 Return<a id="🔄-return"></a>

[UploadsCompleteMultipartUploadResponse](./models/uploads-complete-multipart-upload-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/uploads/complete-multipart.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.uploads.createMultipartExternalUpload`<a id="discourseuploadscreatemultipartexternalupload"></a>

Creates a multipart upload in the external storage provider, storing
a temporary reference to the external upload similar to /get-presigned-put.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMultipartExternalUploadResponse =
  await discourse.uploads.createMultipartExternalUpload({
    upload_type: "avatar",
    file_name: "IMG_2021.jpeg",
    file_size: 4096,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### upload_type: `string`<a id="upload_type-string"></a>

##### file_name: `string`<a id="file_name-string"></a>

##### file_size: `number`<a id="file_size-number"></a>

File size should be represented in bytes.

##### metadata: [`UploadsInitiateDirectExternalUploadRequestMetadata`](./models/uploads-initiate-direct-external-upload-request-metadata.ts)<a id="metadata-uploadsinitiatedirectexternaluploadrequestmetadatamodelsuploads-initiate-direct-external-upload-request-metadatats"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UploadsCreateMultipartExternalUploadResponse](./models/uploads-create-multipart-external-upload-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/uploads/create-multipart.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.uploads.createNewUpload`<a id="discourseuploadscreatenewupload"></a>

Creates an upload

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewUploadResponse = await discourse.uploads.createNewUpload({
  type: "avatar",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `string`<a id="type-string"></a>

##### userId: `number`<a id="userid-number"></a>

required if uploading an avatar

##### synchronous: `boolean`<a id="synchronous-boolean"></a>

Use this flag to return an id and url

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UploadsCreateNewUploadResponse](./models/uploads-create-new-upload-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/uploads.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.uploads.generatePresignedUrlsForMultipartParts`<a id="discourseuploadsgeneratepresignedurlsformultipartparts"></a>

Multipart uploads are uploaded in chunks or parts to individual presigned
URLs, similar to the one generated by /generate-presigned-put. The part
numbers provided must be between 1 and 10000. The total number of parts
will depend on the chunk size in bytes that you intend to use to upload
each chunk. For example a 12MB file may have 2 5MB chunks and a final
2MB chunk, for part numbers 1, 2, and 3.

This endpoint will return a presigned URL for each part number provided,
which you can then use to send PUT requests for the binary chunk corresponding
to that part. When the part is uploaded, the provider should return an
ETag for the part, and this should be stored along with the part number,
because this is needed to complete the multipart upload.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generatePresignedUrlsForMultipartPartsResponse =
  await discourse.uploads.generatePresignedUrlsForMultipartParts({
    part_numbers: [1, 2, 3],
    unique_identifier: "66e86218-80d9-4bda-b4d5-2b6def968705",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### part_numbers: `any`<a id="part_numbers-any"></a>
                    `any`[]

The part numbers to generate the presigned URLs for, must be between 1 and 10000.

##### unique_identifier: `string`<a id="unique_identifier-string"></a>

The unique identifier returned in the original /create-multipart request.

#### 🔄 Return<a id="🔄-return"></a>

[UploadsGeneratePresignedUrlsForMultipartPartsResponse](./models/uploads-generate-presigned-urls-for-multipart-parts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/uploads/batch-presign-multipart-parts.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.uploads.initiateDirectExternalUpload`<a id="discourseuploadsinitiatedirectexternalupload"></a>

Direct external uploads bypass the usual method of creating uploads
via the POST /uploads route, and upload directly to an external provider,
which by default is S3. This route begins the process, and will return
a unique identifier for the external upload as well as a presigned URL
which is where the file binary blob should be uploaded to.

Once the upload is complete to the external service, you must call the
POST /complete-external-upload route using the unique identifier returned
by this route, which will create any required Upload record in the Discourse
database and also move file from its temporary location to the final
destination in the external storage service.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const initiateDirectExternalUploadResponse =
  await discourse.uploads.initiateDirectExternalUpload({
    type: "avatar",
    file_name: "IMG_2021.jpeg",
    file_size: 4096,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `string`<a id="type-string"></a>

##### file_name: `string`<a id="file_name-string"></a>

##### file_size: `number`<a id="file_size-number"></a>

File size should be represented in bytes.

##### metadata: [`UploadsInitiateDirectExternalUploadRequestMetadata`](./models/uploads-initiate-direct-external-upload-request-metadata.ts)<a id="metadata-uploadsinitiatedirectexternaluploadrequestmetadatamodelsuploads-initiate-direct-external-upload-request-metadatats"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UploadsInitiateDirectExternalUploadResponse](./models/uploads-initiate-direct-external-upload-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/uploads/generate-presigned-put.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.activateUser`<a id="discourseusersactivateuser"></a>

Activate a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const activateUserResponse = await discourse.users.activateUser({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersActivateUserResponse](./models/users-activate-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}/activate.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.anonymizeByIdJson`<a id="discourseusersanonymizebyidjson"></a>

Anonymize a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const anonymizeByIdJsonResponse = await discourse.users.anonymizeByIdJson({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersAnonymizeByIdJsonResponse](./models/users-anonymize-by-id-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}/anonymize.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.changePasswordAction`<a id="discourseuserschangepasswordaction"></a>

Change password

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const changePasswordActionResponse = await discourse.users.changePasswordAction(
  {
    token: "token_example",
    username: "username_example",
    password: "password_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

##### password: `string`<a id="password-string"></a>

##### token: `string`<a id="token-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/password-reset/{token}.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.createUser`<a id="discourseuserscreateuser"></a>

Creates a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createUserResponse = await discourse.users.createUser({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  name: "name_example",
  email: "email_example",
  password: "password_example",
  username: "username_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### email: `string`<a id="email-string"></a>

##### password: `string`<a id="password-string"></a>

##### username: `string`<a id="username-string"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### active: `boolean`<a id="active-boolean"></a>

This param requires an api key in the request header or it will be ignored

##### approved: `boolean`<a id="approved-boolean"></a>

##### user_fields[1]: `boolean`<a id="user_fields1-boolean"></a>

##### external_ids: `object`<a id="external_ids-object"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersCreateUserResponse](./models/users-create-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.deactivateUser`<a id="discourseusersdeactivateuser"></a>

Deactivate a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deactivateUserResponse = await discourse.users.deactivateUser({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersDeactivateUserResponse](./models/users-deactivate-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}/deactivate.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.deleteUserByIdJson`<a id="discourseusersdeleteuserbyidjson"></a>

Delete a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserByIdJsonResponse = await discourse.users.deleteUserByIdJson({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### delete_posts: `boolean`<a id="delete_posts-boolean"></a>

##### block_email: `boolean`<a id="block_email-boolean"></a>

##### block_urls: `boolean`<a id="block_urls-boolean"></a>

##### block_ip: `boolean`<a id="block_ip-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersDeleteUserByIdJsonResponse](./models/users-delete-user-by-id-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}.json` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.getEmails`<a id="discourseusersgetemails"></a>

Get email addresses belonging to a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmailsResponse = await discourse.users.getEmails({
  username: "username_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersGetEmailsResponse](./models/users-get-emails-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/u/{username}/emails.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.getIdentityProviderExternalId`<a id="discourseusersgetidentityproviderexternalid"></a>

Get a user by identity provider external ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getIdentityProviderExternalIdResponse =
  await discourse.users.getIdentityProviderExternalId({
    ApiKey: "ApiKey_example",
    ApiUsername: "ApiUsername_example",
    provider: "provider_example",
    externalId: "externalId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### provider: `string`<a id="provider-string"></a>

Authentication provider name. Can be found in the provider callback URL: `/auth/{provider}/callback`

##### externalId: `string`<a id="externalid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersGetIdentityProviderExternalIdResponse](./models/users-get-identity-provider-external-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/u/by-external/{provider}/{external_id}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.getListOfUsers`<a id="discourseusersgetlistofusers"></a>

Get a list of users

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListOfUsersResponse = await discourse.users.getListOfUsers({
  flag: "active",
  order: "created",
  asc: "true",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### flag: `'active' | 'new' | 'staff' | 'suspended' | 'blocked' | 'suspect'`<a id="flag-active--new--staff--suspended--blocked--suspect"></a>

##### order: `'created' | 'last_emailed' | 'seen' | 'username' | 'email' | 'trust_level' | 'days_visited' | 'posts_read' | 'topics_viewed' | 'posts' | 'read_time'`<a id="order-created--last_emailed--seen--username--email--trust_level--days_visited--posts_read--topics_viewed--posts--read_time"></a>

##### asc: `'true'`<a id="asc-true"></a>

##### page: `number`<a id="page-number"></a>

##### showEmails: `boolean`<a id="showemails-boolean"></a>

Include user email addresses in response. These requests will be logged in the staff action logs.

##### stats: `boolean`<a id="stats-boolean"></a>

Include user stats information

##### email: `string`<a id="email-string"></a>

Filter to the user with this email address

##### ip: `string`<a id="ip-string"></a>

Filter to users with this IP address

#### 🔄 Return<a id="🔄-return"></a>

[UsersGetListOfUsersResponseInner](./models/users-get-list-of-users-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/list/{flag}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.getUserByExternalId`<a id="discourseusersgetuserbyexternalid"></a>

Get a user by external_id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserByExternalIdResponse = await discourse.users.getUserByExternalId({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  externalId: "externalId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### externalId: `string`<a id="externalid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersGetUserByExternalIdResponse](./models/users-get-user-by-external-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/u/by-external/{external_id}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.getUserByIdJson`<a id="discourseusersgetuserbyidjson"></a>

Get a user by id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserByIdJsonResponse = await discourse.users.getUserByIdJson({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersGetUserByIdJsonResponse](./models/users-get-user-by-id-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.getUserByUsername`<a id="discourseusersgetuserbyusername"></a>

Get a single user by username

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserByUsernameResponse = await discourse.users.getUserByUsername({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  username: "username_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### username: `string`<a id="username-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersGetUserByUsernameResponse](./models/users-get-user-by-username-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/u/{username}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.listPublicUser`<a id="discourseuserslistpublicuser"></a>

Get a public list of users

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPublicUserResponse = await discourse.users.listPublicUser({
  period: "daily",
  order: "likes_received",
  asc: "true",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### period: `'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly' | 'all'`<a id="period-daily--weekly--monthly--quarterly--yearly--all"></a>

##### order: `'likes_received' | 'likes_given' | 'topic_count' | 'post_count' | 'topics_entered' | 'posts_read' | 'days_visited'`<a id="order-likes_received--likes_given--topic_count--post_count--topics_entered--posts_read--days_visited"></a>

##### asc: `'true'`<a id="asc-true"></a>

##### page: `number`<a id="page-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersListPublicUserResponse](./models/users-list-public-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/directory_items.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.listUserActions`<a id="discourseuserslistuseractions"></a>

Get a list of user actions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserActionsResponse = await discourse.users.listUserActions({
  offset: 1,
  username: "username_example",
  filter: "filter_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### offset: `number`<a id="offset-number"></a>

##### username: `string`<a id="username-string"></a>

##### filter: `string`<a id="filter-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersListUserActionsResponse](./models/users-list-user-actions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user_actions.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.listUserBadges`<a id="discourseuserslistuserbadges"></a>

List badges for a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserBadgesResponse = await discourse.users.listUserBadges({
  username: "username_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BadgesListUserBadgesResponse](./models/badges-list-user-badges-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user-badges/{username}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.logOutUserAction`<a id="discourseuserslogoutuseraction"></a>

Log a user out

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const logOutUserActionResponse = await discourse.users.logOutUserAction({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersLogOutUserActionResponse](./models/users-log-out-user-action-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}/log_out.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.refreshGravatarPost`<a id="discourseusersrefreshgravatarpost"></a>

Refresh gravatar

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const refreshGravatarPostResponse = await discourse.users.refreshGravatarPost({
  username: "username_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersRefreshGravatarPostResponse](./models/users-refresh-gravatar-post-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user_avatar/{username}/refresh_gravatar.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.sendPasswordResetEmail`<a id="discourseuserssendpasswordresetemail"></a>

Send password reset email

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendPasswordResetEmailResponse =
  await discourse.users.sendPasswordResetEmail({
    login: "login_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### login: `string`<a id="login-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersSendPasswordResetEmailResponse](./models/users-send-password-reset-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/session/forgot_password.json` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.silenceById`<a id="discourseuserssilencebyid"></a>

Silence a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const silenceByIdResponse = await discourse.users.silenceById({
  id: 1,
  silenced_till: "2022-06-01T08:00:00.000Z",
  post_action: "delete",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### silenced_till: `string`<a id="silenced_till-string"></a>

##### reason: `string`<a id="reason-string"></a>

##### message: `string`<a id="message-string"></a>

Will send an email with this message when present

##### post_action: `string`<a id="post_action-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersSilenceByIdResponse](./models/users-silence-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}/silence.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.suspendByIdJson`<a id="discourseuserssuspendbyidjson"></a>

Suspend a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const suspendByIdJsonResponse = await discourse.users.suspendByIdJson({
  id: 1,
  suspend_until: "2121-02-22",
  reason: "reason_example",
  post_action: "delete",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### suspend_until: `string`<a id="suspend_until-string"></a>

##### reason: `string`<a id="reason-string"></a>

##### id: `number`<a id="id-number"></a>

##### message: `string`<a id="message-string"></a>

Will send an email with this message when present

##### post_action: `string`<a id="post_action-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersSuspendByIdJsonResponse](./models/users-suspend-by-id-json-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/admin/users/{id}/suspend.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.updateAvatar`<a id="discourseusersupdateavatar"></a>

Update avatar

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAvatarResponse = await discourse.users.updateAvatar({
  username: "username_example",
  upload_id: 1,
  type: "uploaded",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### upload_id: `number`<a id="upload_id-number"></a>

##### type: `string`<a id="type-string"></a>

##### username: `string`<a id="username-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersUpdateAvatarResponse](./models/users-update-avatar-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/u/{username}/preferences/avatar/pick.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.updateEmailPreferences`<a id="discourseusersupdateemailpreferences"></a>

Update email

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmailPreferencesResponse =
  await discourse.users.updateEmailPreferences({
    username: "username_example",
    email: "email_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

##### username: `string`<a id="username-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/u/{username}/preferences/email.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.updatePreferencesJson`<a id="discourseusersupdatepreferencesjson"></a>

Update username

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePreferencesJsonResponse =
  await discourse.users.updatePreferencesJson({
    username: "username_example",
    new_username: "new_username_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### new_username: `string`<a id="new_username-string"></a>

##### username: `string`<a id="username-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/u/{username}/preferences/username.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `discourse.users.updateUserDetails`<a id="discourseusersupdateuserdetails"></a>

Update a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserDetailsResponse = await discourse.users.updateUserDetails({
  ApiKey: "ApiKey_example",
  ApiUsername: "ApiUsername_example",
  username: "username_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ApiKey: `string`<a id="apikey-string"></a>

##### ApiUsername: `string`<a id="apiusername-string"></a>

##### username: `string`<a id="username-string"></a>

##### name: `string`<a id="name-string"></a>

##### external_ids: `object`<a id="external_ids-object"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersUpdateUserDetailsResponse](./models/users-update-user-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/u/{username}.json` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
