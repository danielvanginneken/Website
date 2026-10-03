---
title: Aegis.Auth
summary: A modular .NET authentication library built around database-backed sessions and signed cookies — batteries-included auth in the style of BetterAuth, built for developers rather than end users.
status: v0.1 — implemented and tested, not yet released on NuGet
category: build
order: 2
technologies:
  - C#
  - .NET
  - Session & Cookie Authentication
  - OAuth 2.0 / OpenID Connect
  - Claims-Based Authorization
  - Cryptography & Token Hashing
  - Security Best Practices
  - Library & NuGet Package Design
outcomes:
  - Identity and access management concepts
  - Secure session architecture and token hashing
  - Authorization architecture patterns
  - Reusable library design
  - Building software for other developers to consume
---

## What it is

Aegis.Auth is a reusable authentication library for .NET applications. It
simplifies identity management by providing common security functionality
through a developer-friendly package: email/password sign-up and sign-in,
database-backed sessions with HMAC-signed cookies, OAuth with account linking,
email verification, password reset, CSRF protection and rate limiting — behind
a native ASP.NET Core authentication handler.

## Why it was built

Authentication is a requirement for nearly every modern application. Instead of
rebuilding the same identity logic repeatedly, I wanted to explore creating a
reusable security-focused foundation that could be integrated into multiple
projects.
