class EmployeesController < ApplicationController
  before_action :set_employee, only: [:show, :update, :destroy]
  before_action :authorized, only: [:auto_login]

  def index
    @employees = Employee.all

    render json: @employees
  end

  def show
    render json: @employee
  end

  def create
    @employee = Employee.new(employee_params)

    if @employee.valid?
      token = encode_token({employee_id: @employee.id })
      render json: EmployeeSerializer.new({ employee: @employee, token: token }), status: :created
    else
      render json: { error: "Sign Up: Invalid email or password" }
    end
  end

  def signin
    @employee = Employee.find_by(email: params[:email])

    if @employee && @employee.authenticate(params[:password])
      token = encode_token({ employee_id: @employee.id })
      render json: { employee: @employee, token: token }
    else
      render json: { error: "Sign In: Invalid email or password" }
    end
  end

  def auto_login
    render json: @employee
  end

  def update
    if @employee.update(employee_params)
      render json: @employee
    else
      render json: @employee.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @employee.destroy
  end

  private
    def set_employee
      @employee = Employee.find(params[:id])
    end

    def employee_params
      params.require(:employee).permit(:name, :email, :password)
    end
end
