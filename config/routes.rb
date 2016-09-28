Rails.application.routes.draw do
  # LOG IN & SIGN UP ROUTES
  devise_for :recruiters
  devise_for :candidates, controllers: { omniauth_callbacks: 'omniauth_callbacks' }

  # authenticated :recruiter do
  #     root 'job_offers#index', as: :authenticated_root
  #   end

  # HOME PAGE ROUTE
  root to: 'pages#home'

  # JOB OFFERS & FOLDERS & SEARCH ROUTES
  get '/search', to: 'pages#search', as: 'search'
  resources :job_offer_folders, only: [:create, :update, :destroy]
  resources :job_offers, only: [:index, :create, :edit, :update, :show, :destroy] do


    # JOB APPLICATIONS ROUTES
    resources :job_applications, only: [:index, :show, :edit, :update, :new] do

      get 'toto'
      get 'toto', on: :member
      get 'toto', on: :collection

      post 'submit', on: :member

      collection do #??????
        delete :batch_deletion
      end

      member do
        get 'submit'
      end

    end
  end

  resources :job_applications, only: [] do
    get 'conversation', on: :member
    resources :messages, only: [:create]
  end

  # EXPERIENCES ROUTES
  resources :experiences, only: [:new, :create, :edit, :update, :destroy]

  # EDUCATIONS ROUTES
  resources :educations, only: [:new, :create, :edit, :update, :destroy]

  # LANGUAGES ROUTES
  resources :languages, only: [:new, :create, :edit, :update, :destroy]


  # CANDIDATES ROUTES
  # :show, :edit, & :update => "As a candidate, I can edit my basic information (name, phone_number,..)""
  resources :candidates, only: [:show, :edit, :update]


  # DEMO JOB OFFER
  get 'demo', to: 'pages#demo'

end
