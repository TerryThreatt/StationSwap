class LaptopsController < ApplicationController
  before_action :set_laptop, only: [:show, :update, :destroy]

  def index
    @laptops = Laptop.all

    render json: @laptops
  end

  def show
    render json: @laptop
  end

  def create
    @laptop = Laptop.new(laptop_params)

    if @laptop.save
      render json: @laptop, status: :created, location: @laptop
    else
      render json: @laptop.errors, status: :unprocessable_entity
    end
  end

  def update
    if @laptop.update(laptop_params)
      render json: @laptop
    else
      render json: @laptop.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @laptop.destroy
  end

  private
    def set_laptop
      @laptop = Laptop.find(params[:id])
    end

    def laptop_params
     params.require(:laptop).permit(:name, :specs)
    end
end
