---
title: Licensing guidelines
description: Instructions for choosing the correct license when contributing new packages to the Budibase monorepo.
---

# Licensing guidelines

When creating a new package in the Budibase monorepo, it is important to choose the correct license based on the functionality and distribution of that code.

### 1. Paid features

If the package is intended to be a paid feature, it should be licensed under the **Business Source License (BSL)** and placed within the `/packages/pro` directory.

The BSL allows users to view and modify the source code, but prohibits the use of modified code in production to bypass licensing restrictions or checks.

### 2. Client-side or App-incorporated code

If the package will be shipped as part of a generated Budibase application (i.e., code that runs in the end-user's browser or as part of the published app runtime), use **MPL 2.0**.

While Budibase itself is GPLv3, we do not require applications built with the Budibase builder to be open source. MPL 2.0 is compatible with GPLv3 but provides file-level copyleft, allowing the surrounding application to remain under any license chosen by the user.

### 3. All other packages

For all other packages that are not paid features and are not distributed as part of a generated application, use **GPLv3**.

GPLv3 is the default license for Budibase core packages and tooling. For more details on the overall licensing structure, please refer to the root `LICENSE` file in the repository.