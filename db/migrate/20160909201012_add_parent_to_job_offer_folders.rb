class AddParentToJobOfferFolders < ActiveRecord::Migration[5.0]
  def change
     add_reference :job_offer_folders, :parent, index: true
  end
end
