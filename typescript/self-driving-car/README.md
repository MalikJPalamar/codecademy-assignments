# Self-Driving Car (TypeScript)

## Overview

A TypeScript project that simulates a self-driving car reacting to obstacle events. The program models **events**, **controls**, and **responses** using TypeScript interfaces and classes, then executes steering commands based on detected obstacles.

At a high level:

* `computer-vision.ts` generates obstacle events (e.g., `ObstacleLeft`, `ObstacleRight`)
* `Car.respond(events)` inspects those events
* A `SteeringControl` issues typed commands like “turn left/right”

---

## Deep Systems Analysis

### Mental Model: What This Project Is Really Building

At its core, the **Self-Driving Car** project models a simple but powerful control system:

**Events → Rules → Controls → Actions**

#### 1. Events

Dynamic signals coming from the environment.

```ts
{
  ObstacleLeft: true,
  ObstacleRight: false
}
```

* Represented as **dynamic keys with boolean flags**
* Designed to be extensible (new event types can appear over time)
* Mirrors real sensor input or UI/system events

#### 2. Rules

Decision logic that maps events to behavior.

* Example:

  * *If `ObstacleLeft` → turn right*
  * *If `ObstacleRight` → turn left*
* Encoded inside `Car.respond()` using simple, readable conditionals

#### 3. Controls

Typed interfaces that define *how* actions are executed.

* `Control` → enforces `execute(command: string)`
* `Steering` → extends `Control` with `turn(direction: string)`
* Keeps behavior modular and swappable

#### 4. Actions

Concrete side effects produced by the system.

* Steering commands are logged (e.g. `Executing: turn left`)
* In a real system, this would trigger motors, actuators, or APIs

---

### Why This Maps Cleanly to Angular

This architecture closely mirrors how Angular applications are structured:

* **Events** ≈ typed UI / IO signals
* **`Car.respond()`** ≈ a service method reacting to state or inputs
* **`SteeringControl`** ≈ an injectable dependency implementing an interface

The separation of *what happens* (rules) from *how it happens* (controls) is a direct fit for Angular services and dependency injection.

---

### System Diagram (Conceptual)

```
getObstacleEvents()
        |
        v
Events (map of flags)
        |
        v
Car.respond(events)
        |
        v
SteeringControl.turn()
        |
        v
execute("turn X")
```

---

### Visual Summary

* **Inputs**: dynamic, typed events
* **Processing**: deterministic rule evaluation
* **Outputs**: explicit, testable commands

This structure makes the system:

* Easy to reason about
* Easy to extend (new events, new controls)
* Easy to port into a UI-driven Angular application


## Why This Project Matters

This project demonstrates the exact TypeScript skills that show up constantly in real codebases (and especially in Angular):

* **Interface-driven design**: `Control`, `Steering`, and `AutonomousCar` enforce contracts so classes remain swappable and testable.
* **Safe handling of dynamic data**: the `Events` type uses an index signature to represent “unknown keys in the future” while still enforcing boolean values.
* **Clean runtime logic with compile-time safety**: TypeScript catches missing methods/properties early, while the runtime JS stays simple and readable.
* **A direct bridge to Angular**: the architecture maps naturally to Angular services (dependency injection, typed inputs, deterministic outputs).

---

## Key Concepts Demonstrated

* Interfaces (`implements`, `extends`)
* Optional properties (`isRunning?`, optional chaining)
* Index signatures for flexible event maps
* Class composition (Car uses a steering controller)
* Array + object iteration (`Object.keys(...).forEach(...)`)
* Separation of concerns (types vs classes vs execution)

---

## Project Structure

```
self-driving-car/
├─ index.ts
├─ computer-vision.ts
├─ tsconfig.json
└─ README.md
```

---

## Extra Credit / Next Steps (Roadmap)

Take this project further by extending the behavior model:

1. **Run a sequence of responses**

   * Call `.respond()` multiple times with new event objects to simulate continuous driving and a sequence of turns.

2. **Add speed control**

   * Introduce another type that extends `Control` (e.g., `ThrottleControl`) to accelerate/decelerate based on events.

3. **Add richer event types**

   * Expand the event set to include commands like:

     * `emergencyBrake`
     * `parallelPark`
     * additional obstacle types / priorities

These upgrades are a great stepping stone toward an Angular UI that visualizes the event stream and car actions.

---

## Future Improvements

* Refactor logic into smaller units (e.g., a “decision engine” that maps events → actions)
* Add deterministic tests by injecting predictable event sequences
* Port to Angular:

  * move controls into injectable services
  * display event/action logs in a component UI
  * optionally stream events with Observables
