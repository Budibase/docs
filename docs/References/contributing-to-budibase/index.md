---
title: Contributing to Budibase
excerpt: >-
  We love and appreciate contributions to Budibase, big or small. It gets us
  right in the feels ❤️
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: writing-your-own-external-data-connector
      title: Writing your own external data connector
---
## Reporting Bugs or Issues

Bug reports help us make Budibase better for everyone. When you create a bug, the description will automatically be filled with a template that makes it very clear what we'd like you to add.

> ❤️ Security Issue?
>
> If you've found a security issue, please email us directly at [hi@budibase.com](mailto:hi@budibase.com) instead of raising an issue

You can report bugs and issues on our [Github Page](https://github.com/Budibase/budibase/discussions/categories/help). When reporting issues make sure to add as many details as possible, including error logs and console output when applicable.

> 🔍 Issue already reported?
>
> When reporting a new issue, make sure your issue isn't already reported by someone else. Use the search function on our [Github Page](https://github.com/Budibase/budibase/discussions/categories/help) first!

## External PR Ticket Check

Pull requests from external contributors must reference an existing issue in
this repository. The issue must:

- Be open.
- Be assigned to the pull request author.
- Have completed triage and not have a `needs-triage`, `wontfix`,
  `out-of-scope`, or `closed-stale` label.

Add the issue to the **Addresses** section of the pull request description using
its full GitHub URL or a `#123` reference. At most ten distinct issue references
are checked per pull request.

Pull requests without a valid assigned issue are tagged with
`closed: missing-ticket`, given an explanatory comment, and closed automatically.
After linking a valid assigned issue, you can reopen the pull request. Bot-authored
pull requests and pull requests from repository owners, members, and collaborators
are excluded from this check.