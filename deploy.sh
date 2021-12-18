#!/bin/bash

cd ./dist
rsync -avzP ./* theodosiou@194.32.78.79:/var/www/padelis.theodosiou.me/html
