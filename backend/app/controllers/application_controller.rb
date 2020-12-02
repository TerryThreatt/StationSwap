class ApplicationController < ActionController::API
    before_action :authorized

    def encode_token(payload)
        JWT.encode(payload, 'secret')
    end

    def auth_header
        request.headers['Authorization']
    end

    def decoded_token
        if auth_header
            token = auth_header.split(' ')[1]

            begin
                JWT.decode(token, 'secret', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def logged_in_employee
        if decoded_token
            employee_id = decoded_token[0]['employee_id']
            @employee = Employee.find_by(id: employee_id)
        end
    end

    def logged_in?
        !!logged_in_employee
    end

    def authorized
        render json: { message: 'Please log in'}, status: :unauthorized unless  logged_in?
    end

end
