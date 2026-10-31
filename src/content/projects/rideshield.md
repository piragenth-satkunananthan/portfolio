---
title: RideShield
summary: A smart motorcycle-helmet safety system that detects crashes, logs a black-box record and sends emergency alerts — built so the safety core keeps working even if its cameras or AI fail.
tag: IoTrix 2.0 · Finalist
stack: [C++, ESP32, ESP32-CAM, Kotlin, Android, Python]
languages: ["C++", "Kotlin", "Python"]
repo: https://github.com/piragenth-satkunananthan/RideShield
featured: true
order: 1
highlights:
  - ESP32 safety core with an IMU + GPS crash state machine and rider cancel countdown
  - LTE/SMS emergency alerts with location and pre-crash speed, plus microSD black-box logging
  - Front and rear ESP32-CAM nodes streaming timestamped frames for pothole, wet-road and rear-traffic perception
  - Kotlin Android companion app for live sensor telemetry
---

RideShield is a smart motorcycle-helmet safety system that detects crashes, logs a black-box record and sends emergency alerts. It was built for **IoTrix 2.0 (Track A: Embedded IoT Systems)** and reached the finals.

## What it is

Three independent nodes keep the safety core alive even if perception fails:

- **Main safety node (ESP32 NodeMCU-32S)** — IMU, GPS, helmet-worn sensing, the crash state machine, LTE/SMS alerts, microSD logging and buzzer/vibration/LED warnings.
- **Front ESP32-CAM node** — timestamped frames for pothole and visible wet-road risk.
- **Rear ESP32-CAM node** — frames for rear-traffic detection.

The camera nodes never run inference and the main node never depends on them; their observations can only *add* warnings.

## Why it is built this way

A helmet is a safety device, so the crash path is deliberately boring and self-contained: a helmet-worn check, pre-event speed from GPS, and a rider-cancellable countdown before an alert goes out. Every event lands in a microSD black-box log so thresholds can be tuned from real data.

The deeper write-up — including the known limits of the camera-based sensing — is in [Designing RideShield](/blog/designing-rideshield/).

## Stack

C++ firmware, ESP32 / ESP32-CAM nodes, a Kotlin Android companion app and Python tooling.
