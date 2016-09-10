class AddOrganizationReferenceToJobOffers < ActiveRecord::Migration[5.0]
  def change
    add_reference :job_offers, :organization, foreign_key: true
  end
end
