# Contributing to the project

## Content

There are three main ways to contribute content to this project:

1. Use the CMS to create a post directly
2. Open a PR to create a post directly
3. Open an issue to ask someone else to create a post

### Use the CMS

To use the CMS, you need an account. This access is limited to CYF members. Talk to PD to get an invitation. Once you have an account, you can log in at https://cyf-signposts.netlify.app/admin.

### Open a PR

1. Create a new file in /content/posts
2. Include the required front matter, eg:

```md
---
title: "Name of the resource"
link: "https://example-resource.org"
date: 2020-01-01T00:00:00Z
regions: ["London", "West Midlands"]
topics: ["Mental Health", "Housing"]
cyf: false
---
```

And write your post in markdown. Please keep it plain and factual, so people understand what this service does and how to contact them. Don't share your opinions or experience. Posts of more than 300 words will be rejected.

Only CYF internal services should be marked with `cyf:true` and only staff may add these. PRs with `cyf:true` will be rejected.

3. Open a PR with your post

Please follow the PR template. If you are not sure how to do this, open a new issue and someone will review your recommendation.

### Open an issue

If you are not sure how to create a post, or you don't have access to the CMS, you can open an issue. Someone will review your recommendation and create a post for you.

## Crucial

This is a recommender system. Please do not just google charities and add them to the list. You must have engaged with this service in some way. Please do not share any personal details. This page is public.

## Review recommendations

We need people to review the recommendations and make sure they are still valid. If you are a user of a service, and it is no longer available or taking new referrals, please open a PR to remove it from the list, or open an issue and someone will do it for you (eventually).

## Development

This is a microsite. It is not intended to be a general purpose website. We are not interested in adding features that are not directly related to the purpose of the site, which is a list of useful resources CYF members can use to resolve specific blockers in their lives.

If you want to contribute to the development of the site, please open an issue to discuss your idea. We are happy to accept PRs for bug fixes and small improvements, but we need to discuss larger changes first.

To run the site locally, you need to install Hugo. See the README for more details.
