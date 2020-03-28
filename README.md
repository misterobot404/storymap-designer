<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Openstreetmap_logo.svg/1200px-Openstreetmap_logo.svg.png" width="300">
</p>
<p align="center">
   <a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
</p>

# MapDesigner

MapDesigner is a web application that provides a convenient way to create and distribute interactive maps. A feature of MapDesigner is the creation of scalable maps from custom images that do not have a geographic reference.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) and [Vagrant](https://www.vagrantup.com/downloads.html).

Add the laravel/homestead box to your Vagrant
```
vagrant box add laravel/homestead
```

Install Homestead by cloning the repository onto your host machine
```
git clone https://github.com/laravel/homestead.git  ~/Homestead
```

Create Homestead.yaml config file
```
cd ~/Homestead

// Mac / Linux...
bash init.sh

// Windows...
init.bat
```

Edit Homestead.yaml config
```
// Make sure IP is set to
ip: "192.168.10.10"
```

```
// Commented
#authorize: ~/.ssh/id_rsa.pub
#keys:
#    - ~/.ssh/id_rsa
```

```
// Change

folders:
    - map: ~/code
      to: /home/vagrant/code

sites:
    - map: homestead.test
      to: /home/vagrant/code/public

// To

folders:
    - map: ~/Source/MapDesigner
      to: /home/vagrant/MapDesigner

sites:
    - map: MapDesigner.test
      to: /home/vagrant/MapDesigner/public
```

Get MapDesigner
```
cd ~/Source
git clone https://github.com/misterobot404/MapDesigner.git
```

Run and connecting to homestead (initial startup takes longer)
```
cd ~/Homestead
vagrant up && vagrant ssh
```

Allow Nginx using precompressed files
```
sudo nano /etc/nginx/nginx.conf

// Add to http context
gzip_static on;
```

Dependency updates
```
cd ~/MapDesigner/

composer update
npm install -g npm
npm update
```

Run the migration to change the application database schema
```
php artisan migrate
php artisan passport:install
```

Setup is complete, exit and shut down the homestead
```
exit
vagrant halt
```

### Running

Start application on 192.168.10.10 and localhost:8000
```
cd ~/Homestead
vagrant up
```

Shut down application
```
vagrant halt
```

## Built With

Backend
* [Homestead](https://laravel.com/docs/homestead) - official Vagrant box pre-packaged development environment
* [Laravel](https://laravel.com/) - RESTful API service

Frontend
* [Vue.js](https://vuejs.org/) - Single-page application
* [Vue Router](https://router.vuejs.org/) - Routing
* [Vuex](https://vuex.vuejs.org/) - State management
* [Vuetify](https://vuetifyjs.com/en/) - UI Library
* [Leaflet](https://leafletjs.com/) - Open-source JavaScript library for interactive maps

## Authors

* **Alexander Zakusilo** - *Initial work* - [misterobot404](https://github.com/misterobot404)
* **IT management KNASTU** - *Supporting* - [knastu.ru](https://knastu.ru)

## Browser compatibility

Supported all browsers except IE old versions.

## Security Vulnerabilities

If you discover a security vulnerability within MapHelper, please send an e-mail to misterobot via [misterobot404@gmail.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

MapDesigner is commercial software. No license.

