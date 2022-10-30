
# Codechef-API-Unofficial
This API bears the main aim of getting the contest information, which can be used be organised while giving contests.

People can use this API to make useful websites or apps for giving notifications for the contests.

For every contest, we can get Time, duration, contest link.



## API Reference

#### Get all Contests
```http
  GET /codechef/all
```
This gives all the contests i.e ongoing, upcoming, practise & past contests

#### Get all Ongoing Contests
```http
  GET /codechef/ongoing
```
This gives all the ongoing contests.

#### Get all Upcoming Contests
```http
  GET /codechef/upcoming
```
This gives all the uppcoming contests.

#### Get all Practise Contests
```http
  GET /codechef/practise
```
This gives all the practise contests.

#### Get all Past Contests
```http
  GET /codechef/past
```
This gives all the past contests.