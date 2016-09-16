class AddPublishedToJobOffers < ActiveRecord::Migration[5.0]
  def change
    add_column  :job_offers, :published, :boolean
  end
end
