#!/bin/bash

dir="template-configs"

for i in $( ls "$dir" ); do
	if [[ ! -f "$i" ]]; then
		cp "$dir/$i" "$i"
	fi
done

packages="discord.js"

for i in $packages; do
	npm install "$i"
done
