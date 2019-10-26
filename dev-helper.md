# Start session using SSH

 psql -U homestead -h localhost
 
# Pure SQL commands

 <!---Create--->
CREATE TABLE maps(
map_id serial primary key NOT NULL,
map_name varchar (30),
map_description text,
map_events json,
map_config jsonb
);

<!---Insert--->
insert into maps(map_config)
values 
   (
      '{ "selectedEventId": null, "nextId": 1, "center": [], "tileUrl": "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png" }'
   );

<!---Update--->
UPDATE maps SET map_config = '{ "selectedEventId": 1, "nextEventId": 2, "tileCenter": {"lat":-85,"lng":-170}, "tileUrl": "tile/{z}-{x}-{y}.jpg", "tileAttribution": "&copy; <a href=\"https://knastu.ru/\">knastu</a>", "minTileZoom": 3, "maxTileZoom": 4, "tileBounds": {"_southWest": {"lat": 47, "lng": -180}, "_northEast": {"lat": 85, "lng": 45}}}' WHERE map_id = 1;
UPDATE maps SET map_events = '[]' WHERE map_id = 1;

# ALTER
# Event save to events

CREATE TABLE maps( 
map_id serial primary key NOT NULL, 
map_name varchar (30) NOT NULL,
map_description text,
map_config json 
);

CREATE TABLE events( 
event_id serial primary key NOT NULL,
map_id integer references maps(map_id) NOT NULL,
event_header varchar (30), 
event_description text, 
event_media varchar (100), 
event_location varchar (100)
);
# Artisan
 php artisan make:controller Name
 php artisan ide-helper:generate

# Compiling frontend (vue component)

 npm run dev
 npm run watch-poll

# linux helper
fg Name - comeback process