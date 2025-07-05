Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.network "forwarded_port", guest: 3000, host: 3000

  config.vm.provision "docker"

  config.vm.provision "shell", inline: <<-SHELL
    sudo usermod -aG docker vagrant
  SHELL
end