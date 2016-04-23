class CommentSerializer < ActiveModel::Serializer

	attributes :id,
	           :text,
	           :medium_id,
	           :user

	has_one :medium
	has_one :user, serializer: UserSimpleSerializer
end
