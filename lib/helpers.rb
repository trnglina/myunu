require "time"

module Myunu
  module Helper
    def page?(item)
      item[:kind] == "page"
    end

    def post?(item)
      item[:kind] == "post" && item[:date]
    end

    def in_cat?(item, cat)
      item.path.split("/")[1] == cat
    end

    def format_time(original, into)
      Time.parse(original).strftime(into)
    end

    def breadcrumb(item)
      entries = Array.new
      path = Array.new
      item.path.split("/").each do |entry|
        if entry != "" && entry != "index.xhtml"
          path << entry
          entry_item = @items["/#{path.join("/")}.*"] || @items["/#{path.join("/")}/index.*"]
          entries << { label: if entry_item then entry_item[:title] else entry.capitalize end, trail: "/#{path.join("/")}" }
        end
      end

      entries
    end

    def tags
      tags = Set.new
      @items.each do |item|
        if item[:tags]
          item[:tags].each { |tag| tags.add(tag) }
        end
      end
      tags
    end

    def posts_in(cat)
      @items.select { |item| post?(item) and in_cat?(item, cat) }
    end

    def sorted_posts_in(cat)
      posts_in(cat).sort_by { |item| Time.parse(item[:date]) }.reverse
    end

    def posts_with_tag(tag)
      @items.select { |item| if post?(item) && item[:tags] then item[:tags].include?(tag) end }
    end

    def sorted_posts_with_tag(tag)
      posts_with_tag(tag).sort_by { |item| Time.parse(item[:date]) }.reverse
    end
  end
end

use_helper Myunu::Helper
use_helper Nanoc::Helpers::Rendering
use_helper Nanoc::Helpers::Text
