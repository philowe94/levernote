class Api::NoteTagsController < ApplicationController

    def index
        @notetags = @current_user.note_tags

        render :index
    end
    
end