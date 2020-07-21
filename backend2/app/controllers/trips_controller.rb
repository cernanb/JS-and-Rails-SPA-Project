class TripsController < ApplicationController
    def index
        trips = Trip.all 
        render json: trips.to_json(include: [:attractions, :hotels])
    end 
end
