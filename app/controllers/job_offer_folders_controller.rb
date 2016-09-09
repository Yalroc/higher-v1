class JobOfferFoldersController < ApplicationController
    def create
    @job_offer_folder = JobOfferFolder.new(offer_params)
    @job_offer_folder.organization = current_recruiter.organization
    authorize @job_offer_folder
    if @job_offer_folder.save
      redirect_to job_offers_path
    else
      render :new
    end
  end
end
