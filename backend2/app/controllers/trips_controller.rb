class TripsController < ApplicationController
    def index
        if !params[:type] && !params[:area]
            trips = Trip.all 
            render json: trips.to_json(include: [:attractions, :hotels, :type, :area])
        else
            trips = Trip.where(area_id: params[:area], type_id: params[:type])
            render json: trips.to_json(include: [:attractions, :hotels, :type, :area])
        end
    end 
end
