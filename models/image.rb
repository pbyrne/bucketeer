require "forwardable"

class Image
  extend Forwardable

  attr_reader :path

  def_delegators :@path, :basename, :mtime, :size

  def initialize(path)
    @path = Pathname.new(path).expand_path
  end
end
