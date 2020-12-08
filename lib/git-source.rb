require "git"

class GitSource < Nanoc::DataSources::Filesystem
  identifier :git

  def up
    begin
      @git = if File.directory?(self.content_dir_name)
          begin
            g = Git.open(self.content_dir_name)
            g.pull
            g
          rescue ArgumentError
            Git.clone(self.repository, self.branch, :path => self.cache_dir)
          end
        else
          Git.clone(self.repository, self.branch, :path => self.cache_dir)
        end
    rescue Git::GitExecuteError
    end
  end

  def repository
    config.fetch(:repository)
  end

  def branch
    config.fetch(:branch, "master")
  end

  def cache_dir
    config.fetch(:cache_dir, "tmp/git-source")
  end

  def verbose
    config.fetch(:verbose, false)
  end

  def content_dir_name
    "#{self.cache_dir}/#{self.branch}"
  end

  def layouts_dir_name; end

  def logger
    if self.verbose
      Logger.new(STDOUT)
    else
      nil
    end
  end
end
