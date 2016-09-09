class Organization < ApplicationRecord
  has_many :educations
  has_many :recruiters
  has_many :experiences
  has_many :job_offer_folders
end
