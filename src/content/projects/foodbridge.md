---
title: FoodBridge
summary: A food-rescue and circular-waste logistics platform connecting hotels and restaurants with verified charities, recyclers and volunteer couriers.
tag: UN SDG 2 & 12
stack: [React, Node.js, Express, MongoDB, Docker, GitHub Actions]
repo: https://github.com/piragenth-satkunananthan/foodbridge
featured: true
order: 2
highlights:
  - Five role-based portals — admin, donor, charity, recycler and volunteer courier — behind JWT auth and RBAC route guards
  - District-based proximity matching, spoilage timers and capacity-aware claims
  - KYC verification, chain-of-custody logging and an ESG impact dashboard (meals rescued, kg diverted, CO₂e saved)
  - One-command Docker Compose stack with CI/CD and automatic MongoDB failover
---

FoodBridge is a food-rescue and circular-waste logistics platform that connects hotels and restaurants with verified charities, recyclers and volunteer couriers, working toward UN SDG 2 (Zero Hunger) and SDG 12 (Responsible Consumption and Production).

## What it does

Five role-based portals — admin, donor, charity, recycler and volunteer courier — sit behind JWT authentication and role-based access control with route guards.

- **District-based proximity matching** pairs surplus food with nearby charities and recyclers.
- **Spoilage timers and capacity-aware claims** keep the matching honest and prevent over-committing.
- **KYC verification and chain-of-custody logging** give each transfer an auditable trail.
- **An ESG impact dashboard** tracks meals rescued, kilograms diverted and CO₂e saved.

## Platform

The MERN stack (React, Node.js, Express, MongoDB) ships as a one-command Docker Compose stack with CI/CD through GitHub Actions and automatic MongoDB failover.

The whole platform is open source on GitHub.
