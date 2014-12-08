class CommentSerializer < ActiveModel::Serializer
	attributes :id,
	           :text,
	           :user_id,
	           :medium_id,
	           :user
end
