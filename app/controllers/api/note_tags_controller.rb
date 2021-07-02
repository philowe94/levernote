class Api::NoteTagsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :index]

    def index
        @note_tags = @current_user.note_tags

        render :index
    end

    def show
        @note_tag = NoteTag.find(params[:id])
        render :show
    end

    def create
        @note_tag = NoteTag.new(note_tag_params)
        @note_tag.author_id = current_user.id

        if @note_tag.save
            render :show
        else
            render json: @note_tag.errors.full_messages, status: 422
        end
    end

    def update
        @note_tag = NoteTag.find(params[:id])
        @note_tag.author_id = current_user.id

        if @note_tag.update(note_tag_params)
            render :show
        else
            render json: @note_tag.errors.full_messages, status: 422
        end
    end

    def destroy
        @note_tag = NoteTag.find(params[:id])

        if @note_tag.destroy
            render :show
        else
            render json: @note_tag.errors.full_messages, status: 422
        end
    end

    private

    def note_tag_params
        params.require(:note_tag).permit(:note_id, :tag_id)
    end
end