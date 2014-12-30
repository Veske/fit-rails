Fit-rails application
==============

Environment
--------------

**Ruby**:  2.2.0
**Rails**: 4.2.0

Required programs
--------------

**Imagemagick** required by Paperclip gem to resize many files fast

**Redis** - http://redis.io/

Windows users can download a one-click installer here: https://github.com/rgl/redis/downloads

Redis should be added to PATH after installation. Windows users can just point to the /src/ folder in Redis installation
 directory. Linux and Mac users should do a cp src/redis-server src/redis-cli /usr/bin so that Rails can use the redis-server
 and redis-cli without hassle.