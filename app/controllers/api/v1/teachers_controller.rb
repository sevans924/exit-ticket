class TeachersController < ApplicationController
  before_action :find_teacher, only: [:update, :destroy]

      def index
        @note = Note.all
        render json: @notes
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
