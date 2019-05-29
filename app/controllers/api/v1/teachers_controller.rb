class Api::V1::TeachersController < ApplicationController
#   before_action :find_teacher, only: [:update, :destroy]
#
      def index
        @teachers = Teacher.all
        render json: @teachers
      end

#
#
#
# ##################
# private
#
#       def teacher_params
#         params.require(:note).permit(:first_name, :last_name, :email)
#       end
#
#       def find_teacher
#         @teacher = Teacher.find(params[:id])
#       end

  end
