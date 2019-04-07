#!/bin/bash
# wait until MariaDB is really available
maxcounter=60
 
counter=1
while ! mysql -h maria_db -u"mariadb" -p"mariadb" -e "show databases;"; do
    echo "waiting for Godot..."
    sleep 1
    counter=`expr $counter + 1`
    if [ $counter -gt $maxcounter ]; then
        >&2 echo "We have been waiting for MariaDB too long already; failing."
        exit 1
    fi;
done
echo "yeah, MariaDB available, so lets go..."
/opt/jboss/wildfly/bin/standalone.sh -b 0.0.0.0 -bmanagement 0.0.0.0
