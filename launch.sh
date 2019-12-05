#!/bin/bash


while true; do
	git pull
	./install.sh
	node --inspect=localhost:9456 index.js
	sleep 5
done
