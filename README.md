# Next.js 15 Client-Side Navigation Bug

This repository demonstrates a common issue encountered when using client-side navigation in Next.js 15 applications.  The problem occurs when navigating between pages; the URL updates correctly, but the content fails to render, resulting in a blank screen.

## Bug Description

The bug arises because of a mismatch in how Next.js handles client-side and server-side navigation. When using the `router.push` method within a component, and the target route is dynamically generated at the client, there is potential for the new page not to be rendered if the routing mechanism is unable to correctly handle the update.

## Solution

The solution involves refactoring the navigation to leverage Next.js's built-in features for smooth client-side transitions or potentially employing a library like `react-router` for more explicit routing controls if the complexity necessitates it.