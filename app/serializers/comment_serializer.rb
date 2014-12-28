class CommentSerializer < ActiveModel::Serializer
	attributes :id,
	           :text,
	           :user_id,
	           :medium_id

	has_one :user
end
