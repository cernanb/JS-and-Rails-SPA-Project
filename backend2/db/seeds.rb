# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

type1 = Type.create(name: "Honey Moon")
type2 = Type.create(name: "Family Vacation")
type3 = Type.create(name: "Health Retreat")
type4 = Type.create(name: "Party Lover")

area1 = Area.create(name: "Western Europe")
area2 = Area.create(name: "Asia")
area3 = Area.create(name: "North America")
area4 = Area.create(name: "South America")

# trip1
trip1 = Trip.new(city: "Berlin", country: "Germany")

trip1.attractions.build(name: "Cassiopeia Live Music Bar")
trip1.attractions.build(name: "Room 4 Resistance Night Club")
trip1.attractions.build(name: "Berghain Night Club")

trip1.hotels.build(name: "St Christopher's Inn Berlin Mitte")
trip1.hotels.build(name: "Select Hotel Berlin Checkpoint Charlie")
trip1.hotels.build(name: "Smart Stay Hotel Berlin City")

trip1.area = area1 
trip1.type = type4 

trip1.save 

#trip2
trip2 = Trip.new(city: "New York", country: "USA")

trip2.attractions.build(name: "Bathtub Gin Cocktail Bar")
trip2.attractions.build(name: "Electric Room Lounge")
trip2.attractions.build(name: "Hudson Terrace Night Club")

# fix hotel names!!!!
trip2.hotels.build(name: "Pod 39 Hotel")
trip2.hotels.build(name: "Dream Hotel Downtown")
trip2.hotels.build(name: "Hotel Empire")

trip2.area = area3 
trip2.type = type4 

trip2.save 

#trip3
trip3 = Trip.new(city: "Urayasu", country: "Japan")

trip3.attractions.build(name: "Mihama Park")
trip3.attractions.build(name: "Former House of Otsuka Family")
trip3.attractions.build(name: "Tokyo Disneyland")

trip3.hotels.build(name: "Hotel Okura Tokyo Bay")
trip3.hotels.build(name: "Hiyori Hotel Maihama")
trip3.hotels.build(name: "Hotel Eurasia Maihama Annex")

trip3.area = area2 
trip3.type = type2

trip3.save