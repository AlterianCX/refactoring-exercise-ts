# Rounders Board Kata

## Introduction

Your local Rounders team the 'Wedmore Warriors' want an online version of their scoreboard for fans who can't attend their next game against the 'Cheddar Cheeses'.

## Requirements

- ScoreKeeper
  - should have 0 public properties
  - #ScoreCard()
    - Should start with a score card of 0-0
  - #addWedmoreScore()
    - Should add 1 for a score of 1-0
    - should reject values > 4 or <= 0
  - #addAwayTeamScore()
    - Should add 1 for a score of 1-1
    - should reject values > 4 or <= 0
  - #addWedmoreOut()
    - Should add 3 times before reject adding a score
  - #addAwayTeamOut()
    - Should add 3 times before reject adding a score

## Rules

Stick to Typescript and do not use 3rd party resources.
