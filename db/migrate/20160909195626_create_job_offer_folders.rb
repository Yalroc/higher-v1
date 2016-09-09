class CreateJobOfferFolders < ActiveRecord::Migration[5.0]
  def change
    create_table :job_offer_folders do |t|
      t.string :name
      t.references :organization, foreign_key: true

      t.timestamps
    end
  end
end
