---
title: 'Designing RideShield: a safety core that survives its own AI'
description: Why the crash-detection firmware on the RideShield smart helmet treats cameras and perception as optional extras.
pubDate: 2026-10-20
tags: [embedded, esp32, iot]
---

RideShield is a smart motorcycle helmet built for **IoTrix 2.0 (Track A: Embedded IoT Systems)**. It has cameras, it has perception goals — potholes, wet roads, vehicles closing in from behind — but the most important design decision is what happens when all of that stops working.

## The rule: perception is auxiliary

> Crash detection, logging and emergency communication must continue even if a camera or AI subsystem fails.

It's tempting to build one clever pipeline where everything feeds everything. But a helmet is a safety device. If an ESP32-CAM browns out, a Wi-Fi link drops or a model misbehaves, the rider still needs a working crash alert. So the system is split into independent nodes:

1. **Main safety node (ESP32 NodeMCU-32S)** — the IMU (accelerometer + gyroscope), GPS, helmet-worn sensing, the crash state machine, LTE/SMS alerts, microSD logging and buzzer/vibration/LED warnings.
2. **Front camera node (ESP32-CAM)** — captures timestamped frames for pothole and visible wet-road risk.
3. **Rear camera node (ESP32-CAM)** — captures frames for rear-traffic detection.

The camera nodes don't run inference and the main node doesn't depend on them. Their observations can *add* warnings, never *remove* safety behaviour.

## The crash state machine

A raw acceleration spike isn't a crash — dropping the helmet on the floor produces one too. The main node only escalates when the evidence lines up:

```text
IMU + GPS + helmet-worn state
              |
              v
       Crash state machine
              |
   possible crash -> cancel countdown -> alert
```

- **Helmet-worn check:** head-presence sensing plus chin-strap state. A helmet sitting on a table shouldn't call an ambulance.
- **Context from GPS:** pre-event speed separates a real impact from a fumble in the parking lot.
- **Cancel countdown:** the rider gets a few seconds of buzzer and vibration to cancel a false alarm before the SMS goes out with their location.

Every event is written to the microSD card as a black-box log, so even a cancelled alert leaves a record that can be used to tune thresholds.

## Being honest about limits

Two things the design explicitly *doesn't* claim:

- The front camera **doesn't measure tyre–road friction**. It estimates *visible* wet-road risk, which is a weaker but honest signal.
- The rear camera is helmet-mounted, so every head turn changes its geometry. That's a known limitation, not something to paper over.

Writing these down early kept the scope realistic and made it clear which parts still need validation before anyone trusts them.

The code — firmware, camera nodes and the Kotlin companion app — is on [GitHub](https://github.com/piragenth-satkunananthan/RideShield).
