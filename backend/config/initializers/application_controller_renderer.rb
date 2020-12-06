# Be sure to restart your server when you modify this file.

# ActiveSupport::Reloader.to_prepare do
#   ApplicationController.renderer.defaults.merge!(
#     http_host: 'example.org',
#     https: false
#   )
# end

ActiveSupport.on_load(:active_model_serializers) do
    # Disable for all serializers (except ArraySerializer)
    ActiveModel::Serializer.root = false

    # Disable for ArraySerializer
    ActiveModel::ArraySerializer.root = false
end