  class JobOffersController < ApplicationController
  before_action :set_job_offer, only: [:show, :edit, :update]
  skip_before_action :authenticate_candidate!

  skip_before_action :authenticate_recruiter!, only: [:show]

  def index
    @job_offers = policy_scope(JobOffer) # Pundit authorization
    @job_offers = JobOffer.where(organization: current_recruiter.organization).sort_by { |job_offer| job_offer.title }
    @job_offer_folders = JobOfferFolder.where(organization: current_recruiter.organization).sort_by { |folder| folder.name }
    @job_applications = []
    @job_offers.each do |job_offer|
      @job_applications << job_offer.job_applications
    end
    @job_applications.flatten!
    # DRY recursive tree-structure
    @parent_folders = current_recruiter.organization.job_offer_folders.where(parent: nil).sort_by { |folder| folder.name }
    @all_folders = JobOfferFolder.where(organization: current_recruiter.organization).all.sort_by { |folder| folder.name }
    # MODAL DATA
    @job_offer = JobOffer.new # for job_offer creation
    @job_offer_folder = JobOfferFolder.new # for folder (job offers) creation
  end

  def show
    @job_offer = JobOffer.find(params[:id])
    authorize @job_offer
  end

  def create
    @job_offer = JobOffer.new(job_offer_params)
    @job_offer.recruiter = current_recruiter
    @job_offer.organization = current_recruiter.organization
    authorize @job_offer
    if @job_offer.save
      redirect_to job_offers_path
    else
      render :new
    end
  end

  def edit
    @job_offer = JobOffer.find(params[:id])
    authorize @job_offer
  end

  def update
        if job_offer_update_params[:type] == "star"  # add/remove star ajax
          @job_offer = JobOffer.find(job_offer_update_params[:id])
          authorize @job_offer
          @job_offer.star == true ? @job_offer.star = false : @job_offer.star = true
          @job_offer.save
          respond_to do |format|
            format.html { redirect_to job_offers_path } # get rid off when ajax
            format.js { render 'job_offer_star'}
          end
        end

    # @job_offer = JobOffer.find(params[:id])   # normal update
    # authorize @job_offer
    # if @job_offer.update(job_offer_params)
    #   redirect_to job_offers_path
    # else
    #   render :edit
    # end
  end

  def destroy
    @job_offer = JobOffer.find(params[:id])
    authorize @job_offer
    @job_offer.destroy
    redirect_to job_offers_path
  end

  private

  def pundit_user
    current_recruiter
  end

  def job_offer_params
    params.require(:job_offer).permit(:description, :title, :job_offer_folder_id)
  end

  def job_offer_update_params
    params.permit(:id, :type)
  end


  def set_job_offer
    @job_offer = JobOffer.find(params[:id])
  end
end
