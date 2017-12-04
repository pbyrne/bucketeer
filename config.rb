require "pathname"
require_relative "models/image"

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

helpers do
  def images
    @images ||= Dir.glob(external_images.join("*")).sort.map do |path|
      Image.new(path)
    end
  end

  def external_images
    Pathname.new("source/external_images").expand_path
  end
end

# TODO Can't call helpers directly in config.rb any more. Probably a better way than this, though.
app.generic_template_context.images.each do |image|
  proxy "/#{image.basename}", "external_images/#{image.basename}",
    locals: {path: image.path},ignore: true
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  activate :sprockets

  # Enable cache buster
  activate :asset_hash,
    exts: app.config[:asset_extensions] - %w(.jpg .jpeg .gif .png)

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
