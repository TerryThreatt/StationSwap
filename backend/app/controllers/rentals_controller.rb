class RentalsController < ApplicationController
  before_action :set_rental, only: [:show, :update, :destroy]

  def index
    @rentals = Rental.all

    render json: @rentals
  end

  def show
    render json: @rental
  end

  def create
    @rental = Rental.new(rental_params)

    if @rental.save
      render json: @rental, status: :created, location: @rental
    else
      render json: @rental.errors, status: :unprocessable_entity
    end
  end

  def update
    if @rental.update(rental_params)
      render json: @rental
    else
      render json: @rental.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @rental.destroy
  end

  private
    def set_rental
      @rental = Rental.find(params[:id])
    end

    def rental_params
      params.require(:rental).permit(:request_date, :name, :email, :laptop_id)
    end
end
