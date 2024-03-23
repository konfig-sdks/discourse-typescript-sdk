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

import { PostsListLatestPostsAcrossTopicsResponseLatestPostsInnerActionsSummaryInner } from './posts-list-latest-posts-across-topics-response-latest-posts-inner-actions-summary-inner';

/**
 * 
 * @export
 * @interface PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
 */
export interface PostsListLatestPostsAcrossTopicsResponseLatestPostsInner {
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'version'?: number;
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'avatar_template'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'cooked'?: string;
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'post_number'?: number;
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'post_type'?: number;
    /**
     * 
     * @type {string}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'updated_at'?: string;
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'reply_count'?: number;
    /**
     * 
     * @type {any}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'reply_to_post_number'?: any;
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'quote_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'incoming_link_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'reads'?: number;
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'readers_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'score'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'yours'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'topic_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'topic_slug'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'topic_title'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'topic_html_title'?: string;
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'category_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'display_username'?: string;
    /**
     * 
     * @type {any}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'primary_group_name'?: any;
    /**
     * 
     * @type {any}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'flair_name'?: any;
    /**
     * 
     * @type {any}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'flair_url'?: any;
    /**
     * 
     * @type {any}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'flair_bg_color'?: any;
    /**
     * 
     * @type {any}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'flair_color'?: any;
    /**
     * 
     * @type {any}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'flair_group_id'?: any;
    /**
     * 
     * @type {boolean}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'can_edit'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'can_delete'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'can_recover'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'can_see_hidden_post'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'can_wiki'?: boolean;
    /**
     * 
     * @type {any}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'user_title'?: any;
    /**
     * 
     * @type {string}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'raw'?: string;
    /**
     * 
     * @type {Array<PostsListLatestPostsAcrossTopicsResponseLatestPostsInnerActionsSummaryInner>}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'actions_summary'?: Array<PostsListLatestPostsAcrossTopicsResponseLatestPostsInnerActionsSummaryInner>;
    /**
     * 
     * @type {boolean}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'moderator'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'admin'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'staff'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'user_id'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'hidden'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'trust_level'?: number;
    /**
     * 
     * @type {any}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'deleted_at'?: any;
    /**
     * 
     * @type {boolean}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'user_deleted'?: boolean;
    /**
     * 
     * @type {any}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'edit_reason'?: any;
    /**
     * 
     * @type {boolean}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'can_view_edit_history'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'wiki'?: boolean;
    /**
     * 
     * @type {any}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'reviewable_id'?: any;
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'reviewable_score_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof PostsListLatestPostsAcrossTopicsResponseLatestPostsInner
     */
    'reviewable_score_pending_count'?: number;
}
