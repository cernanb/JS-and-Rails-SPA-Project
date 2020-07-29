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
        area = Area.find_by(id: params[:area_id])
        type = Type.find_by(id: params[:type_id])
        trip = Trip.new(city: params[:city], country: params[:country])
        trip.area = area  
        trip.type = type 
        if trip.valid? && params[:attractions] != [""] && params[:hotels] != [""]
            attractions = params[:attractions].select {|attr| attr != ""}
            attractions.each do |attr|
                trip.attractions.build(name: attr)
            end
            hotels = params[:hotels].select {|hotel| hotel != ""}
            hotels.each do |hotel|
                trip.hotels.build(name: hotel)
            end
            trip.save 
            render json: trip.to_json(include: [:attractions, :hotels, :type, :area])
        else
            flash.alert = "Fields cannot be empty"
        end
    end

    def destroy
        trip = Trip.find(params[:id])
        trip.destroy
    end
end
