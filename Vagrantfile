# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
	# Use Ubuntu 14.04 Trusty Tahr 64-bit as our operating system
	config.vm.box = "ubuntu/trusty64"

	# Configurate the virtual machine to use 2GB of RAM
	config.vm.provider :virtualbox do |vb|
		vb.customize ["modifyvm", :id, "--memory", "2048"]
	end

	# Forward the Rails server default port to the host
	config.vm.network :forwarded_port, guest: 3000, host: 3000

	# Use Chef Solo to provision our virtual machine
	config.vm.provision :chef_solo do |chef|
		chef.cookbooks_path = ["cookbooks", "site-cookbooks"]

		# Define software to use in our VM
		chef.add_recipe "apt"
		chef.add_recipe "nodejs"
		chef.add_recipe "ruby_build"
		chef.add_recipe "rbenv::user"
		chef.add_recipe "rbenv::vagrant"
		chef.add_recipe "vim"
		chef.add_recipe 'postgresql::server'
		chef.add_recipe 'postgresql::client'
		#chef.add_recipe 'imagemagick::devel'
		#chef.add_recipe 'nginx'

		# Install Ruby 2.1.3, Bundler and PostgreSQL
		chef.json = {
			postgresql: {
				password: {
					postgres: 'admin'
				},
				:pg_hba => [
					{ :type => 'local', :db => 'all', :user => 'all', :addr => nil, :method => 'trust' },
					{ :type => 'local', :db => 'all', :user => 'postgres', :addr => nil, :method => 'trust' },
					{ :type => 'host', :db => 'all', :user => 'all', :addr => '127.0.0.1/32', :method => 'trust' }
				]
			},
			rbenv: {
				user_installs: [{
					user: 'vagrant',
					rubies: ["2.1.3"],
					global: "2.1.3",
					gems: {
						"2.1.3" => [
							{ name: "bundler" }
						]
					}
				}]
			}
		}
	end
end