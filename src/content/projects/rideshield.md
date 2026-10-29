---
title: RideShield
summary: A smart motorcycle-helmet safety system that detects crashes, logs a black-box record and sends emergency alerts — built so the safety core keeps working even if its cameras or AI fail.
tag: IoTrix 2.0 · Finalist
stack: [C++, ESP32, ESP32-CAM, Kotlin, Android, Python]
repo: https://github.com/piragenth-satkunananthan/RideShield
featured: true
order: 1
highlights:
  - ESP32 safety core with an IMU + GPS crash state machine and rider cancel countdown
  - LTE/SMS emergency alerts with location and pre-crash speed, plus microSD black-box logging
  - Front and rear ESP32-CAM nodes streaming timestamped frames for pothole, wet-road and rear-traffic perception
  - Kotlin Android companion app for live sensor telemetry
---

RideShield is a smart motorcycle-helmet safety system built for **IoTrix 2.0 (Track A: Embedded IoT Systems)**, where it reached the finals. The core idea is simple but unusual for a "smart" device: the safety functions must keep working even when the cameras and AI don't.

## Architecture

The system is split into independent nodes so no single failure takes down the safety core:

- **Main safety node (ESP32 NodeMCU-32S)** — IMU (accelerometer + gyroscope), GPS, helmet-worn sensing, the crash state machine, LTE/SMS alerts, microSD black-box logging and buzzer/vibration/LED warnings.
- **Front camera node (ESP32-CAM)** — captures timestamped frames for pothole and visible wet-road risk.
- **Rear camera node (ESP32-CAM)** — captures frames for rear-traffic detection.

The camera nodes don't run inference and the main node doesn't depend on them. Their observations can only *add* warnings, never *remove* safety behaviour.

## Crash detection

A raw acceleration spike isn't a crash. The main node escalates through a state machine only when the evidence lines up:

1. **Helmet-worn check** — head-presence sensing plus chin-strap state, so a helmet sitting on a table can't trigger an alert.
2. **Context from GPS** — pre-event speed separates a real impact from a parking-lot fumble.
3. **Cancel countdown** — the rider gets a few seconds of buzzer and vibration to cancel a false alarm before the SMS (with location and pre-crash speed) goes out.

Every event is written to the microSD card as a black-box log, so even cancelled alerts leave a record that can be used to tune thresholds.

## Known limits

- The front camera estimates *visible* wet-road risk — it does not measure tyre–road friction.
- The rear camera is helmet-mounted, so head turns change its geometry; that's a known limitation rather than a papered-over claim.

A Kotlin Android companion app streams live sensor telemetry. The firmware, camera nodes and app are on GitHub.
