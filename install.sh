#!/bin/bash

dir="template-configs"

for i in $( ls "$dir" ); do
	if [[ ! -f "$i" ]]; then
		cp "$dir/$i" "$i"
	fi
done

npm install discord.js ms
