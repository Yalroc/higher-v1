class AddOpenToJobOfferFolders < ActiveRecord::Migration[5.0]
  def change
    add_column :job_offer_folders, :open, :boolean
  end
end
