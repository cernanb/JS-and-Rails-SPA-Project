class TripsController < ApplicationController
    def index
        if !params[:type_id] && !params[:area_id]
            trips = Trip.all 
            render json: trips.to_json(include: [:attractions, :hotels, :type, :area])
        else
            trips = Trip.where(area: params[:area_id], type: params[:type_id])
            render json: trips.to_json(include: [:attractions, :hotels, :type, :area])
        end
    end 

    def create 
        binding.pry
        # area = Area.find(params[:area_id])
        # type = Type.find(params[:type_id])
    end
end
