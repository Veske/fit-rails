class MediumSerializer < ActiveModel::Serializer
    attributes :id,
               :text,
               :image_video_file_name,
               :image_video_croppable_url,
               :image_video_thumb_url,
               :image_video_big_url

    has_one :user
    has_many :comments, :likes

    def include_user?
        object.association(:user).loaded?
    end

    def include_comments?
        object.association(:comments).loaded?
    end

    def include_associations?
        object.association(:user, :comments, :likes).loaded?
    end
end
