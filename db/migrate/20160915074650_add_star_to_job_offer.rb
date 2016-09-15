class AddStarToJobOffer < ActiveRecord::Migration[5.0]
  def change
    add_column :job_offers, :star, :boolean
  end
end
