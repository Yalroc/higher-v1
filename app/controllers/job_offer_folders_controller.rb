class JobOfferFoldersController < ApplicationController
skip_before_action :authenticate_candidate!


  def create
  @job_offer_folder = JobOfferFolder.new(job_offer_folder_params)
  @job_offer_folder.organization = current_recruiter.organization
  @job_offer_folder.open = true
  authorize @job_offer_folder
    if @job_offer_folder.save
      redirect_to job_offers_path
    else
      render :new
    end
  end

  def update
    if job_offer_folder_update_params[:type] == "star"  # add/remove star ajax
      @job_offer_folder = JobOfferFolder.find(job_offer_folder_update_params[:id])
      authorize @job_offer_folder
      @job_offer_folder.star == true ? @job_offer_folder.star = false : @job_offer_folder.star = true
      @job_offer_folder.save
      redirect_to job_offers_path # in case ajax fails ? not sure it's needed
    elsif job_offer_folder_update_params[:type] == "collapse" # hide/unhide folders ajax
      @job_offer_folder = JobOfferFolder.find(job_offer_folder_update_params[:id])
      authorize @job_offer_folder
      @job_offer_folder.open == true ? @job_offer_folder.open = false : @job_offer_folder.open = true
      @job_offer_folder.save
      redirect_to job_offers_path
    end
  end

  def destroy
    @job_offer_folder = JobOfferFolder.find(params[:id])
    authorize @job_offer_folder
    @job_offer_folder.destroy
    redirect_to job_offers_path
  end

  private

  def job_offer_folder_params
    params.require(:job_offer_folder).permit(:name, :parent_id)
  end

  def job_offer_folder_update_params
    params.permit(:id, :type)
  end
end
