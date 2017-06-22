#!/bin/bash
sudo docker run -ti --name assistance -v $(pwd)/src:/src --rm --env-file /home/pablo/gitlab/fce/pablo/environment-assistance-econo assistance
