class Trip < ApplicationRecord
    has_many :hotels
    has_many :attractions
    belongs_to :area
    belongs_to :type 

    validates :country, :city, presence: true 
end
