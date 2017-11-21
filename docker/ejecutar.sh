#!/bin/bash
sudo docker run -ti -d --name assistance -v $(pwd)/src:/src -p 5040:5000 -p 5041:5001 -p 5042:5002 -p 5043:5003 --env-file $HOME/gitlab/fce/produccion/assistance assistance
sudo docker exec -t assistance bash instalar.sh
sudo docker restart assistance
