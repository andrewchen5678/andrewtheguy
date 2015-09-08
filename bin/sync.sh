#!/bin/bash
rsync -rvzu -e 'ssh -p 2244' build/ andrewtheguy@server.techywolf.com:/var/www/andrewtheguy/
ssh -p 2244 andrewtheguy@server.techywolf.com 'find /var/www/andrewtheguy/ -type f -exec chmod 0644 {} +'
