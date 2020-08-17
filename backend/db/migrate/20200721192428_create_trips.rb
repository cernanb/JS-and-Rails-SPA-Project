class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.string :city
      t.string :country
      t.integer :area_id
      t.integer :type_id
      t.timestamps
    end
  end
end
