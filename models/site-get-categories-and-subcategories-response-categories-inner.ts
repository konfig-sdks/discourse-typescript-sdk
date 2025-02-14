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

import { CategoriesCreateCategoryRequestResponseCategoryRequiredTagGroupsInner } from './categories-create-category-request-response-category-required-tag-groups-inner';

/**
 * 
 * @export
 * @interface SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
 */
export interface SiteGetCategoriesAndSubcategoriesResponseCategoriesInner {
    /**
     * 
     * @type {any}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'description'?: any;
    /**
     * 
     * @type {number}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'color': string;
    /**
     * 
     * @type {string}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'text_color': string;
    /**
     * 
     * @type {string}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'slug': string;
    /**
     * 
     * @type {number}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'topic_count': number;
    /**
     * 
     * @type {number}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'post_count': number;
    /**
     * 
     * @type {number}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'position': number;
    /**
     * 
     * @type {any}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'description_text'?: any;
    /**
     * 
     * @type {any}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'description_excerpt'?: any;
    /**
     * 
     * @type {string}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'topic_url': string;
    /**
     * 
     * @type {boolean}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'read_restricted': boolean;
    /**
     * 
     * @type {number}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'permission': number;
    /**
     * 
     * @type {number}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'notification_level': number;
    /**
     * 
     * @type {any}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'topic_template': any;
    /**
     * 
     * @type {boolean}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'has_children': boolean;
    /**
     * 
     * @type {any}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'sort_order': any;
    /**
     * 
     * @type {any}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'sort_ascending': any;
    /**
     * 
     * @type {boolean}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'show_subcategory_list': boolean;
    /**
     * 
     * @type {number}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'num_featured_topics': number;
    /**
     * 
     * @type {any}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'default_view': any;
    /**
     * 
     * @type {string}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'subcategory_list_style': string;
    /**
     * 
     * @type {string}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'default_top_period': string;
    /**
     * 
     * @type {string}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'default_list_filter': string;
    /**
     * 
     * @type {number}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'minimum_required_tags': number;
    /**
     * 
     * @type {boolean}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'navigate_to_first_post_after_read': boolean;
    /**
     * 
     * @type {Array<any>}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'allowed_tags': Array<any>;
    /**
     * 
     * @type {Array<any>}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'allowed_tag_groups': Array<any>;
    /**
     * 
     * @type {boolean}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'allow_global_tags': boolean;
    /**
     * 
     * @type {Array<CategoriesCreateCategoryRequestResponseCategoryRequiredTagGroupsInner>}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'required_tag_groups': Array<CategoriesCreateCategoryRequestResponseCategoryRequiredTagGroupsInner>;
    /**
     * 
     * @type {any}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'read_only_banner': any;
    /**
     * 
     * @type {any}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'uploaded_logo': any;
    /**
     * 
     * @type {any}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'uploaded_logo_dark': any;
    /**
     * 
     * @type {any}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'uploaded_background': any;
    /**
     * 
     * @type {any}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'uploaded_background_dark': any;
    /**
     * 
     * @type {boolean}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'can_edit': boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'custom_fields'?: { [key: string]: any; };
    /**
     * 
     * @type {number}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'parent_category_id'?: number;
    /**
     * 
     * @type {Array<any>}
     * @memberof SiteGetCategoriesAndSubcategoriesResponseCategoriesInner
     */
    'form_template_ids'?: Array<any>;
}

