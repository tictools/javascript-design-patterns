# ABSTRACT FACTORY

## Description

We have a Led Lights company. A set of led lights are managed by a controller board that we will call the Command Center (CommandCenter).
We have two types of CommandCenter: Smart or Citilux.

The Citilux have a differential management module called RCDS and have a type of cable theft sensor called WireStealSensor
The Smart have a differential management module called DiffSensors and have a type of wire theft sensor called NoWireSensor

The client application needs to CREATE Smart or Citilux Command Centers.

How would you design the system and implement it so that the client application can create the different Command Centers?
