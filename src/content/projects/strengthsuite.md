---
title: StrengthSuite
summary: A gym management platform for member administration, subscriptions and SEPA direct debit billing — a learning project aimed at the parts that are genuinely hard, not at a gap in the market.
status: Scaffold only — re-scoped and restarting
category: build
order: 3
technologies:
  - C# / .NET
  - ASP.NET Core Web API
  - Next.js
  - PostgreSQL
  - REST APIs
  - Multi-Tenancy
  - SEPA Direct Debit
  - Authentication & Authorization
outcomes:
  - Designing software around real-world business processes
  - Building scalable backend architectures
  - Managing authentication and role-based permissions
  - Modelling recurring billing and payment failure handling
  - Balancing product requirements with technical constraints
---

## What it is

StrengthSuite is a gym management platform for member administration,
subscriptions and recurring billing, built around SEPA direct debit and Dutch
subscription law.

This is a learning project, and deliberately so. The market is well served —
Magicline and Virtuagym between them cover most of Europe, and the Netherlands
has several local specialists. The interest here is not in displacing them; it
is in building the parts that are genuinely hard to get right.

Nothing is implemented yet. An earlier version of this project tried to combine
the platform with custom door-access hardware; that scope is what stalled it,
and the hardware is now cut rather than deferred.

## Why it was built

The project started from an interest in solving real operational challenges
faced by gyms — an interest sharpened by working at one of Europe's largest gym
operators. Rather than building another generic CRUD application, the goal is to
model the parts that are genuinely hard: tenant isolation, subscription
lifecycles, and recurring collection where payments fail days after the fact.
