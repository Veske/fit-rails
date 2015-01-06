class User < ActiveRecord::Base
	include Relationship, Like

	enum role: [:user, :moderator, :admin]
	validates :name, presence: true, length: {maximum: 50}
	after_initialize :set_default_role, :if => :new_record?

	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable

	# User can have many media, comments and likes
	has_many :media, dependent: :destroy
	has_many :comments, dependent: :destroy

	# Sets newly created user's role to :user
	def set_default_role
		self.role ||= :user
	end

	# Map roles into an hash which has the following keys:
	# name: User friendly name of the user role
	# key:  Computer friendly name of the user role
	def roles
		User.roles.keys.map { |role| {name: role.titleize, key: role} }
	end

	# SQL query to get a news feed for current_user
	def feed
		user_ids = $redis.smembers(self.redis_relationship_key(:following)) << id
		Medium.includes([{comments: :user}, :user]).where(user_id: user_ids)
	end
end