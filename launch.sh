#!/bin/bash


while true; do
	git pull
	node index.js
	sleep 5
done
