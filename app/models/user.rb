class User < ActiveRecord::Base
	validates :name, presence: true, length: {maximum: 50}
	enum role: [:user, :moderator, :admin]
	after_initialize :set_default_role, :if => :new_record?

	# Sets newly created user's role to :user
	def set_default_role
		self.role ||= :user
	end

	def roles
		User.roles.keys.map { |role| {name: role.titleize, key: role} }
		#User.roles
	end

	# Follows a user. Throw error to console when index violation appears
	def follow(other_user)
		active_relationship = active_relationships.create!(followed_id: other_user.id)
	end

	# Unfollows a user.
	def unfollow(other_user)
		if active_relationships.find_by(followed_id: other_user.id).destroy
			logger.debug "INFO: Unfollowing user with id: #{other_user.id}!"
		else
			logger.debug "ERROR: failed to unfollow user with id: #{other_user.id}!"
		end

	end

	# Returns true if the current user is following the other user.
	def following?(other_user)
		following.include?(other_user)
	end

	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable,
	       :recoverable, :rememberable, :trackable, :validatable

	# User can have many media, comments and likes
	has_many :media, dependent: :destroy
	has_many :comments, dependent: :destroy
	has_many :likes, dependent: :destroy

	# Associations for relationships, user can have many active and passive relationships
	has_many :active_relationships, class_name:  'Relationship', foreign_key: 'follower_id', dependent:   :destroy
	has_many :passive_relationships, class_name:  'Relationship', foreign_key: 'followed_id', dependent:   :destroy
	has_many :following, through: :active_relationships, source: :followed
	has_many :followers, through: :passive_relationships, source: :follower
end