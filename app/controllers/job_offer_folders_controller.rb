class JobOfferFoldersController < ApplicationController
skip_before_action :authenticate_candidate!


    def create
    @job_offer_folder = JobOfferFolder.new(job_offer_folder_params)
    @job_offer_folder.organization = current_recruiter.organization
    authorize @job_offer_folder
      if @job_offer_folder.save
        redirect_to job_offers_path
      else
        render :new
      end
   end

   private

  def job_offer_folder_params
    params.require(:job_offer_folder).permit(:name)
  end
end
