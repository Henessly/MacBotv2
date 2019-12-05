#!/bin/bash
source inspectorConfig.sh

while true; do
	git pull
	./install.sh
	node --inspect=localhost:$configPort index.js
	sleep 5
done
