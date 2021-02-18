class Api::BoardsController < ApplicationController

  def new
  @board = Board.new
  render :new
  end

  def create
    @board = Board.new(board_params)
    @board.author_id = current_user.id
    if @board.save
      render "api/boards/show"
    else
      render json: [@board.errors.full_messages], status: 422
    end
  end

  def show
    @board = Board.find(params[:id])
    render :show
  end

  def update
    @board = Board.find_by(id: params[:id])
    if @board.update(board_params)
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def destroy
    @board = Board.find(params[:id])
    if @board.destroy
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  private

  def board_params
    params.require(:board).permit(:title, :description, :author_id)
  end
end
