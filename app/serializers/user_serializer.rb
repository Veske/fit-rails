class UserSerializer < ActiveModel::Serializer

	attributes :id,
               :name,
               :email,
               :role

    has_many :media, :comments
	has_one :avatar, serializer: AvatarSerializer

    def avatar
		object.get_avatar
    end
end