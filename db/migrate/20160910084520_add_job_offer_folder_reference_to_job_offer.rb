class AddJobOfferFolderReferenceToJobOffer < ActiveRecord::Migration[5.0]
  def change
    add_reference :job_offers, :job_offer_folder, foreign_key: true
  end
end
