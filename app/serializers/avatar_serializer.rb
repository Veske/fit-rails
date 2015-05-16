class AvatarSerializer < ActiveModel::Serializer
	include Avatar

	attributes :id,
	           :text,
	           :image_video_file_name,
	           :image_video_croppable_url,
	           :image_video_thumb_url,
	           :image_video_big_url

end
