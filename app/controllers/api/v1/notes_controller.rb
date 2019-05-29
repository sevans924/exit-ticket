class Api::V1::NotesController < ApplicationController

  before_action :find_note, only: [:update, :destroy]

      def index
        @notes = Note.all
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

      def destroy
        @notes = Note.all
        @note.delete

        render json: @notes
      end
##################
private

      def note_params
        params.require(:notes).permit(:topic, :content, :prompt, :student_id, :teacher_id)
      end

      def find_note
        @note = Note.find(params[:id])
      end

  end
