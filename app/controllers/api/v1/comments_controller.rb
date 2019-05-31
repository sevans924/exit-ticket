class Api::V1::CommentsController < ApplicationController

  def index
    @comments = Comment.all
    render json: @comments
  end



  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment , status: :accepted
    else
      render json: { errors: @comment.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

        def comment_params
          params.require(:comment).permit(:content, :note_id)
        end



    end
