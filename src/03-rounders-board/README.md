# Rounders Board Kata

## Introduction

Your local Rounders team the 'Wedmore Warriors' want an online version of their scoreboard for fans who can't attend their next game against the 'Cheddar Cheeses'.

They already hired a developer to start the process, but they've fallen ill two days before the game. So you'll need to pick-up from where they left off.

## Task

* Enable the `ScoreKeeper` to be able to deal more teams in the future.
* Create a class `OutKeeper` which has the method `out(Team)` and `totals()`;

`totals()` should have an output something like;

```txt
Cheddar = 3 Wedmore = 2
```

* Create a class `ScoreBoard` which prints a statement `totals()` from both the ScoreKeeper and OutKeeper classes.

`totals()` should output something like this;

```txt
Team    Wedmore Warriors
Runs    32
Outs    2
vs
Team    Cheddar Cheeses
Runs    30
Outs    3
```

## Rules

* A team can score 1-4 points per turn.
* A team can only have 3 outs, when they reach this number, they mustn't be allowed to score anymore points.
* The internal state of both `ScoreKeeper` and `OutKeeper` should be private (other classes can't directly act/interfere with them).
* You must have a test that tests the final `totals` output.
