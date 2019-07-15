
# Pure SQL commands

<!---Insert--->

insert into maps(map_events)
values 
   (
      '[
      {"name":"Item1","id":1,"title":"","marker":[59.102667,10.028418],"mediaUrl":""},
      {"name":"Item2","id":2,"title":"","marker":[57.102667,16.028418],"mediaUrl":""}
      ]'
   );

 <!---Create--->
CREATE TABLE maps(
map_id serial primary key NOT NULL,
map_name varchar (30),
map_description text,
map_events json,
map_config jsonb
);

<!---Update--->
UPDATE maps
SET map_config = '{ "nextId": 3, "tileUrl": "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png" }'
WHERE map_id = 10;

# Artisan
 php artisan make:controller Name


# Compiling frontend (vue component)

 npm run dev
 npm run watch-poll

# Start session using SSH

 psql -U homestead -h localhost
 
# Event save to json

CREATE TABLE maps( 
map_id serial primary key NOT NULL, 
map_name varchar (30) NOT NULL,
map_description text,
map_events json,
map_config jsonb 
);

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

# linux helper
fg Name - comeback process