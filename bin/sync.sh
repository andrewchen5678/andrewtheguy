#!/bin/bash
rsync -rvzu -e 'ssh -p 2244' build/ andrewtheguy@server.techywolf.com:/var/www/andrewtheguy/