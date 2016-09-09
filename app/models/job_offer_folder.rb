class JobOfferFolder < ApplicationRecord
  belongs_to :organization
  has_many :job_offers

  # self-referential tree structure for Folders
  has_many :job_offer_folders, class_name: "JobOfferFolder", foreign_key: "parent_id"
  belongs_to :parent, class_name: "JobOfferFolder", required: false
end
