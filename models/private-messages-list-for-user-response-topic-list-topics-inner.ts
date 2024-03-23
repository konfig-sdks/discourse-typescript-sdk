/*
Discourse API Documentation

This page contains the documentation on how to use Discourse through API calls.

> Note: For any endpoints not listed you can follow the
[reverse engineer the Discourse API](https://meta.discourse.org/t/-/20576)
guide to figure out how to use an API endpoint.

### Request Content-Type

The Content-Type for POST and PUT requests can be set to `application/x-www-form-urlencoded`,
`multipart/form-data`, or `application/json`.

### Endpoint Names and Response Content-Type

Most API endpoints provide the same content as their HTML counterparts. For example
the URL `/categories` serves a list of categories, the `/categories.json` API provides the
same information in JSON format.

Instead of sending API requests to `/categories.json` you may also send them to `/categories`
and add an `Accept: application/json` header to the request to get the JSON response.
Sending requests with the `Accept` header is necessary if you want to use URLs
for related endpoints returned by the API, such as pagination URLs.
These URLs are returned without the `.json` prefix so you need to add the header in
order to get the correct response format.

### Authentication

Some endpoints do not require any authentication, pretty much anything else will
require you to be authenticated.

To become authenticated you will need to create an API Key from the admin panel.

Once you have your API Key you can pass it in along with your API Username
as an HTTP header like this:

```
curl -X GET \"http://127.0.0.1:3000/admin/users/list/active.json\" \\
-H \"Api-Key: 714552c6148e1617aeab526d0606184b94a80ec048fc09894ff1a72b740c5f19\" \\
-H \"Api-Username: system\"
```

and this is how POST requests will look:

```
curl -X POST \"http://127.0.0.1:3000/categories\" \\
-H \"Content-Type: multipart/form-data;\" \\
-H \"Api-Key: 714552c6148e1617aeab526d0606184b94a80ec048fc09894ff1a72b740c5f19\" \\
-H \"Api-Username: system\" \\
-F \"name=89853c20-4409-e91a-a8ea-f6cdff96aaaa\" \\
-F \"color=49d9e9\" \\
-F \"text_color=f0fcfd\"
```

### Boolean values

If an endpoint accepts a boolean be sure to specify it as a lowercase
`true` or `false` value unless noted otherwise.


The version of the OpenAPI document: latest


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PrivateMessagesListForUserResponseTopicListTopicsInnerParticipantsInner } from './private-messages-list-for-user-response-topic-list-topics-inner-participants-inner';
import { PrivateMessagesListForUserResponseTopicListTopicsInnerPostersInner } from './private-messages-list-for-user-response-topic-list-topics-inner-posters-inner';

/**
 * 
 * @export
 * @interface PrivateMessagesListForUserResponseTopicListTopicsInner
 */
export interface PrivateMessagesListForUserResponseTopicListTopicsInner {
    /**
     * 
     * @type {string}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'title'?: string;
    /**
     * 
     * @type {number}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'fancy_title'?: string;
    /**
     * 
     * @type {string}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'slug'?: string;
    /**
     * 
     * @type {number}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'posts_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'reply_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'highest_post_number'?: number;
    /**
     * 
     * @type {any}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'image_url'?: any;
    /**
     * 
     * @type {string}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'last_posted_at'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'bumped'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'bumped_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'archetype'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'unseen'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'last_read_post_number'?: number;
    /**
     * 
     * @type {number}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'unread_posts'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'pinned'?: boolean;
    /**
     * 
     * @type {any}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'unpinned'?: any;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'visible'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'closed'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'archived'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'notification_level'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'bookmarked'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'liked'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'views'?: number;
    /**
     * 
     * @type {number}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'like_count'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'has_summary'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'last_poster_username'?: string;
    /**
     * 
     * @type {any}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'category_id'?: any;
    /**
     * 
     * @type {boolean}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'pinned_globally'?: boolean;
    /**
     * 
     * @type {any}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'featured_link'?: any;
    /**
     * 
     * @type {number}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'allowed_user_count'?: number;
    /**
     * 
     * @type {Array<PrivateMessagesListForUserResponseTopicListTopicsInnerPostersInner>}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'posters'?: Array<PrivateMessagesListForUserResponseTopicListTopicsInnerPostersInner>;
    /**
     * 
     * @type {Array<PrivateMessagesListForUserResponseTopicListTopicsInnerParticipantsInner>}
     * @memberof PrivateMessagesListForUserResponseTopicListTopicsInner
     */
    'participants'?: Array<PrivateMessagesListForUserResponseTopicListTopicsInnerParticipantsInner>;
}
