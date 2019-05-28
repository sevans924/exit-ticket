class TeachersController < ApplicationController
  before_action :find_teacher, only: [:update, :destroy]

      def index
        @no = Note.all
        render json: @notes
      end

      def create
        @note = Note.new(note_params)
        if @note.save
          render json: @note , status: :accepted
        else
          render json: { errors: @note.errors.full_messages }, status: :unprocessible_entity
        end
      end

      def update
        @note.update(note_params)
        if @note.save
          render json: @note, status: :accepted
        else
          render json: { errors: @note.errors.full_messages }, status: :unprocessible_entity
        end
      end


##################
private

      def teacher_params
        params.require(:note).permit(:first_name, :last_name, :email)
      end

      def find_teacher
        @teacher = Teacher.find(params[:id])
      end

  end
