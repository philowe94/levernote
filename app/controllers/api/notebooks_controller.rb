class Api::NotebooksController < ApplicationController

    def index
        @notebooks = current_user.notebooks
        render :index
    end

    def show
        @notebook = Notebook.find(params[:id])
        render :show
    end

    def create
        @notebook = Notebook.new(notebook_params)

        if @notebook.save
            render :show
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def update
        @notebook = Notebook.find(params[:id])

        if @notebook.update(notebook_params)
            render :show
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def destroy
        @note = Note.find(params[:id])

        if @note.destroy
            render :show
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    private

    def notebook_params
        params.require(:notebook).permit(:name, :author_id)
      end
end