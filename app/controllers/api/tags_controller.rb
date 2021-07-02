class Api::TagsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :index]

    def index
        @tags = @current_user.tags

        render :index
    end

    def show
        @tag = Tag.find(params[:id])
        render :show
    end

    def create
        @tag = Tag.new(tag_params)
        @tag.author_id = current_user.id

        if @tag.save
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    def update
        @tag = Tag.find(params[:id])
        @tag.author_id = current_user.id

        if @tag.update(tag_params)
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    def destroy
        @tag = Tag.find(params[:id])

        if @tag.destroy
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    private

    def tag_params
        params.require(:tag).permit(:name)
    end

end