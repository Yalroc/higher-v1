class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def linkedin
    type = request.env['omniauth.params']['type']
    # si type == candidate on recupere la classe <Candidate>
    class_type = type.capitalize.constantize
    user = class_type.find_for_linkedin_oauth(request.env['omniauth.auth'])

    if user.persisted?
      sign_in_and_redirect user, event: :authentication
      set_flash_message(:notice, :success, kind: 'Linkedin') if is_navigational_format?
    else
      session['devise.linkedin_data'] = request.env['omniauth.auth']
      redirect_to new_user_registration_url
    end
  end
end
