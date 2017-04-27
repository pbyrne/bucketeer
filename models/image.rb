require "forwardable"

class Image
  extend Forwardable

  attr_reader :path

  def_delegators :@path, :basename, :mtime, :size

  def initialize(path)
    @path = Pathname.new(path).expand_path
  end

  # Escape URI-invalid characters in filenames
  def uri
    URI.encode_www_form_component basename
  end
end
