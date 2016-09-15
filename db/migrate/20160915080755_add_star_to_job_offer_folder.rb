class AddStarToJobOfferFolder < ActiveRecord::Migration[5.0]
  def change
    add_column :job_offer_folders, :star, :boolean
  end
end
