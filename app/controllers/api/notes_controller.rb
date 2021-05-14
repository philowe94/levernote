class Api::NotesController < ApplicationController
    before_action :require_logged_in, only: [:create, :index]

    def index
        #get all of current users notes
        cu_notes = @current_user.notes

        render :index
    end

    def show
    end

    def create
    end

    def update
    end

    def destroy
    end
end