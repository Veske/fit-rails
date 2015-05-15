class AvatarSerializer < ActiveModel::Serializer
	attributes :id,
	           :text,
	           :image_video_file_name,
	           :image_video_croppable_url,
	           :image_video_thumb_url,
	           :image_video_big_url

	url :avatar
end
