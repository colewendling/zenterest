class Api::PinsController < ApplicationController
  def new
    @pin = Pin.new
    render :new
  end

  def create
    debugger
    @pin = Pin.new(pin_params)
    if @pin.save
      render 'api/pins/show'
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def show
    @pin = Pin.find(params[:id])
    if @pin
      render 'api/pins/show'
    else
      render json: ['Pin not found'], status: 422
    end
  end

  def index
    @pins = Pin.all
    render 'api/pins/index'
  end

  def edit
    @pin = Pin.find(params[:id])
    if @pin.author_id == current_user.id
      render :edit
    else
      render 'api/pins/show'
    end
  end

  def update
    @pin = Pin.find(params[:id])
    if (@pin.author_id === current_user.id && @pin.update(pin_params))
      render 'api/pins/show'
    else
      render json: [@pin.errors.full_messages], status: 422
    end
  end

  def destroy
    @pin = Pin.find(params[:id])
    @pin.destroy
    render 'api/pins/show'
  end


  private

  def pin_params
    params.require(:pin).permit(:title, :description, :url, :author_id, :board_id, :image)
  end
end
