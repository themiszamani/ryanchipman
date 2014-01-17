module ItemCategoryHelper
	def item_category(item)
		matches = item.identifier.scan(/\/(\w+)\//)
		if matches.length < 1
			return ''
		elsif matches.first.first.eql?('static')
			# if the item is from the static dir
			return ''
		else
			return matches.first.first
		end
	end
end