class TripsController < ApplicationController
    def index
        if !params[:types] && !params[:areas]
            trips = Trip.all 
            render json: trips.to_json(include: [:attractions, :hotels, :type, :area])
        else
            trips = Trip.where(area_id: params[:areas], type_id: params[:types])
            render json: trips.to_json(include: [:attractions, :hotels, :type, :area])
        end
    end 
end
