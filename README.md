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




 ### Installing development environment on VM

 We use Vagrant, which creates a new VM Box automatically on our machine. Vagrant will also use Cheffile in our project, which uses cookbooks to install all the required software on the VM Box.

 * Make sure you have VirtualBox installed on your system.
 * Download [Vagrant](https://www.vagrantup.com/downloads.html) and install it on your system.
 * Download Rubymine and install it on your system. (From TPB?)
 * Download [Git(NOT the GUI version)](http://git-scm.com/downloads).
 * Run Rubymine and configure it to use Git correctly, and download the source code of our project.
 * Under the top menu bar in Rubymine, select `Tools`.
 * From the dropdown menu select `Vagrant` and first make Vagrant `Run` the VirtualMachine.
 * Now when the machine is running (Shown in Rubymine console), open the same menu as before and select `Provision` option. This will take a lot of time, it will install all the programs needed to start developing.
 * Now open up a terminal and type `vagrant ssh`. This will put you into the Ubuntu VM box. In there type `cd /vagrant` and when in `/vagrant`, type `bundle`. This can take a while as it downloads all the gems needed for our project. When it's done, write `rbenv rehash` in the Ubuntu VM, to set Rails into path.
 * Now open Rubymine settings and under project settings choose `Ruby SDK and Gems`.
 * From there use the green plus sign to add a `New remote SDK`, use `Fill from vagrant config file` button which will type all the needed config for you! Also choose Ruby interpreter path your self. For me it was: `/home/vagrant/.rbenv/versions/2.1.3/bin/ruby`
 * Now run bundler from Tools menu and when it's done, launch the server.

 For database creation and other tasks, you can now use the Rubymines built in functions which will run all the tasks in the VM as the SDK is set into the Remote machine.











 ### Env:

 * Ruby: 2.1.3 - [https://www.ruby-lang.org/en/downloads/](https://www.ruby-lang.org/en/downloads/)
 * Rails: 4.1.6 - [http://rubyonrails.org/download/](http://rubyonrails.org/download/)
 * PostgreSQL: 9.3.5 - [http://www.postgresql.org/download/windows/](http://www.postgresql.org/download/windows/)
 * We are using Passenger as our web server. While developing, you can just run Rails application with Passenger. When in production, nginx must be tied with Passenger.

 At present, the pg gem, which allows for connectivity for PostgreSQL is broken for Windows, and full environment setup cannot be completed. We may be switching to a different database platform until this issue is resolved.


 ### PSQL:

 [Download](http://www.enterprisedb.com/products-services-training/pgdownload) and install the appropriate version of the PostgreSQL database

 To create a new user (login role) in PostgreSQL, connect to the server using 'postgres' and the credentials you provided during installation. Right-click on the Login Roles object on the left > New Login Role... and provide the role name, password and privileges. In a development environment, there is no real need to restrict the user's privileges.

 By default, the host connections to the database should already be using the MD5 method. If they are not, or additional connections are needed, one can add or modify these attributes from the PostgreSQL/9.3/data/pg_hba.conf file and following the template contained within.

 PostgreSQL will make a batch file to simplify adding its binaries to PATH - PostgreSQL/9.3/pg_env.bat
 If it fails, the folder can be added manually from System>Advanced system settings>Environment Variables... and adding the full path to PostgreSQL/9.3/bin directory to the system variables' Path.


 ### Media files:

 We are using [Paperclip](https://github.com/thoughtbot/paperclip) gem for managing file uploads.
 To be able to upload images in Windows machine, one must read the following:

 > # Image Processor

 > ImageMagick must be installed and Paperclip must have access to it. To ensure that it does, on your command line, run which convert (one of the ImageMagick utilities). This will give you the path where that utility is installed. For example, it might return `/usr/local/bin/convert`.

 > Then, in your environment config file, let Paperclip know to look there by adding that directory to its path.

 > In development mode, you might add this line to `config/environments/development.rb`):

 > `Paperclip.options[:command_path] = "/usr/local/bin/"`
 > If you're on Mac OS X, you'll want to run the following with Homebrew:

 > brew install imagemagick
 > If you are dealing with pdf uploads or running the test suite, you'll also need GhostScript to be installed. On Mac OS X, you can also install that using Homebrew:

 > brew install gs
 > # `file` command

 > The Unix file command is required for content type checking. This utility isn't available in Windows, but comes bundled with Ruby Devkit, so Windows users must make sure that the devkit is installed and added to system `PATH`.