class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    helper_method :current_user, :logged_in?

    def current_user
        if session[:session_token]
            @current_user ||= User.find_by(session_token: session[:session_token])
        else
            return nil
        end
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def ensure_logged_in
        unless current_user
            render json: {base: ['You must be logged in to perform this operation']}, status: 401
        end
    end
end
