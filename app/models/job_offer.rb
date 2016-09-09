class JobOffer < ApplicationRecord
  belongs_to :recruiter, required: false
  belongs_to :job_offer_folder, required: false
  has_many :job_applications
end
