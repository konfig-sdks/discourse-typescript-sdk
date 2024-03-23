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

import { PostsCreateTopicPostMessageResponseActionsSummaryInner } from './posts-create-topic-post-message-response-actions-summary-inner';
import { TopicsGetSingleTopicResponsePostStreamPostsInnerLinkCountsInner } from './topics-get-single-topic-response-post-stream-posts-inner-link-counts-inner';

/**
 * 
 * @export
 * @interface TopicsGetSingleTopicResponsePostStreamPostsInner
 */
export interface TopicsGetSingleTopicResponsePostStreamPostsInner {
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'version': number;
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'avatar_template': string;
    /**
     * 
     * @type {string}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'cooked': string;
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'post_number': number;
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'post_type': number;
    /**
     * 
     * @type {string}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'updated_at': string;
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'reply_count': number;
    /**
     * 
     * @type {any}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'reply_to_post_number': any;
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'quote_count': number;
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'incoming_link_count': number;
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'reads': number;
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'readers_count': number;
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'score': number;
    /**
     * 
     * @type {boolean}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'yours': boolean;
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'topic_id': number;
    /**
     * 
     * @type {string}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'topic_slug': string;
    /**
     * 
     * @type {string}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'display_username': string;
    /**
     * 
     * @type {any}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'primary_group_name': any;
    /**
     * 
     * @type {any}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'flair_name': any;
    /**
     * 
     * @type {any}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'flair_url': any;
    /**
     * 
     * @type {any}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'flair_bg_color': any;
    /**
     * 
     * @type {any}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'flair_color': any;
    /**
     * 
     * @type {boolean}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'can_edit': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'can_delete': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'can_recover': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'can_see_hidden_post'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'can_wiki': boolean;
    /**
     * 
     * @type {Array<TopicsGetSingleTopicResponsePostStreamPostsInnerLinkCountsInner>}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'link_counts': Array<TopicsGetSingleTopicResponsePostStreamPostsInnerLinkCountsInner>;
    /**
     * 
     * @type {boolean}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'read': boolean;
    /**
     * 
     * @type {any}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'user_title': any;
    /**
     * 
     * @type {boolean}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'bookmarked': boolean;
    /**
     * 
     * @type {Array<PostsCreateTopicPostMessageResponseActionsSummaryInner>}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'actions_summary': Array<PostsCreateTopicPostMessageResponseActionsSummaryInner>;
    /**
     * 
     * @type {boolean}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'moderator': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'admin': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'staff': boolean;
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'user_id': number;
    /**
     * 
     * @type {boolean}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'hidden': boolean;
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'trust_level': number;
    /**
     * 
     * @type {any}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'deleted_at': any;
    /**
     * 
     * @type {boolean}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'user_deleted': boolean;
    /**
     * 
     * @type {any}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'edit_reason': any;
    /**
     * 
     * @type {boolean}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'can_view_edit_history': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'wiki': boolean;
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'reviewable_id': number;
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'reviewable_score_count': number;
    /**
     * 
     * @type {number}
     * @memberof TopicsGetSingleTopicResponsePostStreamPostsInner
     */
    'reviewable_score_pending_count': number;
}
